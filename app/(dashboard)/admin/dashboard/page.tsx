'use client'

import { useState, useEffect } from 'react'
import { 
  Users, TrendingUp, DollarSign, BookOpen, 
  BarChart, Shield, Activity, Settings,
  ChevronRight, Calendar, AlertCircle, CheckCircle,
  Download, Eye, Edit, Trash2
} from 'lucide-react'
import './style.css'

export default function AdminDashboard() {
  const [stats, setStats] = useState([
    { value: 0, target: 5234, label: 'Total Users', icon: Users, color: 'from-[#597592] to-[#597592]/70' },
    { value: 0, target: 156, label: 'Active Courses', icon: BookOpen, color: 'from-[#b2c1d3] to-[#b2c1d3]/70' },
    { value: 0, target: 89, label: 'Instructors', icon: Users, color: 'from-[#597592] to-[#b2c1d3]' },
    { value: 0, target: 125000, label: 'Total Revenue', icon: DollarSign, color: 'from-[#b2c1d3] to-[#597592]', prefix: '$' },
  ])

  const [recentActivity, setRecentActivity] = useState([
    { user: 'John Smith', action: 'Course Enrollment', target: 'Web Development', time: '2 minutes ago', icon: Users },
    { user: 'Emma Wilson', action: 'Certificate Earned', target: 'UI/UX Design', time: '15 minutes ago', icon: CheckCircle },
    { user: 'Professor Johnson', action: 'Course Published', target: 'Data Science', time: '1 hour ago', icon: BookOpen },
    { user: 'Admin', action: 'User Suspended', target: 'Violation of Terms', time: '3 hours ago', icon: Shield },
  ])

  const [systemAlerts, setSystemAlerts] = useState([
    { type: 'warning', message: 'Backup scheduled for tonight at 2 AM', icon: AlertCircle },
    { type: 'info', message: 'New user registrations increased by 15%', icon: TrendingUp },
    { type: 'success', message: 'System update completed successfully', icon: CheckCircle },
  ])

  const [pendingActions, setPendingActions] = useState([
    { action: 'Course Approval', count: 5, icon: BookOpen },
    { action: 'Instructor Verification', count: 3, icon: Users },
    { action: 'Payment Payouts', count: 12, icon: DollarSign },
    { action: 'Support Tickets', count: 8, icon: Settings },
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
    <div className="space-y-8">
      {/* Header */}
      <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Admin <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-[#b2c1d3]/70">System overview and management controls</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <button className="px-4 py-2 border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white transition-colors duration-200 text-sm flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              System Settings
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Pending Actions</h2>
            <button className="text-[#597592] hover:text-[#b2c1d3] text-sm font-medium flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pendingActions.map((action, index) => (
              <div key={index} className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#597592]/20 to-transparent flex items-center justify-center">
                      <action.icon className="w-6 h-6 text-[#597592]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{action.action}</h3>
                      <div className="text-sm text-[#597592]">Requires attention</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white">{action.count}</div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white text-sm font-medium">
                    Review
                  </button>
                  <button className="px-4 py-2 border border-[#597592]/30 rounded-lg hover:border-[#597592]/40 text-[#b2c1d3] hover:text-white transition-colors duration-200 text-sm">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* System Health */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-6">System Health</h3>
            <div className="space-y-4">
              {[
                { service: 'Web Server', status: 'excellent', value: 95, color: 'from-green-500 to-green-400' },
                { service: 'Database', status: 'good', value: 88, color: 'from-blue-500 to-blue-400' },
                { service: 'Video Streaming', status: 'good', value: 92, color: 'from-blue-500 to-blue-400' },
                { service: 'Payment Gateway', status: 'excellent', value: 98, color: 'from-green-500 to-green-400' },
                { service: 'Email Service', status: 'warning', value: 75, color: 'from-yellow-500 to-yellow-400' },
              ].map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${service.status === 'excellent' ? 'bg-green-400' : service.status === 'good' ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                      <span className="text-[#b2c1d3]">{service.service}</span>
                    </div>
                    <span className="text-white font-medium">{service.value}%</span>
                  </div>
                  <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${service.color}`}
                      style={{ width: `${service.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#597592]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <activity.icon className="w-5 h-5 text-[#597592]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">{activity.user}</div>
                    <div className="text-xs text-[#597592]">{activity.action} • {activity.target}</div>
                    <div className="text-xs text-[#597592] mt-1">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">System Alerts</h3>
              <span className="text-sm text-[#597592]">{systemAlerts.length} active</span>
            </div>
            <div className="space-y-3">
              {systemAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    alert.type === 'warning' ? 'border-yellow-500/20 bg-yellow-500/5' :
                    alert.type === 'info' ? 'border-blue-500/20 bg-blue-500/5' :
                    'border-green-500/20 bg-green-500/5'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <alert.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      alert.type === 'warning' ? 'text-yellow-400' :
                      alert.type === 'info' ? 'text-blue-400' :
                      'text-green-400'
                    }`} />
                    <span className="text-sm text-[#b2c1d3]">{alert.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200 flex flex-col items-center justify-center">
                <Users className="w-6 h-6 text-[#597592] mb-2" />
                <span className="text-xs text-[#b2c1d3]">Add User</span>
              </button>
              <button className="p-3 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200 flex flex-col items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#597592] mb-2" />
                <span className="text-xs text-[#b2c1d3]">Create Course</span>
              </button>
              <button className="p-3 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200 flex flex-col items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#597592] mb-2" />
                <span className="text-xs text-[#b2c1d3]">Process Payouts</span>
              </button>
              <button className="p-3 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200 flex flex-col items-center justify-center">
                <Settings className="w-6 h-6 text-[#597592] mb-2" />
                <span className="text-xs text-[#b2c1d3]">System Config</span>
              </button>
            </div>
          </div>

          {/* Resource Usage */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Resource Usage</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#b2c1d3]">CPU Usage</span>
                  <span className="text-white font-medium">42%</span>
                </div>
                <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#b2c1d3]">Memory</span>
                  <span className="text-white font-medium">68%</span>
                </div>
                <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#b2c1d3]">Storage</span>
                  <span className="text-white font-medium">85%</span>
                </div>
                <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#b2c1d3]">Bandwidth</span>
                  <span className="text-white font-medium">56%</span>
                </div>
                <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Reports</h2>
          <button className="text-[#597592] hover:text-[#b2c1d3] text-sm font-medium flex items-center">
            Generate Report
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#597592]/20">
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Report Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Generated By</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Size</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Monthly Revenue Report', user: 'Admin', date: 'Today', size: '2.4 MB' },
                { name: 'User Activity Analysis', user: 'System', date: 'Yesterday', size: '1.8 MB' },
                { name: 'Course Performance Q1', user: 'Professor Johnson', date: '3 days ago', size: '3.2 MB' },
                { name: 'System Audit Log', user: 'Security', date: '1 week ago', size: '4.5 MB' },
              ].map((report, index) => (
                <tr key={index} className="border-b border-[#597592]/10 hover:bg-[#020408]/30 transition-colors duration-200">
                  <td className="py-3 px-4 text-sm text-white">{report.name}</td>
                  <td className="py-3 px-4 text-sm text-[#b2c1d3]">{report.user}</td>
                  <td className="py-3 px-4 text-sm text-[#b2c1d3]">{report.date}</td>
                  <td className="py-3 px-4 text-sm text-[#b2c1d3]">{report.size}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded hover:bg-[#597592]/10 transition-colors duration-200" title="View">
                        <Eye className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                      <button className="p-1 rounded hover:bg-[#597592]/10 transition-colors duration-200" title="Download">
                        <Download className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                      <button className="p-1 rounded hover:bg-[#597592]/10 transition-colors duration-200" title="Delete">
                        <Trash2 className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Daily Active Users</h3>
            <Activity className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">1,234</div>
          <div className="text-sm text-[#597592]">+12% from yesterday</div>
          <div className="mt-4">
            <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">System Uptime</h3>
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">99.98%</div>
          <div className="text-sm text-[#597592]">Last 30 days average</div>
          <div className="mt-4">
            <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '99%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Security Score</h3>
            <Shield className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">98/100</div>
          <div className="text-sm text-[#597592]">All systems secure</div>
          <div className="mt-4">
            <div className="h-1.5 bg-[#020408] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}