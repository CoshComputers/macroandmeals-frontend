import { Layout } from '@/core/components/Layout';
import { useEffect, useState } from 'react';

export default function WelcomePage() {
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains('dark')
    );

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle('dark');
        setIsDark((prev) => !prev);
    };

    useEffect(() => {
        // Optionally restore from localStorage
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <Layout>
            {/* TEMPORARY THEME TOGGLE */}
            <div className="fixed top-20 right-4 z-30">
                <button
                    onClick={toggleTheme}
                    className="bg-surface dark:bg-surface-dark text-sm px-3 py-1 rounded border border-text dark:border-text-dark shadow"
                >
                    {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-6">

                <h2 className="text-2xl font-semibold">Macros and Meals Playground</h2>

                {/* Buttons */}
                <div className="card">
                    <p className="font-medium">Buttons</p>
                    <div className="flex gap-3 flex-wrap">
                        <button className="btn-primary">Primary</button>
                        <button className="btn-secondary">Secondary</button>
                        <button className="bg-accent text-white px-4 py-2 rounded">Accent</button>
                        <button className="bg-surface border px-4 py-2 rounded text-text dark:text-text-dark">Neutral
                        </button>
                        <button className="bg-gray-400 text-white px-4 py-2 rounded" disabled>Disabled</button>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="card">
                    <p className="font-medium">Form Fields</p>
                    <div className="space-y-2">
                        <input type="text" placeholder="Text input"
                               className="w-full"/>
                        <textarea placeholder="Textarea"
                                  className="w-full"/>
                        <select
                            className="w-full">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Yellow</option>
                        </select>
                    </div>
                </div>

                {/* Accordion */}
                <div className="card">
                    <p className="font-medium mb-2">Accordion</p>
                    <details className="rounded border border-gray-300 dark:border-gray-600">
                        <summary
                            className="cursor-pointer px-4 py-2 bg-gray-100 dark:bg-background-dark text-sm font-medium">What
                            is Macros and Meals?
                        </summary>
                        <div className="px-4 py-2 text-sm text-text dark:text-text-dark">
                            MAcros and Meals is a feature that allows you to track your daily nutrition intake, set goals, and monitor your progress over time. It helps you make informed dietary choices based on your personal health objectives.
                        </div>
                    </details>
                </div>

                {/* Tags */}
                <div className="card">
                    <p className="font-medium mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs">Practice</span>
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">Live Match</span>
                        <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs">Training</span>
                    </div>
                </div>

                {/* Alert */}
                <div
                    className="p-4 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 shadow">
                    ⚠️ This is a system alert: your profile is missing a break stat.
                </div>

            </div>

        </Layout>
    );
}
