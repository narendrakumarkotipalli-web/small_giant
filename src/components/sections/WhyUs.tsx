import Link from 'next/link'
import { TrendingUp, Clock, HeartHandshake, Shield, ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Growth-Focused',
    description: 'Every solution we build is designed to scale with your business growth and evolving needs.',
  },
  {
    icon: <Clock size={24} />,
    title: 'On-Time Delivery',
    description: 'We respect your timelines. Our team ensures project milestones are met without compromise.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Long-Term Partnership',
    description: 'We act as your extended team — building relationships that last beyond project completion.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Security-First',
    description: 'Enterprise-grade security practices embedded into every solution we design and deliver.',
  },
]

export function WhyUs() {
  return (
    <section
      className="py-24 lg:py-32 bg-bg relative overflow-hidden"
      aria-label="Why choose Small Giant"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-0"
        style={{ background: 'radial-gradient(circle, rgba(184,115,51,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: Heading + CTA */}
          <div className="reveal">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-heading mb-4">
              The Small Giant Difference
            </h2>
            <div className="copper-divider mb-6" />
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
              We combine the agility of a small team with the capabilities of a large organization. Our deep commitment to quality and client success sets us apart.
            </p>
            <Link href="/#contact" className="btn-primary">
              Work With Us
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Reason cards */}
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(r => (
              <div
                key={r.title}
                className="card p-6 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--copper)]"
                  style={{ background: 'rgba(184,115,51,0.1)', color: '#B87333' }}
                >
                  {r.icon}
                </div>
                <h3 className="font-display text-base font-700 text-[var(--fg)] mb-2">{r.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
