// streamService.ts

import { fetchEventSource } from '@microsoft/fetch-event-source';
import { useAuthStore } from '@/features/userandmeals/store/authStore';
import { notify } from '@/core/services/notify';
import { logInfo, logWarn } from '@/core/services/logEvent';
import { useMealPlanStore } from '@/features/userandmeals/store/mealPlanStore';
import type { MacroSummaryDTO } from '@/features/userandmeals/dtos/MacroSummaryDTO';

let abortController: AbortController | null = null;

function start() {
    const token = useAuthStore.getState().token;
    const store = useMealPlanStore.getState();

    if (!token) {
        throw new Error('No auth token found.');
    }

    abortController = new AbortController();

    fetchEventSource(`${import.meta.env.VITE_API_BASE_URL}/profile/stream`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        signal: abortController.signal,
        onopen: async (response) => {
            if (response.status === 401 || response.status === 403) {
                notify.error('Session expired. Please log in again.');
                stop();
                return;
            }

            if (response.ok && response.status === 200) {
                logInfo('✅ SSE connection opened');
            } else {
                logWarn(`❌ Unexpected status code: ${response.status}`);
                notify.error('Unexpected response from server.');
                stop();
            }
        },
        onmessage(msg) {
            switch (msg.event) {
                case 'keep-alive':
                    logInfo('📶 Keep-alive received');
                    break;

                case 'macros-generated':
                {
                    const macros: MacroSummaryDTO = JSON.parse(msg.data);
                    logInfo('💪 Macros received');
                    store.setMacros(macros);
                }
                    break;

                case 'meal-plan-status':
                {
                    const status = JSON.parse(msg.data);
                    if (status === 'COMPLETED') {
                        store.setPhase('COMPLETED');
                    } else if (status === 'FAILED') {
                        store.fail('Meal plan generation failed.');
                    }
                }
                    break;

                default:
                    logWarn('❓ Unknown SSE event:', { msg });
            }
        },
        onerror(err) {
            logWarn('SSE connection error', { err });
            notify.warning('Lost connection while generating your plan.');
            stop();
        },
    });
}

function stop() {
    if (abortController) {
        logInfo('🛑 Aborting SSE stream');
        abortController.abort();
        abortController = null;
    }
}

export const streamService = {
    start,
    stop,
};
