'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NexiivaLogo } from './NexiivaLogo';
import type { Dict } from '@/types/dict';
import {
  ChevronDown,
  Menu,
  X,
  Languages,
  Monitor,
  Cpu,
  Sliders,
  Award,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  locale: string;
  dict: Dict;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute other locale URL
  const switchLocale = locale === 'en' ? 'ar' : 'en';
  const redirectedPathName = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  const navLinks = [
    { href: `/${locale}/platform`, label: dict?.nav?.platform || 'Platform' },
    {
      href: `/${locale}/solutions`,
      label: dict?.nav?.solutions || 'Solutions',
      isMega: true,
    },
    { href: `/${locale}/industries`, label: dict?.nav?.industries || 'Industries' },
    { href: `/${locale}/pilot`, label: dict?.nav?.pilot || 'Pilot' },
    { href: `/${locale}/about`, label: dict?.nav?.about || 'About' },
    { href: `/${locale}/insights`, label: dict?.nav?.insights || 'Insights' },
    { href: `/${locale}/contact`, label: dict?.nav?.contact || 'Contact' },
  ];

  const megaSolutions = [
    {
      href: `/${locale}/solutions#ots`,
      icon: Monitor,
      title: dict?.nav?.solutionsMega?.otsTitle || 'Operator Training Simulator',
      desc: dict?.nav?.solutionsMega?.otsDesc || 'Dynamic DCS console emulation with live multi-component physics.',
    },
    {
      href: `/${locale}/solutions#builder`,
      icon: Cpu,
      title: dict?.nav?.solutionsMega?.builderTitle || 'AI Unit Builder',
      desc: dict?.nav?.solutionsMega?.builderDesc || 'Rapid unit generation from engineering flowsheets and process logic.',
    },
    {
      href: `/${locale}/solutions#console`,
      icon: Sliders,
      title: dict?.nav?.solutionsMega?.consoleTitle || 'Instructor Console',
      desc: dict?.nav?.solutionsMega?.consoleDesc || 'Real-time fault injection, trainee monitoring, and emergency freezes.',
    },
    {
      href: `/${locale}/solutions#certification`,
      icon: Award,
      title: dict?.nav?.solutionsMega?.certTitle || 'Scoring & Certification',
      desc: dict?.nav?.solutionsMega?.certDesc || 'Automated performance evaluation with objective error breakdown.',
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/10 bg-[#05060A]/85 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Nexiiva Home"
          >
            <NexiivaLogo
              variant="light"
              className="h-8 w-auto"
              showTagline={false}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              if (item.isMega) {
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E9EAF4]/80 transition-colors hover:text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSolutionsOpen ? 'rotate-180 text-[#8B4CFF]' : ''
                        }`}
                      />
                    </Link>

                    {/* Solutions Mega Menu Dropdown */}
                    {isSolutionsOpen && (
                      <div className="absolute start-1/2 top-full -translate-x-1/2 pt-3 w-[560px]">
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0E111C]/95 p-4 shadow-2xl backdrop-blur-xl">
                          <div className="grid grid-cols-2 gap-3">
                            {megaSolutions.map((sol) => {
                              const Icon = sol.icon;
                              return (
                                <Link
                                  key={sol.href}
                                  href={sol.href}
                                  className="group/item flex flex-col rounded-lg border border-transparent p-3 transition-all hover:border-white/10 hover:bg-white/5"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6D3BF0]/15 text-[#8B4CFF] group-hover/item:bg-[#6D3BF0]/25">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <span className="text-xs font-bold text-[#E9EAF4] group-hover/item:text-[#38BDF8]">
                                      {sol.title}
                                    </span>
                                  </div>
                                  <p className="mt-2 text-[11px] leading-relaxed text-[#9A9CB3]">
                                    {sol.desc}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#E9EAF4]/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions: Locale switch, CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* EN / AR Switcher */}
            <Link
              href={redirectedPathName(switchLocale)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono-tag text-xs font-semibold text-[#E9EAF4] transition-all hover:bg-white/15"
              title="Switch Language"
            >
              <Languages className="h-3.5 w-3.5 text-[#38BDF8]" />
              <span>{locale === 'en' ? 'العربية' : 'EN'}</span>
            </Link>

            {/* Request a Pilot CTA */}
            <Link
              href={`/${locale}/pilot`}
              className="inline-flex items-center gap-2 rounded-lg brand-gradient px-4 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(109,59,240,0.4)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(109,59,240,0.6)] hover:brightness-110 active:scale-95"
            >
              <span>{dict?.common?.requestPilot || 'Request a Pilot'}</span>
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={redirectedPathName(switchLocale)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-xs font-mono-tag text-[#E9EAF4]"
            >
              {locale === 'en' ? 'عربي' : 'EN'}
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-[#E9EAF4] hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Height Mobile Navigation Drawer / Sheet */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#05060A]/95 backdrop-blur-2xl lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <NexiivaLogo variant="light" className="h-7 w-auto" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-[#E9EAF4]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-white/5 pb-3 text-base font-medium text-[#E9EAF4] hover:text-[#38BDF8]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href={`/${locale}/pilot`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg brand-gradient py-3 text-sm font-bold text-white shadow-lg"
              >
                <span>{dict?.common?.requestPilot || 'Request a Pilot'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <Link
                href={redirectedPathName(switchLocale)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 font-mono-tag text-xs font-semibold text-[#E9EAF4]"
              >
                <Languages className="h-4 w-4 text-[#38BDF8]" />
                <span>{locale === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
