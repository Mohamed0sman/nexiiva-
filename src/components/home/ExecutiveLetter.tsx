'use client';

import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import type { Dict } from '@/types/dict';

interface ExecutiveLetterProps {
  locale: string;
  dict?: Dict;
}

export function ExecutiveLetter({ locale }: ExecutiveLetterProps) {
  const isAr = locale === 'ar';

  return (
    <section className="relative py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12 lg:p-14 shadow-2xs">
          {/* Header Tag */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-700" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
                {isAr ? 'رسالة الرئيس التنفيذي والتزام التميز' : 'EXECUTIVE COMMITMENT & LEADERSHIP STATEMENT'}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              {isAr ? 'التميز التشغيلي والسلامة' : 'Operational Excellence'}
            </span>
          </div>

          {/* Letter Content */}
          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] leading-snug">
              {isAr
                ? 'ملتزمون بالتميز الهندسي وسلامة منشآت الطاقة والعمليات الصناعية'
                : 'Committed to Engineering Excellence & Plant Process Safety'}
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <p>
                {isAr
                  ? 'يشرفنا في نكسيفا أن نقود جيلاً جديداً من حلول النمذجة الديناميكية ومحاكيات تدريب المشغلين (OTS) المخصصة لقطاعات تكرير البترول والغاز الطبيعي والبتروكيماويات في مصر والشرق الأوسط. انطلقت نكسيفا من رؤية هندسية واضحة تضع حماية الأرواح وسلامة الأصول الرأسمالية في صلب أولوياتها.'
                  : 'It is an honor to lead Nexiiva as we pioneer a new generation of high-fidelity dynamic simulation and Operator Training Simulators (OTS) engineered specifically for the oil, gas, and petrochemical sectors across Egypt and the Middle East. Nexiiva was founded on an uncompromising principle: that plant safety and human lives must always come first.'}
              </p>

              <p>
                {isAr
                  ? 'على مدار السنوات الماضية، واجهت المصانع تحديات حقيقية ناتجة عن التكلفة الباهظة والجمود البرمجي لموردي أنظمة التحكم التقليديين، مما جعل امتلاك محاكي واقعي مقتصراً على عدد محدود من المنشآت الضخمة. هدفنا الأساسي هو كسر هذا الاحتكار عبر بناء محاكيات دقيقة مطابقة لبيئة الـ DCS ولوائح التشغيل القياسية (SOP) في غضون أيام وأسابيع وبمنظومة تشغيل محلي معزولة تماماً (Air-Gapped).'
                  : 'Historically, energy facilities have struggled under the weight of multi-million dollar capital costs and multi-year lead times imposed by legacy DCS conglomerates, leaving the vast majority of processing units without dynamic emergency simulators. We have engineered Nexiiva to eliminate this barrier—delivering 1:1 DCS-matching simulators directly from plant documentation in weeks, with strictly air-gapped on-premise deployment.'}
              </p>

              <p className="font-semibold text-[#0A192F]">
                {isAr
                  ? '«هدفنا أن يمارس كل مهندس ومشغّل في غرف التحكم أعتى حالات الطوارئ مئات المرات في بيئة المحاكاة الافتراضية قبل أن يتعامل مع صمام حي في المنشأة الصناعية.»'
                  : '“Our mission is to ensure every control room technician has faced their worst-case emergency hundreds of times in simulation before ever touching live plant valves.”'}
              </p>
            </div>

            {/* Signature & Credentials */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-[#0A192F]">
                  {isAr ? 'مصطفى عادل' : 'Mostafa Adel'}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">
                  {isAr ? 'المؤسس والرئيس التنفيذي، نكسيفا' : 'Founder & CEO, Nexiiva'}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isAr ? 'مهندس كيميائي ومتخصص في النمذجة الديناميكية للعمليات' : 'Chemical Engineer & Process Modeling Specialist'}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr ? 'القاهرة، جمهورية مصر العربية' : 'Cairo, Egypt · Energy & Industrial Simulators'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
