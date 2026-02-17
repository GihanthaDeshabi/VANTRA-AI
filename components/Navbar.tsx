// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Close menu when clicking nav links
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '#features', label: 'Features', hasDropdown: false },
    { href: '#use-cases', label: 'Use cases', hasDropdown: true },
    { href: '#pricing', label: 'Pricing', hasDropdown: false },
    { href: '#blog', label: 'Blog', hasDropdown: false },
    { href: '#about', label: 'About', hasDropdown: false },
  ]

  return (
    <header className="sticky top-0 z-50 bg-vanta-black border-b border-vanta-gray-800 shadow-sm">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo lockup */}
        <div className="flex items-center gap-2.5 z-50">
          <Image
            src="/logoo.avif"
            alt="Vanta logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-[18px] font-light text-white tracking-tight">
            Vanta
          </span>
        </div>

        {/* Desktop Nav links */}
        <ul className="hidden lg:flex items-center gap-8 ml-auto mr-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-1 text-[14.5px] font-mono text-vanta-gray-100 hover:text-white transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-70"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden z-50 flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-vanta-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open menu</span>
          {/* Animated hamburger icon */}
          <div className="relative w-5 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[72px] right-0 bottom-0 w-full max-w-sm bg-vanta-black border-l border-vanta-gray-800 z-40 lg:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile nav links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-mono text-vanta-gray-100 hover:text-white hover:bg-vanta-gray-800 transition-all"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="opacity-70"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA section (optional) */}
            {/* <div className="mt-8 pt-8 border-t border-vanta-gray-800 space-y-3">
              <button className="w-full h-12 px-6 rounded-full bg-white text-vanta-black text-[15px] font-medium shadow-md hover:bg-gray-100 transition-all">
                Buy template
              </button>
              <button className="w-full h-12 px-6 rounded-full bg-vanta-gray-800 text-vanta-gray-100 text-[15px] font-medium border border-vanta-gray-600 hover:bg-vanta-gray-700 transition-all">
                Start here
              </button>
            </div> */}
          </nav>

          {/* Mobile menu footer (optional) */}
          <div className="px-6 py-4 border-t border-vanta-gray-800">
            <p className="text-xs text-vanta-gray-300 text-center">
              © 2026 Vanta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}