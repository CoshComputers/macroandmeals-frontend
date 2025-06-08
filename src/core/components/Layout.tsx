import type {ReactNode} from 'react';
import { useAuthStore } from '@/features/user/store/authStore';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';

export function Layout({ children }: { children: ReactNode }) {
    const { isAuthenticated, roles } = useAuthStore();
    const isAdmin = roles?.includes('ADMIN');

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text dark:text-text-dark relative">
            {isAuthenticated && <TopNav />}
            <main className="flex-1 px-4 pb-20 pt-16 overflow-y-auto">
                {children}
            </main>
            {/* Bottom Nav for Admins */}
            {isAuthenticated && isAdmin && <BottomNav />}
        </div>
    );
}
