'use client';

import React, { useEffect, useState } from 'react';

interface LiveChipProps {
  tag: string;
  initialValue: number;
  unit: string;
  status?: 'ok' | 'warn' | 'alarm';
  driftRange?: number;
  className?: string;
}

export function LiveChip({
  tag,
  initialValue,
  unit,
  status = 'ok',
  driftRange = 0.3,
  className = '',
}: LiveChipProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Subtle real-time drift simulating sensor telemetry
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * (driftRange * 2);
      setValue((prev) => {
        const next = prev + delta;
        // Keep within reasonable bounds around initial value
        if (Math.abs(next - initialValue) > driftRange * 3) {
          return initialValue;
        }
        return Number(next.toFixed(1));
      });
    }, 2800 + Math.random() * 1200);

    return () => clearInterval(interval);
  }, [initialValue, driftRange]);

  const dotColor =
    status === 'alarm'
      ? 'bg-[#EF4444] shadow-[0_0_8px_#EF4444]'
      : status === 'warn'
      ? 'bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]'
      : 'bg-[#22C55E] shadow-[0_0_8px_#22C55E]';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0B12]/85 px-3 py-1 font-mono-tag text-xs backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/20 ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${dotColor} animate-pulse`} />
      <span className="font-semibold text-[#E9EAF4]">{tag}</span>
      <span className="text-[#9A9CB3]">·</span>
      <span className="font-medium text-[#38BDF8] tabular-nums">
        {value.toFixed(1)} {unit}
      </span>
    </div>
  );
}
