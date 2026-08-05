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
  metadataBase: new URL('https://adonisconstructionsug.com'),
  title: 'Adonis Constructions Ug | Civil Engineering & Construction Services Uganda',
  description: 'Leading civil engineering firm in Uganda specializing in low-volume roads, drainage systems, commercial buildings, tourist camps, and real estate consultancy. Personally supervised by Engineer Gulaale Humphrey Adonia.',
  keywords: [
    'Civil Engineering Uganda',
    'Construction Company Jinja',
    'Road Construction Uganda',
    'Drainage Engineering Kampala',
    'Building Contractors Uganda',
    'Adonis Constructions Ug',
    'Gulaale Humphrey Adonia',
    'Low-volume roads Uganda',
    'Tourist camps construction Uganda',
  ],
  alternates: {
    canonical: 'https://adonisconstructionsug.com',
  },
  openGraph: {
    title: 'Adonis Constructions Ug | Civil Engineering & Construction Services',
    description: 'Precision engineering, road works, drainage, commercial building, and property consultancy in Uganda.',
    url: 'https://adonisconstructionsug.com',
    siteName: 'Adonis Constructions Ug',
    locale: 'en_UG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adonis Constructions Ug Logo and Branding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adonis Constructions Ug | Civil Engineering & Construction',
    description: 'Precision civil engineering and construction services across Uganda.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ConstructionBusiness',
  name: 'Adonis Constructions Ug',
  alternateName: 'Adonis Construction Uganda',
  image: 'https://adonisconstructionsug.com/Adonis-constructions-logo.png',
  logo: 'https://adonisconstructionsug.com/Adonis-constructions-logo.png',
  '@id': 'https://adonisconstructionsug.com',
  url: 'https://adonisconstructionsug.com',
  telephone: '+256700000000',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jinja',
    addressRegion: 'Eastern Region',
    addressCountry: 'UG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.4479,
    longitude: 33.2026,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Jinja' },
    { '@type': 'AdministrativeArea', name: 'Kampala' },
    { '@type': 'AdministrativeArea', name: 'Entebbe' },
    { '@type': 'Country', name: 'Uganda' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Gulaale Humphrey Adonia',
    jobTitle: 'Civil Engineer',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Civil Engineering & Construction Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Low-Volume Road Construction & Maintenance' },
      { '@type': 'Offer', name: 'Drainage & Culvert Systems' },
      { '@type': 'Offer', name: 'Commercial & Residential Building' },
      { '@type': 'Offer', name: 'Eco Tourist Camps & Cabins' },
      { '@type': 'Offer', name: 'Surveying & Real Estate Consultancy' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
