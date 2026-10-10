import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Programmes } from '@/components/sections/Programmes'
import { Partners } from '@/components/sections/Partners'
import { WhyUs } from '@/components/sections/WhyUs'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programmes />
      <Services />
      <WhyUs />
      <Partners />
      <Contact />
    </>
  )
}
