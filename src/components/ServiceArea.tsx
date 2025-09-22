'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MapPin, 
  Car, 
  Clock, 
  Send,
  CheckCircle,
  Star
} from 'lucide-react'

const ServiceArea = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const serviceAreas = [
    {
      city: 'Los Angeles',
      county: 'Los Angeles County',
      neighborhoods: ['Beverly Hills', 'Santa Monica', 'Venice', 'Marina del Rey', 'Culver City', 'West Hollywood'],
      travelTime: '15-45 minutes',
      serviceLevel: 'Premium',
      image: '/ChatGPT Image 28 ago 2025, 04_25_47 p.m..png'
    },
    {
      city: 'Orange County',
      county: 'Orange County',
      neighborhoods: ['Newport Beach', 'Irvine', 'Huntington Beach', 'Laguna Beach', 'Costa Mesa', 'Fountain Valley'],
      travelTime: '30-60 minutes',
      serviceLevel: 'Premium',
      image: '/orange_county.jpg'
    },
    {
      city: 'San Diego',
      county: 'San Diego County',
      neighborhoods: ['La Jolla', 'Del Mar', 'Encinitas', 'Carlsbad', 'Solana Beach', 'Rancho Santa Fe'],
      travelTime: '45-90 minutes',
      serviceLevel: 'Premium',
      image: '/san_diego_county.jpg'
    },
    {
      city: 'Ventura County',
      county: 'Ventura County',
      neighborhoods: ['Thousand Oaks', 'Westlake Village', 'Camarillo', 'Oxnard', 'Ventura', 'Ojai'],
      travelTime: '30-75 minutes',
      serviceLevel: 'Premium',
      image: '/ventura_county.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="service-area" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Service Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve the greater Southern California area with premium bathroom remodeling services
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {serviceAreas.map((area) => (
            <motion.div
              key={area.city}
              variants={itemVariants}
              className="card p-8 group hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Area Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={area.image} 
                  alt={`${area.city} County`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{area.city}</h3>
                  <p className="text-gray-600">{area.county}</p>
                </div>
                <div className="flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 mr-1" />
                  {area.serviceLevel}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Popular Neighborhoods:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((neighborhood) => (
                    <span key={neighborhood} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Car className="w-4 h-4 mr-2" />
                  Travel: {area.travelTime}
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary-600" />
                  Service Available
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coverage Map Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-gradient">Full Coverage</span> in Southern California
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We serve the entire greater Los Angeles area and surrounding counties, bringing our premium bathroom remodeling services to your doorstep.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                Free in-home consultation and estimate
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                Licensed and insured for all service areas
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                Local building code compliance
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                Emergency service available 24/7
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl p-8 text-white text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h4 className="text-2xl font-bold mb-4">Not Sure If We Serve Your Area?</h4>
            <p className="text-lg mb-6 opacity-90">
              Contact us and we will let you know if we can help with your bathroom remodeling project
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#form-section')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-secondary w-full"
            >
              <Send className="w-5 h-5 mr-2" />
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceArea
