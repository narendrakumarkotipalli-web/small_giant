import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, GraduationCap, Laptop, Users, Target } from 'lucide-react'

export const metadata = {
  title: 'Corporate Training | Small Giant',
  description: 'Industry-ready training to corporate by Small Giant.',
}

export default function CorporateTrainingPage() {
  const points = [
    {
      title: "Industry-Focused Curriculum",
      desc: "Learn the latest technologies and trends tailored for corporate needs.",
      icon: <GraduationCap size={28} className="text-[var(--copper)]" />
    },
    {
      title: "Hands-On Training",
      desc: "Work on real-world projects for practical experience.",
      icon: <Laptop size={28} className="text-[var(--copper)]" />
    },
    {
      title: "Expert Mentorship",
      desc: "Get guidance from seasoned industry professionals.",
      icon: <Users size={28} className="text-[var(--copper)]" />
    },
    {
      title: "Career Readiness",
      desc: "Build skills that enhance employability and corporate value.",
      icon: <Target size={28} className="text-[var(--copper)]" />
    }
  ]

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--copper)] transition-colors mb-8 text-sm font-500">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="relative w-full rounded-3xl overflow-hidden mb-16 border border-[var(--border)]">
          <div className="relative h-[40vw] min-h-[280px] max-h-[480px]">
            <Image
              src="/assets/service_corporate_training.jpg"
              alt="Corporate Training"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="service-hero-overlay absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-3 leading-tight">Corporate Training</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                At SmallGiant, we bring industry-ready training to corporate teams, helping bridge the gap between traditional learning and industry requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] shadow-sm hover:border-[var(--copper)]/30 transition-colors group">
              <div className="flex items-center gap-6 mb-4">
                <div className="p-4 bg-[var(--copper)]/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="font-display text-2xl font-700 text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">{point.title}</h3>
              </div>
              <p className="text-[var(--muted)] leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
