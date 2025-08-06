'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Wish = {
  id: number
  name: string
  message: string
  date: string
  attendance: 'Hadir' | 'Tidak Hadir'
}

// Sample data - in real application, this would come from a database
const initialWishes: Wish[] = [
  {
    id: 1,
    name: 'Ahmad',
    message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.',
    date: '2024-12-30',
    attendance: 'Hadir'
  },
  {
    id: 2,
    name: 'Sarah',
    message: 'Congratulations! Wishing you a lifetime of love and happiness.',
    date: '2024-12-29',
    attendance: 'Hadir'
  }
]

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes)
  const [newWish, setNewWish] = useState({
    name: '',
    message: '',
    attendance: 'Hadir' as 'Hadir' | 'Tidak Hadir'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const wish: Wish = {
        id: wishes.length + 1,
        ...newWish,
        date: new Date().toISOString().split('T')[0]
      }
      setWishes([wish, ...wishes])
      setNewWish({
        name: '',
        message: '',
        attendance: 'Hadir'
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-serif mb-16">
          Wishes & Greetings
        </h2>

        {/* Wish Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={newWish.name}
                onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={newWish.message}
                onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="attendance" className="block text-sm font-medium text-gray-700">
                Attendance
              </label>
              <select
                id="attendance"
                value={newWish.attendance}
                onChange={(e) => setNewWish({ ...newWish, attendance: e.target.value as 'Hadir' | 'Tidak Hadir' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Wish'}
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium">{wish.name}</h3>
                  <span className="text-sm text-gray-500">{wish.date}</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  wish.attendance === 'Hadir' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {wish.attendance}
                </span>
              </div>
              <p className="text-gray-600">{wish.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
