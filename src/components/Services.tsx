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
       title: 'Complete Remodeling',
       description: 'Total transformation of your bathroom with custom design and premium materials.',
       features: ['3D Design', 'Premium Materials', 'Complete Installation'],
       price: 'From $12,900'
     },
     {
       icon: Droplets,
       title: 'Tub-to-Shower Conversion',
       description: 'Convert your bathtub into a modern and accessible shower.',
       features: ['Walk-in Shower', 'Tempered Glass', 'Accessibility'],
       price: 'From $7,900'
     },
     {
       icon: Palette,
       title: 'Vanity Update',
       description: 'Renew your vanity with modern and functional options.',
       features: ['Floating Vanity', 'LED Mirror', 'Storage'],
       price: 'From $3,900'
     },
     {
       icon: Square,
       title: 'Tile Replacement',
       description: 'Update your bathroom look with modern and durable tiles.',
       features: ['Premium Tiles', 'Professional Installation', 'Perfect Grout'],
       price: 'From $5,900'
     }
   ]

     const benefits = [
     {
       icon: Shield,
       title: 'Licensed & Insured',
       description: 'Guaranteed work with complete licenses and insurance'
     },
     {
       icon: Clock,
       title: 'Fast Delivery',
       description: 'Projects completed in 1-3 weeks'
     },
     {
       icon: Award,
       title: 'Premium Warranty',
       description: 'Extended warranty on materials and workmanship'
     },
     {
       icon: Wrench,
       title: 'Licensed Professionals',
       description: 'Certified team with 10+ years of experience'
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
             We offer complete solutions to transform your bathroom into the space of your dreams
           </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card p-6 text-center group"
            >
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

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
                     <div className="text-center mb-12">
             <h3 className="text-3xl font-bold mb-4">
               Why choose <span className="text-gradient">Premium Bathrooms</span>?
             </h3>
             <p className="text-xl text-gray-600">
               We are your best choice for bathroom remodeling
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
