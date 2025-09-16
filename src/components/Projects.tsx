'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Star,
  Clock,
  DollarSign,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Eye,
  Calendar
} from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Modern Master Bathroom Remodeling',
      location: 'Beverly Hills, CA',
      duration: '3 weeks',
      budget: '$25,000',
      rating: 5,
      description: 'Complete transformation of a master bathroom with luxury fixtures, custom tile work, and smart technology integration.',
      features: ['Walk-in shower', 'Double vanity', 'Heated floors', 'Smart mirrors', 'Custom lighting'],
      beforeAfter: {
        before: '/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png',
        after: '/ChatGPT Image 28 ago 2025, 04_25_47 p.m..png'
      },
      images: [
        '/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_47 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_45 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_48 p.m..png'
      ],
      category: 'Complete Remodeling'
    },
    {
      id: 2,
      title: 'Tub-to-Shower Conversion Project',
      location: 'Santa Monica, CA',
      duration: '1 week',
      budget: '$8,500',
      rating: 5,
      description: 'Converted traditional bathtub into a modern walk-in shower with safety features and elegant design.',
      features: ['Walk-in shower', 'Safety bars', 'Non-slip floor', 'Glass enclosure', 'Rain shower head'],
      beforeAfter: {
        before: '/ChatGPT Image 28 ago 2025, 04_25_51 p.m..png',
        after: '/ChatGPT Image 28 ago 2025, 04_25_53 p.m..png'
      },
      images: [
        '/ChatGPT Image 28 ago 2025, 04_25_51 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_53 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_57 p.m..png'
      ],
      category: 'Tub-to-Shower'
    },
    {
      id: 3,
      title: 'Luxury Guest Bathroom Renovation',
      location: 'Newport Beach, CA',
      duration: '2 weeks',
      budget: '$18,000',
      rating: 5,
      description: 'Elegant guest bathroom renovation featuring premium materials and sophisticated design elements.',
      features: ['Floating vanity', 'LED mirror', 'Premium tiles', 'Custom lighting', 'Heated towel rack'],
      beforeAfter: {
        before: '/ChatGPT Image 28 ago 2025, 04_25_59 p.m..png',
        after: '/ChatGPT Image 28 ago 2025, 04_26_06 p.m..png'
      },
      images: [
        '/ChatGPT Image 28 ago 2025, 04_25_59 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_26_06 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_26_10 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_45 p.m..png'
      ],
      category: 'Complete Remodeling'
    },
    {
      id: 4,
      title: 'Contemporary Powder Room Update',
      location: 'Irvine, CA',
      duration: '1 week',
      budget: '$6,500',
      rating: 5,
      description: 'Modern powder room update with sleek fixtures and contemporary design elements.',
      features: ['Wall-mounted sink', 'Frameless mirror', 'Modern fixtures', 'Accent lighting', 'Premium paint'],
      beforeAfter: {
        before: '/ChatGPT Image 28 ago 2025, 04_25_48 p.m..png',
        after: '/ChatGPT Image 28 ago 2025, 04_25_57 p.m..png'
      },
      images: [
        '/ChatGPT Image 28 ago 2025, 04_25_48 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_57 p.m..png'
      ],
      category: 'Vanity Update'
    },
    {
      id: 5,
      title: 'Spa-Inspired Master Suite Transformation',
      location: 'La Jolla, CA',
      duration: '4 weeks',
      budget: '$35,000',
      rating: 5,
      description: 'Luxury master bathroom transformation creating a spa-like retreat with premium amenities.',
      features: ['Freestanding tub', 'Steam shower', 'Dual vanities', 'Heated floors', 'Smart controls'],
      beforeAfter: {
        before: '/ChatGPT Image 28 ago 2025, 04_26_10 p.m..png',
        after: '/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png'
      },
      images: [
        '/ChatGPT Image 28 ago 2025, 04_26_10 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_47 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_45 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_48 p.m..png'
      ],
      category: 'Complete Remodeling'
    },
    {
      id: 6,
      title: 'Accessible Bathroom Design Project',
      location: 'Thousand Oaks, CA',
      duration: '2 weeks',
      budget: '$12,000',
      rating: 5,
      description: 'ADA-compliant bathroom renovation with accessibility features and modern design.',
      features: ['Roll-in shower', 'Grab bars', 'Wide doorways', 'Accessible sink', 'Non-slip surfaces'],
      beforeAfter: {
        before: '/ChatGPT Image 28 ago 2025, 04_25_51 p.m..png',
        after: '/ChatGPT Image 28 ago 2025, 04_25_53 p.m..png'
      },
      images: [
        '/ChatGPT Image 28 ago 2025, 04_25_51 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_53 p.m..png',
        '/ChatGPT Image 28 ago 2025, 04_25_57 p.m..png'
      ],
      category: 'Complete Remodeling'
    }
  ]

  const categories = ['All', 'Complete Remodeling', 'Tub-to-Shower', 'Vanity Update', 'Tile Replacement']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject]
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject]
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  const openProject = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

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
    <section id="projects" className="section-padding bg-white">
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
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed bathroom remodeling projects across Southern California. Each project showcases our commitment to quality, design excellence, and customer satisfaction.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => openProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center text-primary-600 mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-xs text-gray-600">{project.duration}</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-primary-600 mb-1">
                      <DollarSign className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-xs text-gray-600">{project.budget}</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-primary-600 mb-1">
                      <Star className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-xs text-gray-600">{project.rating}/5</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject !== null && projects[selectedProject] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject !== null && projects[selectedProject] && (
                <div>
                  {/* Modal Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {projects[selectedProject].title}
                      </h3>
                      <button
                        onClick={closeProject}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6">
                    {/* Image Gallery */}
                    <div className="relative mb-6">
                      <img 
                        src={projects[selectedProject].images[currentImageIndex]} 
                        alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {projects[selectedProject].images.length}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Project Overview</h4>
                        <p className="text-gray-600 mb-6">
                          {projects[selectedProject].description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-primary-600 mr-2" />
                            <span className="text-sm text-gray-600">{projects[selectedProject].location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-primary-600 mr-2" />
                            <span className="text-sm text-gray-600">{projects[selectedProject].duration}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 text-primary-600 mr-2" />
                            <span className="text-sm text-gray-600">{projects[selectedProject].budget}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-primary-600 mr-2" />
                            <span className="text-sm text-gray-600">{projects[selectedProject].rating}/5 Rating</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Features Included</h4>
                        <ul className="space-y-2">
                          {projects[selectedProject].features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let us transform your bathroom into the space of your dreams
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#lead-form')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-secondary"
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
