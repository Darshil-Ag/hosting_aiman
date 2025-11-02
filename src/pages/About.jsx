import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar, 
  Shield, 
  CheckCircle,
  Star,
  Building,
  Stethoscope,
  Clock
} from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'

// Content from content folder
const objective = {
  part1: "At AIMAN, we believe that mental health is just as important as physical health. We are committed to providing compassionate, confidential, and comprehensive care to individuals and families facing emotional and psychological challenges.",
  part2: "Our team of experienced psychiatrists, psychologists, therapists, and support staff are here to support you every step of the way with empathy, respect, and evidence-based treatment tailored to your unique needs.",
  part3: "Whether you're seeking help for anxiety, depression, stress, addiction, or any other mental health concern, you've taken a brave step by being here. You are not alone and recovery is possible. Welcome to a safe space. Welcome to hope. Welcome to healing."
}

const vision = "At AIMAN, we believe that mental health is a right, not a privilege. Our mission is to make quality mental health care accessible to everyone. We are dedicated to breaking barriers of cost, stigma, and accessibility by offering compassionate, professional, and inclusive services that truly put people first. Because mental well-being should not depend on status, it should belong to all."

const slogan = "Mental Health For All"

const fullName = "Ataraxia Institute of Mental Health and Neurosciences"

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Doctors' },
    { icon: Building, number: '200+', label: 'Hospital Beds' },
    { icon: Calendar, number: '25+', label: 'Years of Service' },
    { icon: Heart, number: '50K+', label: 'Patients Served' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every patient with empathy, understanding, and genuine care, ensuring they feel valued and supported throughout their healthcare journey.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of medical care through continuous learning, advanced technology, and evidence-based practices.'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our interactions, maintaining transparency and trust with our patients and community.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge medical technology and innovative treatment approaches to provide the best possible outcomes for our patients.'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'JCI Accredited',
      description: 'Joint Commission International accreditation for quality healthcare standards'
    },
    {
      icon: Star,
      title: 'Best Hospital Award',
      description: 'Recognized as the best multi-specialty hospital in the region for 3 consecutive years'
    },
    {
      icon: Shield,
      title: 'ISO 9001:2015',
      description: 'International quality management system certification'
    },
    {
      icon: CheckCircle,
      title: 'NABH Accredited',
      description: 'National Accreditation Board for Hospitals & Healthcare Providers certification'
    }
  ]

  const timeline = [
    {
      year: '1999',
      title: 'Foundation',
      description: 'AIMAN Hospital was established with a vision to provide comprehensive healthcare services to the community.'
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Added specialized departments including psychiatrist, Neurology, and Mental Health services.'
    },
    {
      year: '2012',
      title: 'Technology Upgrade',
      description: 'Invested in state-of-the-art medical equipment and digital health systems.'
    },
    {
      year: '2018',
      title: 'Recognition',
      description: 'Received multiple awards for excellence in patient care and medical innovation.'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to expand services and embrace new technologies for better patient outcomes.'
    }
  ]

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
              About {fullName}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto mb-4">
              {slogan}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-6">Our Mission</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Illustration Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Premium illustration design */}
                <div className="w-96 h-96 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-3xl flex items-center justify-center shadow-2xl border border-secondary-200">
                  <div className="w-80 h-80 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-secondary-100">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Heart className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-secondary-800 mb-3">Our Mission</h4>
                      <p className="text-secondary-600 font-medium">Healthcare Excellence</p>
                      <div className="mt-6 flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-secondary-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary-300 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-secondary-100 rounded-full"></div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center mb-8">
                  <div>
                    <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-secondary-300 rounded-full"></div>
                  </div>
                </div>

                {/* Mission Content Cards */}
                <div className="space-y-6">
                  {/* Part 1 - Core Belief */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gradient-to-r from-secondary-50 to-white rounded-2xl border border-secondary-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#4f439b] mb-3">Our Core Belief</h4>
                        <p className="text-lg text-[#4f439b] leading-relaxed">
                          {objective.part1}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Part 2 - Team Approach */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gradient-to-r from-secondary-50 to-white rounded-2xl border border-secondary-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#4f439b] mb-3">Our Team Approach</h4>
                        <p className="text-lg text-[#4f439b] leading-relaxed">
                          {objective.part2}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Part 3 - Support & Hope */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gradient-to-r from-secondary-50 to-white rounded-2xl border border-secondary-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#4f439b] mb-3">Support & Hope</h4>
                        <p className="text-lg text-[#4f439b] leading-relaxed">
                          {objective.part3}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-secondary-700 hover:to-secondary-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Heart className="w-5 h-5 mr-3" />
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-6">Our Vision</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Illustration Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Diamond/rhombus design for vision */}
                <div className="w-80 h-80 bg-gradient-to-br from-secondary-100 to-secondary-200 transform rotate-45 flex items-center justify-center">
                  <div className="w-64 h-64 bg-white transform -rotate-45 flex items-center justify-center shadow-xl">
                    <div className="text-center transform rotate-45">
                      <Eye className="w-20 h-20 text-secondary-600 mx-auto mb-4" />
                      <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary-300 rounded-full opacity-70"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-secondary-400 rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-primary-400 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <div className="max-w-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#4f439b]">Our Vision</h3>
                </div>
                <p className="text-lg text-[#4f439b] leading-relaxed">
                  {vision}
                </p>
                <div className="mt-8 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Hospital Statistics - COMMENTED OUT */}
      {/* <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-[#4f439b] max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust 
              our community places in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(stat.icon, { className: "w-8 h-8 text-primary-600" })}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#4f439b] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Achievements & Certifications - COMMENTED OUT */}
      {/* <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-4">
              Recognition & Certifications
            </h2>
            <p className="text-xl text-[#4f439b] max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading 
              healthcare accreditation bodies and industry organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(achievement.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-[#4f439b] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-[#4f439b] text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story Timeline - COMMENTED OUT */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b] mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-[#4f439b] max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading healthcare provider, 
              here's our story of growth and commitment to excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  <div className="lg:w-1/2">
                    <div className="card">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-primary-600">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#4f439b] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#4f439b]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center text-[#4f439b]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience the AIMAN Difference
            </h2>
            <p className="text-xl mb-8 text-[#4f439b] max-w-3xl mx-auto">
              Experience the AIMAN difference in healthcare excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="bg-primary-600 text-white hover:bg-primary-700 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                Book an Appointment
              </a>
              <a
                href="/contact"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <Clock className="w-5 h-5 mr-2" />
                Visit Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
