import { useMealPlanStore } from '@/features/userandmeals/store/mealPlanStore';
import {AlertTriangle, Info} from "lucide-react";

export default function MealPlanSummary() {
    const mealPlan = useMealPlanStore((state) => state.mealPlan);

    if (!mealPlan) return null;

    const { createdAt, calories, proteinG, carbsG, fatG, notes} = mealPlan;
    const totalMeals = mealPlan?.days?.length ?? 0;


    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Meal Plan Summary</h2>

            <p className="text-sm text-gray-500 mb-4">
                Created on {new Date(createdAt ?? "").toLocaleDateString()}
            </p>

            <div className="rounded-xl bg-gray-50 p-4 mb-4 shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Target Macros</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                    <div>🔥 Calories: <strong>{calories}</strong></div>
                    <div>🍗 Protein: <strong>{proteinG}g</strong></div>
                    <div>🍞 Carbs: <strong>{carbsG}g</strong></div>
                    <div>🥑 Fats: <strong>{fatG}g</strong></div>
                </div>
            </div>

            {notes && (
                <div className="rounded-xl bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-gray-700">
                    <h4 className="font-semibold mb-1">Coach's Notes</h4>
                    <p>{notes}</p>
                </div>
            )}

            <div className="rounded-xl bg-red-50 border-l-4 border-red-400 m-2 p-4 text-sm text-gray-700">
            <div className="text-red-600 flex items-center text-sm gap-1">
                <AlertTriangle className="w-4 h-4" /> <span>Allergens</span>
            </div>
                <p>If you see this warning - The Meal may contain text relating to allergens. Allergen free substitutes are intended. eg: Bread should be Gluten Free Bread if gluten free diet needed.</p>
            </div>

            <div className="rounded-xl bg-red-50 border-l-4 border-red-400 m-2 p-4 text-sm text-gray-700">
                <div className="text-red-600 flex items-center text-sm gap-1">
                    <Info className="w-4 h-4" /> <span>Important Information about AI</span>
                </div>
                <p>This meal plan has been generated by our AI system, and may contain errors. It is intended as a guide to help with your fitness goals. Please ensure all food is cooked fully, at required temperatures, etc.</p>
            </div>

            <div className="text-xs text-gray-500 mt-4">
                {totalMeals} total meals
            </div>
        </div>
    );
}
