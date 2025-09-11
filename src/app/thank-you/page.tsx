'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Phone, Mail, ArrowLeft, Star, Gift, Shield, Award, Users } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

// Configuración para export estático
export const dynamic = 'error'

const ThankYou = () => {
  // Tracking para conversiones
  useEffect(() => {
    // Google Analytics / GTM conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': 1.0,
        'currency': 'USD'
      })
    }

    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }

    // DataLayer push para GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'form_submission',
        'form_type': 'quote_request',
        'page_location': window.location.href
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              🎉 ¡Thank You!
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your quote request has been successfully submitted! Our team of bathroom remodeling experts will contact you within 24 hours to discuss your dream bathroom project.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-gray-800 font-semibold">
                ✅ Your request has been received and is being processed
              </p>
            </div>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-12 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Clock className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Quick Response</h3>
                <p className="text-lg text-gray-600 leading-relaxed">We'll contact you within 24 hours to schedule your free consultation and discuss your project details.</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Free Consultation</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Our expert will visit your home to assess your bathroom, discuss your vision, and provide design recommendations.</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Custom Quote</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Receive a detailed, personalized quote for your bathroom transformation with transparent pricing.</p>
              </div>
            </div>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-12 text-white mb-16 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">🎉 Special Offer for You!</h2>
              <p className="text-xl md:text-2xl mb-8">
                As a thank you for choosing Premium Bathrooms, you'll receive:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="bg-white bg-opacity-25 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Free Design Consultation</h3>
                <p className="text-lg">Worth $500 - Completely FREE</p>
                <p className="text-sm mt-2 opacity-90">Professional design consultation included</p>
              </div>
              <div className="bg-white bg-opacity-25 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3">10% Off Your Project</h3>
                <p className="text-lg">Limited time offer - Save thousands!</p>
                <p className="text-sm mt-2 opacity-90">Valid for 30 days from today</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold">
                ⏰ This offer expires in 30 days - Don't miss out!
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-12 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Need Immediate Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center space-x-4 p-6 bg-blue-50 rounded-2xl">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-xl">Call Us Now</p>
                  <p className="text-blue-600 font-semibold text-lg">(555) 123-4567</p>
                  <p className="text-gray-600 text-sm">Available 7 days a week</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 p-6 bg-green-50 rounded-2xl">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-xl">Email Us</p>
                  <p className="text-green-600 font-semibold text-lg">info@premiumbathrooms.com</p>
                  <p className="text-gray-600 text-sm">Response within 2 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"Amazing work! They transformed our outdated bathroom into a modern masterpiece. Professional and on time."</p>
                <p className="font-semibold text-gray-900">- Sarah M.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"Excellent service from start to finish. The team was professional, clean, and delivered exactly what we wanted."</p>
                <p className="font-semibold text-gray-900">- John D.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"Best bathroom remodeling company in the area. Fair pricing and outstanding quality. Highly recommended!"</p>
                <p className="font-semibold text-gray-900">- Maria L.</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <ArrowLeft className="w-6 h-6 mr-3" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-blue-600 font-bold text-xl rounded-2xl border-3 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>View Our Services</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Premium Bathrooms?</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Licensed & Insured</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">500+ Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <p className="font-semibold text-gray-900">5-Year Warranty</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                </div>
              </div>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="ml-3 text-gray-700 font-semibold text-lg">4.9/5 Rating</span>
              </div>
              <p className="text-gray-600 text-lg">Trusted by 500+ satisfied customers across Los Angeles</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ThankYou
