'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NexiivaLogo } from './NexiivaLogo';
import {
  MapPin,
  Mail,
  Phone,
  Languages,
} from 'lucide-react';
import type { Dict } from '@/types/dict';
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from './SocialIcons';

interface FooterProps {
  locale: string;
  dict: Dict;
}

export function Footer({ locale, dict }: FooterProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const switchLocale = locale === 'en' ? 'ar' : 'en';
  const redirectedPathName = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  const navLinks = [
    { href: `/${locale}/platform`, label: dict?.nav?.platform || 'Platform' },
    { href: `/${locale}/solutions`, label: dict?.nav?.solutions || 'Solutions' },
    { href: `/${locale}/industries`, label: dict?.nav?.industries || 'Industries' },
    { href: `/${locale}/pilot`, label: dict?.nav?.pilot || 'Pilot Programme' },
    { href: `/${locale}/about`, label: dict?.nav?.about || 'About & Team' },
    { href: `/${locale}/insights`, label: dict?.nav?.insights || 'Engineering Insights' },
    { href: `/${locale}/contact`, label: dict?.nav?.contact || 'Contact' },
  ];

  const solutionsLinks = [
    { href: `/${locale}/solutions#ots`, label: 'Operator Training Simulator' },
    { href: `/${locale}/solutions#builder`, label: 'AI Unit Builder (OTS Builder)' },
    { href: `/${locale}/solutions#console`, label: 'Instructor Console' },
    { href: `/${locale}/solutions#certification`, label: 'Scoring & Certification' },
    { href: `/${locale}/industries`, label: 'Refining & Petrochemicals' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#05060A] text-[#9A9CB3]">
      {/* Top Hairline Gradient Rule */}
      <div className="h-[2px] w-full brand-gradient opacity-80" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Corporate Description (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href={`/${locale}`} className="inline-block">
                <NexiivaLogo variant="light" className="h-8 w-auto" showTagline={true} />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#9A9CB3]">
                {dict?.footer?.desc ||
                  'High-fidelity Operator Training Simulators (OTS) for refineries, gas plants, and petrochemical sites. Engineered to turn physical process units into virtual DCS consoles.'}
              </p>

              {/* Tagline Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono-tag text-[10px] text-[#8B4CFF]">
                <span>CLOSING VISION:</span>
                <span className="text-[#E9EAF4]">
                  {dict?.common?.closingLine || 'Let’s Make OTS Accessible to Every Industrial Unit.'}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3 text-[#9A9CB3]">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[#8B4CFF] hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[#8B4CFF] hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[#8B4CFF] hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-[#8B4CFF] hover:text-white"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-mono-tag text-xs font-bold tracking-wider text-[#E9EAF4] uppercase">
              {dict?.footer?.navCol || 'Navigation'}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#38BDF8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-mono-tag text-xs font-bold tracking-wider text-[#E9EAF4] uppercase">
              {dict?.footer?.solutionsCol || 'Solutions'}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {solutionsLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#38BDF8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Corporate Info Block (OnSpec-style dense) */}
          <div>
            <h3 className="font-mono-tag text-xs font-bold tracking-wider text-[#E9EAF4] uppercase">
              {dict?.footer?.companyCol || 'Corporate Office'}
            </h3>
            <div className="mt-4 space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#8B4CFF] shrink-0 mt-0.5" />
                <span className="font-mono-tag text-[#E9EAF4]">
                  {dict?.footer?.addressPlaceholder ||
                    '[Corporate Headquarters — Cairo / Alexandria, Egypt]'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#38BDF8] shrink-0" />
                <a
                  href="mailto:contact@nexiiva.com"
                  className="font-mono-tag text-[#E9EAF4] hover:underline"
                >
                  contact@nexiiva.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#22C55E] shrink-0" />
                <span className="font-mono-tag text-[#9A9CB3]">
                  {dict?.footer?.phonePlaceholder || '[Phone — to be provided]'}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <Link
                href={redirectedPathName(switchLocale)}
                className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono-tag text-[#E9EAF4] transition-colors hover:bg-white/10"
              >
                <Languages className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span>{locale === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch to English (US)'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Disclaimer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs">
          <p className="text-[#9A9CB3]">
            © {currentYear} Nexiiva. {dict?.footer?.rights || 'All rights reserved.'}{' '}
            <span className="font-mono-tag text-[10px] text-[#8B4CFF]">
              [PRE-REVENUE STAGE · PILOT READINESS]
            </span>
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/investors`}
              className="text-[#9A9CB3] hover:text-[#38BDF8] transition-colors"
            >
              {dict?.nav?.investors || 'Investors'}
            </Link>
            <Link
              href={`/${locale}/legal/privacy`}
              className="text-[#9A9CB3] hover:text-[#38BDF8] transition-colors"
            >
              {dict?.footer?.privacy || 'Privacy Policy'}
            </Link>
            <Link
              href={`/${locale}/legal/terms`}
              className="text-[#9A9CB3] hover:text-[#38BDF8] transition-colors"
            >
              {dict?.footer?.terms || 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
