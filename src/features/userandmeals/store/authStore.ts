import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { components } from '@/core/types/api';

type LoginResponseDTO = components['schemas']['LoginResponseDTO'];

interface AuthState {
    token: string | null;
    userId: number | null;
    email: string | null;
    name: string | null;
    roles: string[];
    isAuthenticated: boolean;

    login: (data: LoginResponseDTO) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            email: null,
            name: null,
            userId: null,
            roles: [],
            isAuthenticated: false,

            login: (data) => {
                set({
                    token: data.token,
                    email: data.email,
                    name: data.name,
                    userId: data.profileId,
                    roles: Array.from(data.roles ?? []),
                    isAuthenticated: true,
                });
            },

            logout: () => {
                set({
                    token: null,
                    email: null,
                    name: null,
                    roles: [],
                    isAuthenticated: false,
                });
            },
        }),
        {
            name: 'auth-storage', // will save to localStorage under this key
        }
    )
);
