import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/user/store/authStore';
import { loginUser, createGuest } from '@/core/services/authService';
import {fetchInitialUserData} from "@/features/user/services/userService.ts";
import {logWarn} from "@/core/services/logEvent.ts";

type AuthMode = 'login' | 'guest';

interface AuthDialogProps {
    isOpen: boolean;
    onClose: () => void;
    mode: AuthMode;
}

export function AuthDialog({ isOpen, onClose, mode }: AuthDialogProps) {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            const response = mode === 'guest'
                ? await createGuest({ email, name, roles: ['GUEST'] })
                : await loginUser({ email, password });

            login(response);
            await fetchInitialUserData(); // Pull enums before UI depends on them

            onClose();

            const roles = response.roles ?? [];
            if (roles.includes('ADMIN') || roles.includes('SUPER_ADMIN')) {
                navigate('/admin');
            } else {
                navigate('/create');
            }
        } catch (err) {
            if (err instanceof Error) {
                logWarn(err.message);
            } else {
                logWarn('Something went wrong.');
            }
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50" aria-labelledby="auth-dialog-title">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

            {/* Dialog Container */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* Dialog Content */}
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="auth-dialog-title"
                    className="w-full max-w-md rounded bg-white p-6 text-black shadow-xl focus:outline-none"
                >
                    {/* Title and Close */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 id="auth-dialog-title" className="text-lg font-bold">
                            {mode === 'guest' ? 'Start Your Plan' : 'Admin Login'}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-black"
                            aria-label="Close dialog"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Form Fields */}
                    <form
                        className="space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        aria-describedby="auth-dialog-desc"
                    >
                        <p id="auth-dialog-desc" className="sr-only">
                            Please enter your details to continue.
                        </p>

                        {mode === 'guest' && (
                            <div>
                                <label htmlFor="guest-name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="guest-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded px-3 py-2 mt-1"
                            />
                        </div>

                        {mode === 'login' && (
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>
                        )}

                        <button type="submit" className="btn-primary w-full">
                            {mode === 'guest' ? 'Get My Plan' : 'Log In'}
                        </button>
                    </form>
                </div>
            </div>
        </Dialog>

    );
}
