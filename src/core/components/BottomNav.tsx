import {Users, CircleDot, UserCircle, Home} from 'lucide-react';

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 inset-x-0 h-16 bg-surface-dark shadow-inner flex justify-around items-center z-20 border-t border-border dark:border-border-dark">
            {/* Home (logo icon) */}
            <NavButton label="Home">
                <Home className="w-6 h-6" />
            </NavButton>

            {/* Friends */}
            <NavButton label="Friends">
                <Users className="w-6 h-6" />
            </NavButton>

            {/* Record */}
            <NavButton label="Record">
                <CircleDot className="w-6 h-6" />
            </NavButton>

            {/* Profile */}
            <NavButton label="Profile">
                <UserCircle className="w-6 h-6" />
            </NavButton>
        </nav>
    );
}

type NavButtonProps = {
    label: string;
    children?: React.ReactNode;
    isImage?: boolean;
    src?: string;
};

function NavButton({ label, children, isImage, src }: NavButtonProps) {
    return (
        <button className="flex flex-col items-center text-xs text-text-dark hover:text-accent dark:hover:text-accent-dark transition">
            {isImage && src ? (
                <img src={src} alt={label} className="w-6 h-6 mb-0.5" />
            ) : (
                children
            )}
            <span className="text-[0.65rem]">{label}</span>
        </button>
    );
}
