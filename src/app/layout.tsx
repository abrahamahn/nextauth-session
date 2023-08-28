import { authOptions } from '@/api/auth/[...nextAuth]';
import { getServerSession } from 'next-auth'
import SessionProvider from './SessionProvider';

import Login from '@/home/components/Login';
import App from '@/app/page';

import '@/styles/globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (
            <App />
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
