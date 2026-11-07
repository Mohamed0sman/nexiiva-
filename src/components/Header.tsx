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
  MessageCircle,
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
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200 ${
          isScrolled ? 'py-3 shadow-xs' : 'py-4'
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
              variant="dark"
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-sky-600"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSolutionsOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Solutions Mega Menu Dropdown */}
                    {isSolutionsOpen && (
                      <div className="absolute start-1/2 top-full -translate-x-1/2 pt-3 w-[560px]">
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                          <div className="grid grid-cols-2 gap-3">
                            {megaSolutions.map((sol) => {
                              const Icon = sol.icon;
                              return (
                                <Link
                                  key={sol.href}
                                  href={sol.href}
                                  className="group/item flex flex-col rounded-lg border border-transparent p-3 transition-colors hover:border-slate-200 hover:bg-slate-50"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-900 group-hover/item:text-sky-600">
                                      {sol.title}
                                    </span>
                                  </div>
                                  <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
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
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-sky-600 font-bold'
                      : 'text-slate-700 hover:text-sky-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions: WhatsApp, Locale switch, CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Direct Connect */}
            <a
              href="https://wa.me/201004131154"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 font-mono-tag text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
              title="WhatsApp: 01004131154"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-current text-emerald-600" />
              <span>01004131154</span>
            </a>

            {/* EN / AR Switcher */}
            <Link
              href={redirectedPathName(switchLocale)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono-tag text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
              title="Switch Language"
            >
              <Languages className="h-3.5 w-3.5 text-sky-600" />
              <span>{locale === 'en' ? 'العربية' : 'EN'}</span>
            </Link>

            {/* Request a Pilot CTA */}
            <Link
              href={`/${locale}/pilot`}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-4 py-2 text-xs font-bold text-white transition-colors shadow-xs active:scale-95"
            >
              <span>{dict?.common?.requestPilot || 'Request a Pilot'}</span>
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/201004131154"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-emerald-300 bg-emerald-50 p-2 text-emerald-700"
              title="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
            </a>
            <Link
              href={redirectedPathName(switchLocale)}
              className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs font-mono-tag text-slate-800 font-bold"
            >
              {locale === 'en' ? 'عربي' : 'EN'}
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-800 hover:bg-slate-100"
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
        <div className="fixed inset-0 z-50 flex flex-col bg-white text-slate-900 lg:hidden">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <NexiivaLogo variant="dark" className="h-7 w-auto" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-800"
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
                  className="border-b border-slate-100 pb-3 text-base font-semibold text-slate-800 hover:text-sky-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/201004131154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>واتساب مباشر: 01004131154</span>
              </a>

              <Link
                href={`/${locale}/pilot`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-sky-600 py-3 text-sm font-bold text-white shadow-xs"
              >
                <span>{dict?.common?.requestPilot || 'Request a Pilot'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <Link
                href={redirectedPathName(switchLocale)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 font-mono-tag text-xs font-semibold text-slate-800"
              >
                <Languages className="h-4 w-4 text-sky-600" />
                <span>{locale === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
