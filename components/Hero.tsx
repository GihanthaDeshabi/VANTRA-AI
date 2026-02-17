// components/Hero.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentTime, setCurrentTime] = useState<string>('')

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const displayHours = hours % 12 || 12
      const displayMinutes = minutes.toString().padStart(2, '0')
      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-72px)] bg-vanta-black flex flex-col items-center ">
      {/* Vertical decorative lines on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" 
           style={{ left: 'calc(50% - 640px)' }} 
      />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" 
           style={{ right: 'calc(50% - 640px)' }} 
      />

      {/* Timeline bar */}
      <div className="w-full flex justify-center mb-[60px]">
        <div className="relative w-full max-w-[1280px] h-[80px] bg-timeline-ticks border-t  border-vanta-gray-400">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px] text-vanta-gray-3
          00 bg-vanta-black px-4 py-0.5 tracking-wider font-mono">
            {currentTime || ''}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center max-w-[1000px] px-8 text-center z-10">
        {/* Overline pill */}
        <div className="inline-block px-4 py-1.5 mb-6 bg-vanta-dark border border-vanta-gray-600 rounded-full text-[11px] font-semibold tracking-extra-wide text-vanta-gray-300 uppercase animate-fade-in-down">
          POWERFUL AI TOOL
        </div>

        {/* Main heading with animation */}
        <h1 className="text-[50px] md:text-[56px] font-light leading-[1.1] text-white mb-5 tracking-tight animate-fade-in-up">
          Think deeper. Dream impossible.
        </h1>

        {/* Subheading with animation */}
        <p className="text-[15px] md:text-[15px] font-mono leading-[1.6] text-vanta-gray-200 max-w-[580px] mb-8 animate-fade-in-up-delay">
          Vanta helps you create, optimize, and organize powerful prompts for tools like ChatGPT and Midjourney.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-20 animate-fade-in-up-delay-2">
          <button className="h-8 px-7 rounded-full bg-white text-vanta-black text-[12px] font-mono shadow-md hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            Start free
          </button>
          <button className="h-8 px-7 rounded-full bg-vanta-gray-800 text-vanta-gray-100 text-[12px] font-mono border border-vanta-gray-600 hover:bg-vanta-gray-700 hover:border-vanta-gray-500 transition-all duration-200">
            Watch demo
          </button>
        </div>
      </div>

      {/* Bottom illustration */}
      <div className="relative w-[1280px] h-[400px] mt-auto overflow-hidden">
        <Image
          src="/hero-illustration.avif"
          alt="Hero illustration"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
    </section>
  )
}