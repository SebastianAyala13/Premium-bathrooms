'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar
} from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@premiumbathrooms.com',
      description: 'Send us a message',
      action: 'Send Email',
      image: '/contact_email.jpg'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Los Angeles, CA',
      description: 'Serving Southern California',
      action: 'View Service Areas',
      image: '/contact_office.jpg'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM',
      description: 'Sat: 9AM-4PM',
      action: 'Schedule Appointment',
      image: '/contact_hours.jpg'
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
    <section id="contact-info" className="section-padding bg-gray-50">
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
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your bathroom transformation? Contact us today for a free consultation
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info.title}
              variants={itemVariants}
              className="card p-6 text-center group hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Contact Image */}
              <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={info.image} 
                  alt={info.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              
              <p className="text-primary-600 font-medium mb-1">
                {info.value}
              </p>
              
              <p className="text-gray-600 text-sm mb-4">
                {info.description}
              </p>
              
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                {info.action}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Contact Form CTA */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Ready for Your <span className="text-gradient">Free Quote</span>?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Fill out our detailed quote form and we will contact you within 24 hours with a personalized estimate for your bathroom remodeling project.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-success-600" />
                </div>
                <span className="text-gray-700">Free consultation included</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-success-600" />
                </div>
                <span className="text-gray-700">Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-success-600" />
                </div>
                <span className="text-gray-700">In-home consultation available</span>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary"
            >
              Get Free Quote
            </button>
          </div>

          {/* Service Areas Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-gray-800">
              Service Areas
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-semibold text-gray-800">Los Angeles County</h5>
                  <p className="text-sm text-gray-600">Beverly Hills, Santa Monica, Venice</p>
                </div>
                <div className="text-primary-600 font-medium">✓ Available</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-semibold text-gray-800">Orange County</h5>
                  <p className="text-sm text-gray-600">Newport Beach, Irvine, Huntington Beach</p>
                </div>
                <div className="text-primary-600 font-medium">✓ Available</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-semibold text-gray-800">San Diego County</h5>
                  <p className="text-sm text-gray-600">La Jolla, Del Mar, Encinitas</p>
                </div>
                <div className="text-primary-600 font-medium">✓ Available</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-semibold text-gray-800">Ventura County</h5>
                  <p className="text-sm text-gray-600">Thousand Oaks, Westlake Village</p>
                </div>
                <div className="text-primary-600 font-medium">✓ Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
