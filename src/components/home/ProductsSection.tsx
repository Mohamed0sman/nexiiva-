'use client';

import React, { useState } from 'react';
import { Lightbox } from '@/components/Lightbox';
import { Layers, ZoomIn, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ProductsSectionProps {
  locale: string;
  dict?: Dict;
}

export function ProductsSection({ locale, dict }: ProductsSectionProps) {
  const isAr = locale === 'ar';
  const [activeImage, setActiveImage] = useState<{ src: string; caption: string } | null>(null);

  const eyebrow = dict?.products?.eyebrow || (isAr ? 'منتجاتنا' : 'OUR PRODUCTS');
  const title =
    dict?.products?.title ||
    (isAr
      ? 'برمجيات محاكاة مبنية لعمليات المصانع الحقيقية'
      : 'Simulation software built for real plant operations');
  const lead = dict?.products?.lead || (isAr ? 'تدرّب على وحدات عمليات جاهزة.' : 'Practice on ready process units.');
  const tag = dict?.products?.tag || (isAr ? 'متاح الآن' : 'Available now');
  const productName = dict?.products?.name || 'Nexiiva OTS';

  const bullets = dict?.products?.bullets || (isAr ? [
    'وحدة CDU/VDU جاهزة، ووحدات أخرى في الطريق',
    'شاشات تشبه DCS مع منحنيات وإنذارات حية',
    'محطة مدرّب لحقن الأعطال وتقييم الأداء',
  ] : [
    'CDU/VDU unit ready, more units on the way',
    'DCS-style console with live trends and alarms',
    'Instructor console for fault injection and scoring',
  ]);

  const screenshots = dict?.products?.screenshots || [
    {
      caption: isAr ? 'عمود التقطير الجوي (Atmospheric Column)' : 'Atmospheric column (CDU)',
      src: '/assets/screens/cdu-atm-column.webp',
    },
    {
      caption: isAr ? 'عمود التفريغ (Vacuum Column)' : 'Vacuum column (VDU)',
      src: '/assets/screens/vdu-vacuum-column.webp',
    },
    {
      caption: isAr ? 'قطار تسخين الخام (Crude Preheat Train)' : 'Crude preheat train',
      src: '/assets/screens/crude-preheat-train.webp',
    },
    {
      caption: isAr ? 'قيم العملية الحية (Live Process Values)' : 'Live process values',
      src: '/assets/screens/live-process-values.webp',
    },
    {
      caption: isAr ? '١٢ منحنى حي في نفس الوقت (12 Live Trends)' : '12 live trends at once',
      src: '/assets/screens/live-trends-12.webp',
    },
  ];

  const handleCtaClick = () => {
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
    <>
      <section id="products" className="py-20 lg:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          
          {/* Header Block */}
          <div className="flex flex-col items-start text-start mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
              <Layers className="w-4 h-4 text-[#0084d3]" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-4">
              {title}
            </h2>

            <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[62ch] font-normal">
              {lead}
            </p>
          </div>

          {/* Product Showcase Card with 5-Screenshot Gallery */}
          <div className="bg-white border border-[#e3e8ee] rounded-[24px] p-6 sm:p-9 shadow-[0_12px_40px_-10px_rgba(16,22,34,0.06)] flex flex-col">
            
            {/* Gallery Top Notice */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{isAr ? 'معرض شاشات الكونسول الحي (اضغط للتكبير)' : 'Live Console Screens (Click any image to zoom)'}</span>
              </div>
              <span className="hidden sm:inline text-slate-400">
                1:1 DCS Emulation Views
              </span>
            </div>

            {/* 5-Screenshot Responsive Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {screenshots.map((shot, idx) => {
                const isLast = idx === screenshots.length - 1;
                return (
                  <figure
                    key={idx}
                    className={`m-0 flex flex-col ${isLast ? 'sm:col-span-2' : ''}`}
                  >
                    <div
                      className="group relative overflow-hidden rounded-xl border border-slate-300/80 bg-[#0A0E17] cursor-zoom-in transition-all duration-300 hover:border-sky-400 shadow-xs hover:shadow-md"
                      onClick={() => setActiveImage({ src: shot.src, caption: shot.caption })}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        className="block w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                        loading="eager"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 bg-black/75 text-white text-xs font-mono px-3.5 py-1.5 rounded-lg backdrop-blur-xs border border-white/10">
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>{isAr ? 'تكبير الشاشة' : 'Click to zoom'}</span>
                        </span>
                      </div>
                    </div>
                    <figcaption className="text-xs sm:text-sm font-medium text-slate-600 mt-2.5 flex items-center gap-2 ps-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>{shot.caption}</span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            {/* Product Metadata & Features */}
            <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="inline-flex items-center text-xs font-mono font-semibold text-[#006aa8] bg-[#e7faff] border border-[#c0e3f6] rounded-full px-3 py-1 mb-2 uppercase tracking-wider">
                  {tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#101622] mb-3">
                  {productName}
                </h3>

                <ul className="space-y-2 text-sm sm:text-base text-[#485460]">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="self-start md:self-end">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0084d3] hover:bg-[#006fb3] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>{isAr ? 'طلب تجربة المحاكي' : 'Request Simulator Demo'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!activeImage}
        src={activeImage?.src || null}
        alt={activeImage?.caption}
        onClose={() => setActiveImage(null)}
      />
    </>
  );
}
