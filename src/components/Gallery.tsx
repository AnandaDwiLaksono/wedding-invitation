'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Pre-wedding photo 1'
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Pre-wedding photo 2'
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Pre-wedding photo 3'
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Pre-wedding photo 4'
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Pre-wedding photo 5'
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Pre-wedding photo 6'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-serif mb-16">
          Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl mx-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
