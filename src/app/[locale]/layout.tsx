import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import {
  spaceGrotesk,
  inter,
  jetbrainsMono,
  ibmPlexArabic,
  cairo,
} from '@/app/fonts';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { JsonLd } from '@/components/JsonLd';
import type { Dict } from '@/types/dict';

type LocaleParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  const title = isArabic
    ? 'نكسيفا | محاكي تدريب المشغّلين (OTS) لمصافي النفط والبتروكيماويات'
    : 'Nexiiva | Operator Training Simulator (OTS) for Industrial Units';

  const description = isArabic
    ? 'تحول نكسيفا وحدتك الصناعية الحقيقية إلى محاكي تدريب متقدم وواقعي بنظام تحكم موزع DCS — ليواجه المشغلون أصعب سيناريوهات الطوارئ بأمان وبناء دقيق.'
    : 'Nexiiva turns your physical process unit into a safe, realistic DCS-style training simulator — so operators face the worst day before it happens.';

  return {
    title: {
      default: title,
      template: '%s | Nexiiva',
    },
    description,
    keywords: [
      'Operator Training Simulator',
      'OTS',
      'Refinery simulator',
      'DCS emulation',
      'Process simulation',
      'Crude distillation unit',
      'CDU simulator',
      'Industrial training',
      'Chemical engineering',
      'محاكي تدريب المشغلين',
      'تكرير النفط',
      'بتروكيماويات',
    ],
    metadataBase: new URL('https://nexiiva.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://nexiiva.com/${locale}`,
      siteName: 'Nexiiva',
      images: [
        {
          url: '/assets/photos/hero-control-room.jpg',
          width: 1200,
          height: 630,
          alt: 'Nexiiva Control Room Operations',
        },
      ],
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/photos/hero-control-room.jpg'],
    },
    icons: {
      icon: '/assets/brand/logo-light.png',
      apple: '/assets/brand/logo-light.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = (await getMessages()) as unknown as Dict;
  const isRtl = locale === 'ar';

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`h-full ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${ibmPlexArabic.variable} ${cairo.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:rounded-lg focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-md focus:outline-none"
        >
          {isRtl ? 'الانتقال إلى المحتوى الرئيسي' : 'Skip to main content'}
        </a>

        <NextIntlClientProvider messages={messages} locale={locale}>
          <JsonLd locale={locale} />
          <SmoothScroll>
            <Header locale={locale} dict={messages} />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer locale={locale} dict={messages} />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
