import NextAuth from 'next-auth';
import prisma from '@/lib/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});
// export default NextAuth(authOptions);
// import { getServerSession } from "next-auth/next"
// export async function handler(req, res) {
//   const session = await getServerSession(req, res)

//   if (!session) {
//     res.status(401).json({ message: "You must be logged in." });
//     return;
//   }

//   return res.json({
//     message: 'Success',
//   })
// }