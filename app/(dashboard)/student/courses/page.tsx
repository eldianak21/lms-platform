'use client'

import { useState } from 'react'
import { Search, Filter, Grid, List, Star, Clock, Users, BookOpen, ChevronDown, Play, CheckCircle } from 'lucide-react'
import CourseCard from '@/components/course/CourseCard/CourseCard'
import './style.css'

export default function StudentCoursesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'not-started', label: 'Not Started' },
    { id: 'favorites', label: 'Favorites' },
  ]

  const categories = [
    { name: 'Technology', count: 8, color: 'from-[#597592] to-[#597592]/70' },
    { name: 'Design', count: 5, color: 'from-[#b2c1d3] to-[#b2c1d3]/70' },
    { name: 'Business', count: 6, color: 'from-[#597592] to-[#b2c1d3]' },
    { name: 'Marketing', count: 4, color: 'from-[#b2c1d3] to-[#597592]' },
    { name: 'Personal Development', count: 3, color: 'from-[#597592] to-[#597592]/70' },
  ]

  const courses = [
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
      progress: 75,
      status: 'in-progress',
      favorite: true,
      lastAccessed: '2 hours ago',
      modules: 12,
      assignments: 3
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Lee',
      rating: 4.7,
      students: 850,
      duration: '10h 20m',
      price: '$79.99',
      originalPrice: '$119.99',
      category: 'Design',
      image: '/images/course-uiux.jpg',
      progress: 30,
      status: 'in-progress',
      favorite: false,
      lastAccessed: '1 day ago',
      modules: 8,
      assignments: 2
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      instructor: 'Sarah Chen',
      rating: 4.8,
      students: 980,
      duration: '15h 45m',
      price: '$99.99',
      originalPrice: '$149.99',
      category: 'Technology',
      image: '/images/course-datascience.jpg',
      progress: 90,
      status: 'completed',
      favorite: true,
      lastAccessed: '3 days ago',
      modules: 10,
      assignments: 4
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
      progress: 0,
      status: 'not-started',
      favorite: false,
      lastAccessed: 'Never',
      modules: 6,
      assignments: 2
    },
    {
      id: 5,
      title: 'Business Analytics',
      instructor: 'David Brown',
      rating: 4.5,
      students: 750,
      duration: '14h 20m',
      price: '$89.99',
      originalPrice: '$129.99',
      category: 'Business',
      image: '/images/course-business.jpg',
      progress: 100,
      status: 'completed',
      favorite: false,
      lastAccessed: '1 week ago',
      modules: 11,
      assignments: 5
    },
    {
      id: 6,
      title: 'Mobile App Development',
      instructor: 'James Wilson',
      rating: 4.8,
      students: 920,
      duration: '16h 30m',
      price: '$94.99',
      originalPrice: '$139.99',
      category: 'Technology',
      image: '/images/course-mobile.jpg',
      progress: 45,
      status: 'in-progress',
      favorite: true,
      lastAccessed: '4 hours ago',
      modules: 14,
      assignments: 3
    },
  ]

  const filteredCourses = courses.filter(course => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'in-progress') return course.progress > 0 && course.progress < 100
    if (activeFilter === 'completed') return course.progress === 100
    if (activeFilter === 'not-started') return course.progress === 0
    if (activeFilter === 'favorites') return course.favorite
    return true
  }).filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">My Courses</h1>
          <p className="text-[#b2c1d3]/70">Manage and continue your learning journey</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#020408] border border-[#597592]/30 rounded-lg focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200 w-full lg:w-64"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#597592]" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-[#020408] border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 flex items-center space-x-2 transition-colors duration-200"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          <div className="flex bg-[#020408] border border-[#597592]/30 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors duration-200 ${viewMode === 'grid' ? 'bg-[#597592]/20' : 'hover:bg-[#597592]/10'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors duration-200 ${viewMode === 'list' ? 'bg-[#597592]/20' : 'hover:bg-[#597592]/10'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20 animate-slideDown">
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#597592] to-[#597592]/80 text-white'
                    : 'bg-[#020408]/50 border border-[#597592]/20 text-[#b2c1d3] hover:border-[#597592]/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="p-4 rounded-xl bg-gradient-to-br from-[#020408] to-[#0a1420] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3`}>
                  <BookOpen className="w-6 h-6 text-[#020408]" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{category.name}</div>
                <div className="text-xs text-[#597592]">{category.count} courses</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{filteredCourses.length}</div>
              <div className="text-sm text-[#597592]">Total Courses</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592]/20 to-transparent flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#597592]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {courses.filter(c => c.progress === 100).length}
              </div>
              <div className="text-sm text-[#597592]">Completed</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b2c1d3]/20 to-transparent flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#b2c1d3]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {courses.filter(c => c.favorite).length}
              </div>
              <div className="text-sm text-[#597592]">Favorites</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 flex items-center justify-center">
              <Star className="w-6 h-6 text-[#597592]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {courses.reduce((acc, c) => acc + c.progress, 0) / courses.length}%
              </div>
              <div className="text-sm text-[#597592]">Avg. Progress</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#020408]" />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="gradient-card rounded-2xl overflow-hidden border border-[#597592]/20 hover-lift transition-all duration-300">
              {/* Course Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.status === 'completed' ? 'bg-green-500/10 text-green-400' :
                      course.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-[#597592]/10 text-[#597592]'
                    }`}>
                      {course.status === 'completed' ? 'Completed' :
                       course.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                    </span>
                    {course.favorite && (
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <div className="text-sm text-[#597592]">{course.category}</div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-[#597592] mb-4">By {course.instructor}</p>
                
                {/* Course Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">{course.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#597592]">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 border-t border-[#597592]/20 flex items-center justify-between">
                <div className="text-sm text-[#597592]">
                  {course.lastAccessed === 'Never' ? 'Not started' : `Last: ${course.lastAccessed}`}
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white text-sm font-medium flex items-center">
                  {course.progress === 0 ? 'Start' : 'Continue'}
                  {course.progress > 0 && <Play className="w-4 h-4 ml-2" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Course Image */}
                <div className="lg:w-48 lg:h-32 rounded-xl bg-gradient-to-br from-[#597592] to-[#b2c1d3] opacity-20"></div>
                
                {/* Course Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                      {course.favorite && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.status === 'completed' ? 'bg-green-500/10 text-green-400' :
                      course.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-[#597592]/10 text-[#597592]'
                    }`}>
                      {course.status === 'completed' ? 'Completed' :
                       course.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[#597592] mb-4">By {course.instructor} • {course.category}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{course.rating}</span>
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
                  
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#597592]">
                      <span>Progress: {course.progress}%</span>
                      <span>Last accessed: {course.lastAccessed}</span>
                    </div>
                    <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col space-y-3">
                  <button className="px-6 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium flex items-center justify-center">
                    {course.progress === 0 ? 'Start Course' : 'Continue'}
                    {course.progress > 0 && <Play className="w-4 h-4 ml-2" />}
                  </button>
                  <button className="px-6 py-2 border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white transition-colors duration-200 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="gradient-card rounded-2xl p-12 border border-[#597592]/20 text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 rounded-full flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-[#597592]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">No courses found</h3>
          <p className="text-[#b2c1d3]/70 mb-6 max-w-md mx-auto">
            Try adjusting your filters or search term to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setActiveFilter('all')
              setShowFilters(false)
            }}
            className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Course Recommendations */}
      <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
        <h3 className="text-lg font-semibold text-white mb-6">Continue Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses
            .filter(c => c.status === 'in-progress')
            .map((course) => (
              <div key={course.id} className="p-4 rounded-xl bg-gradient-to-br from-[#020408] to-[#0a1420] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center">
                    <Play className="w-6 h-6 text-[#020408]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{course.title}</div>
                    <div className="text-xs text-[#597592]">{course.category}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#597592]">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}