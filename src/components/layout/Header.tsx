"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const services = [
  {
    label: "Payroll",
    href: "/#services",
    sub: [
      {
        label: "Internally Managed (In-House)",
        href: "/services/payroll#in-house",
      },
      {
        label: "Professionally Managed (Bookkeepers/CPAs)",
        href: "/services/payroll#bookkeepers",
      },
      {
        label: "Agency Managed (Payroll Service)",
        href: "/services/payroll#agency",
      },
      {
        label: "Software Managed (Online Payroll)",
        href: "/services/payroll#software",
      },
    ],
  },
  { label: "Infrastructure Support", href: "/services/infrastructure" },
  { label: "Training", href: "/services/training" },
  { label: "Internship", href: "/services/internship" },
  { label: "Corporate Training", href: "/services/corporate-training" },
  { label: "Web Applications Development", href: "/services/web-development" },
  { label: "Coming Soon", href: "/coming-soon" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [payrollOpen, setPayrollOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      setPayrollOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
        setPayrollOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setPayrollOpen(false);
    setMobileServicesOpen(false);
  }, []);

  const isDark = mounted ? (resolvedTheme === "dark" || theme === "dark") : true;
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || (mounted && !isDark)
            ? "header-blur border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              onClick={closeAll}
              aria-label="Small Giant Home"
            >
              <div className="relative w-9 h-9 md:w-10 md:h-10">
                <Image
                  src="/HeaderLogo.png"
                  alt="Small Giant logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className="font-display font-700 text-lg md:text-xl tracking-tight"
                style={{ color: "var(--fg)" }}
              >
                Small <span style={{ color: "var(--copper)" }}>Giant</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-6 lg:gap-8"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] hover:text-[var(--copper)] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}

              {/* Services dropdown */}
              <div
                className="relative py-2"
                ref={servicesRef}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  id="services-menu-btn"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => {
                    setServicesOpen((prev) => !prev);
                    setPayrollOpen(false);
                  }}
                  className="flex items-center gap-1 text-sm font-medium text-[var(--muted)] hover:text-[var(--copper)] transition-colors duration-200 cursor-pointer"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    style={{ color: "inherit" }}
                  />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                  >
                    <div
                      role="menu"
                      aria-labelledby="services-menu-btn"
                      className="w-64 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl py-2"
                      style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                    >
                      {services.map((s) => (
                        <div
                          key={s.label}
                          className="relative"
                          onMouseEnter={() =>
                            s.sub ? setPayrollOpen(true) : setPayrollOpen(false)
                          }
                          onMouseLeave={() => setPayrollOpen(false)}
                        >
                          {s.sub ? (
                            <>
                              <button className="w-full flex justify-between items-center px-4 py-2.5 text-sm text-[var(--fg)] hover:bg-[var(--surface2)] hover:text-[var(--copper)] transition-colors text-left cursor-pointer">
                                {s.label}
                                <ChevronRight size={14} />
                              </button>
                              {payrollOpen && (
                                <div
                                  className="absolute top-0 left-full pl-2 z-50"
                                >
                                  <div
                                    className="w-72 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl py-2"
                                    style={{
                                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                    }}
                                  >
                                    {s.sub.map((sub) => (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        onClick={closeAll}
                                        className="block px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-[var(--surface2)] hover:text-[var(--copper)] transition-colors"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                            href={s.href}
                            onClick={closeAll}
                            className="block px-4 py-2.5 text-sm text-[var(--fg)] hover:bg-[var(--surface2)] hover:text-[var(--copper)] transition-colors"
                          >
                            {s.label}
                          </Link>
                        )}
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/#contact"
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--copper)] transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {mounted ? (
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface2)] text-[var(--fg)] hover:border-[var(--copper)] transition-all duration-200 shadow-sm cursor-pointer group"
                  aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                  title={isDark ? "Switch to light theme" : "Switch to dark theme"}
                >
                  <div className="w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {isDark ? (
                      <Sun size={15} className="text-[#D4935A]" />
                    ) : (
                      <Moon size={15} className="text-[var(--copper)]" />
                    )}
                  </div>
                  <span className="text-xs font-semibold tracking-wide">
                    {isDark ? "Light" : "Dark"}
                  </span>
                </button>
              ) : (
                <div className="w-16 h-8 rounded-full border border-[var(--border)] bg-[var(--surface2)] opacity-50" />
              )}
              <Link href="/#contact" className="btn-primary text-sm px-5 py-2">
                Get Started
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface2)] text-[var(--fg)] hover:border-[var(--copper)] transition-colors shadow-sm"
                  aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                  title={isDark ? "Switch to light theme" : "Switch to dark theme"}
                >
                  {isDark ? (
                    <Sun size={18} className="text-[#D4935A]" />
                  ) : (
                    <Moon size={18} className="text-[var(--copper)]" />
                  )}
                </button>
              )}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="p-2 rounded-lg text-[var(--fg)] hover:text-[var(--copper)] transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 z-40 md:hidden"
          style={{ top: "64px" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeAll}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className="relative bg-[var(--surface)] border-b border-[var(--border)] px-4 py-6 space-y-2 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 64px)" }}
          >
            <Link
              href="/"
              onClick={closeAll}
              className="block px-3 py-3 rounded-lg font-medium text-[var(--fg)] hover:bg-[var(--surface2)] hover:text-[var(--copper)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={closeAll}
              className="block px-3 py-3 rounded-lg font-medium text-[var(--fg)] hover:bg-[var(--surface2)] hover:text-[var(--copper)] transition-colors"
            >
              About
            </Link>

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full flex justify-between items-center px-3 py-3 rounded-lg font-medium text-[var(--fg)] hover:bg-[var(--surface2)] hover:text-[var(--copper)] transition-colors"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[var(--border)] pl-3">
                  {services.map((s) => (
                    <div key={s.label}>
                      {s.sub ? (
                        <div className="space-y-0.5">
                          <span className="block px-3 py-2 text-sm font-semibold text-[var(--copper)]">
                            {s.label}
                          </span>
                          {s.sub.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={closeAll}
                              className="block px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--copper)] transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={s.href}
                          onClick={closeAll}
                          className="block px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--copper)] transition-colors"
                        >
                          {s.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#contact"
              onClick={closeAll}
              className="block px-3 py-3 rounded-lg font-medium text-[var(--fg)] hover:bg-[var(--surface2)] hover:text-[var(--copper)] transition-colors"
            >
              Contact
            </Link>

            {/* Mobile Appearance row */}
            <div className="pt-2 pb-1 border-t border-[var(--border)]">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                <span className="text-sm font-medium text-[var(--fg)]">Theme</span>
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-xs font-semibold text-[var(--fg)] shadow-sm cursor-pointer"
                  >
                    {isDark ? (
                      <>
                        <Sun size={14} className="text-[#D4935A]" />
                      </>
                    ) : (
                      <>
                        <Moon size={14} className="text-[var(--copper)]" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={closeAll}
                className="btn-primary w-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
