import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useData } from '../contexts/DataContext'
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Heart,
  Brain,
  Baby,
  Tag,
  TrendingUp
} from 'lucide-react'
import transparentLogo from '../photo/transparent_logo.png'

const Blog = () => {
  const { blogs, addNewsletterSubscriber } = useData()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Get unique categories from blogs
  const categories = [
    { id: 'all', name: 'All Articles' },
    ...Array.from(new Set(blogs.map(b => b.category)))
      .filter(cat => cat) // Remove empty categories
      .map(category => ({
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category
      }))
  ]

  // Only show published blogs to public
  const publishedBlogs = blogs.filter(blog => blog.published)

  const filteredPosts = publishedBlogs

  const featuredPosts = filteredPosts.slice(0, 2) // Show first 2 as featured
  const regularPosts = filteredPosts.slice(2) // Rest as regular

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const handleNewsletterSubscription = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      addNewsletterSubscriber(email)
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
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
              Health Resources & Blog
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Stay informed with our latest health tips, medical insights, 
              and wellness advice from our expert doctors and healthcare professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      {/* <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            {/* <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            {/* <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-[#4f439b] hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Articles */}
      {/* {featuredPosts.length > 0 && (
        <section className="section-padding bg-primary-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-primary-600" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#4f439b]">
                  Featured Articles
                </h2>
              </div>
              <p className="text-xl text-[#4f439b] max-w-3xl mx-auto">
                Our most popular and important health articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-primary-600 font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-[#4f439b]">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#4f439b] mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-[#4f439b] mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-8 h-8 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-[#4f439b]">
                          {post.author}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-[#4f439b]">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )} */}


      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center text-[#4f439b]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-[#4f439b] max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest health tips, 
              medical insights, and wellness advice delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubscription} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-[#4f439b] focus:ring-2 focus:ring-primary-500 focus:outline-none border border-gray-300"
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary-600 text-white hover:bg-primary-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-600 text-sm mt-2">
                  Thank you for subscribing to our newsletter!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
