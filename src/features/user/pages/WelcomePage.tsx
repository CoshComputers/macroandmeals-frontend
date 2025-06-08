import { Layout } from '@/core/components/Layout';
import { useState } from 'react';
import { AuthDialog } from '../components/authDialog';

export default function WelcomePage() {
    const [mode, setMode] = useState<'login' | 'guest' | null>(null);

    return (
        <Layout>
            <main className="flex flex-col items-center justify-center py-16 text-center gap-6" role="main" aria-labelledby="page-title">
                <img
                    src="/logos/coachcoshlogo-black.png"
                    className="w-32"
                    alt="Coach Cosh logo"
                />

                <h1 id="page-title" className="text-3xl font-bold">
                    Macros & Meals
                </h1>

                <p className="text-gray-500 max-w-xs text-sm" id="page-desc">
                    Get your free personalized macro targets and a 7-day meal plan.
                </p>

                <div className="flex flex-col gap-3 w-full max-w-sm" aria-describedby="page-desc">
                    <button
                        className="btn-primary w-full"
                        onClick={() => setMode('guest')}
                        aria-label="Start your personalized meal plan as a guest"
                    >
                        Start Meal Plan
                    </button>

                    <button
                        className="btn-secondary w-full"
                        onClick={() => setMode('login')}
                        aria-label="Admin login"
                    >
                        Admin Login
                    </button>
                </div>
            </main>

            {mode !== null && (
                <AuthDialog isOpen={mode !== null} onClose={() => setMode(null)} mode={mode} />
            )}
        </Layout>
    );
}
