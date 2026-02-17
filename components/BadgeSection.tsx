// components/BadgeSection.tsx
import Image from 'next/image'

export default function BadgeSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
  ]

  const brands = [
    { name: 'AETHER', uppercase: true },
    { name: 'Perfect Days', uppercase: false },
    { name: 'Rasala', uppercase: false },
    { name: 'Chromatic', uppercase: false },
  ]

  return (
    <section className="relative w-full bg-black ">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" 
           style={{ left: 'calc(50% - 640px)' }} 
      />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" 
           style={{ right: 'calc(50% - 640px)' }} 
      />
      {/* Vertical center line */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-vanta-gray-400 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 pb-20 pt-16 text-center">
        {/* Avatar row */}
        <div className="flex justify-center">
          <div className="flex items-center">
            {avatars.map((src, idx) => (
              <div
                key={idx}
                className={`relative h-10 w-10 overflow-hidden rounded-sm gap-2  border-2 border-neutral-800 shadow-lg shadow-black/40 ${
                  idx > 0 ? '-ml-3' : ''
                }`}
              >
                <Image
                  src={src}
                  alt={`User ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trusted text */}
        <p className="mt-4 text-xs font-mono text-vanta-gray-200 sm:text-xs">
          Trusted by 1000+ people from the brands like
        </p>

        {/* Brand names */}
        <div className="mt-6 flex flex-wrap font-mono items-center justify-center gap-x-10 gap-y-3 text-sm text-neutral-100">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className={brand.uppercase ? 'tracking-[0.18em] uppercase' : 'normal-case'}
            >
              {brand.name}
            </span>
          ))}
        </div>

        {/* Horizontal divider */}
        <div className="flex mt-[100px]">
          <div className="h-px w-[1280px] bg-vanta-gray-400" />
        </div>

        {/* Badge heading area */}
        <div className="mt-12">
          {/* BADGE pill */}
          <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950 px-4 py-1 text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
            Badge
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Try it instantly.
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-3 max-w-xl text-sm font-mono text-neutral-400 sm:text-base">
            Build smarter prompts faster — and keep them all in one organized place.
          </p>
        </div>
      </div>
    </section>
  )
}