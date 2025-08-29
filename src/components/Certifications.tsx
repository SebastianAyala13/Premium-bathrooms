'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Star,
  FileText,
  Users,
  Clock,
  Send
} from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const certifications = [
    {
      icon: Award,
      title: 'Licensed & Bonded',
      description: 'Fully licensed contractor with comprehensive bonding and insurance coverage',
      details: ['State Contractor License', '$2M General Liability', 'Workers Compensation', 'Property Damage Coverage'],
      image: '/certifications_licenses.jpg'
    },
    {
      icon: FileText,
      title: 'Professional Certifications',
      description: 'Our team holds industry-recognized certifications and training',
      details: ['Certified Tile Installer', 'Waterproofing Specialist', 'ADA Compliance Expert', 'Green Building Certified'],
      image: '/certifications_professional.jpg'
    },
    {
      icon: Star,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in bathroom remodeling and customer service',
      details: ['Best of Houzz 2023', 'Angie\'s List Super Service', 'BBB A+ Rating', '5-Star Google Reviews'],
      image: '/certifications_awards.jpg'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with specialized training and expertise',
      details: ['10+ Years Experience', 'Specialized Training', 'Background Checked', 'Drug Tested'],
      image: '/certifications_expert_team.jpg'
    }
  ]

  const warranties = [
    {
      icon: Shield,
      title: '10-Year Workmanship Warranty',
      description: 'Comprehensive warranty covering all installation work',
      coverage: ['Tile installation', 'Plumbing work', 'Electrical work', 'Waterproofing systems']
    },
    {
      icon: CheckCircle,
      title: 'Lifetime Material Warranty',
      description: 'Extended warranty on all premium materials used',
      coverage: ['Porcelain tiles', 'Premium fixtures', 'Waterproofing membranes', 'Grout systems']
    },
    {
      icon: Clock,
      title: '5-Year Service Support',
      description: 'Ongoing support and maintenance services',
      coverage: ['Annual inspections', 'Minor repairs', 'Technical support', 'Emergency service']
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
    <section id="certifications" className="section-padding bg-white">
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
            <span className="text-gradient">Certifications</span> & Guarantees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your peace of mind is our priority. We are fully licensed, insured, and backed by comprehensive warranties
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="card p-8 group hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Certification Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                {cert.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center">
                {cert.description}
              </p>
              
              <ul className="space-y-3">
                {cert.details.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Warranties Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Comprehensive <span className="text-gradient">Warranty Coverage</span>
            </h3>
            <p className="text-xl text-gray-600">
              We stand behind our work with industry-leading warranty protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warranties.map((warranty, index) => (
              <motion.div
                key={warranty.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <warranty.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800 text-center">{warranty.title}</h4>
                <p className="text-gray-600 mb-4 text-center text-sm">{warranty.description}</p>
                <ul className="space-y-2">
                  {warranty.coverage.map((item) => (
                    <li key={item} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a free consultation and detailed quote for your bathroom remodeling project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Get Free Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
