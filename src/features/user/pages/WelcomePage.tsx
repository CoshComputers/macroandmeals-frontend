import { Layout } from '@/core/components/Layout';
import { useState } from 'react';
import { AuthDialog } from '../components/authDialog.tsx';

export default function WelcomePage() {
    const [mode, setMode] = useState<'login' | 'guest' | null>(null);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                <img src="/logos/coachcoshlogo-black.png" className="w-32" alt="Coach Cosh" />
                <h1 className="text-3xl font-bold">Macros & Meals</h1>
                <p className="text-gray-500 max-w-xs text-sm">
                    Get your free personalized macro targets and a 7-day meal plan.
                </p>

                <div className="flex flex-col gap-3 w-full max-w-sm">
                    <button className="btn-primary w-full" onClick={() => setMode('guest')}>
                        Start Meal Plan
                    </button>
                    <button className="btn-secondary w-full" onClick={() => setMode('login')}>
                        Admin Login
                    </button>
                </div>
            </div>

            {mode !== null && (
                <AuthDialog isOpen={mode !== null} onClose={() => setMode(null)} mode={mode} />
            )}
        </Layout>
    );
}
