// src/core/utils/logEvent.ts
import LoggingAPI from '@/core/api/logging';
import { useAuthStore } from '@/features/user/store/authStore';

export type LogLevel = 'info' | 'warn' | 'error';

export async function logEvent(
    level: LogLevel,
    message: string,
    context: Record<string, unknown> = {}
) {
    const { email, name, roles } = useAuthStore.getState();

    const userContext = {
        user: {
            email,
            name,
            roles,
        },
    };

    const fullContext = {
        ...userContext,
        ...context,
    };

    if (!import.meta.env.VITE_LOGGING_ENDPOINT) {
        console.debug('[Dev Log]', { level, message, context: fullContext });
        return;
    }

    try {
        await LoggingAPI.post('/', {
            level,
            message,
            context: fullContext,
        });
    } catch (err) {
        console.warn('[Logging Failed]', err);
    }
}
