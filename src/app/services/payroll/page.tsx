import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Payroll Services | Small Giant',
  description: 'Comprehensive payroll management and financial administration services by Small Giant.',
}

export default function PayrollPage() {
  const financialServices = [
    {
      title: "1. Payroll Outsourcing",
      desc: "Reclaim valuable time and resources with our fast and secure payroll services. Significantly save on staffing costs and boost overall productivity. Our efficient processes ensure accurate and timely payments, allowing you to focus on growing your business."
    },
    {
      title: "2. Superannuation Management",
      desc: "Navigating superannuation obligations can be intricate. Our team provides comprehensive support, ensuring you accurately calculate super payable and remain compliant with all regulations."
    },
    {
      title: "3. Effective Debtor Management",
      desc: "Maintaining a healthy cash flow is crucial. Our reliable system ensures you get paid by debtors promptly, minimizing outstanding invoices."
    },
    {
      title: "4. Sales, Purchases & Invoice Management",
      desc: "Stay organized with day-to-day financial transactions. We manage sales, track purchases, streamline invoices, and provide payment reminder services."
    },
    {
      title: "5. Bank Reconciliation and Transactions",
      desc: "Gain a reliable view of your financial health with error-free reconciliation. We meticulously track transactions, providing insightful reporting."
    },
    {
      title: "6. Strategic Cash Flow Management",
      desc: "Optimize financial resources. We help maximize returns on short-term holdings while ensuring sufficient liquidity for future investments."
    },
    {
      title: "7. Simplified BAS Preparation",
      desc: "Let us take the hassle out of your Business Activity Statements (BAS). We collate your BAS, ensuring they are accurately prepared for your accountant's review."
    },
    {
      title: "8. Budgeting and Forecasting",
      desc: "Make data-driven decisions with analysis-backed budgeting. We provide insights to help you plan, identify challenges, and capitalize on growth."
    }
  ]

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--copper)] transition-colors mb-8 text-sm font-500">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="relative w-full rounded-3xl overflow-hidden mb-16 border border-[var(--border)]">
          <div className="relative h-[40vw] min-h-[280px] max-h-[480px]">
            <Image
              src="/assets/service_payroll.jpg"
              alt="Payroll Services"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="service-hero-overlay absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-3 leading-tight">Payroll &amp; Financial Administration</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                Navigating the world of accounting and bookkeeping can often feel like a daunting task. Entrusting your online bookkeeping needs to SmallGiant offers a compelling solution for efficiency and growth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--surface)] p-8 md:p-12 rounded-3xl border border-[var(--border)] shadow-sm mb-16">
          <h2 className="font-display text-3xl font-700 mb-10 text-[var(--fg)] border-b border-[var(--border)] pb-4">Streamline Your Business Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {financialServices.map((service, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-700 text-[var(--copper)]">{service.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl font-700 text-center mb-12 text-[var(--fg)]">4 Types of Payroll Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Type 1 */}
            <div id="in-house" className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] relative pt-12 hover:border-[var(--copper)]/30 transition-colors">
              <span className="absolute top-0 left-0 bg-[var(--copper)] text-white px-5 py-1.5 rounded-br-2xl rounded-tl-3xl text-sm font-700 tracking-wider">Best for Smaller Businesses</span>
              <h3 className="font-display text-xl font-700 mb-4 text-[var(--fg)]">1. Internally Managed (In-House)</h3>
              <p className="text-[var(--muted)] mb-6 text-sm leading-relaxed">You manage payroll yourself using software. Simple tools help non-experts manage efficiently.</p>
              <div className="grid grid-cols-2 gap-4 text-sm bg-[var(--surface2)] p-4 rounded-xl">
                <div>
                  <h4 className="font-700 text-[#4ade80] mb-2 uppercase tracking-wide text-xs">Pros</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• Keeps costs down</li>
                    <li>• Low security risk</li>
                    <li>• Intuitive tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-700 text-[#f87171] mb-2 uppercase tracking-wide text-xs">Cons</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• Not for &gt;10 employees</li>
                    <li>• Consumes employee time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Type 2 */}
            <div id="bookkeepers" className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] relative pt-12 hover:border-[var(--copper)]/30 transition-colors">
              <span className="absolute top-0 left-0 bg-[var(--copper)] text-white px-5 py-1.5 rounded-br-2xl rounded-tl-3xl text-sm font-700 tracking-wider">Best for Medium or Growing</span>
              <h3 className="font-display text-xl font-700 mb-4 text-[var(--fg)]">2. Professionally Managed (CPAs)</h3>
              <p className="text-[var(--muted)] mb-6 text-sm leading-relaxed">Payroll handled by certified professionals. Ensures accuracy, though you remain liable for any errors.</p>
              <div className="grid grid-cols-2 gap-4 text-sm bg-[var(--surface2)] p-4 rounded-xl">
                <div>
                  <h4 className="font-700 text-[#4ade80] mb-2 uppercase tracking-wide text-xs">Pros</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• Expert oversight</li>
                    <li>• Tailored systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-700 text-[#f87171] mb-2 uppercase tracking-wide text-xs">Cons</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• Must supply data</li>
                    <li>• Involves outsourcing costs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Type 3 */}
            <div id="agency" className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] relative pt-12 hover:border-[var(--copper)]/30 transition-colors">
              <span className="absolute top-0 left-0 bg-[var(--copper)] text-white px-5 py-1.5 rounded-br-2xl rounded-tl-3xl text-sm font-700 tracking-wider">Best for Larger Organizations</span>
              <h3 className="font-display text-xl font-700 mb-4 text-[var(--fg)]">3. Agency Managed</h3>
              <p className="text-[var(--muted)] mb-6 text-sm leading-relaxed">Full outsourcing of payroll tasks to a service agency. Agencies offer expert staff and error guarantees.</p>
              <div className="grid grid-cols-2 gap-4 text-sm bg-[var(--surface2)] p-4 rounded-xl">
                <div>
                  <h4 className="font-700 text-[#4ade80] mb-2 uppercase tracking-wide text-xs">Pros</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• Covers entire lifecycle</li>
                    <li>• Frees internal resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-700 text-[#f87171] mb-2 uppercase tracking-wide text-xs">Cons</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• Most expensive option</li>
                    <li>• Less control internally</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Type 4 */}
            <div id="software" className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] relative pt-12 hover:border-[var(--copper)]/30 transition-colors">
              <span className="absolute top-0 left-0 bg-[var(--copper)] text-white px-5 py-1.5 rounded-br-2xl rounded-tl-3xl text-sm font-700 tracking-wider">Flexibility & Automation</span>
              <h3 className="font-display text-xl font-700 mb-4 text-[var(--fg)]">4. Software Managed (Online)</h3>
              <p className="text-[var(--muted)] mb-6 text-sm leading-relaxed">Cloud-based payroll managed via portal. You handle data entry; software does the rest.</p>
              <div className="grid grid-cols-2 gap-4 text-sm bg-[var(--surface2)] p-4 rounded-xl">
                <div>
                  <h4 className="font-700 text-[#4ade80] mb-2 uppercase tracking-wide text-xs">Pros</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• No hardware needed</li>
                    <li>• 24/7 access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-700 text-[#f87171] mb-2 uppercase tracking-wide text-xs">Cons</h4>
                  <ul className="space-y-1.5 text-[var(--muted)]">
                    <li>• Requires regular input</li>
                    <li>• Potential user errors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
