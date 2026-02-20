'use client'

import { useState } from 'react'
import Link from 'next/link'
import CourseCard from '@/app/components/course/CourseCard/CourseCard'
import { ChevronLeft, ChevronRight, Star, Clock, Users } from 'lucide-react'
import './FeaturedCourses.css'

const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Personal Development']

  const featuredCourses = [
    {
      id: 1,
      title: 'Advanced Web Development',
      instructor: 'Alex Johnson',
      rating: 4.9,
      students: 1250,
      duration: '12h 30m',
      price: '$89.99',
      originalPrice: '$129.99',
      category: 'Technology',
      image: '/images/course-webdev.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Sarah Chen',
      rating: 4.8,
      students: 980,
      duration: '15h 45m',
      price: '$99.99',
      originalPrice: '$149.99',
      category: 'Technology',
      image: '/images/course-datascience.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Lee',
      rating: 4.7,
      students: 850,
      duration: '10h 20m',
      price: '$79.99',
      originalPrice: '$119.99',
      category: 'Design',
      image: '/images/course-uiux.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Emma Wilson',
      rating: 4.6,
      students: 1120,
      duration: '8h 15m',
      price: '$69.99',
      originalPrice: '$99.99',
      category: 'Marketing',
      image: '/images/course-marketing.jpg',
      featured: true
    },
  ]

  const filteredCourses = activeCategory === 'All' 
    ? featuredCourses 
    : featuredCourses.filter(course => course.category === activeCategory)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020408] to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#597592]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#b2c1d3]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#597592]/10 border border-[#597592]/20 mb-4">
            <Star className="w-4 h-4 text-[#597592]" />
            <span className="text-sm font-medium text-[#597592]">Featured Courses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Top Courses</span>
          </h2>
          <p className="text-lg text-[#b2c1d3]/70 max-w-2xl mx-auto">
            Learn from industry experts with hands-on projects and real-world applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#597592] to-[#597592]/80 text-white shadow-lg'
                  : 'bg-[#020408]/50 border border-[#597592]/20 text-[#b2c1d3] hover:border-[#597592]/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-[#597592]/30 rounded-xl hover:border-[#597592] hover:bg-[#597592]/5 transition-all duration-200 group"
          >
            <span className="font-semibold text-white">View All Courses</span>
            <ChevronRight className="w-5 h-5 text-[#597592] group-hover:translate-x-2 transition-transform duration-200" />
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 gradient-card rounded-2xl p-8 border border-[#597592]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592] to-[#597592]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#b2c1d3]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-[#597592] font-medium">Students Enrolled</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b2c1d3] to-[#b2c1d3]/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#597592]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-[#597592] font-medium">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#020408]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">2,500+</div>
              <div className="text-[#597592] font-medium">Hours of Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses