import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Bot, 
  X, 
  Phone, 
  Send,
  Calendar,
  Users,
  Stethoscope,
  MapPin,
  Clock,
  Heart,
  Brain,
  Shield,
  Baby,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [currentMenu, setCurrentMenu] = useState('main')
  const [chatHistory, setChatHistory] = useState([])
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg = {
        type: 'bot',
        text: "Hello! 👋 Welcome to AIMAN Hospital. I'm here to help you with information about our services, doctors, appointments, and more. How can I assist you today?",
        timestamp: new Date()
      }
      setMessages([welcomeMsg])
      setChatHistory([welcomeMsg])
    }
  }, [isOpen])

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const mainMenuOptions = [
    { id: 'services', label: '📋 Our Services', icon: Heart, color: 'bg-blue-500' },
    { id: 'doctors', label: '👨‍⚕️ Our Experts', icon: Users, color: 'bg-green-500' },
    { id: 'appointment', label: '📅 Book Appointment', icon: Calendar, color: 'bg-purple-500' },
    { id: 'contact', label: '📞 Contact Information', icon: Phone, color: 'bg-red-500' },
    { id: 'location', label: '📍 Location & Directions', icon: MapPin, color: 'bg-orange-500' },
    { id: 'hours', label: '🕐 Operating Hours', icon: Clock, color: 'bg-indigo-500' }
  ]

  const services = [
    { id: 'opd-services', name: 'OPD Services', path: '/services/opd-services', description: 'Outpatient consultations and follow-up care' },
    { id: 'ipd-services', name: 'IPD Services', path: '/services/ipd-services', description: 'Inpatient mental health care' },
    { id: 'emergency-mental-health', name: '24/7 Emergency Mental Health', path: '/services/emergency-mental-health', description: 'Round-the-clock emergency services' },
    { id: 'clinical-psychology', name: 'Clinical Psychology & Therapy', path: '/services/clinical-psychology', description: 'Psychological assessment and therapy' },
    { id: 'neurology', name: 'Neurology Services', path: '/services/neurology', description: 'Neurological assessment and treatment' },
    { id: 'deaddiction-rehab', name: 'De-addiction & Rehabilitation', path: '/services/deaddiction-rehab', description: 'Substance abuse treatment' },
    { id: 'child-adolescent', name: 'Child & Adolescent Mental Health', path: '/services/child-adolescent', description: 'Specialized care for children' },
    { id: 'womens-mental-health', name: "Women's Mental Health", path: '/services/womens-mental-health', description: 'Gender-specific mental health care' },
    { id: 'sexual-wellness', name: 'Sexual Wellness Services', path: '/services/sexual-wellness', description: 'Sexual health counseling' },
    { id: 'home-visit', name: 'Home Visit Services', path: '/services/home-visit', description: 'Home-based therapy and counseling' }
  ]

  const doctors = [
    { id: 'piyush', name: 'Dr Piyush Verma', specialty: 'Senior Consultant Psychiatrist', path: '/doctor/piyush' },
    { id: 'sangeeta', name: 'Dr Sangeeta Hatila', specialty: 'Consultant Psychiatrist', path: '/doctor/sangeeta' },
    { id: 'aditya', name: 'Dr Aditya Sharma', specialty: 'Consultant Psychiatrist', path: '/doctor/aditya' },
    { id: 'kiran', name: 'Dr Kiran Bala', specialty: 'Senior Consultant Neurologist', path: '/doctor/kiran' },
    { id: 'akshita', name: 'Ms Akshita Shukla', specialty: 'Senior Consultant Clinical Psychologist', path: '/doctor/akshita' },
    { id: 'keshav', name: 'Ms Keshav Sharma', specialty: 'Consultant Psycho-Oncologist', path: '/doctor/keshav' }
  ]

  const addMessage = (message) => {
    const newMessage = {
      ...message,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
    setChatHistory(prev => [...prev, newMessage])
  }

  const handleMenuSelection = (menuId) => {
    const selectedOption = mainMenuOptions.find(opt => opt.id === menuId)
    
    // Add user selection message
    addMessage({
      type: 'user',
      text: selectedOption.label
    })

    // Handle different menu options
    switch (menuId) {
      case 'services':
        setCurrentMenu('services')
        setTimeout(() => {
          const serviceOptions = services.map(s => ({
            id: s.id,
            label: s.name,
            action: () => navigate(s.path)
          }))
          serviceOptions.push({
            id: 'back-main',
            label: '🔙 Back to Main Menu',
            action: null
          })
          addMessage({
            type: 'bot',
            text: "Here are our available services. Click on any service to learn more:",
            options: serviceOptions
          })
        }, 500)
        break

      case 'doctors':
        setCurrentMenu('doctors')
        setTimeout(() => {
          const doctorOptions = doctors.map(d => ({
            id: d.id,
            label: `${d.name} - ${d.specialty}`,
            action: () => navigate(d.path)
          }))
          doctorOptions.push({
            id: 'back-main',
            label: '🔙 Back to Main Menu',
            action: null
          })
          addMessage({
            type: 'bot',
            text: "Meet our team of expert healthcare professionals:",
            options: doctorOptions
          })
        }, 500)
        break

      case 'appointment':
        setCurrentMenu('appointment')
        setTimeout(() => {
          addMessage({
            type: 'bot',
            text: "Great! I can help you book an appointment. Would you like to:",
            options: [
              { id: 'book-now', label: '📅 Book Appointment Online', action: () => navigate('/appointment') },
              { id: 'call', label: '📞 Call to Book (+91 88008 33411)', action: () => window.open('tel:+918800833411', '_self') },
              { id: 'whatsapp', label: '💬 Book via WhatsApp', action: handleWhatsApp }
            ]
          })
        }, 500)
        break

      case 'contact':
        setCurrentMenu('contact')
        setTimeout(() => {
          addMessage({
            type: 'bot',
            text: "Here's how you can reach us:",
            options: [
              { id: 'phone', label: '📞 Call: +91 88008 33411', action: () => window.open('tel:+918800833411', '_self') },
              { id: 'email', label: '📧 Email: info@aimanhealth.com', action: () => window.open('mailto:info@aimanhealth.com', '_self') },
              { id: 'visit-contact', label: '📍 Visit Contact Page', action: () => navigate('/contact') }
            ]
          })
        }, 500)
        break

      case 'location':
        setCurrentMenu('location')
        setTimeout(() => {
          addMessage({
            type: 'bot',
            text: "We're located at:\n\n📍 83P, Residency Green\nJal Vihar Colony, Sector 46\nGurgaon, Haryana 122003",
            options: [
              { id: 'maps', label: '🗺️ Open in Google Maps', action: () => window.open('https://maps.app.goo.gl/q7XyStX728nxmf1N7', '_blank') },
              { id: 'directions', label: '🧭 Get Directions', action: () => window.open('https://maps.app.goo.gl/q7XyStX728nxmf1N7', '_blank') }
            ]
          })
        }, 500)
        break

      case 'hours':
        setCurrentMenu('hours')
        setTimeout(() => {
          addMessage({
            type: 'bot',
            text: "Our operating hours are:\n\n🕐 Weekdays: 10 AM - 7 PM\n🕐 Sunday: 10 AM - 4 PM\n\nEmergency services are available 24/7.",
            options: [
              { id: 'book', label: '📅 Book Appointment', action: () => navigate('/appointment') },
              { id: 'emergency', label: '🚨 Emergency (24/7)', action: () => window.open('tel:+918800833411', '_self') }
            ]
          })
        }, 500)
        break

      default:
        setCurrentMenu('main')
    }
  }

  const handleOptionClick = (option) => {
    // Add user selection message
    addMessage({
      type: 'user',
      text: option.label
    })

    // If it's a back button, reset to main menu
    if (option.id === 'back-main') {
      setCurrentMenu('main')
      setTimeout(() => {
        addMessage({
          type: 'bot',
          text: "How can I help you today?",
        })
      }, 300)
      return
    }

    // Execute the action
    if (option.action) {
      setTimeout(() => {
        option.action()
        setIsOpen(false)
      }, 300)
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = '918800833411'
    const message = `Hello AIMAN Hospital! 👋

I'm interested in booking an appointment. Please help me with the available slots.

Thank you!`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const handleCall = () => {
    window.open('tel:+918800833411', '_self')
    setIsOpen(false)
  }

  const resetChat = () => {
    setMessages([])
    setCurrentMenu('main')
    setChatHistory([])
    // Reset will trigger useEffect to show welcome message
  }

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col space-y-3 sm:space-y-4">
        {/* Call Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 sm:p-4 shadow-2xl flex items-center justify-center transition-colors duration-200 group relative"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5 sm:w-7 sm:h-7" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Call us: +91 88008 33411
            </div>
          </motion.button>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-primary-400 rounded-full -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Chatbot Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(!isOpen)
              if (!isOpen) {
                resetChat()
              }
            }}
            className={`${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded-full p-3 sm:p-4 shadow-2xl flex items-center justify-center transition-colors duration-200 group relative`}
            aria-label="Chat with us"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-7 sm:h-7" /> : <Bot className="w-5 h-5 sm:w-7 sm:h-7" />}
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {isOpen ? 'Close Chat' : 'Chat with us'}
            </div>
          </motion.button>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 sm:top-24 bottom-4 sm:bottom-20 right-2 sm:right-6 z-40 w-[calc(100vw-1rem)] sm:w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-2 sm:space-x-3">

                <div>
                  <h3 className="font-semibold text-base sm:text-lg">AIMAN Hospital</h3>
                  <p className="text-xs text-primary-100">Online Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1.5 sm:p-2 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50 space-y-3 sm:space-y-4 min-h-0">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] sm:max-w-[80%] ${msg.type === 'user' ? 'bg-primary-600 text-white' : 'bg-white text-gray-800'} rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 shadow-md`}>
                    {msg.type === 'bot' && (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-100 rounded-full flex items-center justify-center mb-1">
                        <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-600" />
                      </div>
                    )}
                    <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                    
                    {/* Options/Buttons */}
                    {msg.options && (
                      <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                        {msg.options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left bg-primary-50 hover:bg-primary-100 text-primary-700 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-between"
                          >
                            <span className="truncate pr-2">{option.label}</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />

              {/* Main Menu Options - Show when no bot response with options exists */}
              {messages.length <= 1 && currentMenu === 'main' && (
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {mainMenuOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleMenuSelection(option.id)}
                      className={`${option.color} text-white p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity flex flex-col items-center space-y-0.5 sm:space-y-1`}
                    >
                      <option.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-[10px] sm:text-xs leading-tight text-center">{option.label.replace(/📋|👨‍⚕️|📅|📞|📍|🕐/g, '').trim()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Footer */}
            <div className="border-t bg-white p-2 sm:p-3 space-y-1.5 sm:space-y-2 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-[10px] sm:text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="hidden sm:inline">Usually replies instantly</span>
                  <span className="sm:hidden">Online</span>
                </div>
                <button
                  onClick={resetChat}
                  className="text-[10px] sm:text-xs text-primary-600 hover:text-primary-700 font-medium px-1 sm:px-0"
                >
                  Reset
                </button>
              </div>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center space-x-1.5 sm:space-x-2"
              >
                <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Continue on WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot

