import { create } from 'zustand';

export type ScenarioType =
  | 'NORMAL'
  | 'REFLUX_LOSS'
  | 'VACUUM_LOSS'
  | 'FEED_LOSS_V10'
  | 'H01_TRIP'
  | 'FEED_LOSS_P01'
  | 'STEAM_LOSS';

export interface TelemetryData {
  topTemp: number; // TIC102 (°C, normal: 361.8)
  feedTemp: number; // TI143 (°C, normal: 345.2)
  bottomTemp: number; // TIC108 (°C, normal: 372.4)
  topPressure: number; // PIC101 (bar, normal: 1.42)
  refluxFlow: number; // FIC104 (m³/h, normal: 142.4)
  drumLevel: number; // LIC009 (%, normal: 54.2)
}

interface SimulatorState {
  scenario: ScenarioType;
  telemetry: TelemetryData;
  targetTelemetry: TelemetryData;
  isPaused: boolean;
  p01Running: boolean;
  h01Firing: boolean;
  alarmLevel: 'NORMAL' | 'WARN' | 'CRITICAL';
  alarmMessage: string | null;
  traineeScore: number;
  triggerScenario: (scenario: ScenarioType) => void;
  resetNormal: () => void;
  setPaused: (paused: boolean) => void;
  tick: () => void;
}

const NORMAL_TELEMETRY: TelemetryData = {
  topTemp: 361.8,
  feedTemp: 345.2,
  bottomTemp: 372.4,
  topPressure: 1.42,
  refluxFlow: 142.4,
  drumLevel: 54.2,
};

export const useSimulatorStore = create<SimulatorState>((set, get) => ({
  scenario: 'NORMAL',
  telemetry: { ...NORMAL_TELEMETRY },
  targetTelemetry: { ...NORMAL_TELEMETRY },
  isPaused: false,
  p01Running: true,
  h01Firing: true,
  alarmLevel: 'NORMAL',
  alarmMessage: null,
  traineeScore: 98,

  triggerScenario: (scenario: ScenarioType) => {
    switch (scenario) {
      case 'REFLUX_LOSS':
        set({
          scenario,
          targetTelemetry: {
            ...get().telemetry,
            topTemp: 402.6,
            refluxFlow: 8.2,
            topPressure: 1.88,
          },
          p01Running: true,
          h01Firing: true,
          alarmLevel: 'CRITICAL',
          alarmMessage: 'ISA-18.2 CRITICAL: REFLUX FLOW COLLAPSE (FIC104 LOW-LOW < 15 m³/h)',
          traineeScore: 68,
        });
        break;

      case 'VACUUM_LOSS':
        set({
          scenario,
          targetTelemetry: {
            ...get().telemetry,
            topPressure: 2.94,
            topTemp: 388.4,
          },
          alarmLevel: 'CRITICAL',
          alarmMessage: 'ISA-18.2 ALARM: COLUMN TOP OVERPRESSURE (PIC101 HIGH-HIGH > 2.5 bar)',
          traineeScore: 72,
        });
        break;

      case 'FEED_LOSS_V10':
        set({
          scenario,
          targetTelemetry: {
            ...get().telemetry,
            drumLevel: 14.8,
            refluxFlow: 45.0,
          },
          alarmLevel: 'CRITICAL',
          alarmMessage: 'ISA-18.2 ALARM: REFLUX DRUM V10 LEVEL CRITICAL (LIC009 LOW < 20%)',
          traineeScore: 76,
        });
        break;

      case 'H01_TRIP':
        set({
          scenario,
          targetTelemetry: {
            ...get().telemetry,
            feedTemp: 242.0,
            topTemp: 310.5,
            bottomTemp: 325.0,
          },
          h01Firing: false,
          alarmLevel: 'CRITICAL',
          alarmMessage: 'EMERGENCY SHUTDOWN (ESD): FURNACE H01 BURNER FLAME OUT TRIP',
          traineeScore: 62,
        });
        break;

      case 'FEED_LOSS_P01':
        set({
          scenario,
          targetTelemetry: {
            ...get().telemetry,
            feedTemp: 318.0,
            bottomTemp: 340.5,
            drumLevel: 22.0,
          },
          p01Running: false,
          alarmLevel: 'CRITICAL',
          alarmMessage: 'PUMP TRIP: MAIN CRUDE CHARGE PUMP P-101 MOTOR OVERLOAD',
          traineeScore: 70,
        });
        break;

      case 'STEAM_LOSS':
        set({
          scenario,
          targetTelemetry: {
            ...get().telemetry,
            bottomTemp: 334.8,
            topPressure: 1.15,
          },
          alarmLevel: 'WARN',
          alarmMessage: 'UTILITY FAULT: STRIPPING STEAM HEADER DEPRESSURIZATION',
          traineeScore: 82,
        });
        break;

      default:
        get().resetNormal();
        break;
    }
  },

  resetNormal: () => {
    set({
      scenario: 'NORMAL',
      targetTelemetry: { ...NORMAL_TELEMETRY },
      p01Running: true,
      h01Firing: true,
      alarmLevel: 'NORMAL',
      alarmMessage: null,
      traineeScore: 98,
    });
  },

  setPaused: (paused: boolean) => set({ isPaused: paused }),

  tick: () => {
    const { isPaused, telemetry, targetTelemetry } = get();
    if (isPaused) return;

    // Smooth approach toward target values with slight natural sensor noise
    const ease = 0.08;
    const noise = () => (Math.random() - 0.5) * 0.25;

    const nextTelemetry: TelemetryData = {
      topTemp: Number((telemetry.topTemp + (targetTelemetry.topTemp - telemetry.topTemp) * ease + noise()).toFixed(1)),
      feedTemp: Number((telemetry.feedTemp + (targetTelemetry.feedTemp - telemetry.feedTemp) * ease + noise()).toFixed(1)),
      bottomTemp: Number((telemetry.bottomTemp + (targetTelemetry.bottomTemp - telemetry.bottomTemp) * ease + noise()).toFixed(1)),
      topPressure: Number((telemetry.topPressure + (targetTelemetry.topPressure - telemetry.topPressure) * ease + noise() * 0.02).toFixed(2)),
      refluxFlow: Number((telemetry.refluxFlow + (targetTelemetry.refluxFlow - telemetry.refluxFlow) * ease + noise() * 0.3).toFixed(1)),
      drumLevel: Number((telemetry.drumLevel + (targetTelemetry.drumLevel - telemetry.drumLevel) * ease + noise() * 0.2).toFixed(1)),
    };

    set({ telemetry: nextTelemetry });
  },
}));
