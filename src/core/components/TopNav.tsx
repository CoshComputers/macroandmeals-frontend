import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Plus, MessageSquare, ArrowLeft, LogOut, Download, RefreshCcw } from 'lucide-react';
import { useAuthStore } from '@/features/userandmeals/store/authStore';

export function TopNav() {
    const { roles, logout } = useAuthStore();
    const isAdmin = roles?.includes('ADMIN');
    const isGuest = roles?.includes('GUEST');
    const location = useLocation();
    const navigate = useNavigate();

    const isMealPlanPage = location.pathname === '/mealplan-ready';

    return (
        <header className="fixed top-0 inset-x-0 h-14 bg-surface-dark shadow flex items-center justify-between px-4 z-20">
            <div className="flex items-center gap-2">
                <img
                    src="/logos/coachcoshlogo-black.png"
                    alt="Coach Cosh"
                    className="h-10 w-auto max-w-[160px]"
                />
            </div>

            <div className="flex items-center gap-4 text-secondary">
                {isMealPlanPage && (
                    <>
                        <button title="Download PDF" onClick={() => navigate('/mealplan-pdf')}>
                            <Download className="w-6 h-6" />
                        </button>
                        <button title="Recreate Plan" onClick={() => navigate('/create')}>
                            <RefreshCcw className="w-6 h-6" />
                        </button>
                    </>
                )}

                {isAdmin && (
                    <>
                        <button title="Start Match">
                            <Plus className="w-6 h-6" />
                        </button>
                        <button title="Search">
                            <Search className="w-6 h-6" />
                        </button>
                        <button title="Messages">
                            <MessageSquare className="w-6 h-6" />
                        </button>
                    </>
                )}

                {isGuest && (
                    <>
                        <button title="Back" onClick={() => navigate(-1)}>
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            title="Logout"
                            onClick={() => {
                                logout();
                                navigate('/');
                            }}
                        >
                            <LogOut className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>
        </header>
    );
}
