'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Mail, MessageSquare, Video } from 'lucide-react'
import './CTA.css'

const CTA = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  const benefits = [
    'Access to free courses',
    'Progress tracking',
    'Certificate of completion',
    'Community support',
    'Mobile app access',
    'Regular updates'
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020408]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#597592] to-transparent"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#597592]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#b2c1d3]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="gradient-card rounded-3xl p-8 md:p-12 border border-[#597592]/20 relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#597592] to-transparent rounded-full opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#b2c1d3] to-transparent rounded-full opacity-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Your <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Learning Journey</span> Today
              </h2>
              <p className="text-lg text-[#b2c1d3]/70 mb-8 leading-relaxed">
                Join thousands of successful learners. No commitment, cancel anytime. 
                Get access to all premium features with your free trial.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#020408]" />
                    </div>
                    <span className="text-sm text-[#b2c1d3]">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/register"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-xl hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 hover-lift"
                >
                  <span className="text-white font-semibold">Start Free Trial</span>
                  <ArrowRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/courses"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#597592]/30 rounded-xl hover:border-[#597592] transition-all duration-200 hover-lift"
                >
                  <span className="font-semibold">Browse Courses</span>
                </Link>
              </div>
            </div>

            {/* Right Content - Signup Form */}
            <div className="bg-[#020408]/50 rounded-2xl p-8 border border-[#597592]/20">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Get Started Free
              </h3>
              <p className="text-[#597592] mb-6">
                7-day free trial • No credit card required
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-[#597592]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#b2c1d3] to-[#b2c1d3]/80 text-[#020408] font-semibold rounded-lg hover:from-[#b2c1d3]/90 hover:to-[#b2c1d3]/70 transition-all duration-200 hover-lift"
                >
                  Create Free Account
                </button>

                <p className="text-center text-sm text-[#597592]">
                  By signing up, you agree to our Terms and Privacy Policy
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-[#597592]/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#597592] to-[#597592]/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-[#b2c1d3]" />
                    </div>
                    <div>
                      <div className="text-sm text-white">Need help?</div>
                      <div className="text-xs text-[#597592]">Live chat support</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b2c1d3] to-[#b2c1d3]/20 flex items-center justify-center">
                      <Video className="w-5 h-5 text-[#597592]" />
                    </div>
                    <div>
                      <div className="text-sm text-white">Schedule demo</div>
                      <div className="text-xs text-[#597592]">Book a call</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-12 pt-8 border-t border-[#597592]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Trusted by leading companies
                </h4>
                <p className="text-sm text-[#597592]">
                  Used by teams at Google, Microsoft, Amazon, and more
                </p>
              </div>
              <div className="flex items-center space-x-6">
                {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'].map((company) => (
                  <div
                    key={company}
                    className="text-2xl font-bold text-[#597592]/30 hover:text-[#597592]/50 transition-colors duration-200"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA