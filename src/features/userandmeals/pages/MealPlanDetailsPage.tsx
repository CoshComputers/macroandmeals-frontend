import {useMealPlanStore} from '@/features/userandmeals/store/mealPlanStore';
import MealPlanSlider from "@/features/userandmeals/components/MealPlanSlider.tsx";
import {useEffect, useMemo} from "react";
import type {components} from "@/core/types/api";
import MealPlanDay from "@/features/userandmeals/components/MealPlanDay.tsx";
import MealPlanSummary from "@/features/userandmeals/components/MealPlanSummary.tsx";
import {Layout} from "@/core/components/Layout.tsx";
import {logDebug} from "@/core/services/logEvent.ts";


type MealDTO = components['schemas']['MealDTO'];


export type MealWithType = {
    mealType: string;
} & MealDTO;


export function MealPlanDetailsPage() {
    const {
        hydrate,
    } = useMealPlanStore();

    useEffect(() => {
        hydrate()
    }, [hydrate]);

    const mealPlan = useMealPlanStore((state) => state.mealPlan);

    logDebug("Mael Plan in state: ", {mealPlan});

    // Group meals by dayNumber
    const groupedDays = useMemo(() => {
        const map = new Map<number, { dayNumber: number; meals: MealWithType[] }>();

        mealPlan?.days?.forEach((entry) => {
            if (!entry.dayNumber || !entry.meal) return;

            if (!map.has(entry.dayNumber)) {
                map.set(entry.dayNumber, {dayNumber: entry.dayNumber, meals: []});
            }

            map.get(entry.dayNumber)!.meals.push({
                ...entry.meal,
                mealType: entry.mealType ?? "Unknown",
            });
        });

        logDebug("Meal Plan loaded with: ", {mealPlan});
        // Sort by dayNumber just in case
        return Array.from(map.values()).sort((a, b) => a.dayNumber - b.dayNumber);
    }, [mealPlan]);

    const slides = [
        <MealPlanSummary key="summary"/>,
        ...groupedDays.map((day) => (
            <MealPlanDay key={day.dayNumber} dayNumber={day.dayNumber} meals={day.meals}/>
        )),
    ];

    const labels = ['S', ...groupedDays.map((d) => `${d.dayNumber}`)];

    return (
        <Layout>
            <MealPlanSlider slides={slides} labels={labels}/>

        </Layout>
    )


}