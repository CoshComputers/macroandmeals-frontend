import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/core/components/Layout';
import { useMealPlanStore } from '@/features/userandmeals/store/mealPlanStore';



export function MealPlanHoldingPage() {
    const navigate = useNavigate();
    const {
        phase,
        macroSummary,
        error,
        hydrate,
        progressMealsPerDay,
    } = useMealPlanStore();

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        hydrate()
    }, [hydrate]);

    useEffect(() => {
        if (!progressMealsPerDay) return;

        const estimatedTotalMs = progressMealsPerDay * 25_000; // e.g. 2 meals = 40s, 6 = 2min
        const updateInterval = 500; // ms
        const increment = (updateInterval / estimatedTotalMs) * 100;

        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment;
                return next >= 98 ? 98 : next; // cap at 98% until real COMPLETE
            });
        }, updateInterval);

        return () => clearInterval(interval);
    }, [progressMealsPerDay]);

    useEffect(() => {
        if (phase === 'COMPLETED') {
            setProgress(100);
            navigate('/mealplan-ready');
        } else if (phase === 'FAILED') {
            // You can also use a toast notification
            alert(error || 'Something went wrong.');
            navigate('/create');
        }
    }, [phase, error, navigate]);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center p-6 text-center min-h-[60vh]">
                <h2 className="text-xl font-semibold mb-4">
                    We're cooking up your personalised meal plan...
                </h2>

                <p className="text-gray-600 max-w-md mb-8">
                    This usually takes 1, to 2 Minutes. Hang tight!
                </p>

                {/* Show macro summary once it's generated */}
                {phase === 'WAITING_MEALS' && macroSummary && (
                    <div className="w-full max-w-md bg-background-dark rounded-md shadow p-4 mb-6 border border-secondary">
                        <h3 className="text-lg font-semibold mb-2 text-secondary">Your Macro Targets</h3>
                        <ul className="text-sm text-primary space-y-1">
                            <li>🔥 Calories: <strong>{macroSummary.calories}</strong></li>
                            <li>🍗 Protein: <strong>{macroSummary.proteinG}g</strong></li>
                            <li>🍚 Carbs: <strong>{macroSummary.carbsG}g</strong></li>
                            <li>🥑 Fat: <strong>{macroSummary.fatG}g</strong></li>
                        </ul>
                    </div>
                )}

                {/* Fake Progress Bar */}
                <div className="w-full max-w-md bg-gray-200 rounded-full h-4 mb-6">
                    <div
                        className="bg-secondary h-4 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Spinner + Message ONLY shown at 90%+ */}
                {progress >= 90 && (
                    <div className="flex flex-col items-center text-center mb-6 animate-fade-in">
                        <span className="animate-spin inline-block w-10 h-10 border-4 border-t-transparent border-secondary rounded-full mb-2"></span>
                        <p className="text-sm text-gray-600">
                            This is taking a little longer than usual. Please hang tight – it won't be long!
                        </p>
                    </div>
                )}


                {/* Tips & Tricks */}
                <div className="w-full max-w-md bg-gray-100 rounded-md shadow p-4">
                    <p className="text-sm text-gray-700">💡 Tip: Eating more protein helps you stay fuller for longer.</p>
                </div>
            </div>
        </Layout>
    );
}
