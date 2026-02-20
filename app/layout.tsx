import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import './style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authentication - LearnHub',
  description: 'Sign in or create your account',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-br from-[#020408] via-[#0a1420] to-[#020408]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#597592]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b2c1d3]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#597592]/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* Back to Home */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/"
            className="group flex items-center space-x-2 text-[#b2c1d3] hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Main Content */}
        <main className="relative min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-lg">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-sm text-[#597592]">
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}