'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const accounts = [
  {
    bank: 'Bank BCA',
    number: '1234567890',
    name: 'JOHN SMITH',
    qrCode: '/images/qr-bca.png'
  },
  {
    bank: 'Bank Mandiri',
    number: '0987654321',
    name: 'JANE DOE',
    qrCode: '/images/qr-mandiri.png'
  }
]

export default function DigitalGift() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(text)
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-serif mb-6">
          Digital Gift
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have provided digital options below.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-serif mb-2">{account.bank}</h3>
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={account.qrCode}
                    alt={`QR Code ${account.bank}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-medium mb-1">{account.name}</p>
                <p className="text-gray-600 mb-4">{account.number}</p>
                <button
                  onClick={() => copyToClipboard(account.number)}
                  className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  {copiedAccount === account.number ? (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      Copy Number
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
