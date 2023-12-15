import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Josefin_Sans({ subsets: ['latin'] , weight:['100' , '200' , '300' , '400' , '500' , '600' , '700'] })

export const metadata: Metadata = {
  title: 'Bus Booking Sri Lanka',
  description: 'bus bookking client',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
