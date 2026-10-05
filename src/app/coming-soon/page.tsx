import Link from 'next/link'
import { ArrowLeft, Rocket, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Coming Soon | Small Giant',
  description: 'Upcoming HRMS platform upgrade by Small Giant.',
}

export default function ComingSoonPage() {
  const features = [
    {
      title: "Effortless Payroll Management",
      desc: "Say goodbye to complexities! Experience a smoother, more transparent payroll process ensuring accuracy and timely compensation.",
      example: "Easily access your payslips, understand deductions, and view your payroll history all in one place."
    },
    {
      title: "Empowering Performance Management",
      desc: "Unlock your potential with intuitive tools for goal setting, continuous feedback, and comprehensive performance reviews.",
      example: "Participate in collaborative goal setting with your manager and receive timely feedback to support your growth."
    },
    {
      title: "Simplified Leave Management",
      desc: "Planning time off has never been easier. Request, track, and manage your leaves with a user-friendly interface.",
      example: "Quickly view your leave balance, apply for time off, and see the status of your requests."
    },
    {
      title: "Accurate Time and Attendance Tracking",
      desc: "Effortlessly record your work hours and manage attendance, promoting transparency and accuracy.",
      example: "Clock in and out seamlessly and view your attendance records."
    },
    {
      title: "Modern Recruitment and Onboarding",
      desc: "Welcome new team members with a streamlined and engaging onboarding experience.",
      example: "New hires will find all necessary information and complete onboarding tasks efficiently through the platform."
    },
    {
      title: "All-in-One HR Hub",
      desc: "Our HRMS is evolving to be more than just a system; it's becoming your central hub for all things HR.",
      example: "Designed to save you time and provide you with the insights you need."
    }
  ]

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--copper)] transition-colors mb-8 text-sm font-500">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="text-center mb-16 relative py-12 px-4 bg-[var(--surface)] border border-[var(--copper)]/20 rounded-3xl overflow-hidden shadow-lg shadow-[var(--copper)]/5">
          <div className="absolute inset-0 bg-[var(--copper)]/5" />
          <div className="relative z-10">
            <div className="w-20 h-20 bg-[var(--copper)]/10 rounded-2xl flex items-center justify-center text-[var(--copper)] mx-auto mb-8 border border-[var(--copper)]/30 backdrop-blur-md">
              <Rocket size={40} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-800 text-[var(--fg)] mb-6">Coming Soon</h1>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto leading-relaxed mb-8">
              Get ready for a significant upgrade to how we work! We're thrilled to announce the upcoming launch of enhanced capabilities within our HRMS platform, meticulously designed to empower you and streamline essential HR processes.
            </p>
            <div className="inline-block bg-[var(--copper)] text-white font-700 py-2.5 px-8 rounded-full shadow-lg shadow-[var(--copper)]/20 tracking-wide text-sm uppercase">
              Launching on September 15th
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl font-700 text-center mb-12 text-[var(--fg)]">What's in it for you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)] shadow-sm hover:border-[var(--copper)]/30 transition-colors group">
                <h3 className="font-display text-xl font-700 mb-4 flex items-start gap-3 text-[var(--fg)] group-hover:text-[var(--copper)] transition-colors">
                  <CheckCircle className="text-[var(--copper)] flex-shrink-0 mt-0.5" size={24} />
                  {feature.title}
                </h3>
                <p className="text-[var(--muted)] font-500 mb-4 leading-relaxed">{feature.desc}</p>
                <div className="bg-[var(--surface2)] p-4 rounded-xl border border-[var(--border)]">
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    <span className="font-700 text-[var(--fg)] mr-2 tracking-wide uppercase text-xs">Example:</span> {feature.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[var(--surface)] p-12 rounded-3xl border border-[var(--border)] shadow-sm text-center">
          <h3 className="font-display text-2xl font-700 mb-10 text-[var(--fg)] border-b border-[var(--border)] pb-4">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            <div className="p-6 bg-[var(--surface2)] rounded-2xl border border-[var(--border)] hover:border-[var(--copper)]/30 transition-colors">
              <h4 className="font-700 text-[var(--copper)] mb-3 text-lg">Increased Efficiency</h4>
              <p className="text-[var(--muted)] text-sm leading-relaxed">Automate routine tasks, freeing up your time to focus on what matters most.</p>
            </div>
            <div className="p-6 bg-[var(--surface2)] rounded-2xl border border-[var(--border)] hover:border-[var(--copper)]/30 transition-colors">
              <h4 className="font-700 text-[var(--copper)] mb-3 text-lg">Enhanced Transparency</h4>
              <p className="text-[var(--muted)] text-sm leading-relaxed">Access the information you need, when you need it.</p>
            </div>
            <div className="p-6 bg-[var(--surface2)] rounded-2xl border border-[var(--border)] hover:border-[var(--copper)]/30 transition-colors">
              <h4 className="font-700 text-[var(--copper)] mb-3 text-lg">Improved Experience</h4>
              <p className="text-[var(--muted)] text-sm leading-relaxed">Enjoy a more intuitive and user-friendly HR environment.</p>
            </div>
          </div>
          <div className="p-6 bg-[var(--copper)]/5 rounded-2xl border border-[var(--copper)]/20 max-w-3xl mx-auto">
            <p className="text-[var(--fg)] italic text-sm md:text-base leading-relaxed">
              "Mark your calendars for September 15th to experience these exciting new features. We'll share more details on how to access and make the most of these enhancements soon!"
              <br /><br />
              <span className="font-700 text-[var(--copper)] not-italic">— The HR Team</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
