import { compare } from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import User from "./models/userModel";
import connectDB from "./lib/connectDB";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        profile_picture: {},
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined; //this is the name attribute in inpit
        const password = credentials.password as string | undefined;
        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        await connectDB();

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        if (!user.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }
        return {
          username: user.username,
          id: user._id.toString(),
          email: user.email,
          profile_picture: user.profile_picture,
          images: user.images,
        };
      },
    }),
  ],
  pages: {
    signIn: "?model=true",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.profile_picture = user.profile_picture;
        token.images = user.images;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.profile_picture = token.profile_picture;
      session.user.images = token.images;
      return session;
    },
  },
});
