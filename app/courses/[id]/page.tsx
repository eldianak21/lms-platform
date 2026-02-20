'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import VideoPlayer from '@/components/course/VideoPlayer/VideoPlayer'
import { 
  Play, Clock, Users, Star, BookOpen, ChevronRight, 
  Download, Share2, Heart, Bookmark, CheckCircle,
  MessageSquare, Award, FileText, BarChart, Calendar,
  User, Globe, Target, TrendingUp
} from 'lucide-react'
import './style.css'

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.id as string
  
  const [activeTab, setActiveTab] = useState('overview')
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const course = {
    id: courseId,
    title: 'Advanced Web Development',
    instructor: 'Alex Johnson',
    instructorTitle: 'Senior Full-Stack Developer at Google',
    instructorRating: 4.9,
    instructorStudents: 12500,
    rating: 4.9,
    reviews: 1245,
    students: 1250,
    duration: '12h 30m',
    modules: 12,
    assignments: 5,
    projects: 3,
    level: 'Intermediate',
    category: 'Technology',
    price: '$89.99',
    originalPrice: '$129.99',
    discount: '30% off',
    lastUpdated: 'March 2024',
    language: 'English',
    caption: 'English',
    certificate: true,
    lifetimeAccess: true,
    featured: true,
    description: 'Master modern web development with this comprehensive course. Learn React, Node.js, MongoDB, and TypeScript to build full-stack applications.',
    learningOutcomes: [
      'Build full-stack web applications from scratch',
      'Master React with Hooks and Context API',
      'Implement RESTful APIs with Node.js and Express',
      'Work with MongoDB and Mongoose for data persistence',
      'Deploy applications to cloud platforms',
      'Implement authentication and authorization',
      'Write clean, maintainable code with TypeScript',
      'Optimize performance and scalability'
    ],
    requirements: [
      'Basic understanding of HTML, CSS, and JavaScript',
      'No prior React or Node.js experience required',
      'A computer with internet connection',
      'Willingness to learn and practice coding'
    ],
    modules: [
      { id: 1, title: 'Introduction to Modern Web Development', duration: '45m', lessons: 3, free: true },
      { id: 2, title: 'JavaScript Fundamentals Refresher', duration: '1h 30m', lessons: 5 },
      { id: 3, title: 'TypeScript Essentials', duration: '2h 15m', lessons: 4 },
      { id: 4, title: 'React Fundamentals and Hooks', duration: '3h 20m', lessons: 6 },
      { id: 5, title: 'State Management with Context API', duration: '2h 45m', lessons: 4 },
      { id: 6, title: 'Node.js and Express Backend', duration: '3h 15m', lessons: 5 },
      { id: 7, title: 'MongoDB and Mongoose', duration: '2h 30m', lessons: 4 },
      { id: 8, title: 'RESTful API Development', duration: '3h 45m', lessons: 6 },
      { id: 9, title: 'Authentication and Authorization', duration: '2h 15m', lessons: 4 },
      { id: 10, title: 'Deployment and DevOps', duration: '2h', lessons: 3 },
      { id: 11, title: 'Performance Optimization', duration: '1h 45m', lessons: 3 },
      { id: 12, title: 'Final Project and Best Practices', duration: '2h 30m', lessons: 4 }
    ],
    instructorInfo: {
      bio: 'Alex has over 10 years of experience in web development and has worked with major tech companies. He specializes in React, Node.js, and cloud architecture.',
      experience: '10+ years',
      courses: 8,
      students: '12.5K+',
      rating: 4.9
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' }
  ]

  const features = [
    { icon: Clock, label: '12 hours on-demand video' },
    { icon: Download, label: 'Downloadable resources' },
    { icon: FileText, label: '5 assignments' },
    { icon: MessageSquare, label: 'Q&A support' },
    { icon: Award, label: 'Certificate of completion' },
    { icon: Globe, label: 'Full lifetime access' }
  ]

  const reviews = [
    { id: 1, user: 'Sarah Johnson', rating: 5, date: '2 weeks ago', comment: 'Excellent course! The projects were very practical and helped me land a job.' },
    { id: 2, user: 'Michael Chen', rating: 5, date: '1 month ago', comment: 'Alex is a fantastic instructor. The course content is up-to-date and well-structured.' },
    { id: 3, user: 'Emma Wilson', rating: 4, date: '2 months ago', comment: 'Great course overall. Would love more advanced topics in future updates.' }
  ]

  return (
    <div className="min-h-screen py-8">
      {/* Course Header */}
      <div className="gradient-card rounded-2xl p-6 md:p-8 border border-[#597592]/20 mb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#597592]/10 text-xs font-medium text-[#597592]">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#597592] to-[#597592]/80 text-xs font-medium text-white">
                {course.level}
              </span>
              {course.featured && (
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-xs font-medium text-yellow-400">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {course.title}
            </h1>

            <p className="text-lg text-[#b2c1d3]/70 mb-6">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">{course.rating}</span>
                <span className="text-sm text-[#597592]">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-[#597592]" />
                <span className="text-sm text-[#b2c1d3]">{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-[#597592]" />
                <span className="text-sm text-[#b2c1d3]">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4 text-[#597592]" />
                <span className="text-sm text-[#b2c1d3]">{course.modules} modules</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center text-[#020408] font-bold">
                  {course.instructor.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white">{course.instructor}</div>
                  <div className="text-sm text-[#597592]">{course.instructorTitle}</div>
                </div>
              </div>
              <div className="text-sm text-[#b2c1d3]">
                Last updated: {course.lastUpdated}
              </div>
            </div>
          </div>

          {/* Right Column - Enroll Card */}
          <div className="lg:w-1/3">
            <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20 sticky top-24">
              {/* Course Preview */}
              <div className="mb-6">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center mb-4 relative overflow-hidden">
                  <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs text-white">Preview this course</div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-bold text-white">{course.price}</span>
                  <span className="text-lg text-[#597592] line-through">{course.originalPrice}</span>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400">
                    {course.discount}
                  </span>
                </div>
                <div className="text-sm text-[#597592] mb-4">30-Day Money-Back Guarantee</div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {isEnrolled ? (
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Continue Learning
                    </button>
                  ) : (
                    <button 
                      onClick={() => setIsEnrolled(true)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium"
                    >
                      Enroll Now
                    </button>
                  )}
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`flex-1 px-4 py-2 border rounded-lg transition-all duration-200 flex items-center justify-center ${
                        isFavorite 
                          ? 'border-red-500/20 bg-red-500/10 text-red-400' 
                          : 'border-[#597592]/30 hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                    </button>
                    <button 
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`flex-1 px-4 py-2 border rounded-lg transition-all duration-200 flex items-center justify-center ${
                        isBookmarked 
                          ? 'border-blue-500/20 bg-blue-500/10 text-blue-400' 
                          : 'border-[#597592]/30 hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    <button className="flex-1 px-4 py-2 border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">This course includes:</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-[#b2c1d3]">
                      <feature.icon className="w-4 h-4 text-[#597592]" />
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 border-b border-[#597592]/20 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-t-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#597592] to-[#597592]/80 text-white'
                  : 'text-[#b2c1d3] hover:text-white hover:bg-[#597592]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Learning Outcomes */}
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-6">What you'll learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#597592] mt-0.5 flex-shrink-0" />
                      <span className="text-[#b2c1d3]">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content Preview */}
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-6">Course Content</h3>
                <div className="space-y-3">
                  {course.modules.slice(0, 5).map((module) => (
                    <div key={module.id} className="flex items-center justify-between p-4 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-[#597592]/10 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-[#597592]" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{module.title}</div>
                          <div className="text-sm text-[#597592]">
                            {module.lessons} lessons • {module.duration}
                          </div>
                        </div>
                      </div>
                      {module.free && (
                        <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400">
                          Free Preview
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 px-6 py-3 border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white transition-colors duration-200 flex items-center justify-center">
                  Show all {course.modules} modules
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Video Player */}
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <VideoPlayer
                  src="/videos/course-preview.mp4"
                  title="Course Preview: Modern Web Development"
                  duration="12h 30m"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Requirements */}
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm text-[#b2c1d3]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#597592] mt-1.5 flex-shrink-0"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-6">Course Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">Completion Rate</span>
                    </div>
                    <span className="text-white font-medium">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">Career Impact</span>
                    </div>
                    <span className="text-white font-medium">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BarChart className="w-5 h-5 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">Student Satisfaction</span>
                    </div>
                    <span className="text-white font-medium">4.9/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">Last Updated</span>
                    </div>
                    <span className="text-white font-medium">{course.lastUpdated}</span>
                  </div>
                </div>
              </div>

              {/* Who This Course Is For */}
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-4">Who this course is for:</h3>
                <ul className="space-y-2">
                  {[
                    'Beginners wanting to become web developers',
                    'Developers switching to full-stack development',
                    'Freelancers looking to expand their skillset',
                    'Students pursuing a career in tech'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm text-[#b2c1d3]">
                      <User className="w-4 h-4 text-[#597592] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <div className="space-y-6">
            <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Course Curriculum</h3>
                <div className="text-sm text-[#597592]">
                  {course.modules} modules • {course.duration} total length
                </div>
              </div>
              
              <div className="space-y-3">
                {course.modules.map((module) => (
                  <div key={module.id} className="rounded-lg border border-[#597592]/20 overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#020408] to-[#0a1420] hover:from-[#020408]/90 hover:to-[#0a1420]/90 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-[#597592]/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-[#597592]">{module.id}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{module.title}</h4>
                          <div className="text-sm text-[#597592] flex items-center space-x-3">
                            <span>{module.lessons} lessons</span>
                            <span>•</span>
                            <span>{module.duration}</span>
                            {module.free && (
                              <>
                                <span>•</span>
                                <span className="text-green-400">Free Preview</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#597592]" />
                    </div>
                    
                    {/* Lessons (Collapsible) */}
                    <div className="hidden">
                      <div className="px-4 py-3 border-t border-[#597592]/10 bg-[#020408]/50">
                        {[...Array(module.lessons)].map((_, index) => (
                          <div key={index} className="flex items-center justify-between py-3 px-2 hover:bg-[#020408]/30 rounded-lg transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <Play className="w-4 h-4 text-[#597592]" />
                              <span className="text-sm text-[#b2c1d3]">Lesson {index + 1}: Introduction to concept</span>
                            </div>
                            <div className="text-xs text-[#597592]">15:30</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignments & Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-4">Assignments</h3>
                <div className="space-y-3">
                  {[...Array(course.assignments)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-[#597592]" />
                        <div>
                          <div className="text-sm font-medium text-white">Assignment {index + 1}</div>
                          <div className="text-xs text-[#597592]">Hands-on practice exercise</div>
                        </div>
                      </div>
                      <span className="text-xs text-[#597592]">Due in 7 days</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-4">Projects</h3>
                <div className="space-y-3">
                  {[...Array(course.projects)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-[#597592]" />
                        <div>
                          <div className="text-sm font-medium text-white">Project {index + 1}</div>
                          <div className="text-xs text-[#597592]">Real-world application</div>
                        </div>
                      </div>
                      <span className="text-xs text-green-400">Certificate Project</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instructor Tab */}
        {activeTab === 'instructor' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Instructor Profile */}
            <div className="lg:col-span-2">
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center text-[#020408] text-3xl font-bold">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{course.instructor}</h3>
                    <p className="text-lg text-[#597592] mb-4">{course.instructorTitle}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{course.instructorRating}/5</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-[#597592]" />
                        <span className="text-sm text-[#b2c1d3]">{course.instructorStudents.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4 text-[#597592]" />
                        <span className="text-sm text-[#b2c1d3]">{course.instructorInfo.courses} courses</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">About Me</h4>
                    <p className="text-[#b2c1d3] leading-relaxed">
                      {course.instructorInfo.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Experience</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#020408] to-[#0a1420] border border-[#597592]/20">
                        <div className="text-2xl font-bold text-white mb-1">{course.instructorInfo.experience}</div>
                        <div className="text-sm text-[#597592]">Years Experience</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#020408] to-[#0a1420] border border-[#597592]/20">
                        <div className="text-2xl font-bold text-white mb-1">{course.instructorInfo.courses}</div>
                        <div className="text-sm text-[#597592]">Courses</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#020408] to-[#0a1420] border border-[#597592]/20">
                        <div className="text-2xl font-bold text-white mb-1">{course.instructorInfo.students}</div>
                        <div className="text-sm text-[#597592]">Students</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#020408] to-[#0a1420] border border-[#597592]/20">
                        <div className="text-2xl font-bold text-white mb-1">{course.instructorInfo.rating}/5</div>
                        <div className="text-sm text-[#597592]">Instructor Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructor Stats */}
            <div className="space-y-6">
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h4 className="text-lg font-semibold text-white mb-4">Student Feedback</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#b2c1d3]">Clarity of Explanation</div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#b2c1d3]">Engagement Level</div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#b2c1d3]">Response Time</div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#b2c1d3]">Practical Examples</div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h4 className="text-lg font-semibold text-white mb-4">Other Courses</h4>
                <div className="space-y-3">
                  {[
                    'React Native Mobile Development',
                    'Node.js Backend Mastery',
                    'TypeScript for Professionals',
                    'GraphQL API Design'
                  ].map((title, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#597592] to-[#b2c1d3]"></div>
                      <div>
                        <div className="text-sm font-medium text-white">{title}</div>
                        <div className="text-xs text-[#597592]">4.8 ⭐ • 850 students</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reviews Summary */}
            <div className="lg:col-span-2">
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Student Reviews</h3>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-4 rounded-xl bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center text-[#020408] font-bold">
                            {review.user.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-white">{review.user}</div>
                            <div className="text-sm text-[#597592]">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-[#597592]'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#b2c1d3]">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Write Review */}
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-6">Write a Review</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                      Your Rating
                    </label>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <button key={i} className="text-2xl text-[#597592] hover:text-yellow-400 transition-colors duration-200">
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                      Your Review
                    </label>
                    <textarea
                      className="w-full h-32 bg-[#020408] border border-[#597592]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                      placeholder="Share your experience with this course..."
                    />
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>

            {/* Rating Summary */}
            <div className="space-y-6">
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-white mb-2">{course.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-[#597592]">Course Rating</div>
                  <div className="text-sm text-[#597592]">{course.reviews} reviews</div>
                </div>

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-3">
                      <div className="text-sm text-[#b2c1d3] w-8">{rating} ⭐</div>
                      <div className="flex-1 h-2 bg-[#020408] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                          style={{ width: `${(rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-[#597592] w-12 text-right">
                        {Math.round((rating / 5) * course.reviews)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h4 className="text-lg font-semibold text-white mb-4">Review Filters</h4>
                <div className="space-y-3">
                  {['All Reviews', '5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'].map((filter) => (
                    <button
                      key={filter}
                      className="w-full text-left px-3 py-2 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 text-[#b2c1d3] hover:text-white transition-colors duration-200 text-sm"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Do I need any prior experience?',
                      a: 'No prior experience is required. This course starts from the basics and gradually builds up to advanced concepts.'
                    },
                    {
                      q: 'How long do I have access to the course?',
                      a: 'You have lifetime access to the course content, including future updates.'
                    },
                    {
                      q: 'Is there a certificate upon completion?',
                      a: 'Yes, you will receive a verifiable certificate of completion after finishing all modules and assignments.'
                    },
                    {
                      q: 'Can I get a refund if I am not satisfied?',
                      a: 'Yes, we offer a 30-day money-back guarantee with no questions asked.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-[#597592]/20 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-[#597592]/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-[#597592]">Q</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">{faq.q}</h4>
                          <p className="text-sm text-[#b2c1d3]">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-6">Still have questions?</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                      Your Question
                    </label>
                    <textarea
                      className="w-full h-32 bg-[#020408] border border-[#597592]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                      placeholder="Type your question here..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium">
                    Submit Question
                  </button>
                </div>
              </div>

              <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
                <h3 className="text-xl font-semibold text-white mb-4">Course Support</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#020408]/30">
                    <MessageSquare className="w-5 h-5 text-[#597592]" />
                    <div>
                      <div className="text-sm font-medium text-white">Q&A Forum</div>
                      <div className="text-xs text-[#597592]">Get help from instructor and peers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#020408]/30">
                    <Users className="w-5 h-5 text-[#597592]" />
                    <div>
                      <div className="text-sm font-medium text-white">Community</div>
                      <div className="text-xs text-[#597592]">Join student discussions</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#020408]/30">
                    <BookOpen className="w-5 h-5 text-[#597592]" />
                    <div>
                      <div className="text-sm font-medium text-white">Resources</div>
                      <div className="text-xs text-[#597592]">Download course materials</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Courses */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Related Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'React Native Mobile Development',
              instructor: 'Alex Johnson',
              rating: 4.8,
              students: 920,
              price: '$94.99'
            },
            {
              title: 'Node.js Backend Mastery',
              instructor: 'Michael Lee',
              rating: 4.7,
              students: 750,
              price: '$89.99'
            },
            {
              title: 'TypeScript for Professionals',
              instructor: 'Sarah Chen',
              rating: 4.9,
              students: 680,
              price: '$79.99'
            }
          ].map((course, index) => (
            <div key={index} className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#597592] to-[#b2c1d3]"></div>
                <div>
                  <h3 className="font-semibold text-white">{course.title}</h3>
                  <div className="text-sm text-[#597592]">{course.instructor}</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-white">{course.rating}</span>
                  <span className="text-xs text-[#597592]">({course.students})</span>
                </div>
                <div className="text-lg font-bold text-white">{course.price}</div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white text-sm font-medium">
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}