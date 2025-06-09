import type {components} from "@/core/types/api";
import API from "@/core/api/api.ts";
import type {MacroSummaryDTO} from "@/features/user/dtos/MacroSummaryDTO.ts";
import {isMacroSummary, isMealPlan} from "@/utils/typeGuards.ts";


type MealPlanDTO = components['schemas']['MealPlanDTO'];

export async function hydrateMealPlan(profileId: number): Promise<
    | { status: 'PENDING' | 'FAILED'; data: null }
    | { status: 'MACROS_SET'; data: MacroSummaryDTO }
    | { status: 'COMPLETED'; data: MealPlanDTO }
> {
    const response = await API.get(`/mealplan/user-profile/${profileId}/mealplan`);
    const progress = response.data;

    switch (progress.status) {
        case 'PENDING':
        case 'FAILED':
            return { status: progress.status, data: null };

        case 'MACROS_SET':
            if (isMacroSummary(progress.data)) {
                return { status: 'MACROS_SET', data: progress.data };
            } else {
                throw new Error('Expected MacroSummaryDTO but got something else');
            }

        case 'COMPLETED':
            if (isMealPlan(progress.data)) {
                return { status: 'COMPLETED', data: progress.data };
            } else {
                throw new Error('Expected MealPlanDTO but got something else');
            }

        default:
            throw new Error(`Unhandled status: ${(progress.status)}`);
    }


}