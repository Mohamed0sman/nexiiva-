import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { SectionHeader } from '@/components/SectionHeader';
import { JourneySection } from '@/components/home/JourneySection';
import { LinkedinIcon } from '@/components/SocialIcons';
import type { Dict } from '@/types/dict';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'عن نكسيفا وفريق العمل' : 'About Nexiiva & Leadership',
    description:
      'The story behind Nexiiva, our mission to make high-fidelity OTS accessible to every industrial unit, and the founding team.',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as unknown as Dict;

  const team = messages?.leadership?.members || [
    {
      name: locale === 'ar' ? 'مصطفى عادل' : 'Mostafa Adel',
      role: locale === 'ar' ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO',
      bio:
        locale === 'ar'
          ? 'مهندس كيميائي ومتخصص في المحاكاة الديناميكية للعمليات البترولية وتطوير أنظمة تدريب المشغلين.'
          : 'Process simulation specialist and chemical engineer focused on accessible high-fidelity dynamic modeling for energy plants.',
      image: '/assets/team/mostafa-adel.jpg',
      initials: 'MA',
    },
    {
      name: locale === 'ar' ? 'محمد عثمان' : 'Mohamed Osman',
      role: locale === 'ar' ? 'شريك مؤسس والرئيس التقني (CTO)' : 'Co-Founder & CTO',
      bio:
        locale === 'ar'
          ? 'معماري أنظمة برمجية متخصص في محركات الحسابات الديناميكية ومحاكاة شاشات DCS المعزولة أمنياً.'
          : 'Software systems architect specializing in dynamic calculation engines, real-time thermodynamics, and air-gapped DCS emulation.',
      image: '/assets/team/mohamed-osman.jpg',
      initials: 'MO',
    },
    {
      name: locale === 'ar' ? 'جهاد أشرف' : 'Gehad Ashraf',
      role: locale === 'ar' ? 'شريك مؤسس ومستشار الأعمال' : 'Co-Founder, Business Advisor & Mentor',
      bio:
        locale === 'ar'
          ? 'مستشار استراتيجي في الحوكمة المؤسسية والشراكات الإقليمية ونمو المشاريع الصناعية.'
          : 'Strategic operations mentor with deep cross-border expertise in regional venture growth, industrial partnerships, and corporate governance.',
      image: null,
      initials: 'GA',
    },
    {
      name: locale === 'ar' ? 'ردينة إمام' : 'Rodayna Emam',
      role: locale === 'ar' ? 'شريك مؤسس وتطوير الأعمال' : 'Co-Founder, Business Development',
      bio:
        locale === 'ar'
          ? 'مسؤولة النمو التجاري وإدارة عقود المشاريع التجريبية والتوسع في قطاع التكرير والطاقة.'
          : 'Commercial growth strategist leading refinery client engagement, industrial pilot contracts, and GCC expansion.',
      image: null,
      initials: 'RE',
    },
  ];

  return (
    <div className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={locale === 'ar' ? 'قصتنا ورؤيتنا' : 'OUR STORY & PURPOSE'}
          title={
            locale === 'ar'
              ? 'إتاحة محاكيات OTS عالية الدقة لكل وحدة صناعية'
              : 'Making OTS Accessible to Every Industrial Unit'
          }
          subtitle={
            locale === 'ar'
              ? 'تأسست نكسيفا على أيدي مهندسين يؤمنون بأن سلامة غرف التحكم يجب ألا تعتمد على الحظ أو الملاحظة العابرة.'
              : 'Founded by engineers who believe control room safety should never depend on luck or informal apprenticeship.'
          }
          theme="light"
        />

        {/* Narrative Section: Adam's First Day */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#1D4ED8]">
              {locale === 'ar' ? 'قصة التأسيس الواقعية' : 'THE GENESIS NARRATIVE'}
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0A192F]">
              {locale === 'ar'
                ? 'اليوم الأول للمهندس في غرفة التحكم المركزية'
                : 'Adam’s First Day in the Central Control Room'}
            </h3>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
              {locale === 'ar' ? (
                <>
                  <p>
                    عندما بدأ مهندس الكونسول المبتدئ ورديته الأولى لمدة 12 ساعة في وحدة التقطير الجوي، سُلِّم سماعة الرأس وأمامه اثنتا عشرة شاشة متوهجة، وقيل له: <span className="text-[#0A192F] italic font-medium">&ldquo;اجلس بجوار المهندس الأقدم وشاهد ما يفعله بدقة.&rdquo;</span>
                  </p>
                  <p>
                    مرت الأشهر وهو يشاهد عمليات روتينية هادئة: تعديلات طفيفة على الصمامات، تقلبات اعتيادية في المستويات، وأخذ عينات قياسية. أما حالات الطوارئ المخيفة — كانقطاع تيار الراجع، أو انطفاء شعلة الفرن، أو تسلسل الإغلاق الاضطراري — فتحدث مرة كل سنوات.
                  </p>
                  <p>
                    وعندما وقع اضطراب حرج للمرة الأولى في غياب المهندس الأقدم، أدت ثوانٍ معدودة من التردد إلى إغلاق كامل للوحدة: <strong className="text-[#0A192F]">7 أيام من فقدان الإنتاج (70 ألف دولار)، 50 ألف دولار تكاليف صيانة لبطانة الفرن، و30 ألف دولار غرامات منتجات خارج المواصفات. خسارة تجاوزت 150 ألف دولار بسبب حادثة واحدة كان يمكن التدرب عليها مسبقاً.</strong>
                  </p>
                  <p>
                    تأسست نكسيفا لإنهاء هذه المعضلة: لتمكين كل مشغل من مواجهة أسوأ السيناريوهات مئات المرات في بيئة محاكاة واقعية قبل أن يتعامل مع صمام حقيقي واحد.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    When a junior console engineer sat down for his first 12-hour shift at an atmospheric distillation unit, he was handed a headset, shown twelve glowing screens, and told: <span className="text-[#0A192F] italic font-medium">&ldquo;Sit next to the senior and watch carefully.&rdquo;</span>
                  </p>
                  <p>
                    Months passed. He observed routine steady-state conditions: slight valve tweaks, level drifts, normal rundown sampling. But the severe, terrifying operational transients—reflux pump seizure, furnace flameout, emergency trip sequences—only happened once every few years.
                  </p>
                  <p>
                    When a rare upset finally occurred during an off-shift with the senior engineer away, the inevitable hesitation resulted in a unit trip: <strong className="text-[#0A192F]">seven days of lost production ($70K), $50K in refractory and tray repairs, and $30K in off-spec penalties. Over $150,000 lost from one small problem.</strong>
                  </p>
                  <p>
                    Nexiiva was founded to change this reality: to ensure that every control room operator faces the worst day hundreds of times in a realistic virtual simulator before ever touching a live valve.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mission Statement Callout */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-[#1D4ED8]">
            {locale === 'ar' ? 'الرؤية المؤسسية' : 'CORPORATE VISION'}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0A192F]">
            {locale === 'ar'
              ? '«محاكيات تدريب المشغلين حق لكل وحدة صناعية وليست حكراً على المنشآت العملاقة.»'
              : '“Let’s Make OTS Accessible to Every Industrial Unit.”'}
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            {locale === 'ar'
              ? 'تتطلب أنظمة المحاكاة التقليدية ملايين الدولارات وسنوات طويلة للتسليم في بيئات برمجية معقدة. تقدم نكسيفا محاكاة عالية الدقة معزولة أمنياً في غضون أيام وبكسر من التكلفة المعتادة.'
              : 'Traditional OTS providers charge millions of dollars and take years to deliver custom proprietary hardware. Nexiiva delivers air-gapped, high-fidelity simulation in approximately one week of build time at a fraction of the cost.'}
          </p>
        </div>

        {/* Founding Leadership Team (4 members) */}
        <div id="team" className="mt-20">
          <SectionHeader
            eyebrow={locale === 'ar' ? 'فريق القيادة' : 'LEADERSHIP & FOUNDERS'}
            title={
              locale === 'ar'
                ? 'الفريق القيادي والمهندسون المؤسسون'
                : 'The Engineering & Executive Team'
            }
            subtitle={
              locale === 'ar'
                ? 'بقيادة مهندسي محاكاة العمليات الكيميائية ومعماريي البرمجيات وخبراء تطوير الأعمال الصناعية.'
                : 'Led by process modeling engineers, systems architects, and industrial commercial leaders.'
            }
            align="center"
            theme="light"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-colors hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block rounded-md bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[10px] font-bold text-[#1D4ED8] tracking-wider mb-4">
                    {idx === 0
                      ? (locale === 'ar' ? 'نمذجة العمليات والمحاكاة' : 'PROCESS MODELING')
                      : idx === 1
                      ? (locale === 'ar' ? 'معمارية محركات المحاكاة' : 'SYSTEMS ARCHITECTURE')
                      : idx === 2
                      ? (locale === 'ar' ? 'الحوكمة والاستشارات' : 'STRATEGIC ADVISORY')
                      : (locale === 'ar' ? 'النمو التجاري والشراكات' : 'COMMERCIAL GROWTH')}
                  </div>

                  <h3 className="text-base font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 mt-1">
                    {member.role}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium">Nexiiva Executive</span>
                  <LinkedinIcon className="h-3.5 w-3.5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap & Milestones Section */}
        <div id="roadmap" className="mt-20">
          <JourneySection dict={messages} />
        </div>
      </div>
    </div>
  );
}
