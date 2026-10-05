'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'

const contactDetails = [
  {
    icon: <MapPin size={20} />,
    title: 'Our Office',
    value: 'Hyderabad, Telangana, India',
    href: 'https://maps.google.com/?q=Hyderabad+Telangana+India',
  },
  {
    icon: <Phone size={20} />,
    title: 'Call Us',
    value: '+91 9515 9645 48',
    href: 'tel:+919515964548',
  },
  {
    icon: <Mail size={20} />,
    title: 'Email Us',
    value: 'support@smallgiant.in',
    href: 'mailto:support@smallgiant.in',
  },
]

type FormStatus = { type: 'success' | 'error' | null; message: string }

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // 1. Web3Forms submission (if key provided)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (accessKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ access_key: accessKey, name, email, subject, message }),
        })
        const result = await res.json()
        if (!result.success) {
          console.error('Web3Forms error:', result)
        }
      } catch (err) {
        console.error('Web3Forms submission failed:', err)
      }
    }

    // 2. WhatsApp redirect
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919515964548'
    const waText = encodeURIComponent(
      `Hello SmallGiant,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${waText}`, '_blank', 'noopener,noreferrer')

    setFormStatus({
      type: 'success',
      message: 'Thank you! Your message has been sent and you are being redirected to WhatsApp.',
    })
    setIsSubmitting(false)
    form.reset()
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-surface"
      aria-label="Contact Small Giant"
    >
      <div className="container-xl">

        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mx-auto justify-center">Contact Us</p>
          <h2 className="section-heading mb-4">
            Ready to Elevate Your Business?
          </h2>
          <div className="copper-divider mx-auto mb-4" />
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            Join SmallGiant and take the next step toward your goals. If you have any queries, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Contact info panel */}
          <div className="lg:col-span-2">
            <div
              className="h-full rounded-2xl p-8 lg:p-10 reveal from-left"
              style={{ background: '#151A1E', color: '#F3F0E8' }}
            >
              <h3 className="font-display text-xl font-700 text-[#F3F0E8] mb-2">Get in Touch</h3>
              <div className="copper-divider mb-6" />
              <p className="text-sm text-[#8A9198] mb-8 leading-relaxed">
                We are here to help and answer any question you might have. We look forward to hearing from you.
              </p>

              <div className="space-y-6">
                {contactDetails.map(detail => (
                  <a
                    key={detail.title}
                    href={detail.href}
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#B87333]"
                      style={{ background: 'rgba(184,115,51,0.1)', color: '#B87333' }}
                    >
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs font-700 tracking-wider uppercase text-[#4A5258] mb-1">{detail.title}</p>
                      <p className="text-sm text-[#C8CDD2] group-hover:text-[#D4935A] transition-colors">{detail.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp nudge */}
              <div
                className="mt-10 flex items-start gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(184,115,51,0.08)', border: '1px solid rgba(184,115,51,0.2)' }}
              >
                <MessageCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#B87333' }} />
                <p className="text-xs text-[#8A9198] leading-relaxed">
                  Prefer instant chat? After submitting the form you&apos;ll be taken to WhatsApp to continue the conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 reveal from-right">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-8 lg:p-10 h-full"
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="sg-name" className="block text-sm font-600 text-[var(--fg)] mb-2">
                    Your Name <span style={{ color: '#B87333' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="sg-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200"
                    style={{
                      background: 'var(--surface)',
                      border: '1.5px solid var(--border)',
                      color: 'var(--fg)',
                      outline: 'none',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#B87333')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="sg-email" className="block text-sm font-600 text-[var(--fg)] mb-2">
                    Your Email <span style={{ color: '#B87333' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="sg-email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200"
                    style={{
                      background: 'var(--surface)',
                      border: '1.5px solid var(--border)',
                      color: 'var(--fg)',
                      outline: 'none',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#B87333')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="sg-subject" className="block text-sm font-600 text-[var(--fg)] mb-2">
                  Subject <span style={{ color: '#B87333' }}>*</span>
                </label>
                <input
                  type="text"
                  id="sg-subject"
                  name="subject"
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200"
                  style={{
                    background: 'var(--surface)',
                    border: '1.5px solid var(--border)',
                    color: 'var(--fg)',
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#B87333')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-7">
                <label htmlFor="sg-message" className="block text-sm font-600 text-[var(--fg)] mb-2">
                  Message <span style={{ color: '#B87333' }}>*</span>
                </label>
                <textarea
                  id="sg-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg px-4 py-3 text-sm transition-all duration-200 resize-none"
                  style={{
                    background: 'var(--surface)',
                    border: '1.5px solid var(--border)',
                    color: 'var(--fg)',
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#B87333')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              {/* Status message */}
              {formStatus.type && (
                <div
                  className="flex items-start gap-3 mb-6 p-4 rounded-lg text-sm"
                  role="alert"
                  style={{
                    background: formStatus.type === 'success' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                    border: `1px solid ${formStatus.type === 'success' ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
                    color: formStatus.type === 'success' ? '#16a34a' : '#dc2626',
                  }}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  )}
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                id="sg-submit"
                className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send & Connect on WhatsApp
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
