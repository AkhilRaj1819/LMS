import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {pool} from "@/lib/db"

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

            const res = await pool.query(
                "SELECT id, role FROM users WHERE email = $1",
                [email]
            );

            if (res.rowCount === 0) return false;

            return true; // Let NextAuth handle redirects
        },

        async session({ session }) {
            if (session.user?.email) {
                const res = await pool.query(
                    "SELECT id, full_name, role, student_id FROM users WHERE email = $1",
                    [session.user.email]
                );

                if (res.rows[0]) {
                    session.user.id = res.rows[0].id;
                    session.user.role = res.rows[0].role;
                    session.user.studentId = res.rows[0].student_id;
                }
            }
            return session;
        },

        async redirect({ url, baseUrl }) {
            // Custom redirect logic after sign in
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return `${baseUrl}/pages/studentDashboard`;
        }
    }
})

export {handler as GET, handler as POST}
