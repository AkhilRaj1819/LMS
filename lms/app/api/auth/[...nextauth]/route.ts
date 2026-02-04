import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "@/lib/db"

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/',
    },
    callbacks: {
        async signIn({ user }) {
            const email = user.email;

            if (!email) return false;
            if (!email.endsWith("@ggu.edu.in")) return false;

            const client = await clientPromise;
            const db = client.db();
            const existingUser = await db.collection("users").findOne({ email });

            if (!existingUser) return false;

            return true;
        },

        async session({ session }) {
            if (session.user?.email) {
                const client = await clientPromise;
                const db = client.db();
                const user = await db.collection("users").findOne({ email: session.user.email });

                if (user) {
                    session.user.id = user._id.toString();
                    session.user.role = user.role;
                    session.user.studentId = user.student_id;
                }
            }
            return session;
        },

        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return `${baseUrl}/pages/studentDashboard`;
        }
    }
})

export {handler as GET, handler as POST}
