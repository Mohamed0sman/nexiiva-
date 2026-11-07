'use client';

import React, { useEffect, useRef } from 'react';
import { useSimulatorStore, ScenarioType } from '@/stores/simulatorStore';
import type { Dict } from '@/types/dict';
import {
  AlertTriangle,
  RotateCcw,
  Gauge,
  Sliders,
  Radio,
  ArrowRight,
} from 'lucide-react';

interface LiveDemoConsoleProps {
  dict?: Dict['demo'];
}

export function LiveDemoConsole({ dict }: LiveDemoConsoleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scenario,
    telemetry,
    alarmLevel,
    alarmMessage,
    p01Running,
    h01Firing,
    traineeScore,
    triggerScenario,
    resetNormal,
    setPaused,
    tick,
  } = useSimulatorStore();

  // Tick loop
  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 400);

    return () => clearInterval(timer);
  }, [tick]);

  // Pause when off-screen for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setPaused(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [setPaused]);

  // Color mappings
  const isAlarm = alarmLevel === 'CRITICAL';
  const isWarn = alarmLevel === 'WARN';

  const scenarios: { id: ScenarioType; label: string; desc: string }[] = [
    {
      id: 'REFLUX_LOSS',
      label: dict?.scenarios?.refluxLoss || 'REFLUX LOSS',
      desc: 'Top temp runaway, overhead fraction contamination',
    },
    {
      id: 'VACUUM_LOSS',
      label: dict?.scenarios?.vacuumLoss || 'VACUUM LOSS',
      desc: 'Column overpressure, relief valve lift hazard',
    },
    {
      id: 'FEED_LOSS_V10',
      label: dict?.scenarios?.feedLossV10 || 'FEED LOSS V10',
      desc: 'Accumulator dry-out, reflux pump cavitation',
    },
    {
      id: 'H01_TRIP',
      label: dict?.scenarios?.h01Trip || 'H01 TRIP',
      desc: 'Flameout emergency shutdown, rapid column cooldown',
    },
    {
      id: 'FEED_LOSS_P01',
      label: dict?.scenarios?.feedLossP01 || 'FEED LOSS P01',
      desc: 'Main charge pump trip, hydraulic starvation',
    },
    {
      id: 'STEAM_LOSS',
      label: dict?.scenarios?.steamLoss || 'STEAM LOSS',
      desc: 'Stripping header drop, bottoms flash point fail',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
      id="live-demo-console"
    >
      {/* Top Industrial DCS Title & Status Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4 text-blue-400" />
            <span className="font-mono text-xs font-bold tracking-wider text-slate-200 uppercase">
              {dict?.columnUnit || 'CDU-101 Dynamic Process Console · ISA-18.2'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Operating Mode Status Tag */}
          <div
            className={`inline-flex items-center gap-2 rounded px-2.5 py-1 font-mono text-xs font-bold uppercase ${
              isAlarm
                ? 'bg-red-950 text-red-300 border border-red-700'
                : isWarn
                ? 'bg-amber-950 text-amber-300 border border-amber-700'
                : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isAlarm ? 'bg-red-500' : isWarn ? 'bg-amber-500' : 'bg-emerald-400'
              }`}
            />
            {isAlarm
              ? dict?.tripStatus || 'PROCESS ALARM / UPSET'
              : isWarn
              ? dict?.alarmStatus || 'WARNING THRESHOLD'
              : dict?.normalStatus || 'NORMAL STEADY STATE'}
          </div>

          {/* Reset Button */}
          <button
            type="button"
            onClick={resetNormal}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 font-mono text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700 active:scale-95"
          >
            <RotateCcw className="h-3.5 w-3.5 text-blue-400" />
            {dict?.resetBtn || 'RESET TO NORMAL'}
          </button>
        </div>
      </div>

      {/* ISA-18.2 Alarm Banner (When Active) */}
      {alarmMessage && (
        <div
          className="flex items-center justify-between border-b border-red-800 bg-red-950 px-5 py-2.5 text-xs font-mono text-red-200"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-400 shrink-0" />
            <span className="font-bold tracking-wide">{alarmMessage}</span>
          </div>
          <span className="rounded bg-red-900 border border-red-700 px-2 py-0.5 text-[10px] uppercase font-bold text-red-100">
            PRIORITY 1 · ESD INTERLOCK ARMED
          </span>
        </div>
      )}

      {/* Main Console Workspace Grid: P&ID Schematics + Instructor Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left/Center: Visual P&ID Process Schematic (8 cols) */}
        <div className="relative p-6 lg:col-span-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-e border-slate-800 bg-slate-950">
          {/* Subtle blueprint grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

          {/* Interactive SVG Diagram of CDU Column & Ancillaries */}
          <div className="relative z-10 w-full overflow-x-auto py-2">
            <svg
              viewBox="0 0 680 400"
              className="w-full h-auto min-w-[580px] select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Definitions */}
              <defs>
                <linearGradient id="column-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="50%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="liquid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Feed Line from Furnace H01 */}
              <path
                d="M 50 250 L 120 250 L 120 220 L 250 220"
                stroke={h01Firing ? '#38BDF8' : '#64748B'}
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Furnace H01 Box */}
              <g transform="translate(60, 200)">
                <rect
                  x="0"
                  y="0"
                  width="70"
                  height="70"
                  rx="6"
                  fill="#0f172a"
                  stroke={h01Firing ? '#F59E0B' : '#EF4444'}
                  strokeWidth="1.5"
                />
                <text x="35" y="24" textAnchor="middle" fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  H-101
                </text>
                <text x="35" y="40" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                  FURNACE
                </text>
                {/* Flame indicator */}
                <circle
                  cx="35"
                  cy="54"
                  r="7"
                  fill={h01Firing ? '#F59E0B' : '#334155'}
                />
              </g>

              {/* Crude Charge Pump P-101 */}
              <g transform="translate(20, 240)">
                <circle
                  cx="15"
                  cy="15"
                  r="14"
                  fill="#0f172a"
                  stroke={p01Running ? '#22C55E' : '#EF4444'}
                  strokeWidth="1.5"
                />
                <polygon points="15,4 27,15 15,15" fill={p01Running ? '#22C55E' : '#EF4444'} />
                <text x="15" y="38" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">
                  P-101
                </text>
              </g>

              {/* Atmospheric Distillation Column Vessel (CDU) */}
              <g transform="translate(250, 40)">
                {/* Column Body with rounded heads */}
                <rect
                  x="0"
                  y="20"
                  width="90"
                  height="280"
                  rx="20"
                  fill="url(#column-grad)"
                  stroke="#475569"
                  strokeWidth="2"
                />
                <text x="45" y="150" textAnchor="middle" fill="#ffffff" opacity="0.3" fontSize="12" fontFamily="monospace" fontWeight="bold">
                  T-101 CDU
                </text>

                {/* Trays representation */}
                {[50, 75, 100, 125, 150, 175, 200, 225, 250].map((y) => (
                  <line
                    key={y}
                    x1="12"
                    y1={y}
                    x2="78"
                    y2={y}
                    stroke="#64748B"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                  />
                ))}

                {/* Top vapor line */}
                <path d="M 45 20 L 45 -15 L 180 -15 L 180 30" stroke="#38BDF8" strokeWidth="2.5" fill="none" />

                {/* Overhead Condenser E-101 */}
                <rect x="155" y="30" width="50" height="28" rx="4" fill="#0f172a" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="180" y="48" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace">E-101</text>

                {/* Pipe from Condenser to Reflux Drum V-101 */}
                <path d="M 180 58 L 180 85" stroke="#38BDF8" strokeWidth="2.5" />

                {/* Reflux Drum V-101 */}
                <g transform="translate(150, 85)">
                  <rect x="0" y="0" width="60" height="32" rx="8" fill="#0f172a" stroke="#38BDF8" strokeWidth="1.5" />
                  <rect
                    x="2"
                    y={32 - (telemetry.drumLevel / 100) * 30}
                    width="56"
                    height={(telemetry.drumLevel / 100) * 30}
                    rx="4"
                    fill="url(#liquid-grad)"
                  />
                  <text x="30" y="18" textAnchor="middle" fill="#f8fafc" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    V-101
                  </text>
                </g>

                {/* Reflux return line back to column */}
                <path
                  d="M 180 117 L 180 140 L 90 140"
                  stroke={telemetry.refluxFlow < 30 ? '#EF4444' : '#3B82F6'}
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Side-draw products lines */}
                {/* 1. Naphtha */}
                <path d="M 210 100 L 290 100" stroke="#38BDF8" strokeWidth="2" />
                <text x="295" y="104" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  → {dict?.draws?.naphtha || 'Naphtha'}
                </text>

                {/* 2. Kerosene */}
                <path d="M 90 105 L 140 105 L 140 160 L 290 160" stroke="#F59E0B" strokeWidth="2" fill="none" />
                <text x="295" y="164" fill="#F59E0B" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  → {dict?.draws?.kerosene || 'Kerosene'}
                </text>

                {/* 3. L. Diesel */}
                <path d="M 90 190 L 130 190 L 130 220 L 290 220" stroke="#10B981" strokeWidth="2" fill="none" />
                <text x="295" y="224" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  → {dict?.draws?.diesel || 'L. Diesel'}
                </text>

                {/* Bottom Residue */}
                <path d="M 45 300 L 45 340 L 290 340" stroke="#475569" strokeWidth="2.5" fill="none" />
                <text x="295" y="344" fill="#94A3B8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  → {dict?.draws?.residue || 'Atm Residue'}
                </text>
              </g>
            </svg>
          </div>

          {/* Bottom Live Instrument Telemetry Grid (6 tags) */}
          <div className="relative z-10 mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {/* TIC102 - Overhead Temp */}
            <div className={`rounded-lg border p-3 transition-colors ${
              telemetry.topTemp > 390 ? 'border-red-600 bg-red-950/70' : 'border-slate-800 bg-slate-900'
            }`}>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{dict?.tags?.tTop || 'Top Temp (TIC102)'}</span>
                <span className={`h-2 w-2 rounded-full ${telemetry.topTemp > 390 ? 'bg-red-500' : 'bg-emerald-400'}`} />
              </div>
              <div className="mt-1 text-lg font-bold font-mono text-blue-400 tabular-nums">
                {telemetry.topTemp.toFixed(1)} <span className="text-xs text-slate-400">°C</span>
              </div>
            </div>

            {/* TI143 - Feed Temp */}
            <div className={`rounded-lg border p-3 transition-colors ${
              telemetry.feedTemp < 280 ? 'border-red-600 bg-red-950/70' : 'border-slate-800 bg-slate-900'
            }`}>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{dict?.tags?.tFeed || 'Feed Temp (TI143)'}</span>
                <span className={`h-2 w-2 rounded-full ${telemetry.feedTemp < 280 ? 'bg-red-500' : 'bg-emerald-400'}`} />
              </div>
              <div className="mt-1 text-lg font-bold font-mono text-blue-400 tabular-nums">
                {telemetry.feedTemp.toFixed(1)} <span className="text-xs text-slate-400">°C</span>
              </div>
            </div>

            {/* TIC108 - Bottom Temp */}
            <div className={`rounded-lg border p-3 transition-colors ${
              telemetry.bottomTemp < 340 ? 'border-amber-600 bg-amber-950/70' : 'border-slate-800 bg-slate-900'
            }`}>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{dict?.tags?.tBtm || 'Btm Temp (TIC108)'}</span>
                <span className={`h-2 w-2 rounded-full ${telemetry.bottomTemp < 340 ? 'bg-amber-500' : 'bg-emerald-400'}`} />
              </div>
              <div className="mt-1 text-lg font-bold font-mono text-blue-400 tabular-nums">
                {telemetry.bottomTemp.toFixed(1)} <span className="text-xs text-slate-400">°C</span>
              </div>
            </div>

            {/* PIC101 - Top Pressure */}
            <div className={`rounded-lg border p-3 transition-colors ${
              telemetry.topPressure > 2.0 ? 'border-red-600 bg-red-950/70' : 'border-slate-800 bg-slate-900'
            }`}>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{dict?.tags?.pCol || 'Top Pres (PIC101)'}</span>
                <span className={`h-2 w-2 rounded-full ${telemetry.topPressure > 2.0 ? 'bg-red-500' : 'bg-emerald-400'}`} />
              </div>
              <div className="mt-1 text-lg font-bold font-mono text-blue-400 tabular-nums">
                {telemetry.topPressure.toFixed(2)} <span className="text-xs text-slate-400">bar</span>
              </div>
            </div>

            {/* FIC104 - Reflux Flow */}
            <div className={`rounded-lg border p-3 transition-colors ${
              telemetry.refluxFlow < 30 ? 'border-red-600 bg-red-950/70' : 'border-slate-800 bg-slate-900'
            }`}>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{dict?.tags?.fReflux || 'Reflux Flow (FIC104)'}</span>
                <span className={`h-2 w-2 rounded-full ${telemetry.refluxFlow < 30 ? 'bg-red-500' : 'bg-emerald-400'}`} />
              </div>
              <div className="mt-1 text-lg font-bold font-mono text-blue-400 tabular-nums">
                {telemetry.refluxFlow.toFixed(1)} <span className="text-xs text-slate-400">m³/h</span>
              </div>
            </div>

            {/* LIC009 - Drum Level */}
            <div className={`rounded-lg border p-3 transition-colors ${
              telemetry.drumLevel < 25 ? 'border-red-600 bg-red-950/70' : 'border-slate-800 bg-slate-900'
            }`}>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{dict?.tags?.lDrum || 'Drum Level (LIC009)'}</span>
                <span className={`h-2 w-2 rounded-full ${telemetry.drumLevel < 25 ? 'bg-red-500' : 'bg-emerald-400'}`} />
              </div>
              <div className="mt-1 text-lg font-bold font-mono text-blue-400 tabular-nums">
                {telemetry.drumLevel.toFixed(1)} <span className="text-xs text-slate-400">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Instructor Fault Injection Panel (4 cols) */}
        <div className="p-6 lg:col-span-4 flex flex-col justify-between bg-slate-900">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-blue-400" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
                  {dict?.scenariosTitle || 'Instructor Fault Injection'}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-bold">LIVE TRANSIENTS</span>
            </div>

            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Inject emergency process upsets to test operator diagnosis and response times under real DCS dynamics:
            </p>

            {/* Scenario buttons */}
            <div className="mt-4 space-y-2">
              {scenarios.map((sc) => {
                const isActive = scenario === sc.id;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => triggerScenario(sc.id)}
                    className={`w-full text-start rounded-lg border p-2.5 transition-colors group ${
                      isActive
                        ? 'border-red-600 bg-red-950/60'
                        : 'border-slate-800 bg-slate-950/80 hover:border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-red-300' : 'text-slate-200'}`}>
                        {sc.label}
                      </span>
                      <ArrowRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-1 ${
                        isActive ? 'text-red-400' : 'text-slate-400'
                      }`} />
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400 line-clamp-1">{sc.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trainee Score Dial / Indicator */}
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-slate-300">
                {dict?.scoreLabel || 'Trainee Reaction Score'}
              </span>
              <Gauge className="h-4 w-4 text-blue-400" />
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className={`text-3xl font-extrabold font-mono tabular-nums ${
                traineeScore >= 90 ? 'text-emerald-400' : traineeScore >= 70 ? 'text-amber-400' : 'text-red-400'
              }`}>
                {traineeScore}
              </span>
              <span className="text-xs text-slate-400 font-mono">/ 100 PTS</span>
            </div>

            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  traineeScore >= 90 ? 'bg-emerald-500' : traineeScore >= 70 ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${traineeScore}%` }}
              />
            </div>

            <p className="mt-2 text-[10px] text-slate-400 leading-normal">
              Scored based on alarm acknowledgement latency, stabilization sequence, and safety envelope breach.
            </p>
          </div>
        </div>
      </div>

      {/* Console Footer Caption */}
      <div className="border-t border-slate-800 bg-slate-950 px-5 py-2.5 text-center text-[11px] text-slate-400">
        {dict?.caption || 'Illustrative demo — values are simulated in real time using client state.'}
      </div>
    </div>
  );
}
