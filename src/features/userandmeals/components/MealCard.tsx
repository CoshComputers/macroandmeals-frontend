import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import type { MealWithType } from "@/features/userandmeals/pages/MealPlanDetailsPage.tsx";

export type MealCardProps = {
    meal: MealWithType;
};

export default function MealCard({ meal }: MealCardProps) {
    const {
        mealType,
        name,
        calories,
        proteinG,
        carbsG,
        fatG,
        items,
        instructions,
        hasPotentialAllergens = false,
    } = meal;

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="rounded-2xl shadow-md bg-white p-4 mb-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col">
                    <span className="text-xs uppercase text-gray-400 tracking-wide">
                        {mealType || "Meal"}
                    </span>
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                        {hasPotentialAllergens && (
                            <div className="text-red-600 flex items-center text-sm gap-1">
                                <AlertTriangle className="w-4 h-4" />
                                <span>Allergens</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {items && (
                <div className="mb-2">
                    <p className="text-sm text-gray-600">
                        <span className="font-medium text-gray-700">Items:</span> {items}
                    </p>
                </div>
            )}

            <div className="flex justify-between text-sm font-medium text-gray-700 border-t border-b py-2">
                <div>🔥 {calories} kcal</div>
                <div>🍗 {proteinG}g</div>
                <div>🍞 {carbsG}g</div>
                <div>🥑 {fatG}g</div>
            </div>

            {instructions && (
                <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-gray-700">Instructions</h4>
                        <button
                            className="text-gray-500 hover:text-gray-800"
                            onClick={() => setExpanded((prev) => !prev)}
                            aria-label="Toggle instructions"
                        >
                            {expanded ? (
                                <ChevronUp className="w-5 h-5 transition-transform" />
                            ) : (
                                <ChevronDown className="w-5 h-5 transition-transform" />
                            )}
                        </button>
                    </div>
                    {expanded && (
                        <p className="text-sm text-gray-600 whitespace-pre-line">{instructions}</p>
                    )}
                </div>
            )}
        </div>
    );
}
