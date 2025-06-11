import type {MacroSummaryDTO} from "@/features/userandmeals/dtos/MacroSummaryDTO.ts";
import type {components} from "@/core/types/api";

type MealPlanDTO = components['schemas']['MealPlanDTO'];


export function isMacroSummary(data: unknown): data is MacroSummaryDTO {
    return typeof data === 'object' && data !== null && 'calories' in data;
}

export function isMealPlan(data: unknown): data is MealPlanDTO {
    return typeof data === 'object' && data !== null && 'days' in data ;
}
