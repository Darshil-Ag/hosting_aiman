import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  GraduationCap, 
  Users, 
  ArrowLeft,
  Heart,
  Stethoscope,
  CheckCircle,
  FileText
} from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'
import adityaImg from '../photo/aditya.jpg'
import akshitaImg from '../photo/akshita.jpg'
import keshavImg from '../photo/keshav.jpg'
import kiranImg from '../photo/kiran.jpg'
import piyushImg from '../photo/piyush.jpg'
import sangeethaImg from '../photo/sangeetha.jpg'
import pratishthaImg from '../photo/Pratishtha.jpg'

const DoctorProfile = () => {
  const { doctorName } = useParams()
  
  // Hardcoded doctor data
  const doctors = {
    'piyush': {
      id: 'piyush',
      name: 'Dr Piyush Verma',
      specialty: 'Senior Consultant Psychiatrist',
      image: piyushImg,
      experience: '11+ years',
      qualifications: 'MBBS, MD (Psychiatry), PGDMLE',
      email: 'piyush.verma@aimanhealth.com',
      phone: '+91 88008 33411',
      availability: 'Mon-Fri 9AM-5PM, Sat 9AM-1PM',
      description: 'Dr Piyush believe that mental health is for all. As a psychiatrist of more than 11 years of clinical expertise, he has deep compassion to support individuals and their family through their mental health journey. With academic training and experience from PGIMER Rohtak dr Piyush integrate latest scientific findings into ever day psychiatry practice. He actively contribute to ongoing research and medical education. Dr Piyush is also passionate about raising awareness around mental health and reducing stigma.',
      education: [
        'MBBS - Bachelor of Medicine and Bachelor of Surgery',
        'MD Psychiatry - Master of Doctorate in Psychiatry',
        'PGIMER Rohtak - Post Graduate Institute of Medical Education and Research',
        'Additional training in Cognitive Behavioral Therapy'
      ],
      specializations: [
        'General Psychiatry',
        'Mood Disorders',
        'Anxiety Disorders',
        'Psychotic Disorders',
        'Substance Abuse Treatment',
        'Mental Health Advocacy'
      ],
      achievements: [
        'Published 15+ research papers in psychiatric journals',
        'Speaker at national mental health conferences',
        'Award for excellence in patient care',
        'Mental health awareness campaign leader'
      ],
      languages: ['English', 'Hindi'],
      bio: 'Dr. Piyush Verma is a dedicated psychiatrist with over 11 years of experience in mental health care. He completed his medical education from prestigious institutions and has been actively involved in research and medical education. His approach combines evidence-based treatments with compassionate care, focusing on holistic mental health recovery.',
      awards: [
        'Best Psychiatrist Award 2023',
        'Mental Health Excellence Award',
        'Research Excellence Recognition'
      ],
      publications: [
        'Cognitive Behavioral Therapy in Depression Management',
        'Mental Health Stigma Reduction Strategies',
        'Integrated Approach to Psychiatric Care'
      ]
    },
    'sangeeta': {
      id: 'sangeeta',
      name: 'Dr Sangeeta Hatila',
      specialty: 'Consultant Psychiatrist',
      image: sangeethaImg,
      experience: '8+ years',
      qualifications: 'MBBS, MD (Psychiatry)',
      email: 'sangeeta.hatila@aimanhealth.com',
      phone: '+91 88008 33411',
      availability: 'Mon-Fri 10AM-6PM, Sun 10AM-2PM',
      description: 'Dr Sangeeta is dedicated and compassionate psychiatrist with 8 years of extensive experience in diagnosing and treating wide range of mental health conditions. After her MBBS, she did her MD psychiatry from SMS Medical college. She also served as assistant professor in SPMC, Bikaner which equipped her with comprehensive knowledge and skills to deliver high quality care. She has number of publications and academics paper throughout her career. Dr Sangeeta communicate fluently in English, Hindi allowing her to engage effectively with diverse patient population.',
      education: [
        'MBBS - Bachelor of Medicine and Bachelor of Surgery',
        'MD Psychiatry - Master of Doctorate in Psychiatry',
        'SMS Medical College - Sawai Man Singh Medical College',
        'Assistant Professor - SPMC, Bikaner'
      ],
      specializations: [
        'Adult Psychiatry',
        'Women\'s Mental Health',
        'Depression and Anxiety',
        'Bipolar Disorder',
        'Psychiatric Education',
        'Academic Research'
      ],
      achievements: [
        'Assistant Professor at SPMC, Bikaner',
        'Multiple academic publications',
        'Conference presentations on women\'s mental health',
        'Patient satisfaction excellence award'
      ],
      languages: ['English', 'Hindi'],
      bio: 'Dr. Sangeeta Hatila brings 8 years of comprehensive psychiatric experience with a focus on women\'s mental health and academic excellence. Her background in medical education enhances her ability to provide both clinical care and patient education.',
      awards: [
        'Academic Excellence Award',
        'Women\'s Health Advocate Award',
        'Patient Care Excellence Recognition'
      ],
      publications: [
        'Women\'s Mental Health in Rural Settings',
        'Depression Management in Primary Care',
        'Psychiatric Education in Medical Schools'
      ]
    },
    'aditya': {
      id: 'aditya',
      name: 'Dr Aditya Sharma',
      specialty: 'Consultant Psychiatrist',
      image: adityaImg,
      experience: '5+ years',
      qualifications: 'MBBS, MD (Psychiatry)',
      email: 'aditya.sharma@aimanhealth.com',
      phone: '+91 96641 81620',
      availability: 'Mon-Fri 9AM-5PM, Sat 10AM-3PM',
      description: 'Dr Aditya is consultant psychiatrist with strong background in clinical psychiatry and mental health advocacy. After doing his MD from SMS medical college, Dr Aditya had experience of working in IHBAS, Delhi. With over 5 years of experiences he has worked with diverse patient population addressing range of psychiatric disorders. Dr Aditya is actively involved in medical education and academic research.',
      education: [
        'MBBS - Bachelor of Medicine and Bachelor of Surgery',
        'MD Psychiatry - Master of Doctorate in Psychiatry',
        'SMS Medical College - Sawai Man Singh Medical College',
        'IHBAS Delhi - Institute of Human Behaviour and Allied Sciences'
      ],
      specializations: [
        'Clinical Psychiatry',
        'Mental Health Advocacy',
        'Academic Research',
        'Diverse Population Care',
        'Psychiatric Disorders',
        'Medical Education'
      ],
      achievements: [
        'IHBAS Delhi experience',
        'Active in medical education',
        'Academic research contributions',
        'Mental health advocacy work'
      ],
      languages: ['English', 'Hindi'],
      bio: 'Dr. Aditya Sharma is a consultant psychiatrist with a strong foundation in clinical psychiatry and mental health advocacy. His experience at IHBAS Delhi has equipped him with specialized knowledge in treating diverse patient populations.',
      awards: [
        'Clinical Excellence Award',
        'Research Contribution Recognition',
        'Mental Health Advocacy Award'
      ],
      publications: [
        'Clinical Approaches in Psychiatry',
        'Mental Health Advocacy Strategies',
        'Diverse Population Psychiatric Care'
      ]
    },
    'kiran': {
      id: 'kiran',
      name: 'Dr Kiran Bala',
      specialty: 'Senior Consultant Neurologist',
      image: kiranImg,
      experience: '30+ years',
      qualifications: 'MBBS, MD (Medicine), DNB (Neurology)',
      email: 'kiran.bala@aimanhealth.com',
      phone: '+91 88008 33411',
      availability: 'Mon-Fri 8AM-4PM, Sat 8AM-12PM',
      description: 'Dr. Kiran Bala is a highly respected neurologist with over 30 years of experience in the field. Based in Gurgaon, she has built a distinguished career diagnosing and treating a broad spectrum of neurological conditions, earning widespread recognition and trust from both patients and medical professionals. Renowned for her deep clinical expertise and dedication to excellence, Dr. Bala is considered a leading authority in neurology. Her patient-centered approach, marked by compassion and attentiveness, ensures that every individual receives personalized care tailored to their unique needs.',
      education: [
        'MBBS - Bachelor of Medicine and Bachelor of Surgery',
        'MD Neurology - Master of Doctorate in Neurology',
        'DM Neurology - Doctorate of Medicine in Neurology',
        'Advanced training in neuroimaging and diagnostics'
      ],
      specializations: [
        'General Neurology',
        'Stroke Management',
        'Epilepsy Treatment',
        'Movement Disorders',
        'Neurodegenerative Diseases',
        'Neurological Diagnostics'
      ],
      achievements: [
        '30+ years of neurological practice',
        'Leading authority in neurology',
        'Extensive experience in stroke management',
        'Mentor to numerous neurologists'
      ],
      languages: ['English', 'Hindi'],
      bio: 'Dr. Kiran Bala is a distinguished neurologist with over three decades of experience. Her expertise spans across various neurological conditions, with particular excellence in stroke management and neurodegenerative diseases.',
      awards: [
        'Lifetime Achievement Award in Neurology',
        'Excellence in Patient Care Award',
        'Mentorship Excellence Recognition'
      ],
      publications: [
        'Advanced Stroke Management Techniques',
        'Neurodegenerative Disease Management',
        'Neurological Diagnostic Approaches'
      ]
    },
    'akshita': {
      id: 'akshita',
      name: 'Ms Akshita Shukla',
      specialty: 'Senior Consultant Clinical Psychologist',
      image: akshitaImg,
      experience: '5+',
      qualifications: 'MSc, MPhil',
      email: 'akshita.shukla@aimanhealth.com',
      phone: '+91 88008 33411',
      availability: 'Mon-Fri 10AM-6PM, Sat 9AM-2PM',
      description: 'Committed to create safe spaces for healing, Miss Akshita received her clinical psychology and M.phil degree from Amity university, Noida. She has worked extensively in assessment, therapy of individuals. She provides tailored integrative care in various psychiatric disorders.',
      education: [
        'M.Phil Clinical Psychology - Master of Philosophy in Clinical Psychology',
        'Amity University Noida - Clinical Psychology Program',
        'Additional training in psychological assessment',
        'Specialized training in therapy techniques'
      ],
      specializations: [
        'Clinical Psychology',
        'Psychological Assessment',
        'Individual Therapy',
        'Integrative Care',
        'Psychiatric Disorder Support',
        'Therapeutic Interventions'
      ],
      achievements: [
        'Extensive experience in psychological assessment',
        'Specialized in individual therapy',
        'Integrative care approach',
        'Safe healing environment creation'
      ],
      languages: ['English', 'Hindi'],
      bio: 'Miss Akshita Shukla is a dedicated clinical psychologist committed to creating safe spaces for healing. Her approach combines psychological assessment with tailored therapeutic interventions for comprehensive mental health care.',
      awards: [
        'Clinical Psychology Excellence Award',
        'Therapeutic Care Recognition',
        'Patient Safety Advocate Award'
      ],
      publications: [
        'Psychological Assessment Techniques',
        'Integrative Care Approaches',
        'Safe Therapeutic Environments'
      ]
    },
    'keshav': {
      id: 'keshav',
      name: 'Ms Keshav Sharma',
      specialty: 'Consultant Psycho-Oncologist',
      image: keshavImg,
      experience: '8+',
      qualifications: 'MA, MPhil',
      email: 'keshav.sharma@aimanhealth.com',
      phone: '+91 88008 33411',
      availability: 'Mon-Fri 9AM-5PM, Sun 10AM-4PM',
      description: 'With years of clinical expertise, Miss Keshav is dedicated to provide compassionate health care. She hold master of science in clinical psychology from university of Jammu and Kashmir. She specialise in grief counselling and psycho-oncology. She works with individuals of all age group.',
      education: [
        'M.Sc Clinical Psychology - Master of Science in Clinical Psychology',
        'University of Jammu and Kashmir - Clinical Psychology Program',
        'Specialized training in grief counseling',
        'Advanced training in psycho-oncology'
      ],
      specializations: [
        'Clinical Psychology',
        'Grief Counseling',
        'Psycho-oncology',
        'All Age Group Care',
        'Compassionate Healthcare',
        'Therapeutic Support'
      ],
      achievements: [
        'Specialized in grief counseling',
        'Expertise in psycho-oncology',
        'All age group experience',
        'Compassionate care approach'
      ],
      languages: ['English', 'Hindi'],
      bio: 'Miss Keshav Sharma is a compassionate clinical psychologist with specialized expertise in grief counseling and psycho-oncology. Her approach focuses on providing emotional support across all age groups.',
      awards: [
        'Grief Counseling Excellence Award',
        'Psycho-oncology Specialist Recognition',
        'Compassionate Care Award'
      ],
      publications: [
        'Grief Counseling Techniques',
        'Psycho-oncology Support Strategies',
        'Age-Appropriate Therapeutic Approaches'
      ]
    },
    'pratishtha': {
      id: 'pratishtha',
      name: 'Ms Pratishtha',
      specialty: 'Consultant Clinical Psychologist',
      image: pratishthaImg,
      experience: '3+ years',
      qualifications: 'BA, MA & M.Phil in Clinical Psychology (VIMHANS)',
      email: 'pratishtha@aimanhealth.com',
      phone: '+91 98765 43216',
      availability: 'Mon-Sat 10AM-6PM',
      description: 'Ms. Pratishtha is a clinical psychologist dedicated to ethical, evidence-based, and client-centered mental health care. Having completed her Graduation, Master’s, and M.Phil in Clinical Psychology, she offers structured, compassionate, and goal-oriented therapeutic services. Her comprehensive training at VIMHANS provided extensive experience in psychological assessment, case formulation, and integrative therapeutic interventions across diverse clinical populations.',
      education: [
        'Graduation in Psychology',
        'Master’s in Clinical Psychology',
        'M.Phil in Clinical Psychology',
        'Advanced clinical training at VIMHANS'
      ],
      specializations: [
        'Stress & Anxiety Disorders',
        'Depressive Disorders',
        'Obsessive-Compulsive Disorder (OCD)',
        'Substance Use Concerns',
        'Personality-related Difficulties',
        'Relationship & Interpersonal Issues',
        'Anger & Emotional Regulation Challenges',
        'Adjustment & Grief-related Issues',
        'Bipolar & Mood Disorders'
      ],
      achievements: [
        'Extensive psychological assessment experience at VIMHANS',
        'Known for structured, goal-oriented therapeutic plans',
        'Integrates multiple evidence-based modalities for complex cases'
      ],
      languages: ['English', 'Hindi'],
      bio: 'Ms Pratishtha provides an integrative, trauma-informed therapeutic space for adolescents, young adults, and middle-aged individuals. She empowers clients to build resilience, develop adaptive coping strategies, and pursue sustainable emotional well-being through CBT, DBT, ACT, MET, and other collaborative frameworks.',
      awards: [],
      publications: [],
      therapeuticApproach: [
        'Cognitive Behavioral Therapy (CBT)',
        'Dialectical Behavior Therapy (DBT)',
        'Acceptance and Commitment Therapy (ACT)',
        'Motivational Enhancement Therapy (MET)',
        'Trauma-Informed Therapy',
        'Integrative, client-sensitive frameworks'
      ]
    }
  }

  const doctor = doctors[doctorName]

  if (!doctor) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-8">The doctor you're looking for doesn't exist.</p>
          <Link to="/our-experts" className="btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Our Experts
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 lg:pt-24 relative">
      {/* Logo Background Watermark */}
      <div className="fixed top-16 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <img src={transparentLogo} alt="AIMAN logo" className="w-96 h-auto" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700 text-white">
        <div className="absolute inset-0 bg-[#4f439b] opacity-10"></div>
        
        <div className="relative z-10 container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Doctor Image */}
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {doctor.name}
                </h1>
                <p className="text-xl md:text-2xl text-purple-100 mb-4">
                  {doctor.specialty}
                </p>
                <p className="text-lg text-purple-200 mb-6 max-w-3xl">
                  {doctor.bio}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/appointment"
                    className="bg-white text-primary-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center text-lg hover:scale-105 transform"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Appointment with {doctor.name.split(' ')[1]}
                  </Link>
                  <Link
                    to="/our-experts"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center hover:scale-105 transform"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Experts
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-primary-600" />
                  About Dr. {doctor.name.split(' ')[1]}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {doctor.description}
                </p>
              </motion.div>


              {/* Clinical Expertise */}
              {doctor.specializations && doctor.specializations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Stethoscope className="w-6 h-6 mr-3 text-primary-600" />
                    Clinical Expertise
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {doctor.specializations.map((spec, index) => (
                      <div key={index} className="bg-primary-50 px-4 py-3 rounded-lg">
                        <span className="text-primary-700 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Therapeutic Approaches */}
              {doctor.therapeuticApproach && doctor.therapeuticApproach.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-primary-600" />
                    Therapeutic Approaches
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {doctor.therapeuticApproach.map((approach, index) => (
                      <div key={index} className="bg-white border border-primary-100 px-4 py-3 rounded-lg flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{approach}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              { <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                                    <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-600">{doctor.phone}</span>
                  </div>
                </div>
              </motion.div> }

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Experience</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {doctor.experience}
                  </div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language, index) => (
                    <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {language}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Awards */}
              {/* {doctor.awards && doctor.awards.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Awards & Recognition</h3>
                  <ul className="space-y-2">
                    {doctor.awards.map((award, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{award}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )} */}

              {/* Book Appointment CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="card bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Book?</h3>
                  <p className="text-gray-600 mb-6">
                    Schedule an appointment with <strong>{doctor.name}</strong> today.
                  </p>
                  <Link
                    to="/appointment"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-lg hover:scale-105 transform"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book with {doctor.name.includes('Akshita') || doctor.name.includes('Keshav') || doctor.name.includes('Pratishtha') ? 'Miss' : 'Dr.'} {doctor.name.split(' ')[1]}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorProfile