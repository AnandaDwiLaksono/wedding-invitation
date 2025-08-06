'use client'

import { motion } from 'framer-motion'

const events = [
  {
    title: 'Akad Nikah',
    date: 'December 31, 2024',
    time: '08:00 WIB',
    venue: 'Masjid Al-Akbar',
    address: 'Jl. Masjid No. 1, Jakarta',
    attire: 'Traditional Attire',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Resepsi',
    date: 'December 31, 2024',
    time: '11:00 WIB',
    venue: 'Grand Ballroom Hotel',
    address: 'Jl. Hotel No. 1, Jakarta',
    attire: 'Formal Attire',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    )
  }
]

export default function EventDetails() {
  const addToCalendar = () => {
    // Implement add to calendar functionality
    console.log('Adding to calendar...')
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-serif mb-16">
          Wedding Events
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 rounded-lg shadow-lg bg-white"
            >
              <div className="flex justify-center mb-6 text-primary">
                {event.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
              <div className="space-y-2 mb-6">
                <p className="font-medium">{event.date}</p>
                <p>{event.time}</p>
                <p className="font-medium">{event.venue}</p>
                <p className="text-gray-600">{event.address}</p>
                <p className="text-sm text-gray-500">{event.attire}</p>
              </div>
              <button
                onClick={addToCalendar}
                className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Add to Calendar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
