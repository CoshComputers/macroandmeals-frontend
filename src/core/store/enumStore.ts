import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import API from '@/core/api/api';

export type EnumOption = {
    key: string;
    label: string;
};

type EnumMap = Record<string, EnumOption[]>;

interface EnumState {
    enums: EnumMap;
    fetchEnums: (types: string[]) => Promise<void>;
    getEnumOptions: (type: string) => EnumOption[];
}

export const useEnumStore = create<EnumState>()(
    persist(
        (set, get) => ({
            enums: {},

            fetchEnums: async (types: string[]) => {
                const results = await Promise.allSettled(
                    types.map(async (type) => {
                        const res = await API.get(`/enums/${type}`);
                        return [type, res.data] as const;
                    })
                );

                const successful: [string, EnumOption[]][] = results
                    .filter((r): r is PromiseFulfilledResult<[string, EnumOption[]]> => r.status === 'fulfilled')
                    .map((r) => r.value);

                const newEnums = Object.fromEntries(successful);
                set((state) => ({
                    enums: {
                        ...state.enums,
                        ...newEnums,
                    },
                }));
            },

            getEnumOptions: (type: string) => {
                return get().enums[type] || [];
            },
        }),
        {
            name: 'enum-storage',
        }
    )
);
