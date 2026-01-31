import React from "react"
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Civil Engineering & Construction | Gulaale Adonia',
  description: 'Professional civil engineering and construction services in Uganda. Roads, drainage, buildings, and consultancy by qualified engineer Gulaale Humphrey Adonia.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/g-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
