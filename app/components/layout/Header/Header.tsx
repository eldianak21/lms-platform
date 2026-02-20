'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, User, Search } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 gradient-card border-b border-[#597592]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-lg flex items-center justify-center">
              <span className="text-[#020408] font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">
              LearnHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-200 hover:text-white ${
                  pathname === item.href ? 'text-white' : 'text-[#b2c1d3]'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#020408]/50 border border-[#597592]/30 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200 w-64"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#597592]" />
            </div>
            <Link
              href="/auth/login"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 hover-lift"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-2 bg-gradient-to-r from-[#b2c1d3] to-[#b2c1d3]/80 text-[#020408] font-medium rounded-lg hover:from-[#b2c1d3]/90 hover:to-[#b2c1d3]/70 transition-all duration-200 hover-lift"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#020408]/50 border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#b2c1d3]" />
            ) : (
              <Menu className="w-6 h-6 text-[#b2c1d3]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#597592]/20 pt-4 slide-in">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                    pathname === item.href
                      ? 'bg-[#597592]/10 text-white border-l-4 border-[#597592]'
                      : 'text-[#b2c1d3] hover:bg-[#597592]/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#597592]/20">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full bg-[#020408]/50 border border-[#597592]/30 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#597592]"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#597592]" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-center"
                  >
                    <User className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 bg-gradient-to-r from-[#b2c1d3] to-[#b2c1d3]/80 text-[#020408] font-medium rounded-lg hover:from-[#b2c1d3]/90 hover:to-[#b2c1d3]/70 transition-all duration-200 text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header