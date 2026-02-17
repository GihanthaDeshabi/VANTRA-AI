// components/BottomHero.tsx
'use client'

import Image from 'next/image'

export default function BottomHero() {
  const tags = [
    'Creative writing',
    'Code generation',
    'Analyze data',
    'Brainstorm ideas',
  ]

  const prompts = [
    'Help me write a compelling product description',
    'Generate a React component with TypeScript',
    'Explain quantum computing in simple terms',
    'Create a marketing strategy for a SaaS product',
  ]

  return (
    <section className="relative w-full overflow-hidden bg-black  pt-10">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" 
           style={{ left: 'calc(50% - 640px)' }} 
      />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" 
           style={{ right: 'calc(50% - 640px)' }} 
      />
      {/* Vertical center line continuation */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" />

      {/* Floating demo card */}
      <div className="relative z-10  mx-auto flex max-w-5xl justify-center px-4">
        <div className="w-full  max-w-4xl transform-gpu animate-fadeUp transition-all duration-700 ease-out hover:scale-[1.01] hover:shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
          <div className="animate-floatSlow h-[600px] rounded-sm border border-vanta-gray-400/80 bg-neutral-900/80 px-6 pb-8 pt-6 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-4xl">
            {/* Top bar */}
            <div className="flex items-center justify-between text-xs text-neutral-400">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src="/logoo.avif"
                    alt="Vanta logo"
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
              </div>

              {/* Version pill */}
              <div className="rounded-full bg-neutral-800/80 px-3 py-1 text-[11px] tracking-wide text-neutral-300">
                v-mini →
              </div>

              {/* Avatar */}
              <div className="relative h-6 w-6 overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces"
                  alt="User avatar"
                  fill
                  className="object-cover"
                  sizes="24px"
                />
              </div>
            </div>

            {/* Main heading */}
            <h3 className="mt-8 text-center text-2xl font-light text-neutral-50 sm:text-3xl">
              What can I help with?
            </h3>

            {/* Message input bubble */}
            <div className="relative mt-6 h-[100px] lg:w-[400px] mx-auto overflow-hidden rounded-md border border-neutral-700/80 bg-neutral-800/80 px-5 py-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-300 font-mono">Message to Vanta</span>
                <div className="flex items-center gap-2 ">
                  {/* Icon buttons */}
                  <button className="flex h-7 w-7  items-center justify-center rounded-xl text-neutral-400 transition-colors hover:bg-neutral-700/50 hover:text-neutral-200">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <button className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-700/50 hover:text-neutral-200">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Tags row */}
            <div className="mt-5 flex flex-wrap items-center gap-2 mx-auto max-w-[400px]">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="inline-flex font-light items-center rounded-xl border border-neutral-700/80 bg-neutral-800/80 px-2 py-1 text-[11px] text-neutral-200 transition-colors hover:bg-neutral-700/80"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Example prompts */}
            <div className="mt-6  mx-auto max-w-[400px] font-mono space-y-1.5 border-t border-neutral-800/60 pt-4 text-xs text-neutral-400/80">
              {prompts.map((prompt, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 text-neutral-600">→</span>
                  <span>{prompt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      

      {/* Blurred landscape background */}
      <div className=" relative  w-[1280px]  bottom-0 mx-auto h-56 overflow-hidden">
        {/* Gradient overlay for fade to black */}
        <Image 
        src="/about2.avif"
        alt="Bottom hero background"
        fill
        className="object-cover  object-bottom  opacity-80"
        priority
      />
        
      </div>
    </section>
  )
}