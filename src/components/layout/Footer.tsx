'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

const footerServices = [
  'Payroll Outsourcing',
  'Infrastructure Support',
  'Web Applications',
  'Training & Internship',
  'Corporate Training',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#151A1E] text-[#F3F0E8]">
      {/* Top bar accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#B87333] to-transparent" />

      <div className="container-xl py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="Small Giant Home">
              <div className="relative w-10 h-10">
                <Image
                  src="/HeaderLogo.png"
                  alt="Small Giant logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-700 tracking-tight">
                Small <span style={{ color: '#B87333' }}>Giant</span>
              </span>
            </Link>
            <p className="text-sm text-[#8A9198] leading-relaxed mb-6 max-w-xs">
              A total IT Solutions and Software Services Development company — providing cost‑effective, innovative, and robust business solutions.
            </p>
            <div className="space-y-2.5 text-sm text-[#8A9198]">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#B87333]" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0 text-[#B87333]" />
                <a href="tel:+919515964548" className="hover:text-[#B87333] transition-colors">+91 9515 9645 48</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="flex-shrink-0 text-[#B87333]" />
                <a href="mailto:support@smallgiant.in" className="hover:text-[#B87333] transition-colors">support@smallgiant.in</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-700 tracking-wider uppercase text-[#B87333] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8A9198] hover:text-[#B87333] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-0.5 bg-[#8A9198] group-hover:bg-[#B87333] group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-700 tracking-wider uppercase text-[#B87333] mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map(s => (
                <li key={s}>
                  <span className="text-sm text-[#8A9198] inline-flex items-center gap-1.5 group">
                    <span className="w-3 h-0.5 bg-[#8A9198]" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-sm font-700 tracking-wider uppercase text-[#B87333] mb-4">Get In Touch</h4>
            <p className="text-sm text-[#8A9198] leading-relaxed mb-5">
              Ready to transform your business? Let&apos;s talk about your requirements.
            </p>
            <Link href="/#contact" className="btn-primary text-sm px-5 py-2.5">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5258]"
          style={{ borderTop: '1px solid #2E3840' }}
        >
          <p>© {year} <strong className="text-[#8A9198]">Small Giant IT Solution</strong>. All Rights Reserved.</p>
          <p>Designed &amp; Built by Small Giant</p>
        </div>
      </div>
    </footer>
  )
}
