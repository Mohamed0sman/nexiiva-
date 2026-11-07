'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import {
  Clock,
  UserX,
  TrendingUp,
  Flame,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ProblemSectionProps {
  dict: Dict;
}

export function ProblemSection({ dict }: ProblemSectionProps) {
  const [activeBeat, setActiveBeat] = useState(0);

  const beats = [
    {
      step: '01',
      icon: Clock,
      title:
        dict?.problem?.beats?.[0]?.title || 'Day one in the control room',
      desc:
        dict?.problem?.beats?.[0]?.desc ||
        "Screens, alarms, and 'sit next to the senior'. Observational learning without emergency repetitions.",
    },
    {
      step: '02',
      icon: TrendingUp,
      title: dict?.problem?.beats?.[1]?.title || 'The annual reality',
      desc:
        dict?.problem?.beats?.[1]?.desc ||
        'After a year, an operator has seen about 8 problems — 3 of them repeated. Critical upsets remain completely unpracticed.',
    },
    {
      step: '03',
      icon: UserX,
      title: dict?.problem?.beats?.[2]?.title || 'The senior is absent',
      desc:
        dict?.problem?.beats?.[2]?.desc ||
        'A problem never seen before hits: leak, fire, or emergency shutdown. Seconds of hesitation escalate into a full plant trip.',
    },
    {
      step: '04',
      icon: Flame,
      title: dict?.problem?.beats?.[3]?.title || 'The compounding cost',
      desc:
        dict?.problem?.beats?.[3]?.desc ||
        '7 days downtime ($70K) + equipment repairs ($50K) + off-spec penalties ($30K) = $150K lost from one small problem.',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.problem?.eyebrow || 'التحدي التشغيلي'}
          title={
            dict?.problem?.title ||
            'التكلفة الباهظة للتعلم على وحدة صناعية حية.'
          }
          subtitle="التدريب التقليدي القائم على المشاهدة فقط يترك مشغلي الكونسول غير مستعدين للتعامل مع اضطرابات العمليات النادرة والحرجة."
          theme="light"
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left: 4 Beats Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {beats.map((beat, index) => {
              const Icon = beat.icon;
              const isSelected = activeBeat === index;

              return (
                <div
                  key={beat.step}
                  onClick={() => setActiveBeat(index)}
                  className={`cursor-pointer rounded-xl border p-5 transition-all duration-200 ${
                    isSelected
                      ? 'border-slate-400 bg-white shadow-xs'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#0A192F] text-white'
                          : 'bg-white border border-slate-200 text-slate-600'
                      }`}
                    >
                      {beat.step}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-base font-bold transition-colors ${
                            isSelected ? 'text-[#0A192F]' : 'text-slate-800'
                          }`}
                        >
                          {beat.title}
                        </h3>
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            isSelected ? 'text-[#1D4ED8]' : 'text-slate-400'
                          }`}
                        />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {beat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Real Photo + Calm Economic Breakdown (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Operator Control Room Photo */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xs">
              <Image
                src="/assets/photos/operator-control-room.jpg"
                alt="Console Operator Monitoring Distributed Control System"
                width={700}
                height={460}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Cost Buildup Breakdown Card */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  تحليل التكلفة التقديرية للتوقف غير المخطط له
                </h4>
                <span className="text-xs font-bold text-red-600 font-mono">
                  $150,000+
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {/* 1. Downtime */}
                <div>
                  <div className="flex justify-between text-xs text-slate-700">
                    <span>فاقد الإنتاج وتوقف الوحدة (7 أيام)</span>
                    <span className="text-slate-900 font-bold font-mono">$70,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-700 rounded-full w-[47%]" />
                  </div>
                </div>

                {/* 2. Equipment Repairs */}
                <div>
                  <div className="flex justify-between text-xs text-slate-700">
                    <span>صيانة البطانات والأعطال الداخلية للصواني</span>
                    <span className="text-slate-900 font-bold font-mono">$50,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full w-[33%]" />
                  </div>
                </div>

                {/* 3. Off-spec & Penalties */}
                <div>
                  <div className="flex justify-between text-xs text-slate-700">
                    <span>مخالفات تصريف الشعلة والمنتجات خارج المواصفات</span>
                    <span className="text-slate-900 font-bold font-mono">$30,000</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full w-[20%]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">إجمالي الخسائر المباشرة لحادثة واحدة:</span>
                <span className="font-bold text-[#0A192F] font-mono">$150,000 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
