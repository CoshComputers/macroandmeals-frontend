import {useEffect, useMemo, useRef} from 'react';
import html2pdf from 'html2pdf.js';
import {useMealPlanStore} from '@/features/userandmeals/store/mealPlanStore';
import {PrintableMealPlan} from "@/features/userandmeals/components/PrintableMealPlan.tsx";
import {logDebug, logError} from "@/core/services/logEvent.ts";
import type {MealWithType} from "@/features/userandmeals/pages/MealPlanDetailsPage.tsx";
import {Layout} from "@/core/components/Layout.tsx";
import {notify} from "@/core/services/notify.ts";

export function MealPlanDownloadPage() {
    const mealPlan = useMealPlanStore((state) => state.mealPlan);
    const contentRef = useRef<HTMLDivElement>(null);
    const hasDownloaded = useRef(false);
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

    useEffect(() => {
        if (!contentRef.current || hasDownloaded.current) return;

        try {
            hasDownloaded.current = true;

            const opt = {
                margin: 0.5,
                filename: 'MealPlan.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
            };

            html2pdf()
                .set(opt)
                .from(contentRef.current)
                .save();

            notify.success("PDF Successfully download, feel free to go BACK or Logout.")
        } catch (err) {
            logError('PDF generation error:', {err});
            hasDownloaded.current = false; // allow retry if needed
            notify.error('Something went wrong generating the PDF. Try again.');
        }
    }, []);



    if (!mealPlan) return <p>Loading...</p>;

    return (
        <Layout>
            <div className="p-4" ref={contentRef}>
                <PrintableMealPlan
                    calories={mealPlan?.calories}
                    proteinG={mealPlan?.proteinG}
                    carbsG={mealPlan?.carbsG}
                    fatG={mealPlan?.fatG}
                    notes={mealPlan?.notes}
                    groupedDays={groupedDays}
                />
            </div>
        </Layout>
    );
}
