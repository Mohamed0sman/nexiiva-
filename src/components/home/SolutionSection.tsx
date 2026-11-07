'use client';

import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { NexiivaLogo } from '@/components/NexiivaLogo';
import {
  Layers,
  ShieldAlert,
  GitBranch,
  DollarSign,
} from 'lucide-react';
import type { Dict } from '@/types/dict';

interface SolutionSectionProps {
  dict: Dict;
}

export function SolutionSection({ dict }: SolutionSectionProps) {
  const nodes = [
    {
      id: '01',
      icon: Layers,
      title:
        dict?.solution?.nodes?.[0]?.title ||
        'A simulation platform for industrial units',
      desc:
        dict?.solution?.nodes?.[0]?.desc ||
        'Full-spectrum dynamic simulation designed specifically for refining and process facilities.',
      pos: 'top-left',
    },
    {
      id: '02',
      icon: ShieldAlert,
      title:
        dict?.solution?.nodes?.[1]?.title ||
        'Let operators practice real-world scenarios safely',
      desc:
        dict?.solution?.nodes?.[1]?.desc ||
        'Face extreme process trips and equipment failures without risking personnel, environment, or asset integrity.',
      pos: 'top-right',
    },
    {
      id: '03',
      icon: GitBranch,
      title:
        dict?.solution?.nodes?.[2]?.title ||
        'Tailor it to your unit with its full logic',
      desc:
        dict?.solution?.nodes?.[2]?.desc ||
        'Faithfully reproduces your plant’s P&ID loops, control valve characteristics, and operating envelops.',
      pos: 'bottom-left',
    },
    {
      id: '04',
      icon: DollarSign,
      title:
        dict?.solution?.nodes?.[3]?.title ||
        'A cost-effective solution',
      desc:
        dict?.solution?.nodes?.[3]?.desc ||
        'Dramatically reduces traditional simulator costs and build timelines with streamlined engineering.',
      pos: 'bottom-right',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={dict?.solution?.eyebrow || '02 — THE SOLUTION'}
          title={
            dict?.solution?.title ||
            'A simulation platform built for industrial reality.'
          }
          subtitle={
            dict?.solution?.subtitle ||
            'Connecting engineering rigor with accessible console training.'
          }
          align="center"
          theme="light"
        />

        {/* Central Logo Node with 4 Connected Branches */}
        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Subtle Connecting Lines */}
          <svg
            className="absolute inset-0 h-full w-full hidden md:block pointer-events-none"
            viewBox="0 0 800 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connecting Lines from Center (400, 240) to 4 Nodes */}
            <path
              d="M 400 240 C 320 200, 250 140, 200 110"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 400 240 C 480 200, 550 140, 600 110"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 400 240 C 320 280, 250 340, 200 370"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 400 240 C 480 280, 550 340, 600 370"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Grid Layout of 4 Cards Surrounding Center Logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono-tag text-xs font-bold text-[#1D4ED8]">
                      PILLAR {node.id}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#0A192F]">
                    {node.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Brand Anchor Core */}
          <div className="mt-8 flex justify-center relative z-20">
            <div className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0A192F] px-6 py-3 shadow-md">
              <NexiivaLogo variant="light" className="h-7 w-auto" />
              <div className="h-4 w-px bg-slate-700" />
              <span className="font-mono-tag text-xs text-blue-300 font-semibold tracking-wide">
                CORE SIMULATION ARCHITECTURE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
