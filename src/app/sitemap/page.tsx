'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const Sitemap = () => {
  const sitemapData = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/', description: 'Premium bathroom remodeling services in Southern California' },
        { name: 'Services', href: '/#services', description: 'Complete bathroom remodeling and renovation services' },
        { name: 'Projects', href: '/#gallery', description: 'View our bathroom remodeling portfolio and before/after photos' },
        { name: 'Contact', href: '/#contact', description: 'Get in touch for a free consultation and quote' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Complete Remodeling', href: '/#services', description: 'Full bathroom transformation services' },
        { name: 'Tub-to-Shower Conversion', href: '/#services', description: 'Safe and modern shower conversions' },
        { name: 'Vanity Update', href: '/#services', description: 'Custom vanity installation and updates' },
        { name: 'Tile Replacement', href: '/#services', description: 'Professional tile installation and repair' },
        { name: 'Custom Design', href: '/#services', description: 'Personalized bathroom design services' },
      ]
    },
    {
      title: 'Service Areas',
      links: [
        { name: 'Los Angeles County', href: '/#service-areas', description: 'Beverly Hills, Santa Monica, Venice, Marina del Rey' },
        { name: 'Orange County', href: '/#service-areas', description: 'Newport Beach, Irvine, Huntington Beach, Laguna Beach' },
        { name: 'San Diego County', href: '/#service-areas', description: 'La Jolla, Del Mar, Encinitas, Carlsbad' },
        { name: 'Ventura County', href: '/#service-areas', description: 'Thousand Oaks, Westlake Village, Camarillo' },
      ]
    },
    {
      title: 'Company Information',
      links: [
        { name: 'About Us', href: '/#about', description: 'Learn about Premium Bathrooms and our team' },
        { name: 'Certifications', href: '/#certifications', description: 'Licenses, certifications, and insurance information' },
        { name: 'Process', href: '/#process', description: 'Our 4-step bathroom remodeling process' },
        { name: 'Materials', href: '/#materials', description: 'Premium materials and brands we use' },
        { name: 'Testimonials', href: '/#testimonials', description: 'Customer reviews and testimonials' },
        { name: 'FAQ', href: '/#faq', description: 'Frequently asked questions about our services' },
      ]
    },
    {
      title: 'Legal Pages',
      links: [
        { name: 'Privacy Policy', href: 'privacy-policy', description: 'How we collect and protect your information' },
        { name: 'Terms & Conditions', href: '/terms-conditions', description: 'Terms of service and project agreements' },
        { name: 'Partners', href: '/partners', description: 'Our trusted partners and suppliers' },
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-gray-600 mb-12 text-lg">
            Navigate through all pages and sections of Premium Bathrooms website
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sitemapData.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-white rounded-lg shadow-sm border p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={link.name} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <Link 
                        href={link.href}
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-white rounded-lg shadow-sm border p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                 <p className="text-gray-600">info@premiumbathrooms.com</p>
               </div>
               <div>
                 <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                 <p className="text-gray-600">Los Angeles, CA<br />Serving Southern California</p>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Sitemap
