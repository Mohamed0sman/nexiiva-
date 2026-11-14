'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Dict } from '@/types/dict';

interface HeaderProps {
  locale: string;
  dict?: Dict;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const isAr = locale === 'ar';
  const switchLocale = isAr ? 'en' : 'ar';
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Compute other locale URL
  const redirectedPathName = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = ['home', 'demo', 'about', 'team', 'products', 'plans', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
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

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e3e8ee]">
      <div className="mx-auto max-w-[1100px] px-5 flex items-center h-[68px]">
        {/* Brand Logo */}
        <Link
          href={`/${locale}#home`}
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 focus:outline-none"
          aria-label="Nexiiva"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/nexiiva-logo-v8.png"
            alt="Nexiiva"
            className="h-[30px] w-auto block"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 ms-auto">
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
                className={`text-[0.95rem] font-medium px-3.5 py-2 rounded-lg transition-colors ${
                  isCurrent
                    ? 'text-[#0084d3] bg-[#e7faff]'
                    : 'text-[#485460] hover:text-[#101622] hover:bg-[#f8fbfe]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (WhatsApp, Language Toggle, Mobile Toggle) */}
        <div className="flex items-center gap-2 ms-auto md:ms-4">
          {/* WhatsApp Direct Icon Button */}
          <a
            href="https://wa.me/201004131154"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="h-11 w-11 rounded-xl border border-[#a7f3d0] bg-[#ecfdf5] text-[#006145] hover:bg-emerald-100 flex items-center justify-center transition-colors"
            title="WhatsApp: 01004131154"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
            </svg>
          </a>

          {/* Language Switch Button */}
          <Link
            href={redirectedPathName(switchLocale)}
            className="h-11 px-4 rounded-xl border border-[#e3e8ee] bg-[#f8fbfe] text-[#101622] hover:bg-slate-100 flex items-center justify-center text-sm font-semibold transition-colors font-sans select-none"
            title="Switch Language"
          >
            {isAr ? 'EN' : 'عربي'}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation"
            className="md:hidden h-11 w-11 rounded-xl border border-[#e3e8ee] bg-[#f8fbfe] text-[#101622] flex items-center justify-center hover:bg-slate-100"
          >
            {isMobileOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-[#e3e8ee] bg-white px-5 py-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="py-2.5 px-3 rounded-lg text-base font-semibold text-[#485460] hover:text-[#101622] hover:bg-[#f8fbfe]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
