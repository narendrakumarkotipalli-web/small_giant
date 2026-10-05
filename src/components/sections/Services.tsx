import Link from 'next/link'
import {
  Calculator,
  Server,
  Code2,
  GraduationCap,
  BarChart3,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: <Calculator size={22} />,
    title: 'Payroll Outsourcing',
    description:
      'Reclaim valuable time and resources with our fast and secure payroll services. Calculate earnings, deduct taxes, and ensure timely payments.',
    href: '/services/payroll',
    accent: '#B87333',
  },
  {
    icon: <Server size={22} />,
    title: 'Infrastructure Support',
    description:
      'Management, maintenance, and optimization of IT infrastructure. Keeping systems secure, efficient, and fully operational around the clock.',
    href: '/services/infrastructure',
    accent: '#B87333',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Web Applications',
    description:
      'Build secure, scalable, and user-friendly web applications tailored to your business. From idea to launch — frontend to backend.',
    href: '/services/web-development',
    accent: '#B87333',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Training & Internship',
    description:
      'Industry-driven training programs offering practical skills. Work on real projects with expert mentorship and career guidance.',
    href: '/services/training',
    accent: '#B87333',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Financial Administration',
    description:
      'Seamless sales management, invoice processing, bank reconciliation, and strategic cash flow management for your business.',
    href: '/services/payroll',
    accent: '#B87333',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Corporate Training',
    description:
      'Industry-ready training for businesses, equipping your team with essential skills to succeed in the fast-evolving tech landscape.',
    href: '/services/corporate-training',
    accent: '#B87333',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ background: '#151A1E' }}
      aria-label="Our services"
    >
      <div className="container-xl">

        {/* Section header */}
        <div className="reveal max-w-2xl mb-16">
          <p className="section-label" style={{ color: '#B87333' }}>
            What We Do
          </p>
          <h2
            className="font-display leading-tight tracking-tight mb-4"
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#F3F0E8',
            }}
          >
            Comprehensive Suite of IT Solutions
          </h2>
          <div className="copper-divider mb-4" />
          <p className="text-[#8A9198] text-lg leading-relaxed">
            Focus on your core business while we handle the complexities of your operations, technology infrastructure, and financial administration.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              aria-label={`Learn more about ${s.title}`}
              className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 block"
              style={{
                background: '#1E252B',
                border: '1px solid #2E3840',
              }}
            >
              {/* Hover background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at 0% 0%, rgba(184,115,51,0.07) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />

              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #B87333, #D4935A, transparent)' }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(184,115,51,0.1)',
                  color: '#B87333',
                }}
              >
                {s.icon}
              </div>

              {/* Content */}
              <h3
                className="font-display text-lg font-700 mb-3 group-hover:text-[#D4935A] transition-colors"
                style={{ color: '#F3F0E8' }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#8A9198' }}>
                {s.description}
              </p>

              {/* Link */}
              <span
                className="inline-flex items-center gap-1.5 text-sm font-600 transition-all duration-200 group-hover:gap-2.5"
                style={{ color: '#B87333' }}
              >
                Learn More
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <Link href="/#contact" className="btn-primary">
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
