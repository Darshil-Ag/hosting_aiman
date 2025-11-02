import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Brain, 
  Baby, 
  Zap, 
  Shield,
  ArrowRight,
  Clock,
  Users,
  Phone,
  CheckCircle,
  MapPin,
  Building,
  Calendar
} from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'

const OurServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'medical', name: 'Medical' },
    { id: 'surgical', name: 'Surgical' },
    { id: 'emergency', name: 'Emergency' },
    { id: 'specialty', name: 'Specialty' }
  ]

  const services = [
    {
      id: 'opd-services',
      name: 'OPD (Outpatient Department) Services',
      category: 'medical',
      icon: Users,
      description: 'Outpatient consultations for mental health assessments, therapy sessions, and follow-up care.',
      services: [
        'Initial Consultations',
        'Follow-up Appointments',
        'Therapy Sessions',
        'Assessment Services',
        'Medication Management'
      ],
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'ipd-services',
      name: 'IPD (Inpatient Department) Services',
      category: 'medical',
      icon: Building,
      description: 'Inpatient mental health care with 24/7 monitoring and intensive therapeutic interventions.',
      services: [
        'Inpatient Care',
        'Intensive Therapy',
        'Crisis Management',
        'Rehabilitation',
        'Structured Programs'
      ],
      availability: '24/7',
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'emergency-mental-health',
      name: '24/7 Emergency Mental Health Services',
      category: 'emergency',
      icon: Zap,
      description: '24/7 emergency mental health services for crisis situations and urgent psychiatric care.',
      services: [
        'Crisis Intervention',
        'Emergency Care',
        'Suicide Prevention',
        'Mental Health Triage',
        'Emergency Counseling'
      ],
      availability: '24/7',
      color: 'from-red-600 to-red-500',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'clinical-psychology',
      name: 'Clinical Psychology and Therapy Services',
      category: 'specialty',
      icon: Heart,
      description: 'Psychological assessment, therapy, and counseling services for various mental health conditions.',
      services: [
        'Psychological Assessment',
        'Individual Therapy',
        'Group Therapy',
        'Cognitive Behavioral Therapy',
        'Counseling Services'
      ],
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'neurology',
      name: 'Neurology Services',
      category: 'specialty',
      icon: Brain,
      description: 'Neurological assessment and treatment for brain, spinal cord, and nervous system disorders.',
      services: [
        'Neurological Assessment',
        'Brain Disorder Treatment',
        'Neurological Rehabilitation',
        'Cognitive Assessment',
        'Neurological Monitoring'
      ],
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-indigo-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'deaddiction-rehab',
      name: 'De-addiction and Rehabilitation Services',
      category: 'specialty',
      icon: Shield,
      description: 'Comprehensive addiction treatment and rehabilitation programs for substance abuse recovery.',
      services: [
        'Detoxification',
        'Addiction Counseling',
        'Rehabilitation Programs',
        'Relapse Prevention',
        'Family Support'
      ],
      availability: 'Mon-Sat 8AM-8PM',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'child-adolescent',
      name: 'Child and Adolescent Mental Health Services',
      category: 'specialty',
      icon: Baby,
      description: 'Specialized mental health services for children and adolescents with developmental and behavioral concerns.',
      services: [
        'Child Psychology',
        'Adolescent Counseling',
        'Family Therapy',
        'Behavioral Interventions',
        'School Support'
      ],
      availability: 'Mon-Fri 9AM-5PM',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'geriatric-mental-health',
      name: 'Geriatric Mental Health Services',
      category: 'specialty',
      icon: Users,
      description: 'Mental health services for elderly patients dealing with age-related mental health conditions.',
      services: [
        'Geriatric Assessment',
        'Dementia Care',
        'Depression Treatment',
        'Cognitive Therapy',
        'Family Counseling'
      ],
      availability: 'Mon-Fri 9AM-5PM',
      color: 'from-gray-600 to-gray-700',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'womens-mental-health',
      name: 'Women\'s Mental Health Services',
      category: 'specialty',
      icon: Heart,
      description: 'Specialized mental health services for women addressing gender-specific mental health concerns.',
      services: [
        'Prenatal Mental Health',
        'Postpartum Support',
        'Menopause Counseling',
        'Trauma Therapy',
        'Women\'s Wellness'
      ],
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-pink-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'sexual-wellness',
      name: 'Sexual Wellness Services',
      category: 'specialty',
      icon: Heart,
      description: 'Sexual wellness is about maintaining a healthy and satisfying sexual life, understanding your body, and fostering safe, respectful relationships. It includes education, counseling, and support to address concerns, improve intimacy, and promote overall physical and mental well-being.',
      services: [
        'Sexual Health Counseling',
        'Relationship Therapy',
        'Intimacy Issues',
        'Sexual Trauma Support',
        'Couples Counseling'
      ],
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-rose-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 'home-visit',
      name: 'Home Visit Services',
      category: 'specialty',
      icon: MapPin,
      description: 'Home visit mental health services bring professional care directly to you, ensuring privacy, comfort, and personalized support. From counseling and therapy to follow-ups and crisis intervention, our experts make mental well-being accessible at your doorstep because emotional health is as important as physical health.',
      services: [
        'Home-based Therapy',
        'Family Counseling',
        'Medication Management',
        'Crisis Intervention',
        'Caregiver Support'
      ],
      availability: 'Mon-Sat 9AM-6PM',
      color: 'from-green-600 to-teal-600',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Comprehensive mental health services across all specialties, 
              delivered with expertise, compassion, and evidence-based care by our dedicated team.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Service Content */}
                  <div className="w-full p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#4f439b] mb-2">
                          {service.name}
                        </h3>
                        <p className="text-[#4f439b] text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>


                    {/* Service Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">

                      <div className="flex space-x-3">
                        <Link to={`/services/${service.id}`} className="btn-outline px-6 py-3 flex items-center space-x-2">
                          <span>Learn More</span>
                        </Link>
                        <Link to="/appointment" className="btn-primary px-6 py-3 inline-flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Book Appointment</span>
                        </Link>
                        <a href="tel:+918800833411" className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-200 flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
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
              Why Choose Our Mental Health Services?
            </h2>
            <p className="text-xl text-[#4f439b] max-w-3xl mx-auto">
              Each service is designed to provide specialized mental health care with 
              evidence-based treatments and expert mental health professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Expert Specialists',
                description: 'Board-certified doctors with years of experience in their respective fields'
              },
              {
                icon: Clock,
                title: 'Quick Access',
                description: 'Minimal wait times and efficient appointment scheduling'
              },
              {
                icon: Heart,
                title: 'Patient-Centered',
                description: 'Personalized care plans tailored to individual patient needs'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(feature.icon, { className: "w-8 h-8 text-primary-600" })}
                </div>
                <h3 className="text-xl font-semibold text-[#4f439b] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#4f439b]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurServices
