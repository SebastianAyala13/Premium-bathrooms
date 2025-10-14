'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Building2, Shield, Zap, Wrench } from 'lucide-react'
import Link from 'next/link'

// Configuración para export estático
export const dynamic = 'error'

const Partners = () => {
  const partners = {
    'Home Improvement & Remodeling': [
      '1800 Remodel', 'Bath Experts', 'Bath Experts LLC', 'Bath Remodel by Capital', 'Bath concepts', 'Billy.com',
      'Jacuzzi', 'Premier Home Pros', 'Zintex', 'My Bath Colorado', 'Tubbs by Grubbs', 'New Pro',
      'New Bath Today', 'Kohler', 'Long Home', 'BathWorks of Michigan', 'CareFree Home Pros',
      'American Remodeling', 'Anderson Windows', 'Champion Windows and Home Exteriors', 'Clear Choice Home Improvement',
      'Continental Siding', 'C Michael Exteriors', 'Champion Siding', 'Capital Construction Contracting',
      'Future Remodeling', 'Home Genius Exteriors', 'New Pro Home Remodeling', 'Victory Home Remodeling',
      'DaBella', 'SmartHome Solutions USA', 'Superior Home', 'Adventum.io', '1800-Remodel', 'OpenHome',
      'OpenHome Pros', 'Homelix', 'Rex Direct Net, Inc.', 'Pointer Leads Inc.', 'Everconnect',
      'Alpine Digital Group, Inc.', 'RGR Marketing', 'EverContractor', 'SolarGiveback', 'MediaDevoted1',
      'NewStrata', 'National Home Project', 'American Home Shield', 'Midwest Bath Company', 'Rocky Mountain Bath Company',
      'Bath Wizard', 'Floor Coverings International', 'American Standard'
    ],
    'Roofing & Exteriors': [
      'Crowther Roofing and Cooling', 'Advanced Roofing, Inc.', 'Baker Roofing Company', 'Best Choice Roofing',
      'Bone Dry Roofing', 'Centimark Corporation', 'Corey Construction', 'Crown Roofing & Waterproofing',
      'Erie', 'Greenwood Industries, Inc.', 'Infinity Home Services', 'Jolly Roofing & Contracting Company, Inc.',
      'Kalkreuth Roofing and Sheet Metal', 'Legacy Restoration', 'Nations Roof', 'O\'Hara\'s Son Roofing Company',
      'RestoreMasters', 'Roofing Corp of America', 'Stronghouse Solutions', 'Tecta America', 'CCX Roofing',
      'Cody Clinger\'s Roofing', 'Roofix Technologies LLC', 'Breezy Roofing powered by Roofix', 'Breezy Roofing LLC'
    ],
    'Solar & Energy': [
      'ADT Solar', 'Affinity Solar', 'Apricot Solar', 'Big Sky Solar', 'Citycom Solar', 'Clean Energy Experts',
      'Clean Energy Professionals', 'Clever Energy', 'Climax Solar', 'Element Power, LLC', 'Energy Defenders',
      'Freedom Solar', 'Genie Energy', 'GreenWatt Consulting LLC', 'High Definition Solar', 'Ion Solar',
      'Kinetic Solar', 'Kuubix Energy Inc', 'Kuubix Global LLC', 'Lumio', 'Metro Renewables', 'Momentum',
      'New York Power Solutions', 'Powur', 'Pro Custom Solar', 'Professional Broker Solar', 'Ranchero Power',
      'Rocket Solar', 'Selsco Solar', 'Shine Solar', 'Simple Solar', 'Sky Solar Energy', 'Smart Solar',
      'Smart Solar Energy', 'Sol 365, LLC', 'Sol Energy', 'Solar East Coast', 'Solar Energy World',
      'Solar America', 'Solar Five', 'Solar Match', 'Source Power', 'Stamina Solar', 'State Energy LLC',
      'Sun Doctor Solar', 'Sunlink Energy', 'Sunnova', 'Sunpower', 'Sunpro Solar', 'Sunrun', 'Sunworks',
      'The Solar Guy', 'The Solar Project', 'Townsquare energy', 'Volt Seed Tech, LLC', 'You Benefit Solar',
      'Volt Energy Solar'
    ],
    'Insurance & Healthcare': [
      'AA Media Inc', 'Absolute Health Agents', 'Accuquote', 'ADT', 'Advocate My Insurance', 'AHG Insurance',
      'Allstate', 'American Benefits', 'Better Living Health Services', 'Century Health and Life, LLC',
      'Choice Health', 'Choice One Health & Life Agency', 'Choice Right, LLC', 'Client Consent Health',
      'Client Consent Medicare', 'Consumer Advocacy, LLC', 'Coverance Insurance', 'EasyHealth Insurance Services',
      'Family First Insurance Advisors', 'Final Expense Select', 'First Choice Health Company', 'Genesis Health Agency',
      'Gerber', 'Gerber Life', 'Get Me Healthcare', 'Get Me Medicare', 'Healthplan Outlook', 'Healthubb LLC',
      'Highland Health Care', 'Insurance Connection Today', 'Insurance Guide', 'Insurance Line One',
      'Insurance Supermarket', 'Insure Choice, LLC', 'Kin Insurance', 'Medical Media', 'Medicare Planning of America',
      'Medicare10', 'Medsupp Experts', 'Modern Brokers of America', 'My Health Angel', 'National General',
      'National Senior Benefit Advisors', 'NeedHealth', 'Number One Health', 'Orange Medical Supply',
      'PolicyBind, LLC', 'Premier Insurance Benefits, LLC', 'Primerica', 'Prosperity Life', 'Select Quote',
      'Senior Care Complete', 'Senior Direct Insurance', 'Senior Healthcare Advisors', 'Senior Life Sales',
      'Senior Medical Group', 'Senior Planning of America', 'Senior Product Advisors', 'Senior Product Group',
      'Senior Solutions Group', 'Senior Solutions Insurance', 'SeniorCareUSA', 'Smart Final Expense',
      'Smart Match Insurance Agency', 'Tapert Insurance Agency', 'The Medicare Basics', 'Together Health',
      'Total Insurance Brokers', 'United Advisors', 'US Health Group', 'US Medicare Advisors', 'US Medicare Solutions'
    ],
    'Financial & Mortgage': [
      'Amerisave Mortgage', 'Ancelet Advising', 'AXAD Capital', 'Innovative Financial Group',
      'Innovative Financial Partners LLC', 'Key One Financial', 'My Legal Protect', 'Rocket Mortgage',
      'Union Home Mortgage', 'West Capital Lending'
    ],
    'Technology & Media': [
      'Ad Energy', 'Acudial', 'Anomoly Squared', 'Aragon', 'BC Group, LLC', 'CallCore Media', 'Consumer Ai',
      'Direct Web Advertising', 'Drivebpo', 'DSG Media', 'General Lab Marketing Solutions', 'Global Connections',
      'Global Summit Media', 'Inn Seasons Resorts', 'Lumino Consulting', 'Native Media, LLC', 'OFFERWEB',
      'OPTIMIRS PTE. LTD', 'Pointer Leads', 'Presidio Interactive Corporation', 'Purified Leads',
      'QuoteStorm', 'Quoting Fast LLC', 'Right Advisors, LLC', 'Saddlepoint', 'SmartScripts & Affiliates',
      'SmartScripts Agents', 'SNK Media', 'Trademarc', 'Tranzact', 'VANASIS', 'Veerus Holdings, LLC',
      'Veerus Leads', 'VSC Digital Media', 'WORK', 'WORLD BPO LLC'
    ],
    'Other Services': [
      'Autoprotectors.us', 'Benefits Team', 'City Power and Gas', 'Cloud9 Sleep Systems LLC',
      'Hearing Better Now', 'Miracle-Ear Hearing Centers of Arkansas', 'Mobile Help', 'MV Realty PBC, LLC',
      'NationalHomeProject', 'New Strata', 'Ox Car Care', 'Serenity Time', 'Sharpen Product Advisors',
      'Sharpens Solutions Group', 'Shop RX Plans', 'Simple life solutions', 'Simple Life Solutions',
      'Simple Options Agency', 'Sqarq healthcare', 'Thomas Arts', 'Titan Solar', 'Total Care Products',
      'Total Value Products', 'Utility Partners of America', 'Vivint', 'Water Improvement Technologies, LLC'
    ]
  }

  const categoryIcons: Record<string, any> = {
    'Home Improvement & Remodeling': Wrench,
    'Roofing & Exteriors': Building2,
    'Solar & Energy': Zap,
    'Insurance & Healthcare': Shield,
    'Financial & Mortgage': Building2,
    'Technology & Media': ExternalLink,
    'Other Services': Building2
  }

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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-500 text-white py-16">
        <div className="container-custom">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              We've established partnerships with leading companies across the United States to provide you with the best home improvement and services experience.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{Object.values(partners).flat().length}+</div>
                  <div className="text-sm opacity-80">Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{Object.keys(partners).length}</div>
                  <div className="text-sm opacity-80">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-80">States</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>
              </div>
            </motion.div>
        </div>
            </div>

      {/* Partners Grid */}
      <div className="container-custom py-16">
        <div className="space-y-12">
          {Object.entries(partners).map(([category, partnerList], categoryIndex) => {
            const IconComponent = categoryIcons[category] || Building2
            return (
            <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-6">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">{category}</h2>
                      <p className="opacity-90">{partnerList.length} Partners</p>
                </div>
                </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {partnerList.map((partner, index) => (
                      <motion.div
                        key={partner}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.02) }}
                        className="bg-gray-50 hover:bg-primary-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-primary-200"
                      >
                        <div className="text-sm font-medium text-gray-900">{partner}</div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
          </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90">
              Connect with our network of trusted partners for your home improvement needs.
            </p>
            <Link
              href="/#lead-form"
              className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Your Free Quote</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Partners
