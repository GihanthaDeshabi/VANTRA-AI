// components/Navbar.tsx
import Image from 'next/image'
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-vanta-black border-b border-vanta-gray-800 shadow-sm">
      <nav className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo lockup */}
        <div className="flex items-center gap-2.5">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            
          </svg>
          <Image
              src="/logoo.avif"
              alt="Vanta logo"
              width={24}
              height={24}
              className="object-contain "
            />
          <span className="text-[18px] font-light text-white tracking-tight">
            Vanta
          </span>
        </div>

        {/* Nav links - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 ml-auto mr-10">
          <li>
            <a 
              href="#features" 
              className="text-[14.5px] font-mono text-vanta-gray-100 hover:text-white transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#use-cases" 
              className="flex items-center gap-1 text-[14.5px] font-mono text-vanta-gray-100 hover:text-white transition-colors"
            >
              Use cases
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="#pricing" 
              className="text-[14.5px] font-mono text-vanta-gray-100 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              className="text-[14.5px] font-mono text-vanta-gray-100 hover:text-white transition-colors"
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-[14.5px] font-mono text-vanta-gray-100 hover:text-white transition-colors"
            >
              About
            </a>
          </li>
        </ul>

        {/* CTA buttons */}
        {/* <div className="flex items-center gap-3">
          <button className="h-10 px-[22px] rounded-full bg-white text-vanta-black text-[14px] font-medium shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-200">
            Buy template
          </button>
          
        </div> */}
      </nav>
    </header>
  )
}