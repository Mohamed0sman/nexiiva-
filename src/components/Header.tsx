'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, Globe, ArrowRight, Menu, X } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface HeaderProps {
  locale: string;
  dict?: Dict;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const isAr = locale === 'ar';
  const switchLocale = isAr ? 'en' : 'ar';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const redirectedPathName = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'demo', 'about', 'team', 'products', 'plans', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id === 'demo' ? 'home' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: dict?.nav?.home || (isAr ? 'المقدمة' : 'Introduction') },
    { id: 'about', label: dict?.nav?.about || (isAr ? 'من نحن' : 'About us') },
    { id: 'team', label: dict?.nav?.team || (isAr ? 'الفريق' : 'Team') },
    { id: 'products', label: dict?.nav?.products || (isAr ? 'منتجاتنا' : 'Our products') },
    { id: 'plans', label: dict?.nav?.plans || (isAr ? 'اختر خطتك' : 'Select your plan') },
    { id: 'contact', label: dict?.nav?.contact || (isAr ? 'تواصل معنا' : 'Contact us') },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setIsMobileOpen(false);
    if (typeof window !== 'undefined') {
      const selectElement = document.getElementById('pl') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = 'Demo';
      }
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)]'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex items-center justify-between h-[70px]">
        {/* Brand Logo & Live Status Badge */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}#home`}
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 focus:outline-none transition-transform active:scale-[0.98]"
            aria-label="Nexiiva"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/brand/nexiiva-logo-v8.png"
              alt="Nexiiva"
              className="h-[30px] sm:h-[32px] w-auto block object-contain"
            />
          </Link>

          {/* Operational Engine Badge */}
          <div className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-[11px] font-mono font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>OTS v8.2 · CDU/VDU</span>
          </div>
        </div>

        {/* Desktop Navigation Links (Centered & Clean) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1 rounded-full border border-slate-200/70">
          {navItems.map((item) => {
            const isCurrent = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${
                  isCurrent
                    ? 'text-[#0084d3] bg-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: WhatsApp, Language Pill, Book Demo CTA */}
        <div className="flex items-center gap-2.5">
          {/* WhatsApp Direct Connect Pill */}
          <a
            href="https://wa.me/201004131154"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp: 01004131154"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-300/80 bg-emerald-50/90 hover:bg-emerald-100/90 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition-all duration-200 shadow-2xs"
            title="WhatsApp: 01004131154"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
            <span className="font-mono text-[11px] tracking-tight">01004131154</span>
          </a>

          {/* Language Switcher Segmented Pill */}
          <Link
            href={redirectedPathName(switchLocale)}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors select-none"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#0084d3]" />
            <span className="font-sans text-[12px]">{isAr ? 'English' : 'عربي'}</span>
          </Link>

          {/* Quick Primary CTA Button */}
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-[#0084d3] hover:bg-[#006fb3] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <span>{dict?.hero?.bookDemo || (isAr ? 'حجز عرض' : 'Book Demo')}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {isMobileOpen ? (
              <X className="w-5 h-5 text-slate-800" />
            ) : (
              <Menu className="w-5 h-5 text-slate-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-5 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isCurrent = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${
                    isCurrent
                      ? 'text-[#0084d3] bg-sky-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-[#0084d3]" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/201004131154"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 py-2.5 text-xs font-bold text-emerald-800"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
              <span>واتساب مباشر: 01004131154</span>
            </a>

            <button
              type="button"
              onClick={handleCtaClick}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#0084d3] py-2.5 text-xs font-bold text-white shadow-xs"
            >
              <span>{dict?.hero?.bookDemo || (isAr ? 'حجز عرض توضيحي' : 'Book a Demo')}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
