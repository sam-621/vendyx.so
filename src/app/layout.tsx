import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Vendyx',
  description: 'Commerce management for every business.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark antialiased ${geistSans.variable}`}>
        <div className="pb-6">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
