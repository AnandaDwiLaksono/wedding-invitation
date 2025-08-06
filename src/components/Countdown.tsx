'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WEDDING_DATE = new Date('2024-12-31T00:00:00')

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = WEDDING_DATE.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-serif mb-12">
          Counting Down to Our Special Day
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <CountdownItem label="Days" value={timeLeft.days} />
          <CountdownItem label="Hours" value={timeLeft.hours} />
          <CountdownItem label="Minutes" value={timeLeft.minutes} />
          <CountdownItem label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  )
}

function CountdownItem({ label, value }: { label: string; value: number }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center p-4"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary">
        {value}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </motion.div>
  )
}
