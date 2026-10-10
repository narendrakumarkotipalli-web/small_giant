import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Expert Team Members' },
]

const trust = [
  { icon: <Shield size={16} />, text: 'ISO-ready compliance' },
  { icon: <Zap size={16} />, text: 'Fast delivery' },
  { icon: <Users size={16} />, text: 'Dedicated support' },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero_bg.jpg"
          alt="Small Giant IT team working in a modern data center"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={85}
        />
        {/* Dark overlay with subtle gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(110deg, rgba(21,26,30,0.93) 0%, rgba(21,26,30,0.72) 55%, rgba(21,26,30,0.85) 100%)',
          }}
        />
        {/* Copper accent glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #B87333, transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-700 tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(184,115,51,0.12)',
              border: '1px solid rgba(184,115,51,0.3)',
              color: '#D4935A',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B87333] animate-pulse" />
            Hyderabad&apos;s Premier IT Solutions Partner
          </div>

          {/* Heading */}
          <h1
            className="font-display text-balance leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 900,
              color: '#F3F0E8',
            }}
          >
            Better Solutions for{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #B87333, #D4935A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Business
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-pretty leading-relaxed mb-10 max-w-2xl"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#B8C0C8',
            }}
          >
            We are a team of talented professionals delivering secure, scalable, and user-friendly web applications, payroll management, infrastructure support, and IT training programs.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-5 mb-10">
            {trust.map(t => (
              <div
                key={t.text}
                className="flex items-center gap-2 text-sm"
                style={{ color: '#8A9198' }}
              >
                <span style={{ color: '#B87333' }}>{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/#contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <Link href="/#services" className="btn-ghost" style={{ color: '#F3F0E8', borderColor: 'rgba(243,240,232,0.2)' }}>
              Explore Services
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'rgba(184,115,51,0.15)', border: '1px solid rgba(184,115,51,0.2)' }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{
                background: 'rgba(21,26,30,0.7)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="font-display font-900 leading-none mb-1"
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  color: '#B87333',
                }}
              >
                {s.value}
              </span>
              <span className="text-xs tracking-wide" style={{ color: '#8A9198' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#4A5258' }}>Scroll</span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, #B87333, transparent)' }}
        />
      </div>
    </section>
  )
}
