import { Search, Plus, MessageSquare } from 'lucide-react';

export function TopNav() {
    return (
        <header className="fixed top-0 inset-x-0 h-14 bg-surface-dark shadow flex items-center justify-between px-4 z-20">
            <div className="flex items-center gap-2">
                <img
                    src="/logos/coachcoshlogo-black.png"
                    alt="Snookernet"
                    className="h-10 w-auto max-w-[160px] block dark:hidden"
                />
                <img
                    src="/logos/coachcoshlogo-black.png"
                    alt="Snookernet (Light)"
                    className="h-10 w-auto max-w-[160px] hidden dark:block"
                />
            </div>

            <div className="flex items-center gap-4 text-secondary">
                <button title="Start Match">
                    <Plus className="w-6 h-6"/>
                </button>
                <button title="Search">
                    <Search className="w-6 h-6" />
                </button>
                <button title="Messages">
                    <MessageSquare className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
