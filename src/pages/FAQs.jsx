import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Mail,
  Clock,
  Filter,
  AlertTriangle
} from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All FAQs' }
  ]

  const faqs = [
    {
      id: 1,
      question: 'Can mental health problems be treated?',
      answer: 'Yes. Most mental health issues are treatable with the right combination of medication, therapy, and lifestyle changes. Early intervention often leads to better outcomes.',
      category: 'general',
      tags: ['mental health', 'treatment', 'therapy', 'medication']
    },
    {
      id: 2,
      question: 'Is seeking mental health help something to be ashamed of?',
      answer: 'Absolutely not. Just like physical illnesses, mental health conditions need treatment and support. Seeking help is a sign of strength, not weakness.',
      category: 'general',
      tags: ['stigma', 'help seeking', 'support', 'strength']
    },
    {
      id: 3,
      question: 'Do I need an appointment to consult a psychiatrist or psychologist or neurologist?',
      answer: 'Yes, we recommend taking an appointment to avoid long wait times and ensure timely service. You can book by phone, in person, or online through our website.',
      category: 'appointments',
      tags: ['appointment', 'psychiatrist', 'psychologist', 'neurologist']
    },
    {
      id: 4,
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment by: Calling us directly at +91 8800833411, Using our online booking portal, or Visiting the hospital\'s reception desk.',
      category: 'appointments',
      tags: ['booking', 'appointment', 'phone', 'online', 'reception']
    },
    {
      id: 5,
      question: 'Do you offer online counselling or teleconsultation services?',
      answer: 'Yes, we provide telepsychiatry and online therapy sessions via secure video or phone calls for patients who prefer remote consultations.',
      category: 'services',
      tags: ['teleconsultation', 'online therapy', 'telepsychiatry', 'remote']
    },
    {
      id: 6,
      question: 'Is treatment confidential?',
      answer: 'Yes, all consultations and records are handled with the utmost confidentiality. Your information is never shared without your permission unless there\'s a safety concern.',
      category: 'general',
      tags: ['confidentiality', 'privacy', 'records', 'safety']
    },
    {
      id: 7,
      question: 'Do you treat children and senior citizens as well?',
      answer: 'Yes, we have specialists in Child & Adolescent Psychiatry and Geriatric Psychiatry to cater to all age groups.',
      category: 'services',
      tags: ['children', 'adolescents', 'senior citizens', 'age groups']
    },
    {
      id: 8,
      question: 'Do you offer emergency psychiatric care?',
      answer: 'Yes. For urgent mental health concerns, our department works closely with the hospital\'s emergency department to provide 24/7 psychiatric support.',
      category: 'emergency',
      tags: ['emergency', 'urgent', 'psychiatric care', '24/7']
    },
    {
      id: 9,
      question: 'What can I do to take care of my mental health?',
      answer: 'Maintain a regular sleep and meal schedule, Practice yoga, meditation, or exercise, Limit screen and social media time, Stay connected with family and friends, Don\'t hesitate to seek professional help when needed.',
      category: 'general',
      tags: ['self care', 'lifestyle', 'exercise', 'meditation', 'social connection']
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesCategory
  })

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="pt-16 relative">
      {/* Logo Background Watermark */}
      <div className="fixed top-16 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <img src={transparentLogo} alt="AIMAN logo" className="w-96 h-auto" />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700 text-white">
        <div className="absolute inset-0 bg-[#4f439b] opacity-10"></div>
        
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Find answers to common questions about our services, appointments, 
              billing, and more. Can't find what you're looking for? Contact us!
            </p>
          </motion.div>
        </div>
      </section>


      {/* FAQs Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#4f439b] max-w-3xl mx-auto">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#4f439b] pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-[#4f439b] leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#4f439b] mb-2">
                No FAQs found
              </h3>
              <p className="text-[#4f439b]">
                Try adjusting your category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-[#4f439b] max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#4f439b] mb-2">
                Call Us
              </h3>
              <p className="text-[#4f439b] mb-4">
                Speak directly with our support team
              </p>
              <a
                href="tel:+91 88008-334411"
                className="btn-primary inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 88008-334411
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#4f439b] mb-2">
                Email Us
              </h3>
              <p className="text-[#4f439b] mb-4">
                Send us your questions via email
              </p>
              <a
                href="mailto:info@aimanhealth.com"
                className="btn-primary inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@aimanhealth.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#4f439b] mb-2">
                Visit Us
              </h3>
              <p className="text-[#4f439b] mb-4">
                Come to our hospital for in-person assistance
              </p>
              <a
                href="https://www.google.com/maps/place/AIMAN+-+Ataraxia+Institute+of+Mental+Health+%26+Neurosciences/@28.4385731,77.0511214,17z/data=!3m1!4b1!4m6!3m5!1s0x390d194351c6b57b:0x18d58b3633d7a68c!8m2!3d28.4385684!4d77.0536963!16s%2Fg%2F11xz8c6t7z?entry=tts&g_ep=EgoyMDI1MTAxMi4wIPu8ASoASAFQAw%3D%3D&skid=d3bffdf1-7ee6-450d-8ad0-2264aac7c73b"
                className="btn-primary inline-flex items-center"
              >
                <Clock className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default FAQs
