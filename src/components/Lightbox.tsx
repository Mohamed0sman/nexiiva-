'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

export function Lightbox({
  isOpen,
  onClose,
  src,
  alt,
  title,
  caption,
}: LightboxProps) {
  const [scale, setScale] = useState(1);

  const handleClose = () => {
    setScale(1);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setScale(1);
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl transition-all"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || alt}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-4 start-4 end-4 flex items-center justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {title && (
            <h3 className="text-sm font-semibold tracking-wide text-[#E9EAF4]">
              {title}
            </h3>
          )}
          {caption && (
            <p className="text-xs text-[#9A9CB3] font-mono-tag">{caption}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(0.8, s - 0.2))}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#E9EAF4] hover:bg-white/10"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(2.5, s + 0.2))}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#E9EAF4] hover:bg-white/10"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale(1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#E9EAF4] hover:bg-white/10"
            title="Reset Zoom"
            aria-label="Reset Zoom"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-red-500/20 text-red-300 hover:bg-red-500/30"
            title="Close"
            aria-label="Close Lightbox"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Image Viewer Container */}
      <div
        className="relative max-h-[88vh] max-w-[94vw] overflow-auto rounded-xl border border-white/10 bg-[#0A0B12] shadow-2xl transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src={src}
          alt={alt}
          width={1800}
          height={1100}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
