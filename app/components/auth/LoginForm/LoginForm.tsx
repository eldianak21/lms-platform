'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import './LoginForm.css'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    // Basic validation
    const newErrors: Record<string, string> = {}
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.password) newErrors.password = 'Password is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData)
      setIsLoading(false)
      // Handle successful login
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const socialProviders = [
    { name: 'Google', color: 'from-red-500 to-red-600', icon: 'G' },
    { name: 'GitHub', color: 'from-gray-700 to-gray-800', icon: 'GH' },
    { name: 'LinkedIn', color: 'from-blue-600 to-blue-700', icon: 'IN' }
  ]

  return (
    <div className="max-w-md mx-auto gradient-card rounded-2xl p-8 border border-[#597592]/20">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-2xl flex items-center justify-center">
          <span className="text-2xl font-bold text-[#020408]">L</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-[#597592]">Sign in to your account to continue</p>
      </div>

      {/* Social Login */}
      <div className="space-y-3 mb-8">
        {socialProviders.map((provider) => (
          <button
            key={provider.name}
            className={`w-full px-4 py-3 rounded-xl bg-gradient-to-r ${provider.color} text-white font-medium hover:opacity-90 transition-all duration-200 hover-lift flex items-center justify-center space-x-2`}
          >
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">
              {provider.icon}
            </span>
            <span>Continue with {provider.name}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#597592]/20"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-[#020408] text-[#597592]">Or continue with email</span>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-[#597592]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full bg-[#020408] border ${
                errors.email ? 'border-red-500/50' : 'border-[#597592]/30'
              } rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200`}
            />
          </div>
          {errors.email && (
            <div className="flex items-center space-x-1 mt-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-[#b2c1d3]">
              Password
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-[#597592] hover:text-[#b2c1d3] transition-colors duration-200"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-[#597592]" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full bg-[#020408] border ${
                errors.password ? 'border-red-500/50' : 'border-[#597592]/30'
              } rounded-lg pl-12 pr-12 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-[#597592] hover:text-[#b2c1d3] transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <div className="flex items-center space-x-1 mt-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.password}</span>
            </div>
          )}
        </div>

        {/* Remember Me & Submit */}
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border ${
                formData.rememberMe
                  ? 'bg-gradient-to-r from-[#597592] to-[#b2c1d3] border-transparent'
                  : 'border-[#597592]/30 bg-[#020408]'
              } flex items-center justify-center transition-all duration-200`}>
                {formData.rememberMe && (
                  <span className="w-2 h-2 bg-[#020408] rounded-sm"></span>
                )}
              </div>
            </div>
            <span className="text-sm text-[#b2c1d3]">Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover-lift text-white font-semibold flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="mt-8 pt-6 border-t border-[#597592]/20 text-center">
        <p className="text-[#597592]">
          Don't have an account?{' '}
          <Link
            href="/auth/register"
            className="text-[#b2c1d3] hover:text-white font-medium transition-colors duration-200"
          >
            Sign up now
          </Link>
        </p>
      </div>

      {/* Security Note */}
      <div className="mt-6 p-4 rounded-lg bg-[#597592]/5 border border-[#597592]/10">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-[#597592] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-[#b2c1d3]">
              Your security is important to us. We use end-to-end encryption to protect your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm