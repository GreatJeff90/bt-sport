import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      fullName?: string;
      phone?: string;
      dob?: string;
      referral?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    fullName?: string;
    phone?: string;
    dob?: string;
    referral?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    fullName?: string;
    phone?: string;
    dob?: string;
    referral?: string;
  }
}
