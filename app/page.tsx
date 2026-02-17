// app/page.tsx (Usage Example)
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BadgeSection from '@/components/BadgeSection'
import BottomHero from '@/components/BottomHero'
import FeaturesSection from '@/components/FeaturesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-vanta-black">
      <Navbar />
      <main>
        <Hero />
        <BadgeSection />
        <BottomHero />
        <FeaturesSection />
      </main>
    </div>
  )
}