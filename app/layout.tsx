import React from "react"
import type { Metadata, Viewport } from 'next'
import { VT323, Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zyreel Andre L. Ilagan - UX Designer Portfolio',
  description: 'A retro 16-bit JRPG-inspired UX portfolio showcasing design skills, projects, and experience',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1b3f',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={pressStart2P.className}>
      <body className={`${vt323.className} antialiased`} style={{ fontSize: '0.75rem' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
