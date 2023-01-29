import NextAuth from 'next-auth';
import prisma from '@/lib/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],

    pages: {
      signIn: '/chat',
    },
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: 'jwt',
    },
  });
}
