'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Premium Bathrooms' website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                Premium Bathrooms provides professional bathroom remodeling services including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Complete bathroom remodeling</li>
                <li>Tub-to-shower conversions</li>
                <li>Vanity updates and replacements</li>
                <li>Tile installation and replacement</li>
                <li>Custom bathroom design</li>
                <li>Plumbing and electrical work</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Area</h2>
              <p className="text-gray-700 mb-4">
                Our services are available in Southern California including Los Angeles County, Orange County, San Diego County, and Ventura County.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Quotes and Estimates</h2>
              <p className="text-gray-700 mb-4">
                All quotes and estimates are valid for 30 days from the date of issue. Prices may be subject to change based on material availability and project scope modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in your project contract. We typically require:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Deposit upon contract signing</li>
                <li>Progress payments during construction</li>
                <li>Final payment upon project completion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Project Timeline</h2>
              <p className="text-gray-700 mb-4">
                Project timelines are estimates and may be affected by factors beyond our control including weather, material availability, and permit processing times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Warranty</h2>
              <p className="text-gray-700 mb-4">
                We provide a 10-year warranty on workmanship and manufacturer warranties on materials. Warranty terms will be detailed in your project contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Permits and Inspections</h2>
              <p className="text-gray-700 mb-4">
                We handle all necessary permits and coordinate inspections as required by local building codes and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Insurance and Licensing</h2>
              <p className="text-gray-700 mb-4">
                Premium Bathrooms is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                Cancellation fees may apply if a project is cancelled after materials have been ordered or work has commenced. Specific terms will be outlined in your contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Premium Bathrooms' liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes will be resolved through mediation or arbitration in Los Angeles County, California, in accordance with California law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                                 <p className="text-gray-700">
                   <strong>Email:</strong> info@premiumbathrooms.com<br />
                   <strong>Address:</strong> Los Angeles, CA
                 </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsConditions
