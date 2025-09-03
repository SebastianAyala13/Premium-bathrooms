import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Bathrooms - Luxury Bathroom Remodeling in Southern California',
  description: 'Transform your bathroom into a luxury spa with Premium Bathrooms. Professional bathroom remodeling, tub-to-shower conversion, and custom design in Los Angeles, Orange County, San Diego. Free consultation and 10-year warranty. Get your free quote today!',
  keywords: 'bathroom remodeling, bathroom renovation, tub to shower conversion, bathroom design, luxury bathroom, spa bathroom, bathroom contractor, Los Angeles bathroom remodeling, Orange County bathroom renovation, San Diego bathroom design, bathroom installation, bathroom fixtures, bathroom tiles, walk-in shower, bathroom vanity, bathroom remodeling cost, free bathroom quote, bathroom remodeling near me, bathroom contractor Los Angeles, bathroom renovation Orange County, bathroom design San Diego, walk-in shower installation, bathroom tile installation, bathroom fixtures installation, bathroom waterproofing, bathroom accessibility, ADA bathroom, bathroom safety features, bathroom lighting, bathroom storage solutions, bathroom ventilation, bathroom heating, smart bathroom technology',
  authors: [{ name: 'Premium Bathrooms' }],
  creator: 'Premium Bathrooms',
  publisher: 'Premium Bathrooms',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://premiumbathrooms.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Premium Bathrooms - Luxury Bathroom Remodeling in Southern California',
    description: 'Transform your bathroom into a luxury spa with Premium Bathrooms. Professional bathroom remodeling, tub-to-shower conversion, and custom design in Los Angeles, Orange County, San Diego. Free consultation and 10-year warranty.',
    url: 'https://premiumbathrooms.com',
    siteName: 'Premium Bathrooms',
    images: [
      {
        url: '/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png',
        width: 1200,
        height: 630,
        alt: 'Premium Bathrooms - Luxury Bathroom Remodeling',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'United States',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Bathrooms - Luxury Bathroom Remodeling in Southern California',
    description: 'Transform your bathroom into a luxury spa with Premium Bathrooms. Professional bathroom remodeling, tub-to-shower conversion, and custom design.',
    images: ['/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png'],
    creator: '@premiumbathrooms',
    site: '@premiumbathrooms',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: '/logoprimebath.png',
    shortcut: '/logoprimebath.png',
    apple: '/logoprimebath.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Premium Bathrooms",
              "description": "Professional bathroom remodeling services in Southern California",
              "url": "https://premiumbathrooms.com",
                             "email": "info@premiumbathrooms.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.0522",
                "longitude": "-118.2437"
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
              "currenciesAccepted": "USD",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "34.0522",
                  "longitude": "-118.2437"
                },
                "geoRadius": "100000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bathroom Remodeling Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Complete Bathroom Remodeling",
                      "description": "Full bathroom transformation with premium materials",
                      "price": "12900",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tub-to-Shower Conversion",
                      "description": "Convert bathtub to modern walk-in shower",
                      "price": "7900",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Vanity & Fixture Updates",
                      "description": "Modern vanity and fixture installation",
                      "price": "3900",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tile & Flooring Replacement",
                      "description": "Professional tile and flooring installation",
                      "price": "5900",
                      "priceCurrency": "USD"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "image": [
                "https://premiumbathrooms.com/ChatGPT Image 28 ago 2025, 04_25_43 p.m..png",
                "https://premiumbathrooms.com/ChatGPT Image 28 ago 2025, 04_25_47 p.m..png",
                "https://premiumbathrooms.com/ChatGPT Image 28 ago 2025, 04_25_51 p.m..png"
              ],
              "logo": "https://premiumbathrooms.com/logoprimebath.png",
              "sameAs": [
                "https://www.facebook.com/premiumbathrooms",
                "https://www.instagram.com/premiumbathrooms",
                "https://www.linkedin.com/company/premiumbathrooms"
              ]
            })
          }}
        />
        
        {/* Additional structured data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a typical bathroom remodeling project take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most bathroom remodeling projects take 1-3 weeks to complete. The timeline depends on the scope of work, size of the bathroom, and complexity of the design."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is included in your bathroom remodeling services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our comprehensive service includes design consultation, 3D rendering, demolition, plumbing and electrical work, tile installation, fixture installation, waterproofing, and final inspection."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide free estimates and consultations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer free in-home consultations and detailed estimates. Our design specialist will visit your home, discuss your vision, take measurements, and provide you with a comprehensive quote."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles, California" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
        <meta name="business:contact_data:street_address" content="Los Angeles, CA" />
        <meta name="business:contact_data:locality" content="Los Angeles" />
        <meta name="business:contact_data:region" content="CA" />
        <meta name="business:contact_data:postal_code" content="90210" />
        <meta name="business:contact_data:country_name" content="United States" />
        
        <meta name="business:contact_data:email" content="info@premiumbathrooms.com" />
        <meta name="business:contact_data:website" content="https://premiumbathrooms.com" />
        <meta name="business:contact_data:hours" content="Monday-Friday 8:00 AM-6:00 PM, Saturday 9:00 AM-4:00 PM" />
        <meta name="business:contact_data:price_range" content="$$" />
        <meta name="business:contact_data:payment_accepted" content="Cash, Credit Card, Check, Financing" />
        
                 {/* Preconnect to external domains for performance */}
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         
                   {/* TrustedForm Lead Tracking - Professional Implementation */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  // TrustedForm Lead Tracking
                  var tf = document.createElement('script');
                  tf.type = 'text/javascript';
                  tf.async = true;
                  tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
                    '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
                    new Date().getTime() + Math.random();
                  var s = document.getElementsByTagName('script')[0]; 
                  s.parentNode.insertBefore(tf, s);
                  
                  // Enhanced tracking for form interactions
                  document.addEventListener('DOMContentLoaded', function() {
                    // Track form focus events
                    var forms = document.querySelectorAll('form');
                    forms.forEach(function(form) {
                      var inputs = form.querySelectorAll('input, select, textarea');
                      inputs.forEach(function(input) {
                        input.addEventListener('focus', function() {
                          if (window.TrustedForm) {
                            window.TrustedForm.tag();
                          }
                        });
                      });
                    });
                    
                    // Track form submission attempts
                    document.addEventListener('submit', function(e) {
                      if (window.TrustedForm) {
                        window.TrustedForm.tag();
                      }
                    });
                  });
                })();
              `
            }}
          />
          <noscript>
            <img src='https://api.trustedform.com/ns.gif' />
          </noscript>
         
         {/* Favicon and app icons */}
         <link rel="icon" href="/logoprimebath.png" />
         <link rel="shortcut icon" href="/logoprimebath.png" />
         <link rel="apple-touch-icon" href="/logoprimebath.png" />
         <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
