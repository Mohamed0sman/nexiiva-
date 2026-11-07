'use client';

import React from 'react';
import type { Dict } from '@/types/dict';

interface ExecutiveLetterProps {
  locale: string;
  dict?: Dict;
}

export function ExecutiveLetter({ locale }: ExecutiveLetterProps) {
  const isAr = locale === 'ar';

  return (
    <section className="relative py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 lg:p-14 shadow-xs">
          {/* Subheading */}
          <div className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase pb-4 border-b border-slate-100">
            {isAr ? 'رسالة الرئيس التنفيذي · التزام التميز' : 'EXECUTIVE STATEMENT · COMMITMENT TO EXCELLENCE'}
          </div>

          {/* Letter Title */}
          <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#0A192F] leading-tight">
            {isAr
              ? 'ملتزمون بالتميز الهندسي وسلامة منشآت الطاقة والعمليات الصناعية'
              : 'Committed to Engineering Excellence & Plant Process Safety'}
          </h2>

          {/* Letter Body */}
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

            <blockquote className="my-6 ps-4 border-s-2 border-slate-900 text-base sm:text-lg font-medium text-[#0A192F] italic">
              {isAr
                ? '«هدفنا أن يمارس كل مهندس ومشغّل في غرف التحكم أعتى حالات الطوارئ مئات المرات في بيئة المحاكاة الافتراضية قبل أن يتعامل مع صمام حي في المنشأة الصناعية.»'
                : '“Our mission is to ensure every control room technician has faced their worst-case emergency hundreds of times in simulation before ever touching live plant valves.”'}
            </blockquote>

            <p>
              {isAr
                ? 'نحن نؤمن بأن التدريب الجاد والانضباط الإجرائي هما خط الدفاع الأول لحماية المنشآت. ويسعدنا دائماً فتح قنوات الحوار والتعاون المباشر مع قيادات العمليات والتدريب في مصانع ومصافي المنطقة.'
                : 'We believe operational discipline and realistic simulation reps are the frontline defense of any energy facility. We look forward to collaborating directly with operations and training leadership across the region.'}
            </p>
          </div>

          {/* Signature Block */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-bold text-[#0A192F]">
                {isAr ? 'مصطفى عادل' : 'Mostafa Adel'}
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                {isAr ? 'المؤسس والرئيس التنفيذي، نكسيفا' : 'Founder & CEO, Nexiiva'}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {isAr ? 'مهندس كيميائي ومتخصص في النمذجة الديناميكية للعمليات' : 'Chemical Engineer & Process Simulation Specialist'}
              </div>
            </div>

            <div className="text-xs text-slate-500 font-mono">
              {isAr ? 'القاهرة، جمهورية مصر العربية' : 'Cairo, Egypt'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
