import { 
  Video, 
  Award, 
  Users, 
  Clock, 
  Globe, 
  Shield,
  BarChart,
  MessageSquare,
  FileText,
  Smartphone,
  Cloud,
  Zap
} from 'lucide-react'
import './FeaturesSection.css'

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: 'Video Streaming',
      description: 'HD video with multiple quality options and progress saving',
      color: 'from-[#597592] to-[#597592]/70'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn verified certificates with unique verification codes',
      color: 'from-[#b2c1d3] to-[#b2c1d3]/70'
    },
    {
      icon: Users,
      title: 'Live Sessions',
      description: 'Real-time Q&A sessions with instructors and peers',
      color: 'from-[#597592] to-[#b2c1d3]'
    },
    {
      icon: Clock,
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with lifetime course access',
      color: 'from-[#b2c1d3] to-[#597592]'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners from around the world',
      color: 'from-[#597592] to-[#597592]/70'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing',
      color: 'from-[#b2c1d3] to-[#b2c1d3]/70'
    },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Detailed analytics and progress reports',
      color: 'from-[#597592] to-[#b2c1d3]'
    },
    {
      icon: MessageSquare,
      title: 'Discussion Forums',
      description: 'Engage with community discussions and forums',
      color: 'from-[#b2c1d3] to-[#597592]'
    },
  ]

  const platformFeatures = [
    {
      icon: FileText,
      title: 'Assignments & Quizzes',
      description: 'Multiple question types with auto-grading'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Learn on any device, anywhere'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Access your materials from any device'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for smooth learning experience'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#597592] to-transparent opacity-20"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#597592]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#b2c1d3]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">LearnHub?</span>
          </h2>
          <p className="text-lg text-[#b2c1d3]/70 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven learning methodologies 
            to deliver an unparalleled educational experience.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift group cursor-pointer transform transition-all duration-300 hover:border-[#597592]/40"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-[#020408]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#b2c1d3] transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-[#b2c1d3]/70 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 pt-4 border-t border-[#597592]/20">
                <div className="flex items-center text-[#597592] text-sm">
                  <span className="w-2 h-2 bg-current rounded-full mr-2"></span>
                  Learn more
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Highlights */}
        <div className="gradient-card rounded-3xl p-8 md:p-12 border border-[#597592]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Complete Learning <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Platform</span>
              </h3>
              <p className="text-[#b2c1d3]/70 mb-8 leading-relaxed">
                From interactive lessons and quizzes to discussion forums and certifications, 
                we provide everything you need to succeed in your learning journey.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {platformFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#597592]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-5 h-5 text-[#597592]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                      <p className="text-[#597592] text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 hover-lift text-white font-medium">
                Start Learning Free
              </button>
            </div>

            {/* Right Content - Feature Comparison */}
            <div className="bg-[#020408]/50 rounded-2xl p-6 border border-[#597592]/20">
              <h4 className="text-xl font-semibold text-white mb-6 text-center">
                Platform Comparison
              </h4>
              <div className="space-y-4">
                {[
                  { feature: 'Video Quality Options', learnhub: true, others: false },
                  { feature: 'Real-time Q&A', learnhub: true, others: 'Limited' },
                  { feature: 'Progress Tracking', learnhub: 'Advanced', others: 'Basic' },
                  { feature: 'Certificate Verification', learnhub: true, others: false },
                  { feature: 'Mobile App', learnhub: true, others: true },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
                  >
                    <span className="text-[#b2c1d3] text-sm">{item.feature}</span>
                    <div className="flex items-center space-x-8">
                      <span className="text-white font-medium text-sm">LearnHub</span>
                      <span className="text-[#597592] text-sm">Others</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection