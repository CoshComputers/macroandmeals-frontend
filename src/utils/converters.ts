export function mealFrequencyToNumber(freq: string): number {
    switch (freq) {
        case 'TWO': return 2;
        case 'THREE': return 3;
        case 'FOUR': return 4;
        case 'FIVE': return 5;
        case 'SIX': return 6;
        default: return 4; // sensible default fallback
    }
}