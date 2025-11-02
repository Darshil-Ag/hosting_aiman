import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  // Function to scroll to top and navigate
  const handleLinkClick = (path) => {
    // Instant scroll to top - no delay
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    navigate(path)
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/our-services' },
    { name: 'Experts', path: '/our-experts' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: '24/7 Emergency Mental Health Service', path: '/services/emergency-mental-health' },
    { name: 'OPD Service', path: '/services/opd-services' },
    { name: 'IPD Service', path: '/services/ipd-services' },
    { name: 'De-addiction & Rehabilitation Service', path: '/services/deaddiction-rehab' },
    { name: 'Child & Adolescent Service', path: '/services/child-adolescent' },
    { name: 'Women\'s Mental Health Service', path: '/services/womens-mental-health' },
    { name: 'Geriatric Mental Health Service', path: '/services/geriatric-mental-health' },
    { name: 'Clinical Psychology Service', path: '/services/clinical-psychology' },
    { name: 'Neurology Service', path: '/services/neurology' },
    { name: 'Sexual Wellness Service', path: '/services/sexual-wellness' },
    { name: 'Home Visit Service', path: '/services/home-visit' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/775732765631920', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/aiman_healthcare', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-white text-[#4f439b] relative overflow-hidden">
      <div className="container-custom pl-4 pr-2 sm:pl-6 sm:pr-4 lg:pl-8 lg:pr-6">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Column 1: Big Logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-56 h-40 sm:w-64 sm:h-48 lg:w-72 lg:h-56 xl:w-80 xl:h-64">
              <img src={transparentLogo} alt="AIMAN Logo" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Column 2: Hospital Info */}
          <div className="space-y-4 sm:space-y-6 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold border-b border-gray-300 pb-2 text-[#4f439b]">
              About AIMAN
            </h3>
            <div className="space-y-3">
              <p className="text-[#4f439b] text-sm sm:text-base leading-relaxed">
                Ataraxia Institute of Mental Health and Neurosciences
              </p>
              <p className="text-[#4f439b] text-xs sm:text-sm leading-relaxed italic">
                "We don't just provide treatment. We provide hope, voice, safe space, and healing."
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4 sm:space-y-6 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold border-b border-gray-300 pb-2 text-[#4f439b]">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('/')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/about')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/our-services')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/our-experts')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Experts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/appointment')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                  <button
                  onClick={() => handleLinkClick('/contact')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                  >
                  Contact Us
                  </button>
                </li>
            </ul>
          </div>

          {/* Column 4: Specialties Services */}
          <div className="space-y-4 sm:space-y-6 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold border-b border-gray-300 pb-2 text-[#4f439b]">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('/services/opd-services')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  OPD Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/ipd-services')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  IPD Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/emergency-mental-health')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Emergency Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/clinical-psychology')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Clinical Psychology
                </button>
              </li>
              <li>
                  <button
                  onClick={() => handleLinkClick('/services/neurology')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                  >
                  Neurology Services
                  </button>
                </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/our-services')}
                  className="text-[#4f439b] hover:text-primary-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Speciality Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-4 sm:space-y-6 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold border-b border-gray-300 pb-2 text-[#4f439b]">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href = "https://www.google.com/maps/place/AIMAN+-+Ataraxia+Institute+of+Mental+Health+%26+Neurosciences/@28.4385731,77.0511214,17z/data=!3m1!4b1!4m6!3m5!1s0x390d194351c6b57b:0x18d58b3633d7a68c!8m2!3d28.4385684!4d77.0536963!16s%2Fg%2F11xz8c6t7z?entry=tts&g_ep=EgoyMDI1MTAxMi4wIPu8ASoASAFQAw%3D%3D&skid=d3bffdf1-7ee6-450d-8ad0-2264aac7c73b" className="text-[#4f439b] text-sm sm:text-base break-words hover:text-primary-600 transition-colors">
                  83P , Residency Green, Sector 46, Main Sector Road <br />
                  Gurgaon, Haryana 122003
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <a href="tel:+918800833411" className="text-[#4f439b] text-sm sm:text-base hover:text-primary-600 transition-colors">
                    +91 88008 33411
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@aimanhealth.com" className="text-[#4f439b] text-sm sm:text-base hover:text-primary-600 transition-colors break-all">
                  info@aimanhealth.com
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-300 py-6 sm:py-8 pl-4 pr-2 sm:pl-6 sm:pr-4 lg:pl-8 lg:pr-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#4f439b] text-xs sm:text-sm text-center md:text-left">
              © {currentYear} AIMAN Hospital. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button
                onClick={() => handleLinkClick('/privacy-policy')}
                className="text-[#4f439b] hover:text-primary-600 transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('/terms-of-service')}
                className="text-[#4f439b] hover:text-primary-600 transition-colors duration-200 cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick('/sitemap')}
                className="text-[#4f439b] hover:text-primary-600 transition-colors duration-200 cursor-pointer"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
