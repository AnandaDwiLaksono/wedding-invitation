'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Wedding Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-4">
          John & Jane
        </h1>
        <p className="text-xl md:text-2xl">
          We are getting married
        </p>
        <p className="text-lg md:text-xl mt-4">
          December 31, 2024
        </p>
      </motion.div>

      <button 
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })
        }}
        className="absolute bottom-8 animate-bounce"
      >
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </button>
    </section>
  )
}
