'use client'

import { useState, useEffect } from 'react'
import { 
  Users, TrendingUp, DollarSign, BookOpen, 
  Star, Clock, MessageSquare, Download,
  ChevronRight, Calendar, Target, Award
} from 'lucide-react'
import './style.css'

export default function InstructorDashboard() {
  const [stats, setStats] = useState([
    { value: 0, target: 1250, label: 'Total Students', icon: Users, color: 'from-[#597592] to-[#597592]/70' },
    { value: 0, target: 4.9, label: 'Average Rating', icon: Star, color: 'from-[#b2c1d3] to-[#b2c1d3]/70' },
    { value: 0, target: 3, label: 'Active Courses', icon: BookOpen, color: 'from-[#597592] to-[#b2c1d3]' },
    { value: 0, target: 12500, label: 'Total Revenue', icon: DollarSign, color: 'from-[#b2c1d3] to-[#597592]', prefix: '$' },
  ])

  const [recentEnrollments, setRecentEnrollments] = useState([
    { id: 1, student: 'John Smith', course: 'Web Development', date: '2 hours ago', avatar: 'JS' },
    { id: 2, student: 'Emma Wilson', course: 'UI/UX Design', date: '4 hours ago', avatar: 'EW' },
    { id: 3, student: 'Michael Chen', course: 'Data Science', date: '1 day ago', avatar: 'MC' },
    { id: 4, student: 'Sarah Johnson', course: 'Web Development', date: '2 days ago', avatar: 'SJ' },
  ])

  const [coursePerformance, setCoursePerformance] = useState([
    { course: 'Advanced Web Development', students: 850, rating: 4.9, revenue: 12500, progress: 85 },
    { course: 'UI/UX Design Masterclass', students: 420, rating: 4.7, revenue: 8500, progress: 65 },
    { course: 'Data Science Fundamentals', students: 320, rating: 4.8, revenue: 6500, progress: 90 },
  ])

  const [upcomingTasks, setUpcomingTasks] = useState([
    { task: 'Grade assignments for Web Dev', course: 'Web Development', dueDate: 'Tomorrow', icon: Target },
    { task: 'Prepare new lesson content', course: 'UI/UX Design', dueDate: 'In 2 days', icon: BookOpen },
    { task: 'Live Q&A session', course: 'Data Science', dueDate: 'In 3 days', icon: MessageSquare },
  ])

  useEffect(() => {
    // Animate stats counter
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
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Welcome, <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Professor Johnson</span>
            </h1>
            <p className="text-[#b2c1d3]/70">Here's what's happening with your courses today</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <button className="px-4 py-2 border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white transition-colors duration-200 text-sm">
              View Analytics
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              New Course
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-7 h-7 text-[#020408]" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {stat.prefix}{stat.value.toLocaleString()}
              {stat.label === 'Average Rating' && '/5'}
            </div>
            <div className="text-sm text-[#597592] font-medium">{stat.label}</div>
            <div className="mt-4">
              <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full transition-all duration-1000"
                  style={{ width: `${(stat.value / stat.target) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-[#597592] mt-1">
                Target: {stat.prefix}{stat.target.toLocaleString()}
                {stat.label === 'Average Rating' && '/5'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Performance */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Course Performance</h2>
            <button className="text-[#597592] hover:text-[#b2c1d3] text-sm font-medium flex items-center">
              View Details
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="space-y-4">
            {coursePerformance.map((course, index) => (
              <div key={index} className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{course.course}</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-[#597592]" />
                        <span className="text-sm text-[#b2c1d3]">{course.students} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white">{course.rating}/5</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-[#597592]" />
                        <span className="text-sm text-[#b2c1d3]">${course.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 min-w-[200px]">
                    <div className="flex justify-between text-xs text-[#597592]">
                      <span>Completion Rate</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white text-sm font-medium">
                      View
                    </button>
                    <button className="px-4 py-2 border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white transition-colors duration-200 text-sm">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Reviews */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {[
                { student: 'Alex Turner', course: 'Web Development', rating: 5, comment: 'Excellent course! The projects were very practical.', date: '2 days ago' },
                { student: 'Maria Garcia', course: 'UI/UX Design', rating: 4, comment: 'Great content, but would love more examples.', date: '3 days ago' },
                { student: 'David Kim', course: 'Data Science', rating: 5, comment: 'Best data science course I have taken!', date: '1 week ago' },
              ].map((review, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-medium text-white">{review.student}</div>
                      <div className="text-sm text-[#597592]">{review.course}</div>
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
                  <p className="text-sm text-[#b2c1d3] mb-2">{review.comment}</p>
                  <div className="text-xs text-[#597592]">{review.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Recent Enrollments */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Recent Enrollments</h3>
              <span className="text-sm text-[#597592]">{recentEnrollments.length} new</span>
            </div>
            <div className="space-y-3">
              {recentEnrollments.map((enrollment) => (
                <div
                  key={enrollment.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center text-[#020408] font-bold">
                      {enrollment.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{enrollment.student}</div>
                      <div className="text-xs text-[#597592]">{enrollment.course}</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#597592]">{enrollment.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#597592]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <task.icon className="w-5 h-5 text-[#597592]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">{task.task}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-[#597592]">{task.course}</div>
                      <div className="text-xs text-[#597592]">{task.dueDate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-[#597592]" />
                  <span className="text-sm text-[#b2c1d3]">Questions Pending</span>
                </div>
                <span className="text-lg font-bold text-white">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-[#597592]" />
                  <span className="text-sm text-[#b2c1d3]">Assignments to Grade</span>
                </div>
                <span className="text-lg font-bold text-white">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#597592]" />
                  <span className="text-sm text-[#b2c1d3]">Live Sessions This Week</span>
                </div>
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#597592]" />
                  <span className="text-sm text-[#b2c1d3]">Certificates to Issue</span>
                </div>
                <span className="text-lg font-bold text-white">5</span>
              </div>
            </div>
          </div>

          {/* Revenue Chart Preview */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Revenue Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">$4,250</div>
                  <div className="text-sm text-[#597592]">This Month</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-400 mb-1">+12.5%</div>
                  <div className="text-xs text-[#597592]">vs last month</div>
                </div>
              </div>
              <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white text-sm font-medium">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Student Engagement</h3>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">78%</div>
          <div className="text-sm text-[#597592]">Average course completion rate</div>
          <div className="mt-4">
            <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                style={{ width: '78%' }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Course Ratings</h3>
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">4.7/5</div>
          <div className="text-sm text-[#597592]">Average rating across all courses</div>
          <div className="mt-4">
            <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                style={{ width: '94%' }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Response Time</h3>
            <Clock className="w-5 h-5 text-[#597592]" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">2.4h</div>
          <div className="text-sm text-[#597592]">Average response to student questions</div>
          <div className="mt-4">
            <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full"
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}