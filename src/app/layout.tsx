import type { Metadata } from "next"
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { BRAND, DESCRIPTION } from '@/CONSTANTS'
import { HeaderContent } from "@/components/organism"

const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
})

const pokemon = localFont({
  src: '../../public/fonts/pokemon_solid.ttf',
  display: 'swap',
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
      <body style={{ margin: 0 }} className={`${roboto.className} ${pokemon.className}`}>
        <HeaderContent />
        {children}
      </body>
    </html>
  );
}
