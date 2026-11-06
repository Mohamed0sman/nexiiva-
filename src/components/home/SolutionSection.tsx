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
    <section className="relative py-24 bg-[#05060A] overflow-hidden border-b border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#6D3BF0]/10 blur-[140px] pointer-events-none" />

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
        />

        {/* Central Logo Node with 4 Connected Branches */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Animated Connecting SVG Curves (Deck Motif) */}
          <svg
            className="absolute inset-0 h-full w-full hidden md:block pointer-events-none"
            viewBox="0 0 800 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6D3BF0" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B4CFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B6BFF" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connecting Lines from Center (400, 240) to 4 Nodes */}
            {/* Top-Left */}
            <path
              d="M 400 240 C 320 200, 250 140, 200 110"
              stroke="url(#curve-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Top-Right */}
            <path
              d="M 400 240 C 480 200, 550 140, 600 110"
              stroke="url(#curve-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Bottom-Left */}
            <path
              d="M 400 240 C 320 280, 250 340, 200 370"
              stroke="url(#curve-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Bottom-Right */}
            <path
              d="M 400 240 C 480 280, 550 340, 600 370"
              stroke="url(#curve-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Travelling pulse circles */}
            <circle cx="280" cy="168" r="3" fill="#38BDF8" className="animate-ping" />
            <circle cx="520" cy="168" r="3" fill="#8B4CFF" className="animate-ping" />
            <circle cx="280" cy="312" r="3" fill="#8B4CFF" className="animate-ping" />
            <circle cx="520" cy="312" r="3" fill="#38BDF8" className="animate-ping" />
          </svg>

          {/* Grid Layout of 4 Cards Surrounding Center Logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="rounded-xl border border-white/10 bg-[#0E111C]/90 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#8B4CFF]/50 hover:shadow-[0_0_25px_rgba(109,59,240,0.25)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6D3BF0]/15 text-[#38BDF8]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono-tag text-xs font-bold text-[#8B4CFF]">
                      PILLAR {node.id}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#E9EAF4]">
                    {node.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#9A9CB3] leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Brand Anchor Core */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-[#090C16] px-6 py-3 shadow-2xl backdrop-blur-xl">
              <NexiivaLogo variant="light" className="h-7 w-auto" />
              <div className="h-4 w-px bg-white/10" />
              <span className="font-mono-tag text-xs text-[#38BDF8] font-semibold">
                CORE SIMULATION ARCHITECTURE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
