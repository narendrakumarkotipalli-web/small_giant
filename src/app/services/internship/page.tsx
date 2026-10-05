import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Target, Lightbulb, Users } from 'lucide-react'

export const metadata = {
  title: 'Internship | Small Giant',
  description: 'Internship programs by Small Giant.',
}

export default function InternshipPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--copper)] transition-colors mb-8 text-sm font-500">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="relative w-full rounded-3xl overflow-hidden mb-12 border border-[var(--border)]">
          <div className="relative h-[40vw] min-h-[280px] max-h-[480px]">
            <Image
              src="/assets/service_internship.jpg"
              alt="Internship Programs"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="service-hero-overlay absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <div className="w-12 h-12 bg-[var(--copper)]/20 rounded-xl flex items-center justify-center text-[var(--copper)] mb-4 border border-[var(--copper)]/30">
                <Target size={24} />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-3 leading-tight">Internship Programs</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                Kickstart your career with our internship programs, designed to give you hands-on experience in the IT industry. We provide the perfect launchpad for your professional journey.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-[var(--surface)] rounded-3xl border border-[var(--border)] hover:border-[var(--copper)]/30 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[var(--copper)]/10 rounded-xl group-hover:scale-110 transition-transform">
                <Lightbulb className="text-[var(--copper)]" size={28} />
              </div>
              <h3 className="font-display text-2xl font-700 text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">Real-World Projects</h3>
            </div>
            <p className="text-[var(--muted)] leading-relaxed">Work on live industry projects that matter. Build your portfolio with practical experience that employers look for.</p>
          </div>
          
          <div className="p-8 bg-[var(--surface)] rounded-3xl border border-[var(--border)] hover:border-[var(--copper)]/30 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[var(--copper)]/10 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="text-[var(--copper)]" size={28} />
              </div>
              <h3 className="font-display text-2xl font-700 text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">Expert Mentorship</h3>
            </div>
            <p className="text-[var(--muted)] leading-relaxed">Learn directly from seasoned IT professionals who guide you through complex challenges and career decisions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
