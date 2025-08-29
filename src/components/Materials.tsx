'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Diamond, 
  Shield, 
  Star, 
  Zap,
  Droplets,
  Palette,
  Square,
  Sparkles
} from 'lucide-react'

const Materials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const materials = [
    {
      icon: Diamond,
      title: 'Premium Tiles',
      description: 'High-quality porcelain and ceramic tiles from top manufacturers',
      features: ['Water-resistant', 'Stain-resistant', 'Lifetime warranty', 'Modern designs'],
      brands: ['Porcelanosa', 'Daltile', 'Marazzi'],
      image: '/ChatGPT Image 28 ago 2025, 04_25_59 p.m..png'
    },
    {
      icon: Shield,
      title: 'Waterproofing Systems',
      description: 'Advanced waterproofing solutions to protect your investment',
      features: ['Membrane systems', 'Liquid waterproofing', '10-year warranty', 'Code compliant'],
      brands: ['Schluter', 'RedGard', 'Laticrete'],
      image: '/ChatGPT Image 28 ago 2025, 04_26_06 p.m..png'
    },
    {
      icon: Star,
      title: 'Premium Fixtures',
      description: 'High-end faucets, showers, and bathroom accessories',
      features: ['Lifetime finish', 'WaterSense certified', 'ADA compliant', 'Modern designs'],
      brands: ['Moen', 'Delta', 'Kohler'],
      image: '/ChatGPT Image 28 ago 2025, 04_26_10 p.m..png'
    },
    {
      icon: Zap,
      title: 'Smart Technology',
      description: 'Modern smart features for convenience and luxury',
      features: ['LED mirrors', 'Smart showers', 'Touchless faucets', 'Heated floors'],
      brands: ['Kohler', 'Delta', 'Moen'],
      image: '/ChatGPT Image 28 ago 2025, 04_25_45 p.m..png'
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
    <section id="materials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Premium <span className="text-gradient">Materials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use only the highest quality materials from trusted manufacturers to ensure your bathroom lasts for years
          </p>
        </motion.div>

        {/* Materials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Tools and Materials Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 mb-8"
          >
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <img 
                src="/tools_materials.jpg" 
                alt="Premium Tools and Materials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Tools & Materials</h3>
                <p className="text-lg opacity-90">Professional grade equipment and high-quality materials</p>
              </div>
            </div>
          </motion.div>
          {materials.map((material) => (
            <motion.div
              key={material.title}
              variants={itemVariants}
              className="card p-8 group hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Material Image */}
              <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <material.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                {material.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center">
                {material.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {material.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Top Brands:</h4>
                <div className="flex flex-wrap gap-2">
                  {material.brands.map((brand) => (
                    <span key={brand} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Warranty Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Extended Warranty Coverage
            </h3>
            <p className="text-lg mb-6 opacity-90">
              All our premium materials come with extended warranties for your peace of mind
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10 Years</div>
                <div className="opacity-90">Workmanship Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Lifetime</div>
                <div className="opacity-90">Material Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5 Years</div>
                <div className="opacity-90">Service Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Materials
