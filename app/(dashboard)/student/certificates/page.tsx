'use client'

import { useState } from 'react'
import { Search, Download, Share2, Eye, Filter, Award, Calendar, CheckCircle, Star, Users, Clock } from 'lucide-react'
import './style.css'

export default function StudentCertificatesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Certificates' },
    { id: 'recent', label: 'Recently Earned' },
    { id: 'featured', label: 'Featured' },
    { id: 'shared', label: 'Shared' },
  ]

  const certificates = [
    {
      id: 1,
      title: 'Advanced Web Development',
      issuer: 'LearnHub Academy',
      date: '2024-03-15',
      grade: 'A+',
      score: 98,
      duration: '12 weeks',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      verificationCode: 'LH-CERT-2024-WD001',
      featured: true,
      shared: true,
      downloads: 5
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      issuer: 'LearnHub Design Institute',
      date: '2024-02-28',
      grade: 'A',
      score: 95,
      duration: '8 weeks',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
      verificationCode: 'LH-CERT-2024-UI001',
      featured: true,
      shared: false,
      downloads: 3
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      issuer: 'LearnHub Data Science',
      date: '2024-01-20',
      grade: 'A+',
      score: 99,
      duration: '10 weeks',
      skills: ['Python', 'Pandas', 'Machine Learning', 'Data Visualization'],
      verificationCode: 'LH-CERT-2024-DS001',
      featured: false,
      shared: true,
      downloads: 7
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      issuer: 'LearnHub Business School',
      date: '2023-12-10',
      grade: 'A-',
      score: 92,
      duration: '6 weeks',
      skills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
      verificationCode: 'LH-CERT-2023-DM001',
      featured: false,
      shared: false,
      downloads: 2
    },
    {
      id: 5,
      title: 'Business Analytics',
      issuer: 'LearnHub Business School',
      date: '2023-11-05',
      grade: 'A',
      score: 96,
      duration: '8 weeks',
      skills: ['Excel', 'SQL', 'Tableau', 'Statistics'],
      verificationCode: 'LH-CERT-2023-BA001',
      featured: true,
      shared: true,
      downloads: 4
    },
    {
      id: 6,
      title: 'Mobile App Development',
      issuer: 'LearnHub Academy',
      date: '2023-10-15',
      grade: 'A+',
      score: 97,
      duration: '14 weeks',
      skills: ['React Native', 'Firebase', 'Mobile UI', 'API Integration'],
      verificationCode: 'LH-CERT-2023-MA001',
      featured: false,
      shared: false,
      downloads: 1
    },
  ]

  const filteredCertificates = certificates.filter(cert => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'recent') {
      const certDate = new Date(cert.date)
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      return certDate >= thirtyDaysAgo
    }
    if (activeFilter === 'featured') return cert.featured
    if (activeFilter === 'shared') return cert.shared
    return true
  }).filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.verificationCode.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = {
    total: certificates.length,
    averageScore: Math.round(certificates.reduce((acc, c) => acc + c.score, 0) / certificates.length),
    shared: certificates.filter(c => c.shared).length,
    featured: certificates.filter(c => c.featured).length,
  }

  const handleDownload = (certId: number) => {
    console.log(`Downloading certificate ${certId}`)
    // Implement download logic
  }

  const handleShare = (certId: number) => {
    console.log(`Sharing certificate ${certId}`)
    // Implement share logic
  }

  const handleView = (certId: number) => {
    console.log(`Viewing certificate ${certId}`)
    // Implement view logic
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">My Certificates</h1>
          <p className="text-[#b2c1d3]/70">Your earned certifications and achievements</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#020408] border border-[#597592]/30 rounded-lg focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200 w-full lg:w-64"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#597592]" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stats.total}</div>
              <div className="text-sm text-[#597592]">Total Certificates</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592]/20 to-transparent flex items-center justify-center">
              <Award className="w-6 h-6 text-[#597592]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stats.averageScore}%</div>
              <div className="text-sm text-[#597592]">Average Score</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b2c1d3]/20 to-transparent flex items-center justify-center">
              <Star className="w-6 h-6 text-[#b2c1d3]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stats.shared}</div>
              <div className="text-sm text-[#597592]">Shared</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 flex items-center justify-center">
              <Share2 className="w-6 h-6 text-[#597592]" />
            </div>
          </div>
        </div>
        <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stats.featured}</div>
              <div className="text-sm text-[#597592]">Featured</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#020408]" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
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

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert) => (
          <div key={cert.id} className="gradient-card rounded-2xl overflow-hidden border border-[#597592]/20 hover-lift transition-all duration-300">
            {/* Certificate Header */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {cert.featured && (
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-[#597592] to-[#597592]/80 text-white">
                      Featured
                    </span>
                  )}
                  {cert.shared && (
                    <span className="px-2 py-1 rounded text-xs font-medium bg-[#597592]/10 text-[#597592] border border-[#597592]/20">
                      Shared
                    </span>
                  )}
                </div>
                <div className="text-sm text-[#597592]">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {new Date(cert.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#597592] to-[#b2c1d3] flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#020408]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-sm text-[#597592]">{cert.issuer}</p>
                </div>
              </div>
              
              {/* Certificate Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 rounded-lg bg-[#020408] border border-[#597592]/20">
                      <div className="text-2xl font-bold text-white">{cert.score}%</div>
                      <div className="text-xs text-[#597592]">Score</div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-[#020408] border border-[#597592]/20">
                      <div className="text-2xl font-bold text-white">{cert.grade}</div>
                      <div className="text-xs text-[#597592]">Grade</div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-[#020408] border border-[#597592]/20">
                      <div className="text-2xl font-bold text-white">{cert.duration}</div>
                      <div className="text-xs text-[#597592]">Duration</div>
                    </div>
                  </div>
                </div>
                
                {/* Skills */}
                <div>
                  <div className="text-sm text-[#597592] mb-2">Skills Acquired:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded text-xs bg-[#597592]/10 text-[#597592] border border-[#597592]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Verification */}
                <div className="pt-3 border-t border-[#597592]/20">
                  <div className="text-xs text-[#597592] mb-1">Verification Code:</div>
                  <div className="font-mono text-sm text-white bg-[#020408] border border-[#597592]/20 rounded-lg px-3 py-2">
                    {cert.verificationCode}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="px-6 py-4 border-t border-[#597592]/20 bg-gradient-to-r from-[#020408] to-[#0a1420]">
              <div className="flex items-center justify-between">
                <div className="text-sm text-[#597592]">
                  <Download className="w-4 h-4 inline mr-1" />
                  {cert.downloads} downloads
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleView(cert.id)}
                    className="p-2 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200"
                    title="View Certificate"
                  >
                    <Eye className="w-4 h-4 text-[#b2c1d3]" />
                  </button>
                  <button
                    onClick={() => handleDownload(cert.id)}
                    className="p-2 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200"
                    title="Download"
                  >
                    <Download className="w-4 h-4 text-[#b2c1d3]" />
                  </button>
                  <button
                    onClick={() => handleShare(cert.id)}
                    className="p-2 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200"
                    title="Share"
                  >
                    <Share2 className="w-4 h-4 text-[#b2c1d3]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCertificates.length === 0 && (
        <div className="gradient-card rounded-2xl p-12 border border-[#597592]/20 text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 rounded-full flex items-center justify-center">
            <Award className="w-12 h-12 text-[#597592]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">No certificates found</h3>
          <p className="text-[#b2c1d3]/70 mb-6 max-w-md mx-auto">
            {searchQuery || activeFilter !== 'all' 
              ? "Try adjusting your search or filters to find what you're looking for."
              : "Complete courses to earn certificates. Start your learning journey today!"}
          </p>
          {searchQuery || activeFilter !== 'all' ? (
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveFilter('all')
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium"
            >
              Clear Filters
            </button>
          ) : (
            <button className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium">
              Browse Courses
            </button>
          )}
        </div>
      )}

      {/* Certificate Verification */}
      <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
        <h3 className="text-lg font-semibold text-white mb-6">Verify Certificate</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-[#b2c1d3]/70 mb-6">
              Verify the authenticity of any LearnHub certificate using the verification code.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                  Enter Verification Code
                </label>
                <input
                  type="text"
                  placeholder="LH-CERT-XXXX-XXXX"
                  className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium">
                Verify Certificate
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#020408] to-[#0a1420] rounded-xl p-6 border border-[#597592]/20">
            <h4 className="text-lg font-semibold text-white mb-4">Verification Features</h4>
            <ul className="space-y-3">
              {[
                'Blockchain-secured certificates',
                'Instant verification',
                'Public verification portal',
                'Tamper-proof design',
                'Employer verification tools'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#597592] flex-shrink-0" />
                  <span className="text-sm text-[#b2c1d3]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}