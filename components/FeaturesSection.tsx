// components/FeaturesSection.tsx
'use client'

import React from 'react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Smart optimization',
      description: 'Refine and enhance your prompts with AI-powered suggestions in real time.',
      delay: '0ms',
    },
    {
      id: 2,
      title: 'AI tone control',
      description: 'Switch between formal, playful, bold, or friendly tones instantly.',
      delay: '100ms',
    },
    {
      id: 3,
      title: 'Prompt library',
      description: 'Save, tag, and organize your favorite prompts for quick access.',
      delay: '200ms',
    },
    {
      id: 4,
      title: 'Templates',
      description: 'Get started fast with ready-made prompts for common use cases.',
      delay: '300ms',
    },
  ]

  return (
    <section
      id="features"
      className="relative w-full bg-black py-20 sm:py-24"
    >
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-vanta-gray-400" 
           style={{ left: 'calc(50% - 640px)' }} 
      />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" 
           style={{ right: 'calc(50% - 640px)' }} 
      />
      <div className="mx-auto flex max-w-[900px] flex-col gap-10 px-4 sm:px-2 lg:px-1">
        {/* Header row */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Left: label + heading + description */}
          <div className="flex flex-col">
            <div className="inline-flex items-center self-start rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Features
            </div>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              What you can do with Vanta
            </h2>
            <p className="mt-3 max-w-xl font-mono text-sm text-neutral-400 sm:text-base">
              Level up your prompt workflow with tools built for speed, clarity, and creativity.
            </p>
          </div>

          {/* Right: All features button */}
          <button className="inline-flex font-mono items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2 text-xs font-medium text-neutral-200 transition hover:border-neutral-600 hover:bg-neutral-800">
            All features
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 12 12"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 6h6m0 0L6 3m3 3L6 9"
              />
            </svg>
          </button>
        </div>

        {/* Cards grid */}
        <div className="relative overflow-hidden rounded-sm border border-vanta-gray-400 bg-black">
          <div className="grid grid-cols-1 divide-y divide-vanta-gray-400/60 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {/* Card 1 - Smart optimization */}
            <div
              className="group font-mono flex flex-col opacity-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-neutral-900/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.8)] animate-features-fade-up"
              style={{ animationDelay: features[0].delay }}
            >
              {/* Preview area */}
              <div className="flex min-h-[360px] flex-col justify-between bg-neutral-700/80 p-6">
                {/* Quote icon */}
                <svg
                  className="h-8 w-8 text-neutral-600"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                </svg>

                {/* Highlighted text block */}
                <div className="my-4 space-y-2 text-sm text-neutral-300">
                  <p>
                    Create a compelling product description that{' '}
                    <span className="rounded-sm bg-neutral-700 px-1">
                      highlights key benefits
                    </span>{' '}
                    and resonates with our target audience.
                  </p>
                </div>

                {/* CTA button */}
                <button className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-vanta-sand px-4 py-2 text-xs font-medium text-neutral-900 shadow-lg shadow-black/40 backdrop-blur transition hover:bg-vanta-sand/90">
                  Optimize with Vanta
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 12 12" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h6m0 0L6 3m3 3L6 9" />
                  </svg>
                </button>
              </div>

              {/* Bottom text */}
              <div className="bg-black px-6 py-5">
                <h3 className="text-base font-semibold text-white">
                  {features[0].title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {features[0].description}
                </p>
              </div>
            </div>

            {/* Card 2 - AI tone control */}
            <div
              className="group font-mono flex flex-col opacity-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-neutral-900/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.8)] animate-features-fade-up"
              style={{ animationDelay: features[1].delay }}
            >
              {/* Preview area */}
              <div className="relative flex min-h-[360px] items-center justify-center bg-neutral-900/80 p-6">
                {/* Horizontal line */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-vanta-gray-400/80" />
                {/* Vertical line */}
                <div className="absolute bottom-0 left-1/2 top-0 w-px bg-vanta-gray-400" />

                {/* Center circle */}
                <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-vanta-gray-400 bg-black">
                  <span className="text-center text-xs text-neutral-300">
                    Let's get
                    <br />
                    started
                  </span>
                </div>

                {/* Labels at line ends */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500">
                  Formal
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500">
                  Playful
                </span>
                <span className="absolute left-1/2 top-4 -translate-x-1/2 text-xs text-neutral-500">
                  Bold
                </span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-neutral-500">
                  Friendly
                </span>
              </div>

              {/* Bottom text */}
              <div className="bg-black px-6 py-5">
                <h3 className="text-base font-semibold text-white">
                  {features[1].title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {features[1].description}
                </p>
              </div>
            </div>

            {/* Card 3 - Prompt library */}
            <div
              className="group font-mono flex flex-col opacity-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-neutral-900/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.8)] animate-features-fade-up"
              style={{ animationDelay: features[2].delay }}
            >
              {/* Preview area */}
              <div className="flex min-h-[360px] flex-col bg-neutral-700/80 p-6">
                {/* Logo icon */}
                <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 border border-vanta-gray-400">
                  <svg className="h-4 w-4 text-neutral-400" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="6" />
                    <circle cx="8" cy="8" r="2" fill="#000" />
                  </svg>
                </div>

                {/* Menu items */}
                <nav className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                    <span>New chat</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                    <span>Search chat</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>Library</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                    <span>Favorites</span>
                  </div>
                  
                  {/* Tags */}
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>#</span>
                      <span>creative-writing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>#</span>
                      <span>code-gen</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>#</span>
                      <span>marketing</span>
                    </div>
                  </div>
                </nav>
              </div>

              {/* Bottom text */}
              <div className="bg-black px-6 py-5">
                <h3 className="text-base font-semibold text-white">
                  {features[2].title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {features[2].description}
                </p>
              </div>
            </div>

            {/* Card 4 - Templates */}
            <div
              className="group font-mono flex flex-col opacity-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-neutral-900/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.8)] animate-features-fade-up"
              style={{ animationDelay: features[3].delay }}
            >
              {/* Preview area */}
              <div className="flex min-h-[360px] flex-col justify-between bg-neutral-900/80 p-6">
                {/* Tabs */}
                <div className="flex gap-1 border-b border-vanta-gray-400/50 pb-2">
                  <button className="rounded-md bg-neutral-800 px-3 py-1 text-xs text-neutral-200">
                    Image
                  </button>
                  <button className="px-3 py-1 text-xs text-neutral-500">
                    Prompt
                  </button>
                  <button className="px-3 py-1 text-xs text-neutral-500">
                    Workflow
                  </button>
                </div>

                {/* Chat content */}
                <div className="my-4 flex flex-col gap-3">
                  <div className="self-end max-w-[85%] rounded-2xl rounded-tr-sm bg-neutral-800 px-4 py-2.5 text-xs text-neutral-200">
                    Create a minimal logo for a tech startup that conveys innovation and trust
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-neutral-700 flex items-center justify-center text-[10px]">
                      V
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-neutral-800/50 px-4 py-2.5 text-xs text-neutral-300">
                      I'll help you create that logo...
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-200 border border-vanta-gray-400/50 transition hover:bg-neutral-700">
                  Start
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 12 12" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h6m0 0L6 3m3 3L6 9" />
                  </svg>
                </button>
              </div>

              {/* Bottom text */}
              <div className="bg-black px-6 py-5">
                <h3 className="text-base font-semibold text-white">
                  {features[3].title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection