import React from 'react'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'

const programmes = [
  {
    title: 'M.A.(HISTORY) ANNUAL',
    duration: 'Years',
    badge: 'Annual Curriculum',
    description: 'Comprehensive study of world civilizations, political philosophy, archaeological records, and historiographical methodology.',
    illustration: (
      <div className="relative w-40 h-36 flex items-center justify-center">
        {/* Books & Scroll Base in Warm Copper & Leather Tones */}
        <div className="absolute bottom-2 w-32 h-5 bg-[#8F5A1E] rounded-sm shadow-sm" />
        <div className="absolute bottom-6 w-26 h-4 bg-[#B87333] rounded-sm shadow-sm" />
        {/* Globe Stand & Sphere in Copper & Gold Theme */}
        <svg className="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100" fill="none">
          {/* Base & Axis */}
          <ellipse cx="50" cy="88" rx="20" ry="5" fill="#8F5A1E" />
          <path d="M50 85V75" stroke="#B87333" strokeWidth="4" strokeLinecap="round" />
          <path d="M30 45C30 65 42 75 50 75C58 75 70 65 70 45" stroke="#D4935A" strokeWidth="4" strokeLinecap="round" />
          {/* Globe Sphere in Deep Graphite */}
          <circle cx="50" cy="45" r="26" fill="#1E252B" stroke="#B87333" strokeWidth="1.5" />
          {/* Continents in Rich Copper / Amber */}
          <path d="M40 32C44 32 46 36 43 40C40 44 36 46 32 44C28 42 27 38 31 34C35 30 38 32 40 32Z" fill="#B87333" />
          <path d="M55 30C60 30 63 34 60 38C58 42 53 45 49 43C45 40 48 34 52 32C54 30 55 30 55 30Z" fill="#D4935A" />
          <path d="M45 52C50 50 56 53 58 57C60 61 54 66 48 65C43 64 42 58 45 52Z" fill="#B87333" />
          {/* Latitude & Longitude lines in subtle copper */}
          <ellipse cx="50" cy="45" rx="26" ry="10" stroke="rgba(212,147,90,0.35)" strokeWidth="1.5" />
          <line x1="50" y1="19" x2="50" y2="71" stroke="rgba(212,147,90,0.35)" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
  {
    title: 'M.A.(Yoga Science)(Under S.F.S)',
    duration: '2 Years',
    badge: 'Degree Programme',
    description: 'Holistic curriculum integrating classic yogic philosophy, human anatomy, mental wellness, and clinical physiology.',
    illustration: (
      <div className="relative w-40 h-36 flex items-center justify-center">
        {/* Academic Mortarboard Cap + Scroll with Copper Accents */}
        <svg className="w-36 h-36 drop-shadow-md" viewBox="0 0 120 120" fill="none">
          {/* Diploma Scroll in Ivory with Copper Ribbon */}
          <g transform="translate(10, 55) rotate(-22)">
            <rect x="0" y="0" width="46" height="15" rx="3" fill="#F3F0E8" stroke="#DDD9CE" strokeWidth="1.5" />
            <rect x="18" y="-1" width="10" height="17" fill="#B87333" rx="1" />
            <ellipse cx="46" cy="7.5" rx="3" ry="7.5" fill="#E8E4D8" />
          </g>
          {/* Cap Skull Section in Graphite */}
          <path d="M38 60C38 72 50 78 60 78C70 78 82 72 82 60" fill="#1E252B" />
          {/* Cap Diamond Top */}
          <path d="M60 25L102 46L60 66L18 46L60 25Z" fill="#151A1E" stroke="#3D4A52" strokeWidth="2" />
          {/* Center Button & Copper-Gold Tassel */}
          <circle cx="60" cy="46" r="3.5" fill="#D4935A" />
          <path d="M60 46Q82 54 84 75" stroke="#D4935A" strokeWidth="2.5" fill="none" />
          <rect x="80" y="74" width="8" height="14" rx="2" fill="#B87333" />
        </svg>
      </div>
    ),
  },
  {
    title: 'M.A.ECONOMICS ANNUAL',
    duration: 'Years',
    badge: 'Annual Curriculum',
    description: 'Advanced macroeconomic policies, quantitative econometrics, fiscal analysis, and international market frameworks.',
    illustration: (
      <div className="relative w-40 h-36 flex items-center justify-center">
        {/* Laptop with Analytical Charts in Theme Palette */}
        <svg className="w-36 h-36 drop-shadow-md" viewBox="0 0 120 120" fill="none">
          {/* Laptop Screen Bezel in Graphite */}
          <rect x="22" y="24" width="76" height="52" rx="4" fill="#1E252B" stroke="#3D4A52" strokeWidth="2" />
          {/* Screen Display */}
          <rect x="26" y="28" width="68" height="44" rx="2" fill="#151A1E" />
          {/* Chart Bars in Copper & Gold Theme */}
          <rect x="34" y="52" width="8" height="15" rx="1.5" fill="#8F5A1E" />
          <rect x="46" y="44" width="8" height="23" rx="1.5" fill="#B87333" />
          <rect x="58" y="38" width="8" height="29" rx="1.5" fill="#D4935A" />
          <rect x="70" y="48" width="8" height="19" rx="1.5" fill="#B87333" />
          <rect x="82" y="34" width="8" height="33" rx="1.5" fill="#F3F0E8" />
          {/* Upward Growth Trend Line in Shining Copper */}
          <path d="M38 52L50 44L62 38L74 48L86 34" stroke="#D4935A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Laptop Base */}
          <path d="M14 78L22 76H98L106 78C108 78.5 108 81 106 82H14C12 82 12 78.5 14 78Z" fill="#2E3840" />
          <rect x="50" y="78" width="20" height="2" rx="1" fill="#4B5563" />
        </svg>
      </div>
    ),
  },
]

export function Programmes() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--surface)] transition-colors duration-300" aria-label="Programmes Offered">
      <div className="container-xl max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-label justify-center">Academic Offerings</p>
          <h2 className="section-heading mb-4 text-center">Programmes Offered</h2>
          <div className="copper-divider mx-auto" />
          <p className="mt-4 text-[var(--muted)] text-base max-w-xl mx-auto">
            Comprehensive curriculum crafted to bridge foundational theory with specialized real-world application.
          </p>
        </div>

        {/* Staggered Grid Container */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programmes.map((prog) => (
            <div 
              key={prog.title}
              className="card group relative p-7 md:p-8 flex flex-col items-center justify-between text-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Subtle Copper Top Line Accent on Hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--copper)] to-[var(--copper-l)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Top Row: Duration & Type Badges in Brand Copper */}
              <div className="w-full flex items-center justify-between mb-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                  style={{
                    background: 'rgba(184,115,51,0.12)',
                    border: '1px solid rgba(184,115,51,0.3)',
                    color: '#D4935A',
                  }}
                >
                  <Clock size={12} strokeWidth={2.5} style={{ color: '#B87333' }} />
                  <span>{prog.duration}</span>
                </span>

                <span className="text-[11px] font-medium tracking-wider uppercase text-[var(--muted)]">
                  {prog.badge}
                </span>
              </div>

              {/* Graphic Illustration */}
              <div className="my-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {prog.illustration}
              </div>

              {/* Programme Title */}
              <h3 className="font-display font-bold text-base md:text-lg text-[var(--fg)] text-center mb-2.5 min-h-[2.75rem] flex items-center justify-center tracking-tight leading-snug">
                {prog.title}
              </h3>

              {/* Programme Description */}
              <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-6 line-clamp-3">
                {prog.description}
              </p>

              {/* Know More Action Button in Small Giant Brand Copper */}
              <Link
                href="/#contact"
                className="btn-primary w-full text-xs py-3 px-5 flex items-center justify-center gap-2 uppercase tracking-wider font-bold shadow-md group-hover:shadow-lg cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
