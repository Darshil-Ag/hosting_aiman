import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Function to scroll to top and navigate
  const handleNavigation = (path) => {
    // Instant scroll to top - no delay
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    navigate(path)
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/our-services' },
    { name: 'Experts', path: '/our-experts' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Blog', path: '/blog' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-lg transition-all duration-300"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24 w-full">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src={transparentLogo} alt="AIMAN" className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-primary-600">
                  AIMAN
                </span>
                <span className="text-xs text-gray-500 font-medium block max-w-48">
                  Ataraxia Institute of Mental Health and Neurosciences
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`font-medium transition-all duration-200 cursor-pointer ${
                    location.pathname === item.path
                      ? 'text-primary-600 scale-105 drop-shadow-lg'
                      : 'text-[#4f439b] hover:text-primary-500 hover:scale-105 drop-shadow-md'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavigation('/contact')}
              className="flex items-center space-x-2 text-sm text-[#4f439b] hover:text-primary-600 transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => handleNavigation('/appointment')}
              className="bg-primary-600 text-white hover:bg-primary-700 hover:text-white font-medium text-sm px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-lg text-[#4f439b] hover:bg-gray-200 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-800 border-t border-gray-700 mt-2"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full text-left block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-white bg-primary-600'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="flex items-center space-x-2 text-sm text-gray-300 mb-3 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Contact</span>
                </button>
                <button
                  onClick={() => handleNavigation('/appointment')}
                  className="btn-primary w-full text-center"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
