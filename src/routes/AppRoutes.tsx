import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from '@/features/user/pages/WelcomePage';
import {JSX} from "react";
// import other pages here

export function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>
);
}
