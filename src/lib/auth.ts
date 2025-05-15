import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@supabase/supabase-js";
import { SupabaseAdapter } from "@auth/supabase-adapter";

// Create Supabase client with the necessary URL and secret
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Define the NextAuth options
export const authOptions: NextAuthOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  session: {
    strategy: "jwt", // JWT session strategy
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null; // If email or password is missing, return null
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        // If authentication fails, return null
        if (error || !data.user) {
          console.error("Login failed:", error?.message);
          return null;
        }

        const { user } = data;

        return {
          id: user.id,
          email: user.email || "", // Ensure email is a string (fallback to empty string if undefined)
          fullName: user.user_metadata?.fullName || "", // Fallback to empty string if undefined
          phone: user.user_metadata?.phone || "", // Fallback to empty string if undefined
          dob: user.user_metadata?.dob || "", // Fallback to empty string if undefined
          referral: user.user_metadata?.referral || "", // Fallback to empty string if undefined
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Include user data in the JWT token
      if (user) {
        token.id = user.id;
        token.fullName = user.fullName;
        token.phone = user.phone;
        token.dob = user.dob;
        token.referral = user.referral;
      }
      return token;
    },
    async session({ session, token }) {
      // Add custom fields to the session user object
      if (session.user) {
        session.user.id = token.id as string;
        session.user.fullName = token.fullName as string;
        session.user.phone = token.phone as string;
        session.user.dob = token.dob as string;
        session.user.referral = token.referral as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin", // Custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET, // NextAuth secret
};
