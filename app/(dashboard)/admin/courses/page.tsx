'use client'

import { useState } from 'react'
import { Search, Filter, MoreVertical, Edit, Trash2, Eye, CheckCircle, XCircle, Clock, Star, Users, DollarSign } from 'lucide-react'
import './style.css'

export default function AdminCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'published', label: 'Published' },
    { id: 'pending', label: 'Pending' },
    { id: 'draft', label: 'Draft' },
    { id: 'rejected', label: 'Rejected' },
    { id: 'featured', label: 'Featured' },
  ]

  const courses = [
    {
      id: 1,
      title: 'Advanced Web Development',
      instructor: 'Alex Johnson',
      category: 'Technology',
      status: 'published',
      rating: 4.9,
      students: 1250,
      price: '$89.99',
      revenue: 12500,
      created: '2024-01-15',
      lastUpdated: '2024-03-10',
      featured: true
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Lee',
      category: 'Design',
      status: 'published',
      rating: 4.7,
      students: 850,
      price: '$79.99',
      revenue: 8500,
      created: '2024-02-10',
      lastUpdated: '2024-03-05',
      featured: true
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      instructor: 'Sarah Chen',
      category: 'Technology',
      status: 'pending',
      rating: 0,
      students: 0,
      price: '$99.99',
      revenue: 0,
      created: '2024-03-15',
      lastUpdated: '2024-03-15',
      featured: false
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Emma Wilson',
      category: 'Marketing',
      status: 'draft',
      rating: 0,
      students: 0,
      price: '$69.99',
      revenue: 0,
      created: '2024-03-01',
      lastUpdated: '2024-03-10',
      featured: false
    },
    {
      id: 5,
      title: 'Business Analytics',
      instructor: 'David Brown',
      category: 'Business',
      status: 'rejected',
      rating: 0,
      students: 0,
      price: '$89.99',
      revenue: 0,
      created: '2024-02-20',
      lastUpdated: '2024-03-01',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App Development',
      instructor: 'James Wilson',
      category: 'Technology',
      status: 'published',
      rating: 4.8,
      students: 920,
      price: '$94.99',
      revenue: 9500,
      created: '2024-01-25',
      lastUpdated: '2024-03-12',
      featured: false
    },
    {
      id: 7,
      title: 'Graphic Design Basics',
      instructor: 'Lisa Anderson',
      category: 'Design',
      status: 'pending',
      rating: 0,
      students: 0,
      price: '$59.99',
      revenue: 0,
      created: '2024-03-12',
      lastUpdated: '2024-03-12',
      featured: false
    },
    {
      id: 8,
      title: 'Project Management',
      instructor: 'Robert Taylor',
      category: 'Business',
      status: 'published',
      rating: 4.5,
      students: 650,
      price: '$74.99',
      revenue: 7200,
      created: '2024-02-05',
      lastUpdated: '2024-03-08',
      featured: true
    },
  ]

  const filteredCourses = courses.filter(course => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'published') return course.status === 'published'
    if (activeFilter === 'pending') return course.status === 'pending'
    if (activeFilter === 'draft') return course.status === 'draft'
    if (activeFilter === 'rejected') return course.status === 'rejected'
    if (activeFilter === 'featured') return course.featured
    return true
  }).filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = {
    total: courses.length,
    published: courses.filter(c => c.status === 'published').length,
    pending: courses.filter(c => c.status === 'pending').length,
    featured: courses.filter(c => c.featured).length,
    totalRevenue: courses.reduce((acc, c) => acc + c.revenue, 0),
    totalStudents: courses.reduce((acc, c) => acc + c.students, 0),
  }

  const handleAction = (courseId: number, action: string) => {
    console.log(`${action} course ${courseId}`)
    // Implement action logic
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Course Management</h1>
          <p className="text-[#b2c1d3]/70">Manage all courses and content approvals</p>
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
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium">
            Create Course
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="text-2xl font-bold text-white mb-1">{stats.total}</div>
          <div className="text-sm text-[#597592]">Total Courses</div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="text-2xl font-bold text-white mb-1">{stats.published}</div>
          <div className="text-sm text-[#597592]">Published</div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="text-2xl font-bold text-white mb-1">{stats.pending}</div>
          <div className="text-sm text-[#597592]">Pending</div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="text-2xl font-bold text-white mb-1">{stats.featured}</div>
          <div className="text-sm text-[#597592]">Featured</div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="text-2xl font-bold text-white mb-1">${(stats.totalRevenue / 1000).toFixed(1)}k</div>
          <div className="text-sm text-[#597592]">Revenue</div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="text-2xl font-bold text-white mb-1">{(stats.totalStudents / 1000).toFixed(1)}k</div>
          <div className="text-sm text-[#597592]">Students</div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20 animate-slideDown">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#597592] to-[#597592]/80 text-white'
                    : 'bg-[#020408] border border-[#597592]/20 text-[#b2c1d3] hover:border-[#597592]/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Courses Table */}
      <div className="gradient-card rounded-2xl overflow-hidden border border-[#597592]/20">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#597592]/20 bg-gradient-to-r from-[#020408] to-[#0a1420]">
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Course</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Instructor</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Category</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Rating</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Students</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Revenue</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-[#b2c1d3]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id} className="border-b border-[#597592]/10 hover:bg-[#020408]/30 transition-colors duration-200">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#597592] to-[#b2c1d3] opacity-20"></div>
                      <div>
                        <div className="font-medium text-white">{course.title}</div>
                        <div className="text-sm text-[#597592]">${course.price}</div>
                      </div>
                      {course.featured && (
                        <span className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-[#597592] to-[#597592]/80 text-white">
                          Featured
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#b2c1d3]">{course.instructor}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#597592]/10 text-[#597592] border border-[#597592]/20">
                      {course.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.status === 'published' ? 'bg-green-500/10 text-green-400' :
                      course.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' :
                      course.status === 'draft' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{course.rating || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">{course.students.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-[#597592]" />
                      <span className="text-sm text-[#b2c1d3]">${course.revenue.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleAction(course.id, 'view')}
                        className="p-1.5 rounded hover:bg-[#597592]/10 transition-colors duration-200"
                        title="View"
                      >
                        <Eye className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                      <button
                        onClick={() => handleAction(course.id, 'edit')}
                        className="p-1.5 rounded hover:bg-[#597592]/10 transition-colors duration-200"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                      {course.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleAction(course.id, 'approve')}
                            className="p-1.5 rounded hover:bg-green-500/10 transition-colors duration-200"
                            title="Approve"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </button>
                          <button
                            onClick={() => handleAction(course.id, 'reject')}
                            className="p-1.5 rounded hover:bg-red-500/10 transition-colors duration-200"
                            title="Reject"
                          >
                            <XCircle className="w-4 h-4 text-red-400" />
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => handleAction(course.id, 'more')}
                        className="p-1.5 rounded hover:bg-[#597592]/10 transition-colors duration-200"
                        title="More"
                      >
                        <MoreVertical className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 rounded-full flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-[#597592]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No courses found</h3>
            <p className="text-[#b2c1d3]/70 mb-6 max-w-md mx-auto">
              {searchQuery || activeFilter !== 'all' 
                ? "Try adjusting your search or filters to find what you're looking for."
                : "No courses have been created yet."}
            </p>
            {(searchQuery || activeFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveFilter('all')
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Pending Approvals</h3>
          <div className="space-y-4">
            {courses
              .filter(c => c.status === 'pending')
              .map((course) => (
                <div key={course.id} className="flex items-center justify-between p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                  <div>
                    <div className="text-sm font-medium text-white">{course.title}</div>
                    <div className="text-xs text-[#597592]">{course.instructor}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1.5 rounded hover:bg-green-500/10 transition-colors duration-200">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </button>
                    <button className="p-1.5 rounded hover:bg-red-500/10 transition-colors duration-200">
                      <XCircle className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Top Performing</h3>
          <div className="space-y-4">
            {courses
              .filter(c => c.status === 'published')
              .sort((a, b) => b.revenue - a.revenue)
              .slice(0, 3)
              .map((course) => (
                <div key={course.id} className="flex items-center justify-between p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                  <div>
                    <div className="text-sm font-medium text-white">{course.title}</div>
                    <div className="text-xs text-[#597592]">${course.revenue.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-white">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-[#597592]" />
                      <span className="text-xs text-[#b2c1d3]">{course.students}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Updates</h3>
          <div className="space-y-4">
            {courses
              .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
              .slice(0, 3)
              .map((course) => (
                <div key={course.id} className="flex items-center justify-between p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                  <div>
                    <div className="text-sm font-medium text-white">{course.title}</div>
                    <div className="text-xs text-[#597592] flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(course.lastUpdated).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    course.status === 'published' ? 'bg-green-500/10 text-green-400' :
                    course.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' :
                    'bg-blue-500/10 text-blue-400'
                  }`}>
                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}