import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDb } from "@/lib/db";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const db = await getDb();
                const user = await db.collection("users").findOne({
                    email: credentials.email,
                    password: credentials.password,
                    isAdmin: true,
                });

                if (user) {
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.fullName,
                    };
                }
                return null;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    pages: {
        signIn: "/pages/login",
    },
    callbacks: {
        async signIn({ account, user }) {
            if (account?.provider === "credentials") {
                return true;
            }
            if (account?.provider === "google") {
                return true;
            }
            return true;
        },

        async jwt({ token, user, trigger, session }) {
            if (user || trigger === "update") {
                const db = await getDb();
                const email = user?.email || session?.email || token.email;

                if (email) {
                    const userRecords = await db
                        .collection("users")
                        .find({ email: email })
                        .project({ _id: 1, isAdmin: 1, isGuest: 1, email: 1, fullName: 1, currentSemester: 1, phoneNumber: 1 })
                        .toArray();

                    const studentUser = userRecords.find((u) => !u.isAdmin);
                    const adminUser = userRecords.find((u) => u.isAdmin);
                    const dbUser = studentUser || adminUser;

                    if (dbUser) {
                        token.isAdmin = dbUser.isAdmin || false;
                        token.id = dbUser._id.toString();
                        token.email = dbUser.email;
                        token.hasAdminRecord = !!adminUser;
                        token.hasStudentRecord = !!studentUser;
                        token.currentSemester = dbUser.currentSemester;
                        token.phoneNumber = dbUser.phoneNumber;

                        if (dbUser.fullName) {
                            token.name = dbUser.fullName;
                        } else if (user?.name) {
                            await db.collection("users").updateOne(
                                { _id: dbUser._id },
                                { $set: { fullName: user.name } }
                            );
                            token.name = user.name;
                        }
                    } else if (user && user.email) {
                        const newUser = {
                            email: user.email,
                            fullName: user.name || "",
                            isAdmin: false,
                            isGuest: !user.email.endsWith("@ggu.edu.in"),
                            createdAt: new Date(),
                            currentSemester: 1
                        };
                        const result = await db.collection("users").insertOne(newUser);

                        token.id = result.insertedId.toString();
                        token.isAdmin = false;
                        token.email = user.email;
                        token.name = user.name;
                        token.hasStudentRecord = true;
                        token.hasAdminRecord = false;
                    }
                }
            }

            if (user && user.image) {
                token.picture = user.image;
            }

            return token;
        },

        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.image = (token.picture as string) || session.user.image;
                (session.user as any).isAdmin = token.isAdmin;
                (session.user as any).isGGU = (token.email as string)?.endsWith("@ggu.edu.in") || token.isAdmin;
                (session.user as any).hasAdminRecord = token.hasAdminRecord;
                (session.user as any).hasStudentRecord = token.hasStudentRecord;
                (session.user as any).currentSemester = token.currentSemester;
                (session.user as any).phoneNumber = token.phoneNumber;
            }
            return session;
        },

        async redirect({ url, baseUrl }) {
            const urlObj = new URL(url, baseUrl);
            const callbackUrl = urlObj.searchParams.get("callbackUrl") || url;

            if (
                callbackUrl.includes("admin=true") ||
                callbackUrl.includes("adminDashboard")
            ) {
                return `${baseUrl}/pages/adminDashboard`;
            }

            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return `${baseUrl}/`;
        },
    },
};
