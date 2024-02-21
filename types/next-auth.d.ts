import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    userId: string;
    user: {
      /** The user's postal address. */
    } & DefaultSession['user'];
  }
}
