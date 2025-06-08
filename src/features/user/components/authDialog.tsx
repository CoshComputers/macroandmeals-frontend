import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '@/features/user/store/authStore';
import API from '@/core/api/api';
import type { components } from '@/core/types/api';
import { useNavigate } from 'react-router-dom';


type AuthMode = 'login' | 'guest';
type LoginRequestDTO = components['schemas']['LoginRequestDTO'];
type CreateUserRequestDTO = components['schemas']['CreateUserRequestDTO'];
type LoginResponseDTO = components['schemas']['LoginResponseDTO'];

interface AuthDialogProps {
    isOpen: boolean;
    onClose: () => void;
    mode: AuthMode;
}

export function AuthDialog({ isOpen, onClose, mode }: AuthDialogProps) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const login = useAuthStore((state) => state.login);

    const handleSubmit = async () => {
        try {
            let response: { data: LoginResponseDTO  };

            if (mode === 'guest') {
                const payload: CreateUserRequestDTO = {
                    email,
                    name,
                    roles: ['GUEST'],
                };
                response = await API.post('/auth/guest', payload);
            } else {
                const payload: LoginRequestDTO = { email, password };
                response = await API.post('/auth/login', payload);
            }

            login(response.data);
            onClose();

            const roles = response.data.roles ?? [];

            // Navigate based on role
            if (roles.includes('ADMIN') || roles.includes('SUPER_ADMIN')) {
                navigate('/admin');
            } else {
                navigate('/create');
            }

        } catch (err) {
            if (err instanceof Error) {
                alert(err.message); // Already clean, thanks to the interceptor
            } else {
                alert('Something went wrong.');
            }
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 text-black shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <Dialog.Title className="text-lg font-bold">
                            {mode === 'guest' ? 'Start Your Plan' : 'Admin Login'}
                        </Dialog.Title>
                        <button onClick={onClose} className="text-gray-500 hover:text-black">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        {mode === 'guest' && (
                            <input
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                        />
                        {mode === 'login' && (
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full"
                            />
                        )}
                        <button onClick={handleSubmit} className="btn-primary w-full">
                            {mode === 'guest' ? 'Get My Plan' : 'Log In'}
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
