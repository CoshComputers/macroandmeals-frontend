import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRoutes } from './routes/AppRoutes';
import {Toaster} from "sonner";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRoutes />
        <Toaster richColors position="top-center" />
    </React.StrictMode>
);
