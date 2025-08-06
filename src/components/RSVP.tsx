'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    numberOfGuests: 1,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl text-center font-serif mb-8">
            RSVP
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="attendance" 
                className="block text-sm font-medium text-gray-700"
              >
                Will you attend?
              </label>
              <select
                id="attendance"
                value={formData.attendance}
                onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              >
                <option value="">Select an option</option>
                <option value="yes">Yes, I will attend</option>
                <option value="no">No, I cannot attend</option>
              </select>
            </div>

            {formData.attendance === 'yes' && (
              <div>
                <label 
                  htmlFor="guests" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  max="5"
                  value={formData.numberOfGuests}
                  onChange={(e) => setFormData({...formData, numberOfGuests: parseInt(e.target.value)})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            )}

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send RSVP
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
