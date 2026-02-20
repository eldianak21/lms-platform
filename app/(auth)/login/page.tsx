import LoginForm from '@/components/auth/LoginForm/LoginForm'
import Link from 'next/link'
import { Shield, Lock, Users } from 'lucide-react'
// import './style.css'

export default function LoginPage() {
  return (
    <div className="form-container">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold text-[#020408]">L</span>
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#020408]" />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Welcome Back</h1>
        <p className="text-[#b2c1d3]/70">Sign in to continue your learning journey</p>
      </div>

      {/* Login Form */}
      <LoginForm />

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4 rounded-xl bg-[#020408]/30 border border-[#597592]/20">
          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#597592]/20 to-transparent rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#597592]" />
          </div>
          <h4 className="text-sm font-semibold text-white mb-1">Secure Login</h4>
          <p className="text-xs text-[#597592]">End-to-end encryption</p>
        </div>
        <div className="text-center p-4 rounded-xl bg-[#020408]/30 border border-[#597592]/20">
          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#b2c1d3]/20 to-transparent rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-[#b2c1d3]" />
          </div>
          <h4 className="text-sm font-semibold text-white mb-1">50K+ Members</h4>
          <p className="text-xs text-[#597592]">Join our community</p>
        </div>
        <div className="text-center p-4 rounded-xl bg-[#020408]/30 border border-[#597592]/20">
          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-[#597592]" />
          </div>
          <h4 className="text-sm font-semibold text-white mb-1">Privacy First</h4>
          <p className="text-xs text-[#597592]">Your data is protected</p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-8 text-center">
        <p className="text-sm text-[#597592]">
          Need help?{' '}
          <Link href="/contact" className="text-[#b2c1d3] hover:text-white transition-colors duration-200">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  )
}