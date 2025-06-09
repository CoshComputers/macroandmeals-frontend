// mealPlanStore.ts
import { create } from 'zustand';
import type { MacroSummaryDTO } from '@/features/user/dtos/MacroSummaryDTO';
import { streamService } from '@/core/services/streamService';
import type {components} from "@/core/types/api";
import {hydrateMealPlan} from "@/features/user/services/mealService.ts";
import {notify} from "@/core/services/notify.ts";
import {logError} from "@/core/services/logEvent.ts";


export type MealPlanPhase = 'IDLE' | 'WAITING_MACROS' | 'WAITING_MEALS' | 'COMPLETED' | 'FAILED';
type MealPlanDTO = components['schemas']['MealPlanDTO'];



interface MealPlanState {
    phase: MealPlanPhase;
    macroSummary: MacroSummaryDTO | null;
    mealPlan: MealPlanDTO | null;
    progressMealsPerDay: number | null;
    error: string | null;
    hydrate: (profileId: number) => Promise<void>;
    setPhase: (phase: MealPlanPhase) => void;
    startPlanGeneration: (mealFrequency: number) => void;
    stopPlanGeneration: () => void;
    setMacros: (macros: MacroSummaryDTO) => void;
    fail: (error: string) => void;
    reset: () => void;
}



export const useMealPlanStore = create<MealPlanState>((set) => ({
    phase: 'IDLE',
    macroSummary: null,
    mealPlan: null,
    error: null,
    progressMealsPerDay: null,

    setPhase: (phase) => set({ phase }),

    startPlanGeneration: (mealsPerDay: number) => {
        set({ phase: 'WAITING_MACROS',
            error: null,
            progressMealsPerDay: mealsPerDay,});
        streamService.start();
    },

    stopPlanGeneration: () => {
        streamService.stop();
        set({ phase: 'IDLE', macroSummary: null, error: null });
    },
    setMacros: (macros) => set({ macroSummary: macros, phase: 'WAITING_MEALS' }),
    fail: (error) => set({ phase: 'FAILED', error }),
    reset: () => set({ phase: 'IDLE', macroSummary: null, error: null }),
    hydrate: async (profileId) => {
        try {
            const { status, data } = await hydrateMealPlan(profileId);

            if (status === 'PENDING') {
                set({ phase: 'WAITING_MACROS', macroSummary: null, mealPlan: null });
            } else if (status === 'MACROS_SET') {
                set({ phase: 'WAITING_MEALS', macroSummary: data as MacroSummaryDTO });
            } else if (status === 'COMPLETED') {
                set({ phase: 'COMPLETED', mealPlan: data as MealPlanDTO });
            } else if (status === 'FAILED') {
                set({ phase: 'FAILED', error: 'Meal plan generation failed' });
            }
        } catch (err) {
            logError('Failed to hydrate meal plan', {err})
            notify.error('Failed to hydrate meal plan');
            set({ phase: 'FAILED', error: 'Unexpected error during hydrate' });
        }
    }
}));
