import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from '@/features/userandmeals/pages/WelcomePage';
import type {JSX} from "react";
import {useAuthStore} from "@/features/userandmeals/store/authStore.ts";
import {CreateMealPlanPage} from "@/features/userandmeals/pages/CreateMealPlanPage.tsx";
import {AdminDashboardPage} from "@/features/userandmeals/pages/AdminDashboardPage.tsx";
import {MealPlanHoldingPage} from "@/features/userandmeals/pages/MealPlanHoldingPage.tsx";
import {MealPlanDetailsPage} from "@/features/userandmeals/pages/MealPlanDetailsPage.tsx";
import {MealPlanDownloadPage} from "@/features/userandmeals/pages/MealPlanDownloadPage.tsx";
// import other pages here

export function AppRoutes(): JSX.Element {

    const { isAuthenticated, roles } = useAuthStore();
    const isAdmin = roles?.includes('ADMIN') || roles?.includes('SUPER_ADMIN');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                {/* Guest User can access this */}
                <Route path="/create" element={<CreateMealPlanPage />} />
                <Route path="/mealplan-waiting" element={<MealPlanHoldingPage />} />
                <Route path="/mealplan-ready" element={<MealPlanDetailsPage />} />
                <Route path="/mealplan-pdf" element={<MealPlanDownloadPage />} />

                {/* Admin-Only Route */}
                <Route
                    path="/admin"
                    element={isAuthenticated && isAdmin ? (
                        <AdminDashboardPage />
                    ) : (
                        <Navigate to="/" replace />
                    )}
                />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
);
}
