import Image from 'next/image'
import { Check, Award, Target, Lightbulb } from 'lucide-react'

const capabilities = [
  'Training & Internships',
  'Payroll Management',
  'Infrastructure Support',
  'Web Applications Development',
  'Technology Training',
  'Corporate Solutions',
]

const pillars = [
  {
    icon: <Award size={20} />,
    title: 'Proven Track Record',
    text: 'Delivering robust business solutions for over a decade.',
  },
  {
    icon: <Target size={20} />,
    title: 'Industry-Aligned',
    text: 'We bridge the gap between learning and real industry needs.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Innovation-Driven',
    text: 'Combining modern technology with strategic business thinking.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-surface"
      aria-label="About Small Giant"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Image side */}
          <div className="relative reveal from-left order-2 lg:order-1">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.18)' }}
            >
              <Image
                src="/assets/about_team.jpg"
                alt="Small Giant team collaborating on IT solutions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                quality={80}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(220deg, rgba(184,115,51,0.25) 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-4 md:-right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl"
              style={{
                background: '#B87333',
                color: '#fff',
                boxShadow: '0 16px 40px rgba(184,115,51,0.35)',
              }}
            >
              <span className="font-display text-3xl font-900 leading-none">10+</span>
              <div className="text-xs leading-tight opacity-90">
                <div className="font-700">Years of</div>
                <div>Experience</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <p className="section-label">About Us</p>
              <h2 className="section-heading mb-4">
                Partners in Growth <br className="hidden sm:block" />& Innovation
              </h2>
              <div className="copper-divider mb-6" />
              <div className="space-y-4 text-[var(--muted)] leading-relaxed mb-8">
                <p>
                  SmallGiant is more than just an IT company — we are your partners in growth and innovation, connecting you with industries and real-world opportunities.
                </p>
                <p>
                  Our mission is to empower individuals and businesses with the right technology to succeed. With a team of experts and a passion for progress, we bridge the gap between learning and industry needs — delivering cost‑effective, innovative, and robust business solutions.
                </p>
              </div>
            </div>

            {/* Capabilities grid */}
            <div className="reveal">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(184,115,51,0.12)' }}
                    >
                      <Check size={11} strokeWidth={3} style={{ color: '#B87333' }} />
                    </div>
                    <span className="text-sm font-medium text-[var(--fg)]">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Value pillars */}
            <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map(p => (
                <div
                  key={p.title}
                  className="rounded-xl p-4"
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'rgba(184,115,51,0.1)', color: '#B87333' }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-sm font-700 text-[var(--fg)] mb-1">{p.title}</h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
