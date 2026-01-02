import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lune',
  description: 'An open-source solution for commerce management.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark antialiased p-6`}>{children}</body>
    </html>
  );
}
