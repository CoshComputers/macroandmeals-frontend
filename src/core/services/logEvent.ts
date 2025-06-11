// src/core/utils/logEvent.ts
import LoggingAPI from '@/core/api/logging.ts';
import { useAuthStore } from '@/features/userandmeals/store/authStore.ts';

const LEVEL_PRIORITY = ['debug', 'info', 'warn', 'error'] as const;
type LogLevel = typeof LEVEL_PRIORITY[number];

const envLogLevel = import.meta.env.VITE_LOG_LEVEL as LogLevel | undefined;
const currentLevel: LogLevel = LEVEL_PRIORITY.includes(envLogLevel ?? 'warn')
    ? envLogLevel!
    : 'warn';

const currentIndex = LEVEL_PRIORITY.indexOf(currentLevel);
const LOG_LEVELS = LEVEL_PRIORITY.slice(currentIndex);


export function logDebug(message: string, context: Record<string, unknown> = {}) {
    if (LOG_LEVELS.includes('debug')) {
        logEvent('info', message, context); // Use 'info' for debug if your backend doesn't support it
        console.debug('[Debug]', message, context);
    }
}

export function logInfo(message: string, context: Record<string, unknown> = {}) {
    if (LOG_LEVELS.includes('info')) {
        logEvent('info', message, context);
        console.info('[Info]', message, context);
    }
}

export function logWarn(message: string, context: Record<string, unknown> = {}) {
    if (LOG_LEVELS.includes('warn')) {
        logEvent('warn', message, context);
        console.warn('[Warn]', message, context);
    }
}

export function logError(message: string, context: Record<string, unknown> = {}) {
    if (LOG_LEVELS.includes('error')) {
        logEvent('error', message, context);
        console.error('[Error]', message, context);
    }
}

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
