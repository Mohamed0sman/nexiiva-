import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock, Building2, MessageCircle } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'اتصل بنكسيفا' : 'Contact Us & Corporate Inquiries',
    description:
      'Connect directly with Nexiiva engineering and commercial leadership in Cairo and Alexandria, Egypt.',
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="COMMERCIAL & ENGINEERING"
          title="Direct Contact & Site Scoping"
          subtitle="Reach out directly to Eng. Mostafa Adel and our engineering operations team for technical consultations, pilot scoping, and enterprise inquiries."
          theme="light"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Corporate Info & Direct Access (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm space-y-6">
              <h3 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-slate-900">
                Direct Contacts & Office
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono-tag text-xs">DIRECT INQUIRIES EMAIL</strong>
                    <a
                      href="mailto:Mostafa.adel.esmaiel@gmail.com"
                      className="text-xs text-sky-600 hover:underline font-mono-tag font-medium break-all"
                    >
                      Mostafa.adel.esmaiel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono-tag text-xs">WHATSAPP & MOBILE</strong>
                    <a
                      href="https://wa.me/201004131154"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 hover:underline font-mono-tag font-bold flex items-center gap-1.5 mt-0.5"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>+20 100 413 1154 (01004131154)</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono-tag text-xs">HEADQUARTERS LOCATION</strong>
                    <span className="text-slate-600 text-xs font-mono-tag">
                      Cairo & Alexandria Operations, Egypt
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono-tag text-xs">RESPONSE SLA</strong>
                    <span className="text-slate-600 text-xs font-mono-tag">
                      Sunday – Thursday: 08:00 – 18:00 (EET) · Inquiries acknowledged within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/201004131154?text=Hello%20Eng.%20Mostafa%2C%20I%20am%20contacting%20you%20regarding%20Nexiiva%20industrial%20digital%20twins."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-3 text-xs font-bold text-white shadow-sm transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Corporate Hub Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Egypt & GCC Industrial Deployment
                  </h4>
                  <p className="text-xs text-slate-500 font-mono-tag mt-0.5">
                    Air-gapped on-premise installation & regional engineering support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
