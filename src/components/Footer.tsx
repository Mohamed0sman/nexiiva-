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
import { YoutubeIcon } from './SocialIcons';

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
    {
      href: `/${locale}/solutions#ots`,
      label: locale === 'ar' ? 'التوأم الرقمي ومطابقة DCS' : 'Process Digital Twins & DCS',
    },
    {
      href: `/${locale}/solutions#builder`,
      label: locale === 'ar' ? 'محرك النمذجة الهندسية للوحدات' : 'Unit Modeling Engine',
    },
    {
      href: `/${locale}/solutions#console`,
      label: locale === 'ar' ? 'محطة التحكم الإشرافي وإدارة الطوارئ' : 'Supervisory Station',
    },
    {
      href: `/${locale}/solutions#certification`,
      label: locale === 'ar' ? 'منظومة تقييم واعتماد الكفاءة (SOP)' : 'SOP Qualification & Compliance',
    },
    {
      href: `/${locale}/industries`,
      label: locale === 'ar' ? 'التكرير والبتروكيماويات والغاز' : 'Refining & Petrochemicals',
    },
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Corporate Description (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href={`/${locale}`} className="inline-block">
                <NexiivaLogo variant="dark" className="h-8 w-auto" showTagline={true} />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
                {dict?.footer?.desc ||
                  'High-fidelity dynamic process digital twins and DCS console integration for refineries, gas plants, and petrochemical sites.'}
              </p>

              {/* Tagline Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded border border-sky-200 bg-sky-50 px-2.5 py-1 font-mono text-[10px] text-sky-800">
                <span className="font-bold">ENGINEERING VISION:</span>
                <span className="text-slate-800">
                  {dict?.common?.closingLine ||
                    (locale === 'ar'
                      ? 'توائم رقمية متقدمة وهندسة عمليات لكل منشأة طاقة.'
                      : 'High-Fidelity Process Digital Twins for Every Industrial Unit.')}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3 text-slate-500">
              <a
                href="https://youtu.be/x400rPgBSo4?si=uMibAhcd_L-hHyRR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:border-red-300 hover:text-red-600"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/201004131154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:border-emerald-300 hover:text-emerald-600"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-900 uppercase">
              {dict?.footer?.navCol || 'Navigation'}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-sky-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-900 uppercase">
              {dict?.footer?.solutionsCol || 'Solutions'}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {solutionsLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-sky-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Corporate Info Block */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-wider text-slate-900 uppercase">
              {dict?.footer?.companyCol || 'Corporate Office'}
            </h3>
            <div className="mt-4 space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                <span className="font-mono text-slate-700">
                  {dict?.footer?.addressPlaceholder ||
                    'Cairo / Alexandria, Egypt'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sky-600 shrink-0" />
                <a
                  href="mailto:Mostafa.adel.esmaiel@gmail.com"
                  className="font-mono text-slate-800 hover:text-sky-600 hover:underline break-all"
                >
                  Mostafa.adel.esmaiel@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                <a
                  href="https://wa.me/201004131154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-slate-800 hover:text-emerald-600 hover:underline"
                >
                  +20 100 413 1154 (WhatsApp)
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <Link
                href={redirectedPathName(switchLocale)}
                className="inline-flex items-center gap-2 rounded border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-mono text-slate-700 transition-colors hover:bg-slate-100 hover:border-slate-400"
              >
                <Languages className="h-3.5 w-3.5 text-sky-600" />
                <span>{locale === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch to English (US)'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Disclaimer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row text-xs">
          <p className="text-slate-500">
            © {currentYear} Nexiiva. {dict?.footer?.rights || 'All rights reserved.'}{' '}
            <span className="font-mono text-[10px] text-sky-700 bg-sky-50 border border-sky-200 rounded px-1.5 py-0.5">
              [PILOT READINESS · ENERGY OT & PROCESS TWINS]
            </span>
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/investors`}
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              {dict?.nav?.investors || 'Investors'}
            </Link>
            <Link
              href={`/${locale}/legal/privacy`}
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              {dict?.footer?.privacy || 'Privacy Policy'}
            </Link>
            <Link
              href={`/${locale}/legal/terms`}
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              {dict?.footer?.terms || 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
