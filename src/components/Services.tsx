'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Bath, 
  Droplets, 
  Palette, 
  Square, 
  Wrench, 
  Shield,
  Clock,
  Award
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

     const services = [
     {
       icon: Bath,
       title: 'Complete Bathroom Remodeling',
       description: 'Total transformation of your bathroom with custom design and premium materials.',
       features: ['3D Design', 'Premium Materials', 'Complete Installation'],
       price: 'From $12,900',
       image: '/ChatGPT Image 28 ago 2025, 04_25_47 p.m..png'
     },
     {
       icon: Droplets,
       title: 'Tub-to-Shower Conversion',
       description: 'Convert your bathtub into a modern and accessible walk-in shower.',
       features: ['Walk-in Shower', 'Tempered Glass', 'Accessibility Features'],
       price: 'From $7,900',
       image: '/ChatGPT Image 28 ago 2025, 04_25_51 p.m..png'
     },
     {
       icon: Palette,
       title: 'Vanity & Fixture Updates',
       description: 'Renew your vanity and fixtures with modern and functional options.',
       features: ['Floating Vanity', 'LED Mirror', 'Smart Storage'],
       price: 'From $3,900',
       image: '/ChatGPT Image 28 ago 2025, 04_25_48 p.m..png'
     },
     {
       icon: Square,
       title: 'Tile & Flooring Replacement',
       description: 'Update your bathroom look with modern and durable tiles.',
       features: ['Premium Tiles', 'Professional Installation', 'Perfect Grout'],
       price: 'From $5,900',
       image: '/ChatGPT Image 28 ago 2025, 04_25_53 p.m..png'
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
         <section id="services" className="section-padding bg-gray-50">
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
             Our <span className="text-gradient">Services</span>
           </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             We offer comprehensive bathroom remodeling solutions to transform your space into a luxury retreat
           </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card p-6 text-center group hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-500 mb-4 space-y-1">
                {service.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <div className="text-lg font-bold text-primary-600">{service.price}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
