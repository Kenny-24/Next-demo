import NextAuth from 'next-auth';
import prisma from '@/lib/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'


// export default NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
// });
export default async function auth(req:NextApiRequest, res:NextApiResponse) {
  return await NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        return true;
      },
      async session({ session, token, user }) {
        const sessionUser = { ...session.user, ...user };
  
        return Promise.resolve({
          ...session,
          user: sessionUser,
        });
      },
    },
    debug: true,
    session: {
      // Set to jwt in order to CredentialsProvider works properly
      strategy: 'jwt',
    },
  }
  )
}
  

// export const authOptions: NextAuthOptions = {
//   // your configs
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
// }

// export default NextAuth(authOptions)