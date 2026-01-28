import { Hero } from "@/components/home/hero"
import { WhyUs } from "@/components/home/why-us"
import { Process } from "@/components/home/process"
import { Guarantees } from "@/components/home/guarantees"
import { Industries } from "@/components/home/industries"
import { FAQ } from "@/components/home/faq"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Process />
      <Guarantees />
      <Industries />
      <FAQ />
      <CTA />
    </>
  )
}
