'use client'

import { useState, useEffect } from 'react'
import LeadForm from './LeadForm'

export default function StickyLeadForm() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el formulario de abajo está visible, oculta el sticky
        setIsVisible(!entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    // Observa el formulario de la sección inferior
    const bottomForm = document.querySelector('#lead-form')
    if (bottomForm) {
      observer.observe(bottomForm)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`hidden lg:block fixed right-6 top-28 w-[380px] z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
    }`}>
      <LeadForm formId="lead-form-sticky" />
    </div>
  )
}


