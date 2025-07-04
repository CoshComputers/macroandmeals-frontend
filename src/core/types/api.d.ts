/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getAllEntries"];
        put?: never;
        post: operations["createProfileEntry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/guest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["createOrReuseGuest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/admin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["createAdmin"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/profile/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getEntryById"];
        put?: never;
        post?: never;
        delete: operations["deleteEntry"];
        options?: never;
        head?: never;
        patch: operations["updateNotes"];
        trace?: never;
    };
    "/api/profile/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMealPlanStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/profile/stream": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["streamMealPlanStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/profile/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMyEntries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/mealplan/user-profile/{profileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMealPlan"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/mealplan/user-profile/{profileId}/mealplan": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMealPlanProgress"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/visibility": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getVisibilityOptions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/user-role": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getUserRoles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/media-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMediaTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/meal-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMealTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/meal-plan-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMealPlanStatuses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/meal-frequency": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getMealFrequencies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/job-activity-level": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getJobActivityLevels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/goal-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getGoalTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/dietary-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getDietaryPreferences"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/allergen": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getAllergens"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/enums/activity-level": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getActivityLevels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CreateUserProfileEntryRequestDTO: {
            /** Format: date */
            dateOfBirth: string;
            /** Format: double */
            heightCm: number;
            /** Format: double */
            weightKg: number;
            /** @enum {string} */
            activityLevel: "SEDENTARY" | "LIGHTLY_ACTIVE" | "MODERATELY_ACTIVE" | "VERY_ACTIVE";
            /** @enum {string} */
            goalType: "FAT_LOSS" | "MAINTENANCE" | "MUSCLE_GAIN";
            /** @enum {string} */
            mealFrequency: "TWO" | "THREE" | "FOUR" | "FIVE" | "SIX";
            /** @enum {string} */
            jobActivityLevel: "SEDENTARY" | "MODERATE" | "ACTIVE" | "VERY_ACTIVE";
            /** @enum {string} */
            dietaryPreference?: "VEGETARIAN" | "VEGAN" | "PESCATARIAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "HALAL" | "KOSHER" | "NONE" | "OTHER";
            allergies?: ("PEANUTS" | "TREE_NUTS" | "DAIRY" | "EGGS" | "FISH" | "SHELLFISH" | "SOY" | "WHEAT" | "GLUTEN" | "SESAME" | "OTHER")[];
            dietaryNotes?: string;
        };
        CreateProfileEntryResponseDTO: {
            /** Format: int64 */
            profileId?: number;
            message?: string;
        };
        LoginRequestDTO: {
            email?: string;
            password?: string;
        };
        LoginResponseDTO: {
            token?: string;
            email?: string;
            name?: string;
            roles?: string[];
            /** Format: int64 */
            profileId?: number;
        };
        CreateUserRequestDTO: {
            name?: string;
            email?: string;
            password?: string;
            roles?: ("USER" | "GUEST" | "ADMIN" | "SUPER_ADMIN")[];
        };
        MessageResponse: {
            message?: string;
        };
        UpdateUserProfileEntryRequestDTO: {
            dietaryNotes?: string;
            coachNotes?: string;
        };
        UserProfileEntryResponseDTO: {
            /** Format: int64 */
            id?: number;
            /** Format: int64 */
            userId?: number;
            /** Format: date */
            dateOfBirth?: string;
            /** Format: double */
            heightCm?: number;
            /** Format: double */
            weightKg?: number;
            /** @enum {string} */
            activityLevel?: "SEDENTARY" | "LIGHTLY_ACTIVE" | "MODERATELY_ACTIVE" | "VERY_ACTIVE";
            /** @enum {string} */
            goalType?: "FAT_LOSS" | "MAINTENANCE" | "MUSCLE_GAIN";
            /** @enum {string} */
            mealFrequency?: "TWO" | "THREE" | "FOUR" | "FIVE" | "SIX";
            /** @enum {string} */
            jobActivityLevel?: "SEDENTARY" | "MODERATE" | "ACTIVE" | "VERY_ACTIVE";
            /** @enum {string} */
            dietaryPreference?: "VEGETARIAN" | "VEGAN" | "PESCATARIAN" | "GLUTEN_FREE" | "DAIRY_FREE" | "NUT_FREE" | "HALAL" | "KOSHER" | "NONE" | "OTHER";
            allergies?: ("PEANUTS" | "TREE_NUTS" | "DAIRY" | "EGGS" | "FISH" | "SHELLFISH" | "SOY" | "WHEAT" | "GLUTEN" | "SESAME" | "OTHER")[];
            dietaryNotes?: string;
            coachNotes?: string;
            /** @enum {string} */
            mealPlanStatus?: "PENDING" | "MACROS_SET" | "COMPLETED" | "FAILED";
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
        };
        MealPlanStatusResponseDTO: {
            /** @enum {string} */
            status?: "PENDING" | "MACROS_SET" | "COMPLETED" | "FAILED";
        };
        SseEmitter: {
            /** Format: int64 */
            timeout?: number;
        };
        MealDTO: {
            name?: string;
            items?: string;
            instructions?: string;
            /** Format: int32 */
            calories?: number;
            /** Format: int32 */
            proteinG?: number;
            /** Format: int32 */
            carbsG?: number;
            /** Format: int32 */
            fatG?: number;
            hasPotentialAllergens?: boolean;
        };
        MealPlanDTO: {
            /** Format: int64 */
            id?: number;
            /** Format: date-time */
            createdAt?: string;
            /** Format: int32 */
            calories?: number;
            /** Format: int32 */
            proteinG?: number;
            /** Format: int32 */
            carbsG?: number;
            /** Format: int32 */
            fatG?: number;
            notes?: string;
            days?: components["schemas"]["MealPlanDayDTO"][];
        };
        MealPlanDayDTO: {
            /** Format: int32 */
            dayNumber?: number;
            mealType?: string;
            meal?: components["schemas"]["MealDTO"];
        };
        MealPlanProgressDTO: {
            /** @enum {string} */
            status?: "PENDING" | "MACROS_SET" | "COMPLETED" | "FAILED";
            data?: unknown;
        };
        EnumOption: {
            value?: string;
            label?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getAllEntries: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["UserProfileEntryResponseDTO"][];
                };
            };
        };
    };
    createProfileEntry: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUserProfileEntryRequestDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["CreateProfileEntryResponseDTO"];
                };
            };
        };
    };
    login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginRequestDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["LoginResponseDTO"];
                };
            };
        };
    };
    createOrReuseGuest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUserRequestDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["LoginResponseDTO"];
                };
            };
        };
    };
    createAdmin: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUserRequestDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["MessageResponse"];
                };
            };
        };
    };
    getEntryById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["UserProfileEntryResponseDTO"];
                };
            };
        };
    };
    deleteEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["MessageResponse"];
                };
            };
        };
    };
    updateNotes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateUserProfileEntryRequestDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["MessageResponse"];
                };
            };
        };
    };
    getMealPlanStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["MealPlanStatusResponseDTO"];
                };
            };
        };
    };
    streamMealPlanStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/event-stream": components["schemas"]["SseEmitter"];
                };
            };
        };
    };
    getMyEntries: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["UserProfileEntryResponseDTO"][];
                };
            };
        };
    };
    getMealPlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                profileId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["MealPlanDTO"];
                };
            };
        };
    };
    getMealPlanProgress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                profileId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["MealPlanProgressDTO"];
                };
            };
        };
    };
    getVisibilityOptions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getUserRoles: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getMediaTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getMealTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getMealPlanStatuses: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getMealFrequencies: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getJobActivityLevels: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getGoalTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getDietaryPreferences: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getAllergens: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
    getActivityLevels: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["EnumOption"][];
                };
            };
        };
    };
}
