import HeroSection from '@/components/home/HeroSection/HeroSection'
import FeaturedCourses from '@/components/home/FeaturedCourses/FeaturedCourses'
import FeaturesSection from '@/components/home/FeaturesSection/FeaturesSection'
import StatsSection from '@/components/home/StatsSection/StatsSection'
import CTA from '@/components/home/CTA/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCourses />
      <FeaturesSection />
      <StatsSection />
      <CTA />
    </div>
  )
}