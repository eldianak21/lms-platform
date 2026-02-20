'use client'

import { useState } from 'react'
import { 
  Mail, Phone, MapPin, MessageSquare, 
  Send, Clock, CheckCircle, User,
  Facebook, Twitter, Instagram, Linkedin,
  Globe, Shield, Headphones
} from 'lucide-react'
import './style.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'support@learnhub.com', action: 'mailto:support@learnhub.com' },
    { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', action: 'tel:+15551234567' },
    { icon: MapPin, title: 'Location', value: '123 Education Street, Knowledge City', action: '#' },
    { icon: Clock, title: 'Support Hours', value: '24/7 Available', action: '#' }
  ]

  const supportTypes = [
    { title: 'Technical Support', description: 'Get help with platform issues', icon: Headphones },
    { title: 'Billing Questions', description: 'Payment and subscription help', icon: Shield },
    { title: 'Course Inquiries', description: 'Course content and access', icon: Globe },
    { title: 'General Questions', description: 'Any other questions', icon: MessageSquare }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <div className="gradient-card rounded-2xl p-8 md:p-12 border border-[#597592]/20 mb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-[#597592] to-[#b2c1d3] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-[#b2c1d3]/70 mb-8">
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white font-medium flex items-center">
              <Headphones className="w-5 h-5 mr-2" />
              Live Chat
            </button>
            <button className="px-6 py-3 border-2 border-[#597592]/30 rounded-lg hover:border-[#597592] transition-all duration-200 text-white font-medium">
              Schedule Call
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="gradient-card rounded-2xl p-8 border border-[#597592]/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Message Sent Successfully!</h3>
                <p className="text-[#b2c1d3]/70 mb-6">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border-2 border-[#597592]/30 rounded-lg hover:border-[#597592] transition-all duration-200 text-white font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-[#597592]" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-[#597592]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="course">Course Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#b2c1d3] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#020408] border border-[#597592]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#597592] focus:ring-1 focus:ring-[#597592] transition-all duration-200"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-white font-medium flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="gradient-card rounded-2xl p-6 border border-[#597592]/20 hover-lift transition-all duration-300 block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#597592]/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-[#597592]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#597592] font-medium">{info.title}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Support Types */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Support Categories</h3>
            <div className="space-y-3">
              {supportTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#597592]/10 flex items-center justify-center">
                    <type.icon className="w-5 h-5 text-[#597592]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{type.title}</div>
                    <div className="text-xs text-[#597592]">{type.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="gradient-card rounded-2xl p-6 border border-[#597592]/20">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: 'Facebook', color: 'from-blue-600 to-blue-500' },
                { icon: Twitter, label: 'Twitter', color: 'from-sky-500 to-sky-400' },
                { icon: Instagram, label: 'Instagram', color: 'from-pink-600 to-pink-500' },
                { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-700 to-blue-600' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex-1 p-3 rounded-lg bg-gradient-to-br ${social.color} text-white flex items-center justify-center hover:opacity-90 transition-opacity duration-200`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="gradient-card rounded-2xl p-8 border border-[#597592]/20 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'How quickly will I get a response?',
              a: 'We typically respond within 24 hours for general inquiries and within 2 hours for urgent technical issues.'
            },
            {
              q: 'Do you offer phone support?',
              a: 'Yes, we offer phone support during business hours (9 AM - 6 PM EST). You can also schedule a callback.'
            },
            {
              q: 'Can I get help with course content?',
              a: 'Absolutely! Our instructors and teaching assistants are available to help with course-related questions.'
            },
            {
              q: 'What if I have billing issues?',
              a: 'Our billing team can help with payment issues, refunds, and subscription management.'
            },
            {
              q: 'Are you available on weekends?',
              a: 'Yes, we offer 24/7 support for technical issues. Other inquiries may have slightly longer response times on weekends.'
            },
            {
              q: 'How can I suggest new features?',
              a: 'We welcome feature suggestions! You can submit them through our feedback form or contact our product team.'
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200"
            >
              <h3 className="font-medium text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#b2c1d3]/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map & Location */}
      <div className="gradient-card rounded-2xl p-8 border border-[#597592]/20">
        <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-[#597592] to-[#b2c1d3] opacity-20 mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#597592] mx-auto mb-4" />
                <div className="text-[#597592] font-medium">Interactive Map Here</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#597592]" />
                <div>
                  <div className="text-sm text-[#597592]">Headquarters</div>
                  <div className="text-white font-medium">123 Education Street, Knowledge City</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#597592]" />
                <div>
                  <div className="text-sm text-[#597592]">Visit Hours</div>
                  <div className="text-white font-medium">Monday - Friday: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Regional Offices</h3>
            <div className="space-y-4">
              {[
                { city: 'New York', address: '456 Tech Avenue, NY 10001', phone: '+1 (555) 234-5678' },
                { city: 'London', address: '789 Learning Lane, UK', phone: '+44 20 7946 0958' },
                { city: 'Singapore', address: '101 Innovation Road', phone: '+65 6123 4567' },
                { city: 'Sydney', address: '202 Education Drive', phone: '+61 2 9876 5432' }
              ].map((office, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#020408]/30 hover:bg-[#020408]/50 transition-colors duration-200">
                  <div className="font-medium text-white mb-2">{office.city}</div>
                  <div className="text-sm text-[#b2c1d3] mb-1">{office.address}</div>
                  <div className="text-sm text-[#597592]">{office.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}