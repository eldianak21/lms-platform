import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'  // Keep this one - it's the main CSS file
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LearnHub - Advanced LMS Platform',
  description: 'An advanced Learning Management System for modern education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020408] text-[#b2c1d3] min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}