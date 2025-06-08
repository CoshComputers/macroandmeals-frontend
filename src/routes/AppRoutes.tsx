import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from '@/features/user/pages/WelcomePage';
import type {JSX} from "react";
import {useAuthStore} from "@/features/user/store/authStore.ts";
import {CreateMealPlanPage} from "@/features/user/pages/CreateMealPlanPage.tsx";
import {AdminDashboardPage} from "@/features/user/pages/AdminDashboardPage.tsx";
import {MealPlanHoldingPage} from "@/features/user/pages/MealPlanHoldingPage.tsx";
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
