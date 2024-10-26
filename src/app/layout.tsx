import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import { BRAND, DESCRIPTION } from '@/CONSTANTS';

const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: BRAND,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
