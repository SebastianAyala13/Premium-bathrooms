'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react'
import Link from 'next/link'

// Configuración para export estático
export const dynamic = 'error'

const Partners = () => {
  const redirectUrl = 'https://primebathpros.com/home-services-partners/'

  useEffect(() => {
    // Redirección automática después de 3 segundos
    const timer = setTimeout(() => {
      window.location.href = redirectUrl
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Content */}
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Redirect Message */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Redirecting to Our Partners
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              You're being redirected to our comprehensive partners page where you can explore our extensive network of home services partners, including insurance providers, solar consultancy firms, and more.
            </p>

            {/* Loading Animation */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Loader2 className="w-6 h-6 text-primary-600 animate-spin" />
              <span className="text-primary-600 font-medium">Redirecting in 3 seconds...</span>
            </div>

            {/* Manual Redirect Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href={redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>View Our Partners Now</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Our Partner Network Includes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Insurance Providers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Solar Consultancy Firms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Home Improvement Partners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Financial Services</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Partners
