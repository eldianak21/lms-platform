'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Award, Users, BookOpen, Clock, Globe } from 'lucide-react'
import './StatsSection.css'

const StatsSection = () => {
  const [stats, setStats] = useState([
    { value: 0, target: 50000, label: 'Active Students', icon: Users, suffix: '+' },
    { value: 0, target: 500, label: 'Courses Available', icon: BookOpen, suffix: '+' },
    { value: 0, target: 98, label: 'Completion Rate', icon: TrendingUp, suffix: '%' },
    { value: 0, target: 4.9, label: 'Average Rating', icon: Award, suffix: '/5' },
    { value: 0, target: 2500, label: 'Hours of Content', icon: Clock, suffix: '+' },
    { value: 0, target: 150, label: 'Countries', icon: Globe, suffix: '+' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => {
          if (stat.value < stat.target) {
            const increment = Math.ceil(stat.target / 50)
            return { ...stat, value: Math.min(stat.value + increment, stat.target) }
          }
          return stat
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#020408] to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#597592]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#b2c1d3]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-[#b2c1d3]/70 max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their careers with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-6 border border-[#597592]/20 text-center group hover-lift hover:border-[#597592]/40 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-[#597592] group-hover:text-[#b2c1d3] transition-colors duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value.toLocaleString()}
                <span className="text-[#597592]">{stat.suffix}</span>
              </div>
              <div className="text-sm text-[#b2c1d3]/70 font-medium">
                {stat.label}
              </div>
              <div className="mt-4 pt-4 border-t border-[#597592]/10">
                <div className="h-1 bg-[#020408] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                    style={{ width: `${(stat.value / stat.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 gradient-card rounded-3xl p-8 md:p-12 border border-[#597592]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Carousel */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                What Our <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Students</span> Say
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'Web Developer',
                    text: 'The courses transformed my career. The hands-on projects were exactly what I needed.',
                    rating: 5
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Data Scientist',
                    text: 'Excellent platform with top-notch instructors. The certificate helped me land my dream job.',
                    rating: 5
                  },
                  {
                    name: 'Emma Williams',
                    role: 'UI/UX Designer',
                    text: 'The community support and real-time Q&A sessions made all the difference.',
                    rating: 4
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#020408]/50 rounded-xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center text-[#020408] font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-[#597592]">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-[#597592]'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[#b2c1d3]/80 italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="bg-[#020408]/50 rounded-2xl p-8 border border-[#597592]/20 mb-8">
                <h4 className="text-xl font-semibold text-white mb-6">Student Success Stories</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Career Advancement', percentage: 85 },
                    { label: 'Salary Increase', percentage: 72 },
                    { label: 'Skill Mastery', percentage: 93 },
                    { label: 'Job Placement', percentage: 78 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#b2c1d3]">{item.label}</span>
                        <span className="text-white font-medium">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/10 rounded-2xl p-8 border border-[#597592]/20">
                <h4 className="text-xl font-semibold text-white mb-4">Ready to Start?</h4>
                <p className="text-[#b2c1d3]/70 mb-6">
                  Join our community of successful learners today.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 hover-lift text-white font-medium">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection