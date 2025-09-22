'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Materials from '@/components/Materials'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Certifications from '@/components/Certifications'
import ServiceArea from '@/components/ServiceArea'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

// Configuración para export estático
export const dynamic = 'error'

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const mq = window.matchMedia('(min-width: 1024px)')
    const setFromMQ = () => setIsDesktop(mq.matches)
    setFromMQ()
    mq.addEventListener('change', setFromMQ)
    return () => mq.removeEventListener('change', setFromMQ)
  }, [])

  // No renderizar formularios hasta que estemos en el cliente
  if (!isClient) {
    return (
      <>
        <Header />
        <div className="lg:mr-80">
          <Hero />
          <Services />
          <Process />
          <Materials />
          <Projects />
          <Testimonials />
          <Certifications />
          <ServiceArea />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      
      {isDesktop ? (
        <>
          {/* Desktop: contenido con barra lateral fija */}
          <div className="lg:mr-80">
            <Hero />
            <Services />
            <Process />
            <Materials />
            <Projects />
            <Testimonials />
            <Certifications />
            <ServiceArea />
            <FAQ />
            <Contact />
            <Footer />
          </div>

          {/* Formulario lateral fijo para PC */}
          <div id="form-section" className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 shadow-xl z-30 flex flex-col">
            <div className="p-4 flex-shrink-0">
              <div className="mb-3">
                <h2 className="text-lg font-bold text-gray-900 text-center">🏠 Get Your Free Quote</h2>
                <p className="text-xs text-gray-600 text-center mt-1">Complete consultation</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div id="lead-form-desktop" className="h-full overflow-y-auto px-4 pb-4">
                <LeadForm formId="lead-form-desktop" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Móvil: formulario al inicio */}
          <div id="form-section" className="bg-white border-b border-gray-200 shadow-sm">
            <div className="p-4">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 text-center">🏠 Get Your Free Quote</h2>
                <p className="text-sm text-gray-600 text-center mt-1">Complete consultation</p>
              </div>
              <div id="lead-form-mobile" className="border-2 border-teal-200 rounded-2xl p-2">
                <LeadForm formId="lead-form-mobile" />
              </div>
            </div>
          </div>

          <Hero />
          <Services />
          <Process />
          <Materials />
          <Projects />
          <Testimonials />
          <Certifications />
          <ServiceArea />
          <FAQ />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}
