'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stories = [
  {
    date: 'January 2020',
    title: 'First Meet',
    description: 'We first met at a coffee shop in downtown. A chance encounter that changed our lives forever.',
    image: '/images/story-1.jpg'
  },
  {
    date: 'June 2020',
    title: 'First Date',
    description: 'Our first official date was at the beach, watching the sunset together.',
    image: '/images/story-2.jpg'
  },
  {
    date: 'December 2020',
    title: 'In Relationship',
    description: 'After months of dating, we officially became a couple.',
    image: '/images/story-3.jpg'
  },
  {
    date: 'February 2024',
    title: 'The Proposal',
    description: 'On a beautiful evening, under the stars, we got engaged.',
    image: '/images/story-4.jpg'
  }
]

export default function LoveStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-serif mb-16">
          Our Love Story
        </h2>

        <div className="max-w-4xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 mb-16 last:mb-0`}
            >
              <div className="flex-1">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-primary mb-2">{story.date}</div>
                <h3 className="text-2xl font-serif mb-4">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
