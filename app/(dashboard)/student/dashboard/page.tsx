'use client'

import { useState, useEffect } from 'react'
import { 
  BookOpen, Clock, Award, TrendingUp, 
  Calendar, Bell, Target, CheckCircle,
  ChevronRight, Play, Star, Users
} from 'lucide-react'
import CourseCard from '@/components/course/CourseCard/CourseCard'
import './style.css'

export default function StudentDashboard() {
  const [stats, setStats] = useState([
    { value: 0, target: 12, label: 'Active Courses', icon: BookOpen, color: 'from-[#597592] to-[#597592]/70' },
    { value: 0, target: 45, label: 'Hours Studied', icon: Clock, color: 'from-[#b2c1d3] to-[#b2c1d3]/70' },
    { value: 0, target: 3, label: 'Certificates', icon: Award, color: 'from-[#597592] to-[#b2c1d3]' },
    { value: 0, target: 85, label: 'Progress %', icon: TrendingUp, color: 'from-[#b2c1d3] to-[#597592]' },
  ])

  const [recentCourses, setRecentCourses] = useState([
    {
      id: 1,
      title: 'Advanced Web Development',
      instructor: 'Alex Johnson',
      rating: 4.9,
      students: 1250,
      duration: '12h 30m',
      price: '$89.99',
      category: 'Technology',
      image: '/images/course-webdev.jpg',
      progress: 75,
      lastAccessed: '2 hours ago'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Michael Lee',
      rating: 4.7,
      students: 850,
      duration: '8h 15m',
      price: '$69.99',
      category: 'Design',
      image: '/images/course-uiux.jpg',
      progress: 30,
      lastAccessed: '1 day ago'
    },
    {
      id: 3,
      title: 'Data Science Basics',
      instructor: 'Sarah Chen',
      rating: 4.8,
      students: 980,
      duration: '10h 45m',
      price: '$79.99',
      category: 'Technology',
      image: '/images/course-datascience.jpg',
      progress: 90,
      lastAccessed: '3 days ago'
    }
  ])

  const [upcomingDeadlines, setUpcomingDeadlines] = useState([
    { course: 'Web Development', task: 'Assignment 3', dueDate: 'Tomorrow', icon: Target },
    { course: 'UI/UX Design', task: 'Final Project', dueDate: 'In 3 days', icon: Calendar },
    { course: 'Data Science', task: 'Quiz 2', dueDate: 'In 5 days', icon: CheckCircle },
  ])

  const [notifications, setNotifications] = useState([
    { message: 'New course recommendation based on your interests', time: '2 hours ago', icon: Bell },
    { message: 'Your certificate for Web Development is ready', time: '1 day ago', icon: Award },
    { message: 'Live Q&A session tomorrow at 2 PM', time: '2 days ago', icon: Users },
  ])

  useEffect(() => {
    // Animate stats counter
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => {
          if (stat.value < stat.target) {
            const increment = Math.ceil(stat.target / 20)
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
              Welcome back, <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">John Doe</span>
            </h1>
            <p className="text-[#b2c1d3]/70">Continue your learning journey where you left off</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 hover-lift text-white font-medium flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Continue Learning
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
              {stat.value}
              {stat.label === 'Progress %' && '%'}
            </div>
            <div className="text-sm text-[#597592] font-medium">{stat.label}</div>
            <div className="mt-4">
              <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full transition-all duration-1000"
                  style={{ width: `${(stat.value / stat.target) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Courses */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent Courses</h2>
            <button className="text-[#597592] hover:text-[#b2c1d3] text-sm font-medium flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCourses.map((course) => (
              <div key={course.id} className="gradient-card rounded-2xl overflow-hidden border border-[#597592]/20 hover-lift">
                {/* Course Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#597592]/10 text-xs font-medium text-[#597592]">
                      {course.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-white">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-[#597592] mb-4">By {course.instructor}</p>
                  
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
                    Last accessed: {course.lastAccessed}
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white text-sm font-medium">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Deadlines */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Upcoming Deadlines</h3>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#597592]/10 flex items-center justify-center">
                      <deadline.icon className="w-5 h-5 text-[#597592]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{deadline.task}</div>
                      <div className="text-xs text-[#597592]">{deadline.course}</div>
                    </div>
                  </div>
                  <div className="text-sm text-[#597592]">{deadline.dueDate}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#597592]/10 to-transparent flex items-center justify-center flex-shrink-0">
                    <notification.icon className="w-5 h-5 text-[#597592]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#b2c1d3]">{notification.message}</p>
                    <div className="text-xs text-[#597592] mt-1">{notification.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Learning Streak</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">7 days</div>
              <p className="text-sm text-[#597592]">Current learning streak</p>
              <div className="mt-4 flex justify-center space-x-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded ${
                      i < 7 ? 'bg-gradient-to-br from-[#597592] to-[#b2c1d3]' : 'bg-[#597592]/10'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Recommended For You</h2>
            <p className="text-[#597592] text-sm">Based on your learning history</p>
          </div>
          <button className="text-[#597592] hover:text-[#b2c1d3] text-sm font-medium flex items-center">
            See More
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="gradient-card rounded-xl p-4 border border-[#597592]/20 hover-lift">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#020408]" />
                </div>
                <div>
                  <div className="font-medium text-white text-sm">Advanced React Patterns</div>
                  <div className="text-xs text-[#597592]">Next steps after basics</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}