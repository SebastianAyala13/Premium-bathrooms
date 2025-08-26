import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Bathrooms - Professional Bathroom Remodeling',
  description: 'Transform your bathroom into a luxury spa. Premium design, quality materials, and professional installation. Get your free quote today.',
  keywords: 'bathroom remodeling, bathroom design, bathroom installation, spa bathroom, free quote',
  authors: [{ name: 'Premium Bathrooms' }],
  openGraph: {
    title: 'Premium Bathrooms - Professional Bathroom Remodeling',
    description: 'Transform your bathroom into a luxury spa. Premium design, quality materials, and professional installation.',
    type: 'website',
    locale: 'en_US',
  },
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
