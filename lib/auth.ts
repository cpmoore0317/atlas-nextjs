import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { fetchUser } from "./data";
import bcrypt from "bcryptjs"; // Correct import for bcryptjs

export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials: Partial<Record<"email" | "password", unknown>>) => { // Accepting unknown type
        const email = credentials.email as string; // Type assertion to string
        const password = credentials.password as string; // Type assertion to string

        const user = await fetchUser(email); // This should fetch the user from your database
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);
        return passwordsMatch ? user : null;
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;  // Redirects non-authenticated users
    },
  },
});
