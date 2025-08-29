'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  DollarSign, 
  CheckCircle,
  Send,
  AlertCircle
} from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  isOwner: z.string().min(1, 'Please select if you are the property owner'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const services = [
    'Complete Remodeling',
    'Tub-to-Shower Conversion',
    'Vanity Update',
    'Tile Replacement',
    'Other'
  ]

  const budgets = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $15,000',
    '$15,000 - $25,000',
    'More than $25,000'
  ]

  const timelines = [
    'As soon as possible',
    'In 1-2 weeks',
    'In 1 month',
    'In 2-3 months',
    'More than 3 months'
  ]

  const onSubmit = async (data: FormData) => {
    // Verificar si es propietario
    if (data.isOwner === 'no') {
      alert('We apologize, but we can only provide services to property owners. Please contact your landlord or property manager for bathroom remodeling services.')
      return
    }

    setIsSubmitting(true)
    
    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    
    // Aquí iría la lógica real de envío
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Resetear el estado después de 5 segundos
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const FormContent = () => (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-8">
        <div className="bg-gradient-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8" />
        </div>
                           <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Request Your Free Quote
          </h3>
        <p className="text-gray-600 mb-4">
            Fill out the form and our team will contact you within 24 hours
          </p>
        <div className="bg-success-50 border border-success-200 rounded-lg p-3">
          <p className="text-success-700 text-sm font-medium">
            ⏰ Limited Time: Free Design Consultation + 10% Off
          </p>
        </div>
      </div>

      <div className="space-y-6">
                 {/* Name */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             Full Name *
           </label>
           <div className="relative">
             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
             <input
               {...register('name')}
               type="text"
               className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                 errors.name ? 'border-red-500' : 'border-gray-300'
               }`}
               placeholder="Your full name"
             />
           </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name.message}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register('email')}
              type="email"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
                             placeholder="your@email.com"
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email.message}
            </motion.p>
          )}
        </div>

                 {/* Phone */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             Phone *
           </label>
           <div className="relative">
             <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
             <input
               {...register('phone')}
               type="tel"
               className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                 errors.phone ? 'border-red-500' : 'border-gray-300'
               }`}
               placeholder="(555) 123-4567"
             />
           </div>
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phone.message}
            </motion.p>
          )}
        </div>

        {/* Property Owner */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Are you the property owner? *
          </label>
          <div className="relative">
            <select
              {...register('isOwner')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                errors.isOwner ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select an option</option>
              <option value="yes">Yes, I am the owner</option>
              <option value="no">No, I am a tenant</option>
            </select>
          </div>
          {errors.isOwner && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.isOwner.message}
            </motion.p>
          )}
        </div>

        {/* Service */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             Service of Interest *
           </label>
           <div className="relative">
             <select
               {...register('service')}
               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                 errors.service ? 'border-red-500' : 'border-gray-300'
               }`}
             >
               <option value="">Select a service</option>
               {services.map((service) => (
                 <option key={service} value={service}>
                   {service}
                 </option>
               ))}
             </select>
           </div>
          {errors.service && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.service.message}
            </motion.p>
          )}
        </div>

                 {/* Budget */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             Budget Range *
           </label>
           <div className="relative">
             <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
             <select
               {...register('budget')}
               className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                 errors.budget ? 'border-red-500' : 'border-gray-300'
               }`}
             >
               <option value="">Select a range</option>
               {budgets.map((budget) => (
                 <option key={budget} value={budget}>
                   {budget}
                 </option>
               ))}
             </select>
           </div>
          {errors.budget && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.budget.message}
            </motion.p>
          )}
        </div>

                 {/* Timeline */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             When do you need the service? *
           </label>
           <div className="relative">
             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
             <select
               {...register('timeline')}
               className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                 errors.timeline ? 'border-red-500' : 'border-gray-300'
               }`}
             >
               <option value="">Select a timeline</option>
               {timelines.map((timeline) => (
                 <option key={timeline} value={timeline}>
                   {timeline}
                 </option>
               ))}
             </select>
           </div>
          {errors.timeline && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.timeline.message}
            </motion.p>
          )}
        </div>

                 {/* Message */}
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             Additional Message
           </label>
           <textarea
             {...register('message')}
             rows={3}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
             placeholder="Tell us more about your project..."
           />
         </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-primary text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
                     {isSubmitting ? (
             <>
               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
               <span>Sending...</span>
             </>
           ) : (
             <>
               <Send className="w-5 h-5" />
              <span>Get My Free Quote Now</span>
             </>
           )}
        </motion.button>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            🔒 Your information is secure and will never be shared
          </p>
        </div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 p-4 bg-success-50 border border-success-200 rounded-lg"
          >
            <div className="flex items-center space-x-2 text-success-700">
              <CheckCircle className="w-5 h-5" />
                             <span className="font-medium">
                 Thank you! We will contact you within 24 hours.
               </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

             <p className="text-xs text-gray-500 mt-4 text-center">
         By submitting this form, you agree to receive communications about our services.
       </p>
    </motion.form>
  )

  return (
    <>
             {/* Main Form Section */}
       <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="/leadform_form.jpg" 
                  alt="Contact Form Background"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative z-10">
                             <h2 className="text-4xl md:text-5xl font-bold mb-6">
                 Ready to transform your <span className="text-gradient">bathroom</span>?
               </h2>
               <p className="text-xl text-gray-600 mb-8">
                 Request your free quote with no obligation. Our team of experts will help you create the bathroom of your dreams.
               </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                  </div>
                                     <span className="text-gray-700">Free quote with no obligation</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                     <CheckCircle className="w-5 h-5 text-success-600" />
                   </div>
                   <span className="text-gray-700">Response within 24 hours</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                     <CheckCircle className="w-5 h-5 text-success-600" />
                   </div>
                   <span className="text-gray-700">Custom design included</span>
                 </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                  </div>
                  <span className="text-gray-700">Professional consultation</span>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-primary-800 mb-2">
                  🎯 Limited Time Offer
                </h4>
                <p className="text-primary-700">
                  Get a <strong>free design consultation</strong> and <strong>10% off</strong> your bathroom remodeling project when you request a quote this month!
                </p>
              </div>
              </div>
            </motion.div>

            {/* Form */}
            <div className="flex justify-center">
              <FormContent />
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default LeadForm
