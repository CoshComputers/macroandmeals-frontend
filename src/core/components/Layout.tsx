import { ReactNode } from 'react';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text dark:text-text-dark relative">
            <TopNav />
            <main className="flex-1 px-4 pb-20 pt-16 overflow-y-auto">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
