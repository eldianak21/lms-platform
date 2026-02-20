'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Clock, Users, BookOpen, ChevronRight, Play } from 'lucide-react'
import './CourseCard.css'

interface CourseCardProps {
  course: {
    id: number
    title: string
    instructor: string
    rating: number
    students: number
    duration: string
    price: string
    originalPrice?: string
    category: string
    image: string
    featured?: boolean
  }
}

const CourseCard = ({ course }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`gradient-card rounded-2xl overflow-hidden border border-[#597592]/20 transition-all duration-300 hover-lift ${
        course.featured ? 'featured-course' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#597592] to-[#b2c1d3] opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-[#597592]/50" />
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-[#020408]/80 backdrop-blur-sm text-xs font-medium text-[#b2c1d3] border border-[#597592]/20">
            {course.category}
          </span>
        </div>

        {/* Featured Badge */}
        {course.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#597592] to-[#597592]/80 text-xs font-medium text-white">
              Featured
            </span>
          </div>
        )}

        {/* Play Button on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-[#020408]/70 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] flex items-center justify-center animate-pulse">
              <Play className="w-8 h-8 text-[#020408]" />
            </div>
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Title and Instructor */}
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 h-14">
          {course.title}
        </h3>
        <p className="text-sm text-[#597592] mb-4">By {course.instructor}</p>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium text-white">{course.rating}</span>
            </div>
            <span className="text-xs text-[#597592]">({course.stents})</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[#597592]">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-[#597592]" />
              <span className="text-sm text-[#b2c1d3]">{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4 text-[#597592]" />
              <span className="text-sm text-[#b2c1d3]">12 Lessons</span>
            </div>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#597592]/20">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-white">{course.price}</div>
            {course.originalPrice && (
              <div className="text-sm text-[#597592] line-through">{course.originalPrice}</div>
            )}
          </div>
          <Link
            href={`/courses/${course.id}`}
            className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200"
          >
            <span className="text-sm font-medium text-white">View Course</span>
            <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Progress Bar (for enrolled courses) */}
      <div className="px-6 pb-6">
        <div className="h-1 bg-[#020408] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full transition-all duration-500"
            style={{ width: '0%' }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-[#597592] mt-2">
          <span>Progress</span>
          <span>0%</span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard