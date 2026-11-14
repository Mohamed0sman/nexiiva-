'use client';

import React from 'react';
import Link from 'next/link';
import type { Dict } from '@/types/dict';

interface FooterProps {
  locale: string;
  dict?: Dict;
}

export function Footer({ locale, dict }: FooterProps) {
  const isAr = locale === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6 text-slate-500 text-sm">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/nexiiva-logo-v8.png"
            alt="Nexiiva"
            className="h-6 w-auto block grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <span className="text-xs text-slate-400">|</span>
          <p className="m-0 text-xs text-slate-600 font-medium">
            © {currentYear} Nexiiva · {isAr ? 'القاهرة / الإسكندرية، مصر' : 'Cairo / Alexandria, Egypt'}
          </p>
        </div>

        {/* Anchor Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
          <a href="#home" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.home || (isAr ? 'المقدمة' : 'Introduction')}
          </a>
          <span>·</span>
          <a href="#about" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.about || (isAr ? 'من نحن' : 'About us')}
          </a>
          <span>·</span>
          <a href="#team" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.team || (isAr ? 'الفريق' : 'Team')}
          </a>
          <span>·</span>
          <a href="#products" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.products || (isAr ? 'منتجاتنا' : 'Our products')}
          </a>
          <span>·</span>
          <a href="#plans" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.plans || (isAr ? 'اختر خطتك' : 'Select your plan')}
          </a>
          <span>·</span>
          <a href="#contact" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.contact || (isAr ? 'تواصل معنا' : 'Contact us')}
          </a>
        </div>
      </div>
    </footer>
  );
}
