'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

const Partners = () => {
  const partners = [
    {
      category: 'Tile & Stone Suppliers',
      partners: [
        {
          name: 'Porcelanosa',
          description: 'Premium Spanish tile and bathroom fixtures manufacturer',
          website: 'https://www.porcelanosa.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_59 p.m..png',
          rating: 5
        },
        {
          name: 'Daltile',
          description: 'Leading manufacturer of ceramic tile and natural stone',
          website: 'https://www.daltile.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_57 p.m..png',
          rating: 5
        },
        {
          name: 'Marazzi',
          description: 'Italian tile manufacturer known for quality and design',
          website: 'https://www.marazzi.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_53 p.m..png',
          rating: 5
        }
      ]
    },
    {
      category: 'Plumbing & Fixtures',
      partners: [
        {
          name: 'Kohler',
          description: 'Premium bathroom fixtures and plumbing products',
          website: 'https://www.kohler.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_51 p.m..png',
          rating: 5
        },
        {
          name: 'Delta Faucet',
          description: 'Innovative faucet and shower systems',
          website: 'https://www.deltafaucet.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_48 p.m..png',
          rating: 5
        },
        {
          name: 'Moen',
          description: 'Quality kitchen and bathroom fixtures',
          website: 'https://www.moen.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_45 p.m..png',
          rating: 5
        }
      ]
    },
    {
      category: 'Vanity & Storage',
      partners: [
        {
          name: 'KraftMaid',
          description: 'Custom cabinetry and storage solutions',
          website: 'https://www.kraftmaid.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png',
          rating: 5
        },
        {
          name: 'Merillat',
          description: 'Quality bathroom vanities and cabinets',
          website: 'https://www.merillat.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_25_47 p.m..png',
          rating: 5
        }
      ]
    },
    {
      category: 'Tools & Equipment',
      partners: [
        {
          name: 'Milwaukee Tools',
          description: 'Professional-grade power tools and equipment',
          website: 'https://www.milwaukeetool.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_26_06 p.m..png',
          rating: 5
        },
        {
          name: 'DeWalt',
          description: 'Reliable construction tools and accessories',
          website: 'https://www.dewalt.com',
          logo: '/ChatGPT Image 28 ago 2025, 04_26_10 p.m..png',
          rating: 5
        }
      ]
    }
  ]

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
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Partners</h1>
          <p className="text-gray-600 mb-12 text-lg max-w-3xl">
            We work with the industry's leading manufacturers and suppliers to ensure you receive the highest quality materials and products for your bathroom remodeling project.
          </p>

          <div className="space-y-12">
            {partners.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (partnerIndex * 0.05) }}
                      className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-300"
                    >
                      {/* Partner Logo */}
                      <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10" />
                      </div>

                      {/* Partner Info */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{partner.description}</p>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(partner.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">({partner.rating}.0)</span>
                      </div>

                      {/* Website Link */}
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm font-medium"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why We Choose These Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-white rounded-lg shadow-sm border p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why We Choose These Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  All our partners are industry leaders known for their commitment to quality and durability.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Warranty Coverage</h3>
                <p className="text-gray-600">
                  Partner products come with comprehensive warranties to protect your investment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Design Excellence</h3>
                <p className="text-gray-600">
                  We select partners who offer innovative designs that enhance your bathroom's aesthetic.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Reliable Support</h3>
                <p className="text-gray-600">
                  Our partners provide excellent customer support and technical assistance when needed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact for Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-gradient-primary rounded-lg p-8 text-white text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Interested in Becoming a Partner?</h2>
            <p className="mb-6 text-lg">
              We're always looking to expand our network of quality suppliers and manufacturers.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Contact Us</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Partners
