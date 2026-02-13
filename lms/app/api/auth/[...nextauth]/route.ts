import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "@/lib/db"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const client = await clientPromise;
                const db = client.db();
                const user = await db.collection("users").findOne({
                    email: credentials?.email,
                    password: credentials?.password,
                    isAdmin: true
                });

                if (user) {
                    return { id: user._id.toString(), email: user.email, name: user.fullName };
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/pages/login',
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === "google") {
                const email = user.email;
                if (!email) return false;
                // Store login type in user object for later use
                (user as any).loginType = 'student';
            }
            return true;
        },

        async jwt({ token, user, trigger }) {
            if (user) {
                const client = await clientPromise;
                const db = client.db();

                // Fetch all records for this email in parallel (or single query)
                const userRecords = await db.collection("users").find({ email: user.email }).toArray();

                const studentUser = userRecords.find(u => !u.isAdmin);
                const adminUser = userRecords.find(u => u.isAdmin);

                // Prioritize student user if both exist (preserving existing behavior)
                // or prioritizing admin if that was the intent. 
                // Given the previous code `const dbUser = studentUser || adminUser`, it preferred student.
                const dbUser = studentUser || adminUser;

                if (dbUser) {
                    token.isAdmin = dbUser.isAdmin || false;
                    token.id = dbUser._id.toString();
                    token.email = dbUser.email;
                    token.hasAdminRecord = !!adminUser;
                    token.hasStudentRecord = !!studentUser;
                }

                // Create student record if doesn't exist
                if (userRecords.length === 0) {
                    await db.collection("users").insertOne({
                        email: user.email,
                        fullName: user.name || "",
                        isAdmin: false,
                        currentSemester: 1,
                        createdAt: new Date()
                    });
                }
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
                session.user.hasAdminRecord = token.hasAdminRecord;
                session.user.hasStudentRecord = token.hasStudentRecord;
            }
            return session;
        },

        async redirect({ url, baseUrl }) {
            // Parse the URL to check callback parameter
            const urlObj = new URL(url, baseUrl);
            const callbackUrl = urlObj.searchParams.get('callbackUrl') || url;

            // If callback contains admin=true or adminDashboard, go to admin
            if (callbackUrl.includes('admin=true') || callbackUrl.includes('adminDashboard')) {
                return `${baseUrl}/pages/adminDashboard`;
            }

            // Otherwise go to home
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return `${baseUrl}/`;
        }
    }
})

export { handler as GET, handler as POST }
