'use client';

import React from 'react';
import type { Dict } from '@/types/dict';

interface FooterProps {
  locale: string;
  dict?: Dict;
}

export function Footer({ locale, dict }: FooterProps) {
  const isAr = locale === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e3e8ee] bg-white py-6 px-5 text-center text-[#8a94a3] text-sm">
      <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="m-0 font-medium text-slate-600">
          © {currentYear} Nexiiva · {isAr ? 'القاهرة / الإسكندرية، مصر' : 'Cairo / Alexandria, Egypt'}
        </p>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <a href="#home" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.home || (isAr ? 'المقدمة' : 'Introduction')}
          </a>
          <span>·</span>
          <a href="#about" className="hover:text-[#0084d3] transition-colors">
            {dict?.nav?.about || (isAr ? 'من نحن' : 'About us')}
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
