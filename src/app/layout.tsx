import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollRevealInit } from '@/components/ScrollRevealInit'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Small Giant IT Solution | Better Solutions For Your Business',
  description:
    'Small Giant IT Solution is a total IT Solutions and Software Services Development company based in Hyderabad. We provide payroll outsourcing, infrastructure support, web application development, and IT training.',
  keywords: [
    'IT solutions Hyderabad',
    'payroll outsourcing India',
    'web application development',
    'IT training Hyderabad',
    'infrastructure support',
    'corporate training',
    'small giant IT',
  ],
  authors: [{ name: 'Small Giant IT Solution' }],
  openGraph: {
    title: 'Small Giant IT Solution | Better Solutions For Your Business',
    description:
      'Total IT Solutions and Software Services Development company — providing cost‑effective, innovative, and robust business solutions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Small Giant IT Solution',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Giant IT Solution',
    description: 'Total IT Solutions — Payroll, Infrastructure, Web Development, Training',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <ScrollRevealInit />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
