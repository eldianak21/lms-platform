import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'support@learnhub.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Education Street, Knowledge City' },
  ]

  return (
    <footer className="gradient-card border-t border-[#597592]/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-lg flex items-center justify-center">
                <span className="text-[#020408] font-bold text-2xl">L</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">
                  LearnHub
                </span>
                <p className="text-sm text-[#597592]">Advanced Learning Platform</p>
              </div>
            </Link>
            <p className="text-[#b2c1d3]/70 text-sm leading-relaxed">
              Empowering learners worldwide with high-quality education and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#020408]/50 border border-[#597592]/20 flex items-center justify-center hover:bg-[#597592]/10 hover:border-[#597592]/40 transition-all duration-200 hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#b2c1d3]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#b2c1d3]/70 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-[#597592] to-transparent group-hover:w-3 mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#597592]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <info.icon className="w-4 h-4 text-[#597592]" />
                  </div>
                  <span className="text-[#b2c1d3]/70 text-sm">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-[#b2c1d3]/70 text-sm mb-4">
              Subscribe to our newsletter for the latest courses and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#020408]/50 border border-[#597592]/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 hover-lift text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#597592]/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#597592] text-sm">
            © {currentYear} LearnHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-[#597592] hover:text-[#b2c1d3] text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#597592] hover:text-[#b2c1d3] text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-[#597592] hover:text-[#b2c1d3] text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer