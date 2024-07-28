import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Gold Profit Share Initiative',
  description: 'Everyone should share in the gold of our land. ',
}
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={inter.className}>{children}</body>
    </html>
  )
}
