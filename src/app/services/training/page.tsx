import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, BookOpen, UserCheck, Zap, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Training | Small Giant',
  description: 'Industry-driven training programs by Small Giant.',
}

export default function TrainingPage() {
  const benefits = [
    {
      title: "Hands-on Learning",
      desc: "Work on real projects and case studies.",
      icon: <BookOpen className="w-8 h-8 text-[var(--copper)]" />
    },
    {
      title: "Expert Guidance",
      desc: "Learn from industry professionals with real-world expertise.",
      icon: <UserCheck className="w-8 h-8 text-[var(--copper)]" />
    },
    {
      title: "Latest Technologies",
      desc: "Stay updated with in-demand skills and modern tools.",
      icon: <Zap className="w-8 h-8 text-[var(--copper)]" />
    },
    {
      title: "Career Growth",
      desc: "Gain certifications that boost employability and unlock your potential.",
      icon: <TrendingUp className="w-8 h-8 text-[var(--copper)]" />
    }
  ]

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--copper)] transition-colors mb-8 text-sm font-500">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="relative w-full rounded-3xl overflow-hidden mb-12 border border-[var(--border)]">
          <div className="relative h-[40vw] min-h-[280px] max-h-[480px]">
            <Image
              src="/assets/service_training.jpg"
              alt="Professional Training"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="service-hero-overlay absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-3 leading-tight">Professional Training</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                At SmallGiant, we offer industry-driven training programs that provide practical skills and real-world knowledge. Our courses help individuals stay ahead in the fast-evolving world of technology.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] flex items-start gap-6 shadow-sm hover:border-[var(--copper)]/30 transition-colors group">
              <div className="w-16 h-16 bg-[var(--copper)]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-700 mb-2 font-display text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">{benefit.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative overflow-hidden bg-[var(--surface)] border border-[var(--copper)]/20 p-12 rounded-3xl text-center flex flex-col items-center">
          <div className="absolute inset-0 bg-[var(--copper)]/5" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-800 mb-4 text-[var(--fg)]">Ready to unlock your potential?</h2>
            <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Take the next step in your career with our training programs.
            </p>
            <Link href="/#contact" className="btn-primary text-lg px-8 py-3 shadow-lg shadow-[var(--copper)]/20">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
