import RegisterForm from '@/components/auth/RegisterForm/RegisterForm'
import Link from 'next/link'
import { Award, Rocket, TrendingUp } from 'lucide-react'
// import './style.css'

export default function RegisterPage() {
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
              <Rocket className="w-5 h-5 text-[#020408]" />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Join LearnHub</h1>
        <p className="text-[#b2c1d3]/70">Start your learning journey today</p>
      </div>

      {/* Register Form */}
      <RegisterForm />

      {/* Benefits */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-white mb-6 text-center">Why Join Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-xl bg-[#020408]/30 border border-[#597592]/20">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#597592]/20 to-transparent rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-[#597592]" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Certificates</h4>
            <p className="text-xs text-[#597592]">Earn recognized credentials</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-[#020408]/30 border border-[#597592]/20">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#b2c1d3]/20 to-transparent rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#b2c1d3]" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Career Growth</h4>
            <p className="text-xs text-[#597592]">Advance your career</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-[#020408]/30 border border-[#597592]/20">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 rounded-full flex items-center justify-center">
              <Rocket className="w-6 h-6 text-[#597592]" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Fast Learning</h4>
            <p className="text-xs text-[#597592]">Accelerated courses</p>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-8 text-center">
        <p className="text-sm text-[#597592]">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-[#b2c1d3] hover:text-white transition-colors duration-200">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}