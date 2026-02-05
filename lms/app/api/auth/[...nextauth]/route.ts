import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "@/lib/db"

const handler = NextAuth({
    trustHost: true,
    providers:[
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
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                const email = user.email;

                if (!email) return false;
                if (!email.endsWith("@ggu.edu.in")) return false;

                const client = await clientPromise;
                const db = client.db();
                const existingUser = await db.collection("users").findOne({ email });

                if (!existingUser) return false;
            }
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                const client = await clientPromise;
                const db = client.db();
                const dbUser = await db.collection("users").findOne({ email: user.email });
                if (dbUser) {
                    token.isAdmin = dbUser.isAdmin || false;
                    token.id = dbUser._id.toString();
                }
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },

        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        }
    }
})

export {handler as GET, handler as POST}
