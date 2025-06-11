
import MealCard from "@/features/userandmeals/components/MealCard.tsx";
import type {MealWithType} from "@/features/userandmeals/pages/MealPlanDetailsPage.tsx";

export type MealPlanDayProps = {
    dayNumber: number;
    meals: MealWithType[];
};

export default function MealPlanDay({ dayNumber, meals }: MealPlanDayProps) {
    const totalMacros = meals.reduce(
        (acc, meal) => {
            acc.calories += meal.calories ?? 0;
            acc.protein += meal.proteinG ?? 0;
            acc.carbs += meal.carbsG ?? 0;
            acc.fat += meal.fatG ?? 0;
            return acc;
        },
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );

    return (
        <div className="px-4 py-4">
            <h2 className="text-xl font-bold mb-2">Day {dayNumber}</h2>
            <div className="text-sm text-gray-700 mb-4 flex justify-between">
                <div>🔥 {totalMacros.calories} kcal</div>
                <div>🍗 {totalMacros.protein}g</div>
                <div>🍞 {totalMacros.carbs}g</div>
                <div>🥑 {totalMacros.fat}g</div>
            </div>
            {meals.map((meal, index) => (
                <MealCard key={index} meal={meal} />
            ))}
        </div>
    );
}
