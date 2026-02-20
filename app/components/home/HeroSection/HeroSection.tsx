'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, ArrowRight, Star, Users, BookOpen } from 'lucide-react'
import './HeroSection.css'

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0)
  
  const features = [
    'Interactive Learning',
    'Expert Instructors',
    'Flexible Schedule',
    'Industry Certifications'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Students' },
    { icon: BookOpen, value: '500+', label: 'Courses' },
    { icon: Star, value: '4.9', label: 'Rating' },
  ]

  return (
    <section className="relative overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#597592]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b2c1d3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#597592]/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#597592]/10 border border-[#597592]/20">
              <span className="w-2 h-2 bg-[#597592] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#597592]">
                {features[currentFeature]}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Master New Skills with</span>
              <br />
              <span className="bg-gradient-to-r from-[#597592] via-[#b2c1d3] to-white bg-clip-text text-transparent">
                Expert-Led Courses
              </span>
            </h1>

            <p className="text-lg text-[#b2c1d3]/80 leading-relaxed">
              Join thousands of learners worldwide. Access premium courses, interactive content, 
              and earn industry-recognized certifications from top instructors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-xl hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 hover-lift"
              >
                <span className="text-white font-semibold">Explore Courses</span>
                <ArrowRight className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#597592]/30 rounded-xl hover:border-[#597592] transition-all duration-200 hover-lift">
                <Play className="w-5 h-5 text-[#597592] mr-2" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#597592]/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-[#597592]" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-[#597592]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#597592]/20 shadow-2xl hover-lift transform hover:scale-[1.02] transition-all duration-500">
              {/* This would be an image/video */}
              <div className="aspect-video bg-gradient-to-br from-[#020408] via-[#0a1420] to-[#597592]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10 text-[#020408]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Interactive Learning Experience</h3>
                  <p className="text-[#b2c1d3]/70">Watch preview of our premium courses</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-2xl -rotate-12 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-2xl rotate-12 opacity-20"></div>
            </div>

            {/* Floating card 1 */}
            <div className="absolute -bottom-6 -left-6 gradient-card rounded-xl p-4 border border-[#597592]/20 shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#020408]" />
                </div>
                <div>
                  <div className="font-bold text-white">4.9/5 Rating</div>
                  <div className="text-sm text-[#597592]">Student Reviews</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -top-6 -right-6 gradient-card rounded-xl p-4 border border-[#597592]/20 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#597592] to-[#b2c1d3] rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#020408]" />
                </div>
                <div>
                  <div className="font-bold text-white">98%</div>
                  <div className="text-sm text-[#597592]">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection