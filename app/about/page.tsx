'use client'

import { useState } from 'react'
import { 
  Target, Users, Award, Clock, 
  TrendingUp, Globe, Shield, BookOpen,
  ChevronRight, Play, Star, CheckCircle,
  MessageSquare, Heart, Rocket
} from 'lucide-react'
import './style.css'

export default function AboutPage() {
  const [activeMission, setActiveMission] = useState(0)

  const missions = [
    {
      title: 'Democratize Education',
      description: 'Make quality education accessible to everyone, everywhere.',
      icon: Globe
    },
    {
      title: 'Empower Learners',
      description: 'Help individuals achieve their career and personal goals.',
      icon: Users
    },
    {
      title: 'Innovate Continuously',
      description: 'Leverage technology to enhance learning experiences.',
      icon: TrendingUp
    }
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: Award,
      color: 'from-[#597592] to-[#597592]/70'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency.',
      icon: Shield,
      color: 'from-[#b2c1d3] to-[#b2c1d3]/70'
    },
    {
      title: 'Innovation',
      description: 'We embrace change and continuous improvement.',
      icon: Rocket,
      color: 'from-[#597592] to-[#b2c1d3]'
    },
    {
      title: 'Community',
      description: 'We foster collaboration and support.',
      icon: Heart,
      color: 'from-[#b2c1d3] to-[#597592]'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Active Learners', icon: Users },
    { value: '500+', label: 'Expert Courses', icon: BookOpen },
    { value: '150+', label: 'Countries', icon: Globe },
    { value: '98%', label: 'Satisfaction Rate', icon: Star },
    { value: '4.9/5', label: 'Average Rating', icon: Award },
    { value: '24/7', label: 'Support', icon: Clock }
  ]

  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', avatar: 'AJ', bio: '10+ years in edtech' },
    { name: 'Sarah Chen', role: 'Head of Content', avatar: 'SC', bio: 'Curriculum expert' },
    { name: 'Michael Lee', role: 'CTO', avatar: 'ML', bio: 'Tech visionary' },
    { name: 'Emma Wilson', role: 'Head of Design', avatar: 'EW', bio: 'UX specialist' }
  ]

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <div className="gradient-card rounded-2xl p-8 md:p-12 border border-[#597592]/20 mb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming Education Through <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Innovation</span>
          </h1>
          <p className="text-lg text-[#b2c1d3]/70 mb-8 max-w-3xl mx-auto">
            We're on a mission to make quality education accessible to everyone, everywhere. 
            Join thousands of learners who are transforming their careers with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </button>
            <button className="px-8 py-3 border-2 border-[#597592]/30 rounded-lg hover:border-[#597592] transition-all duration-200 text-white font-medium">
              Join Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4">
            <p className="text-lg text-[#b2c1d3]/70">
              Founded in 2020, LearnHub began with a simple idea: education should be accessible, engaging, and transformative.
            </p>
            <p className="text-lg text-[#b2c1d3]/70">
              What started as a small team of educators and technologists has grown into a global platform serving thousands of learners worldwide.
            </p>
            <p className="text-lg text-[#b2c1d3]/70">
              Today, we continue to innovate, bringing cutting-edge technology and pedagogical expertise together to create exceptional learning experiences.
            </p>
          </div>
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium flex items-center">
            Read Our Journey
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#597592] to-[#b2c1d3] opacity-20"></div>
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#597592]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-br from-[#b2c1d3]/20 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              onClick={() => setActiveMission(index)}
              className={`gradient-card rounded-2xl p-8 border cursor-pointer transition-all duration-300 ${
                activeMission === index
                  ? 'border-[#597592] bg-gradient-to-br from-[#020408] to-[#0a1420]'
                  : 'border-[#597592]/20 hover:border-[#597592]/40'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center ${
                activeMission === index
                  ? 'bg-gradient-to-br from-[#597592] to-[#b2c1d3]'
                  : 'bg-[#597592]/10'
              }`}>
                <mission.icon className={`w-8 h-8 ${
                  activeMission === index ? 'text-[#020408]' : 'text-[#597592]'
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{mission.title}</h3>
              <p className="text-[#b2c1d3]/70">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                <value.icon className="w-7 h-7 text-[#020408]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-sm text-[#b2c1d3]/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="gradient-card rounded-2xl p-8 border border-[#597592]/20 mb-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">By The Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#597592]/20 to-transparent flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-[#597592]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-[#597592] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center text-[#020408] text-2xl font-bold">
                {member.avatar}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <div className="text-sm text-[#597592] mb-3">{member.role}</div>
              <p className="text-xs text-[#b2c1d3]/70">{member.bio}</p>
              <div className="mt-4 pt-4 border-t border-[#597592]/20">
                <button className="text-sm text-[#597592] hover:text-[#b2c1d3] transition-colors duration-200">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-card rounded-2xl p-8 md:p-12 border border-[#597592]/20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
        <p className="text-lg text-[#b2c1d3]/70 mb-8 max-w-2xl mx-auto">
          Whether you're a learner, instructor, or partner, there's a place for you in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium">
            Start Learning Free
          </button>
          <button className="px-8 py-3 border-2 border-[#597592]/30 rounded-lg hover:border-[#597592] transition-all duration-200 text-white font-medium">
            Become an Instructor
          </button>
          <button className="px-8 py-3 border-2 border-[#597592]/30 rounded-lg hover:border-[#597592] transition-all duration-200 text-white font-medium">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  )
}