'use client'

import { useState } from 'react'
import { Search, Filter, MoreVertical, Edit, Trash2, Shield, UserCheck, UserX, Mail, Phone, Calendar } from 'lucide-react'
import './style.css'

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const filters = [
    { id: 'all', label: 'All Users' },
    { id: 'active', label: 'Active' },
    { id: 'inactive', label: 'Inactive' },
    { id: 'students', label: 'Students' },
    { id: 'instructors', label: 'Instructors' },
    { id: 'admins', label: 'Admins' },
    { id: 'pending', label: 'Pending' },
  ]

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      role: 'Student',
      status: 'active',
      joined: '2024-01-15',
      courses: 5,
      lastActive: '2 hours ago',
      avatar: 'JS'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      role: 'Instructor',
      status: 'active',
      joined: '2023-11-20',
      courses: 3,
      lastActive: '1 hour ago',
      avatar: 'EW'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@example.com',
      role: 'Student',
      status: 'inactive',
      joined: '2024-02-10',
      courses: 2,
      lastActive: '2 days ago',
      avatar: 'MC'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Admin',
      status: 'active',
      joined: '2023-09-05',
      courses: 0,
      lastActive: 'Just now',
      avatar: 'SJ'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david@example.com',
      role: 'Student',
      status: 'pending',
      joined: '2024-03-01',
      courses: 1,
      lastActive: 'Never',
      avatar: 'DB'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa@example.com',
      role: 'Instructor',
      status: 'active',
      joined: '2023-12-15',
      courses: 4,
      lastActive: '30 minutes ago',
      avatar: 'LA'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      email: 'robert@example.com',
      role: 'Student',
      status: 'active',
      joined: '2024-02-28',
      courses: 3,
      lastActive: '5 hours ago',
      avatar: 'RT'
    },
    {
      id: 8,
      name: 'Maria Garcia',
      email: 'maria@example.com',
      role: 'Student',
      status: 'inactive',
      joined: '2024-01-10',
      courses: 0,
      lastActive: '1 week ago',
      avatar: 'MG'
    },
  ]

  const filteredUsers = users.filter(user => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'active') return user.status === 'active'
    if (activeFilter === 'inactive') return user.status === 'inactive'
    if (activeFilter === 'pending') return user.status === 'pending'
    if (activeFilter === 'students') return user.role === 'Student'
    if (activeFilter === 'instructors') return user.role === 'Instructor'
    if (activeFilter === 'admins') return user.role === 'Admin'
    return true
  }).filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id))
    }
  }

  const handleSelectUser = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId))
    } else {
      setSelectedUsers([...selectedUsers, userId])
    }
  }

  const handleBulkAction = (action: string) => {
    console.log(`${action} selected users:`, selectedUsers)
    // Implement bulk action logic
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-[#b2c1d3]/70">Manage all user accounts and permissions</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#020408] border border-[#597592]/30 rounded-lg focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200 w-full lg:w-64"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#597592]" />
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium">
            Add User
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{users.length}</div>
              <div className="text-sm text-[#597592]">Total Users</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592]/20 to-transparent flex items-center justify-center">
              <Users className="w-6 h-6 text-[#597592]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {users.filter(u => u.role === 'Student').length}
              </div>
              <div className="text-sm text-[#597592]">Students</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b2c1d3]/20 to-transparent flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-[#b2c1d3]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {users.filter(u => u.role === 'Instructor').length}
              </div>
              <div className="text-sm text-[#597592]">Instructors</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#597592]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {users.filter(u => u.status === 'active').length}
              </div>
              <div className="text-sm text-[#597592]">Active Users</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-[#020408]" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Bulk Actions */}
      <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
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
          
          {selectedUsers.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-[#597592]">{selectedUsers.length} selected</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleBulkAction('activate')}
                  className="px-3 py-1.5 bg-green-500/10 text-green-400 rounded text-sm hover:bg-green-500/20 transition-colors duration-200 flex items-center"
                >
                  <UserCheck className="w-4 h-4 mr-1" />
                  Activate
                </button>
                <button
                  onClick={() => handleBulkAction('deactivate')}
                  className="px-3 py-1.5 bg-red-500/10 text-red-400 rounded text-sm hover:bg-red-500/20 transition-colors duration-200 flex items-center"
                >
                  <UserX className="w-4 h-4 mr-1" />
                  Deactivate
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-3 py-1.5 bg-red-500/10 text-red-400 rounded text-sm hover:bg-red-500/20 transition-colors duration-200 flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#597592]/20">
                <th className="py-3 px-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-[#597592]/30 bg-[#020408] text-[#597592] focus:ring-[#597592]"
                    />
                    <span className="ml-2 text-sm font-medium text-[#b2c1d3]">Select All</span>
                  </label>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">User</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Role</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Joined</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Last Active</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2c1d3]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-[#597592]/10 hover:bg-[#020408]/30 transition-colors duration-200">
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="rounded border-[#597592]/30 bg-[#020408] text-[#597592] focus:ring-[#597592]"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center text-[#020408] font-bold">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-sm text-[#597592] flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Admin' ? 'bg-purple-500/10 text-purple-400' :
                      user.role === 'Instructor' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-[#597592]/10 text-[#597592]'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-500/10 text-green-400' :
                      user.status === 'inactive' ? 'bg-red-500/10 text-red-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-[#b2c1d3]">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#597592]" />
                      {new Date(user.joined).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-[#b2c1d3]">{user.lastActive}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 rounded hover:bg-[#597592]/10 transition-colors duration-200" title="Edit">
                        <Edit className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                      <button className="p-1.5 rounded hover:bg-[#597592]/10 transition-colors duration-200" title="Message">
                        <Mail className="w-4 h-4 text-[#b2c1d3]" />
                      </button>
                      <button className="p-1.5 rounded hover:bg-[#597592]/10 transition-colors duration-200" title="More">
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
        {filteredUsers.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 rounded-full flex items-center justify-center">
              <Users className="w-12 h-12 text-[#597592]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No users found</h3>
            <p className="text-[#b2c1d3]/70 mb-6 max-w-md mx-auto">
              {searchQuery || activeFilter !== 'all' 
                ? "Try adjusting your search or filters to find what you're looking for."
                : "No users have been added yet."}
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

      {/* User Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <h3 className="text-lg font-semibold text-white mb-4">User Growth</h3>
          <div className="text-3xl font-bold text-white mb-2">+15%</div>
          <div className="text-sm text-[#597592]">This month compared to last</div>
          <div className="mt-4">
            <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Active Sessions</h3>
          <div className="text-3xl font-bold text-white mb-2">342</div>
          <div className="text-sm text-[#597592]">Currently online users</div>
          <div className="mt-4">
            <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Avg. Engagement</h3>
          <div className="text-3xl font-bold text-white mb-2">42 min</div>
          <div className="text-sm text-[#597592]">Average session duration</div>
          <div className="mt-4">
            <div className="h-2 bg-[#020408] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#597592] to-[#b2c1d3] rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}