import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import Header from '@/components/layout/Header/Header'
import './style.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Determine user role from pathname
  const getRole = () => {
    if (pathname.includes('/student')) return 'student'
    if (pathname.includes('/instructor')) return 'instructor'
    if (pathname.includes('/admin')) return 'admin'
    return 'student'
  }

  const role = getRole()

  return (
    <div className="min-h-screen bg-[#020408]">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar role={role} onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} role={role} />
        
        {/* Page Content */}
        <main className="min-h-screen p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}