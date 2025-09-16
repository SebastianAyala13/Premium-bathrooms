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
import dynamicImport from 'next/dynamic'
const StickyLeadForm = dynamicImport(() => import('@/components/StickyLeadForm'), { ssr: false })

// Configuración para export estático
export const dynamic = 'error'
export const revalidate = 0

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyLeadForm />
      <Header />
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
      <LeadForm />
      <Footer />
    </main>
  )
}
