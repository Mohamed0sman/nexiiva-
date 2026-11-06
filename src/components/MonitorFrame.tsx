'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from './Lightbox';
import { ZoomIn, Activity, ShieldCheck } from 'lucide-react';

interface MonitorFrameProps {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  badge?: string;
  priority?: boolean;
  className?: string;
}

export function MonitorFrame({
  src,
  alt,
  title,
  caption,
  badge = 'DCS EMULATION · LIVE 1:1',
  priority = false,
  className = '',
}: MonitorFrameProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0B12] shadow-2xl transition-all duration-300 hover:border-[#8B4CFF]/40 hover:shadow-[0_0_30px_rgba(109,59,240,0.2)] ${className}`}
      >
        {/* Top Console Monitor Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#11131D]/90 px-4 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]/80" />
            <span className="ms-2 font-mono-tag text-xs font-medium text-[#9A9CB3]">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded bg-white/5 px-2 py-0.5 font-mono-tag text-[10px] text-[#38BDF8]">
              <Activity className="h-3 w-3 text-[#38BDF8]" />
              {badge}
            </span>

            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono-tag text-[11px] text-[#E9EAF4] transition-colors hover:bg-white/15"
              title="Click to Zoom"
            >
              <ZoomIn className="h-3 w-3" />
              <span className="hidden sm:inline">Zoom</span>
            </button>
          </div>
        </div>

        {/* Screenshot Viewport with click to open lightbox */}
        <div
          onClick={() => setIsZoomOpen(true)}
          className="relative cursor-zoom-in overflow-hidden bg-[#05060A]"
        >
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={980}
            priority={priority}
            className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          />

          {/* Hover overlay prompt */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#05060A]/90 px-4 py-2 font-mono-tag text-xs font-semibold text-white shadow-xl">
              <ZoomIn className="h-4 w-4 text-[#38BDF8]" />
              Click to Inspect Full Resolution (1:1)
            </span>
          </div>
        </div>

        {/* Bottom Status bar */}
        {caption && (
          <div className="flex items-center justify-between border-t border-white/5 bg-[#0A0B12]/95 px-4 py-2 text-xs text-[#9A9CB3]">
            <span className="font-mono-tag">{caption}</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-[#22C55E]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Production Screenshot
            </span>
          </div>
        )}
      </div>

      <Lightbox
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        src={src}
        alt={alt}
        title={title}
        caption={caption}
      />
    </>
  );
}
