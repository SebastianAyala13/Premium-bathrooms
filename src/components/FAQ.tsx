'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  ChevronDown,
  Clock,
  DollarSign,
  Shield,
  CheckCircle,
  Send
} from 'lucide-react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long does a typical bathroom remodeling project take?',
      answer: 'Most bathroom remodeling projects take 1-3 weeks to complete. The timeline depends on the scope of work, size of the bathroom, and complexity of the design. We will provide you with a detailed timeline during the consultation phase.',
      category: 'Timeline'
    },
    {
      question: 'What is included in your bathroom remodeling services?',
      answer: 'Our comprehensive service includes design consultation, 3D rendering, demolition, plumbing and electrical work, tile installation, fixture installation, waterproofing, and final inspection. We handle everything from start to finish.',
      category: 'Services'
    },
    {
      question: 'Do you provide free estimates and consultations?',
      answer: 'Yes! We offer free in-home consultations and detailed estimates. Our design specialist will visit your home, discuss your vision, take measurements, and provide you with a comprehensive quote with no obligation.',
      category: 'Pricing'
    },
    {
      question: 'What types of warranties do you offer?',
      answer: 'We provide a 10-year workmanship warranty, lifetime warranty on premium materials, and 5-year service support. All warranties are fully transferable and backed by our company.',
      category: 'Warranty'
    },
    {
      question: 'Can you work with my existing bathroom layout?',
      answer: 'Absolutely! We can work with your existing layout or create a completely new design. We will discuss your preferences and constraints during the consultation to find the best solution for your space.',
      category: 'Design'
    },
    {
      question: 'Do you handle permits and inspections?',
      answer: 'Yes, we handle all necessary permits and coordinate with local building inspectors. Our team is familiar with local building codes and will ensure your project meets all requirements.',
      category: 'Permits'
    },
    {
      question: 'What payment options do you offer?',
      answer: 'We offer flexible payment options including financing through our partners. Typically, we require a deposit to start the project, with progress payments throughout the construction phase.',
      category: 'Pricing'
    },
    {
      question: 'How do you ensure quality during construction?',
      answer: 'We have strict quality control processes including daily inspections, progress photos, and regular communication. Our experienced team follows industry best practices and uses premium materials.',
      category: 'Quality'
    },
    {
      question: 'Can you match existing tile or fixtures?',
      answer: 'We can often match existing materials or find very close alternatives. If exact matches are not available, we can help you choose complementary materials that work well together.',
      category: 'Materials'
    },
    {
      question: 'What happens if there are unexpected issues during construction?',
      answer: 'We are prepared for unexpected issues and will communicate immediately if we encounter any problems. We will provide solutions and keep you informed throughout the process.',
      category: 'Process'
    }
  ]

  const quickFacts = [
    {
      icon: Clock,
      title: 'Average Timeline',
      value: '1-3 Weeks',
      description: 'From start to finish'
    },
    {
      icon: DollarSign,
      title: 'Starting Price',
      value: '$3,900',
      description: 'For basic updates'
    },
    {
      icon: Shield,
      title: 'Warranty',
      value: '10 Years',
      description: 'Workmanship guarantee'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Rate',
      value: '100%',
      description: 'Customer satisfaction'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="faq" className="section-padding bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/faq_question_mark.jpg" 
          alt="FAQ Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our bathroom remodeling services
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <fact.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">{fact.value}</div>
              <div className="font-semibold text-gray-800 mb-1">{fact.title}</div>
              <div className="text-sm text-gray-600">{fact.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between group"
              >
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mr-3">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help! Contact us for personalized answers to your specific questions.
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
      </div>
    </section>
  )
}

export default FAQ
