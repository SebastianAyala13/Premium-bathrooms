'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ClipboardCheck, 
  Palette, 
  Hammer, 
  CheckCircle 
} from 'lucide-react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Consultation & Design',
      description: 'Free consultation to understand your vision and create a custom 3D design',
      details: ['Initial consultation', '3D design creation', 'Material selection', 'Final quote'],
      image: '/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png'
    },
    {
      icon: Palette,
      title: 'Planning & Preparation',
      description: 'Detailed planning and preparation of your bathroom transformation',
      details: ['Project timeline', 'Material ordering', 'Permit acquisition', 'Site preparation'],
      image: '/planning_preparation.jpg'
    },
    {
      icon: Hammer,
      title: 'Professional Installation',
      description: 'Expert installation by our certified team with premium materials',
      details: ['Demolition & prep', 'Plumbing & electrical', 'Tile & fixture installation', 'Quality inspection'],
      image: '/installation_professional.jpg'
    },
    {
      icon: CheckCircle,
      title: 'Final Inspection & Handover',
      description: 'Comprehensive final inspection and handover of your new bathroom',
      details: ['Final quality check', 'Warranty registration', 'Care instructions', 'Project completion'],
      image: '/final_inspection.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="process" className="section-padding bg-white">
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
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven 4-step process to ensure your bathroom remodeling project is completed to perfection
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="card p-6 h-full overflow-hidden">
                {/* Step Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 transform -translate-y-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Typical Project Timeline
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Most bathroom remodeling projects are completed within 1-3 weeks
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1-2 Days</div>
                <div className="text-gray-600">Consultation & Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1-2 Weeks</div>
                <div className="text-gray-600">Installation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1 Day</div>
                <div className="text-gray-600">Final Inspection</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
