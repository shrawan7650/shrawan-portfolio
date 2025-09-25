import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shrawan kumar - Full Stack Developer | MERN Stack Expert',
  description: 'Experienced MERN stack developer specializing in React, Node.js, MongoDB, and Express. Creating innovative web solutions with modern technologies.',
  keywords: 'full stack developer, MERN stack, React, Node.js, MongoDB, Express, JavaScript, TypeScript, web development, portfolio',
  authors: [{ name: 'shrawan kumar ' }],
  openGraph: {
    title: 'shrawan kumar - Full Stack Developer',
    description: 'Experienced MERN stack developer creating innovative web solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shrawan kumar - Full Stack Developer',
    description: 'Experienced MERN stack developer creating innovative web solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}