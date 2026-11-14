'use client';

import React, { useState } from 'react';
import { Lightbox } from '@/components/Lightbox';
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
      caption: isAr ? 'عمود التقطير الجوي' : 'Atmospheric column',
      src: '/assets/screens/cdu-atm-column.webp',
    },
    {
      caption: isAr ? 'عمود التفريغ' : 'Vacuum column',
      src: '/assets/screens/vdu-vacuum-column.webp',
    },
    {
      caption: isAr ? 'قطار تسخين الخام' : 'Crude preheat train',
      src: '/assets/screens/crude-preheat-train.webp',
    },
    {
      caption: isAr ? 'قيم العملية الحية' : 'Live process values',
      src: '/assets/screens/live-process-values.webp',
    },
    {
      caption: isAr ? '١٢ منحنى حي في نفس الوقت' : '12 live trends at once',
      src: '/assets/screens/live-trends-12.webp',
    },
  ];

  return (
    <>
      <section id="products" className="py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-[1100px] px-5">
          {/* Eyebrow */}
          <div className="text-xs font-mono font-bold tracking-widest text-[#0084d3] uppercase mb-3">
            {eyebrow}
          </div>

          {/* H2 Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101622] tracking-tight mb-3">
            {title}
          </h2>

          {/* Lead */}
          <p className="text-lg sm:text-xl text-[#485460] leading-relaxed max-w-[62ch] mb-8 font-normal">
            {lead}
          </p>

          {/* Product Showcase Card */}
          <div className="bg-white border border-[#e3e8ee] rounded-[22px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(16,22,34,0.06)] flex flex-col">
            
            {/* 5-Screenshot Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {screenshots.map((shot, idx) => {
                const isLast = idx === screenshots.length - 1;
                return (
                  <figure
                    key={idx}
                    className={`m-0 flex flex-col ${isLast ? 'sm:col-span-2' : ''}`}
                  >
                    <div
                      className="group relative overflow-hidden rounded-xl border border-[#e3e8ee] bg-[#0a0e17] cursor-zoom-in"
                      onClick={() => setActiveImage({ src: shot.src, caption: shot.caption })}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        className="block w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="eager"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-mono px-3 py-1.5 rounded-md backdrop-blur-xs">
                          {isAr ? 'اضغط للتكبير' : 'Click to zoom'}
                        </span>
                      </div>
                    </div>
                    <figcaption className="text-sm font-medium text-[#485460] mt-2 ps-1">
                      {shot.caption}
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            {/* Tag Badge */}
            <span className="self-start inline-flex items-center text-xs font-mono font-semibold text-[#006aa8] bg-[#e7faff] border border-[#c0e3f6] rounded-full px-3 py-1 mb-3 uppercase tracking-wider">
              {tag}
            </span>

            {/* Product Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#101622] mb-3">
              {productName}
            </h3>

            {/* Bullet Points */}
            <ul className="list-disc ps-5 space-y-2 text-base text-[#485460] mb-2 leading-relaxed">
              {bullets.map((bullet, idx) => (
                <li key={idx}>
                  {bullet}
                </li>
              ))}
            </ul>
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
