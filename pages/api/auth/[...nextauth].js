import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentals",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "dabiegorden49@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        if (
          credentials.username === "Gordon" &&
          credentials.password === "gordey"
        ) {
          return {
            id: 2,
            name: "Gordon",
            email: "dabiegordon49@gmail.com",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
});
