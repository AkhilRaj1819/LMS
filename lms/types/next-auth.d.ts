import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      isAdmin: boolean
      hasAdminRecord: boolean
      hasStudentRecord: boolean
    }
  }

  interface User {
    id: string
    email: string
    name: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    isAdmin: boolean
    hasAdminRecord: boolean
    hasStudentRecord: boolean
  }
}
