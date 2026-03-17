import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { Problem } from '@/components/sections/Problem'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Stats } from '@/components/sections/Stats'
import { CTA } from '@/components/sections/CTA'
import { Testimonials } from '@/components/sections/Testimonials'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustLogos />
      <Problem />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <Stats />
      <Testimonials />
      <CTA />
      <About />
      <Footer />
    </main>
  )
}
