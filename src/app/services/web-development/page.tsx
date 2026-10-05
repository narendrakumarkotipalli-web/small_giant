import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Code, Layers, Smartphone, LayoutTemplate } from 'lucide-react'

export const metadata = {
  title: 'Web Applications Development | Small Giant',
  description: 'Secure, scalable, and user-friendly web applications by Small Giant.',
}

export default function WebDevPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--copper)] transition-colors mb-8 text-sm font-500">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        {/* Hero Image */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-12 border border-[var(--border)]" style={{ minHeight: '280px' }}>
          <div className="relative h-[40vw] min-h-[280px] max-h-[480px]">
            <Image
              src="/assets/service_web_dev.jpg"
              alt="Web Applications Development"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="service-hero-overlay absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-3 leading-tight">Web Applications Development</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                We help you build secure, scalable, and user-friendly web applications. From idea to launch, we create custom solutions that deliver real results. We help you with the frontend, backend, databases, and framework.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex gap-5 hover:border-[var(--copper)]/30 transition-colors group">
            <div className="p-4 bg-[var(--copper)]/10 rounded-xl h-fit">
              <Code className="text-[var(--copper)] flex-shrink-0" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-700 mb-2 font-display text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">Fundamentals to Advanced</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">Learn everything from basics to complex architectures.</p>
            </div>
          </div>
          
          <div className="p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex gap-5 hover:border-[var(--copper)]/30 transition-colors group">
            <div className="p-4 bg-[var(--copper)]/10 rounded-xl h-fit">
              <Layers className="text-[var(--copper)] flex-shrink-0" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-700 mb-2 font-display text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">Practical Learning</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">Gain hands-on experience by working on real projects.</p>
            </div>
          </div>
          
          <div className="p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex gap-5 hover:border-[var(--copper)]/30 transition-colors group">
            <div className="p-4 bg-[var(--copper)]/10 rounded-xl h-fit">
              <LayoutTemplate className="text-[var(--copper)] flex-shrink-0" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-700 mb-2 font-display text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">Industry-Relevant Skills</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">Master the latest tools and technologies.</p>
            </div>
          </div>
          
          <div className="p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex gap-5 hover:border-[var(--copper)]/30 transition-colors group">
            <div className="p-4 bg-[var(--copper)]/10 rounded-xl h-fit">
              <Smartphone className="text-[var(--copper)] flex-shrink-0" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-700 mb-2 font-display text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">Expert Guidance</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">Learn from professionals with real-world expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
