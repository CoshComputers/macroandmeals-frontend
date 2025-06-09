import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import API from '@/core/api/api';
import {logDebug} from "@/core/services/logEvent.ts";

export type EnumOption = {
    value: string;
    label: string;
};

type EnumMap = Record<string, EnumOption[]>;

const enumEndpoints: Record<string, string> = {
    goalType: 'goal-type',
    activityLevel: 'activity-level',
    mealFrequency: 'meal-frequency',
    jobActivityLevel: 'job-activity-level',
    mealPlanStatus: 'meal-plan-status',
    userRole: 'user-role',
    mediaType: 'media-type',
    visibility: 'visibility',
    allergen: 'allergen',
    dietaryPreference: 'dietary-preference',
    mealType: 'meal-type',
};

interface EnumState {
    enums: EnumMap;
    fetchEnums: (types: string[]) => Promise<void>;
    fetchAllEnums: () => Promise<void>;
    getEnumOptions: (type: string) => EnumOption[];
}

export const useEnumStore = create<EnumState>()(
    persist(
        (set, get) => ({
            enums: {},

            fetchEnums: async (types: string[]) => {
                const results = await Promise.allSettled(
                    types.map(async (type) => {
                        const path = enumEndpoints[type];
                        if (!path) {
                            console.warn(`[EnumStore] Unknown enum type: ${type}`);
                            return;
                        }
                        const res = await API.get(`/enums/${path}`);
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

            fetchAllEnums: async () => {
                const types = Object.keys(enumEndpoints);
                logDebug("Fetching All Enums", {types});
                await get().fetchEnums(types);
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
