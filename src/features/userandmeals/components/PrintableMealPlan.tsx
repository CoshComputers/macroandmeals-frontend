// src/features/userandmeals/components/PrintableMealPlan.tsx
import type { MealWithType } from '@/features/userandmeals/pages/MealPlanDetailsPage';

interface Props {
    calories?: number;
    proteinG?: number;
    carbsG?: number;
    fatG?: number;
    notes?: string;
    groupedDays: {
        dayNumber: number;
        meals: MealWithType[];
    }[];
}

export const PrintableMealPlan = ({
                                      calories,
                                      proteinG,
                                      carbsG,
                                      fatG,
                                      notes,
                                      groupedDays,
                                  }: Props) => {
    return (
        <div className="block" id="printable-meal-plan">
            <h1>7-Day Meal Plan</h1>
            <p><strong>Macros:</strong> {calories} kcal | {proteinG}g protein | {carbsG}g carbs | {fatG}g fat</p>
            {notes && <p><strong>Notes:</strong> {notes}</p>}

            {groupedDays.map((day) => (
                <div key={day.dayNumber}>
                    <h2>Day {day.dayNumber}</h2>
                    {day.meals.map((meal, idx) => (
                        <div key={idx} style={{ marginBottom: '1rem' }}>
                            <h3>{meal.mealType}</h3>
                            <p><strong>Name:</strong> {meal.name}</p>
                            <p><strong>Items:</strong> {meal.items}</p>
                            <p><strong>Instructions:</strong> {meal.instructions}</p>
                            <p>
                                <strong>Macros:</strong> {meal.calories} kcal |
                                {meal.proteinG}g P | {meal.carbsG}g C | {meal.fatG}g F
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
