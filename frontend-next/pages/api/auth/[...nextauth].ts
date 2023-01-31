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
      
    }),
    ],
    session: {
      // Set to jwt in order to CredentialsProvider works properly
      strategy: 'jwt',
    },
  
    // pages: {
    //   signIn: '/auth/signin',
    //   signOut: '/auth/signout',
    //   error: '/auth/error', // Error code passed in query string as ?error=
    //   verifyRequest: '/auth/verify-request', // (used for check email message)
    //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // }
})}
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