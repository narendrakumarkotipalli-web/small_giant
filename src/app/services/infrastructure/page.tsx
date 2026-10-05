import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Server } from 'lucide-react'

export const metadata = {
  title: 'Infrastructure Support | Small Giant',
  description: 'Management, maintenance, and optimization of IT infrastructure by Small Giant.',
}

export default function InfrastructurePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--copper)] transition-colors mb-8 text-sm font-500">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        {/* Hero Image */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-12 border border-[var(--border)]">
          <div className="relative h-[40vw] min-h-[280px] max-h-[480px]">
            <Image
              src="/assets/service_infrastructure.jpg"
              alt="Infrastructure Support"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="service-hero-overlay absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-3 leading-tight">Infrastructure Support</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                Infrastructure Support refers to the management, maintenance, and optimization of an organization's IT infrastructure. This includes hardware, software, networks, servers, and cloud systems that ensure smooth business operations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--surface)] p-8 md:p-12 rounded-3xl border border-[var(--border)] shadow-sm">
          <h3 className="font-display text-2xl font-700 text-[var(--fg)] mb-8">Core Competencies</h3>
          
          <div className="space-y-6 max-w-2xl">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-600 text-sm text-[var(--fg)]">Networking & Connectivity</span>
                <span className="font-700 text-sm text-[var(--copper)]">100%</span>
              </div>
              <div className="w-full bg-[var(--surface2)] rounded-full h-2.5 overflow-hidden">
                <div className="bg-[var(--copper)] h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-600 text-sm text-[var(--fg)]">Server Maintenance</span>
                <span className="font-700 text-sm text-[var(--copper)]">90%</span>
              </div>
              <div className="w-full bg-[var(--surface2)] rounded-full h-2.5 overflow-hidden">
                <div className="bg-[var(--copper)] h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-600 text-sm text-[var(--fg)]">Cloud Integration</span>
                <span className="font-700 text-sm text-[var(--copper)]">75%</span>
              </div>
              <div className="w-full bg-[var(--surface2)] rounded-full h-2.5 overflow-hidden">
                <div className="bg-[var(--copper)] h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-600 text-sm text-[var(--fg)]">Security & Monitoring</span>
                <span className="font-700 text-sm text-[var(--copper)]">85%</span>
              </div>
              <div className="w-full bg-[var(--surface2)] rounded-full h-2.5 overflow-hidden">
                <div className="bg-[var(--copper)] h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
