import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {type EnumOption, useEnumStore} from '@/core/store/enumStore';
import type { components } from '@/core/types/api';
import { submitProfile } from '@/features/userandmeals/services/userService';
import { logWarn } from '@/core/services/logEvent';
import {useMealPlanStore} from "@/features/userandmeals/store/mealPlanStore.ts";
import {mealFrequencyToNumber} from "@/utils/converters.ts";
import {notify} from "@/core/services/notify.ts";
import {useProfileFormStore} from "@/features/userandmeals/store/userProfileStore.ts";

type CreateUserProfileEntryRequestDTO = components['schemas']['CreateUserProfileEntryRequestDTO'];

export function CreateMealPlanForm() {
    const navigate = useNavigate();
    const { getEnumOptions } = useEnumStore();
    const { profileData, setProfileData } = useProfileFormStore();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<CreateUserProfileEntryRequestDTO>({
        mode: 'onChange',
        defaultValues: profileData
    });

    const onSubmit = async (data: CreateUserProfileEntryRequestDTO) => {
        try {
            setProfileData(data); // store in state before API call
            const response = await submitProfile(data);
            if (!response.profileId) {
                throw new Error("No profileId returned from backend");
            }
            const mealsPerDay = mealFrequencyToNumber(data.mealFrequency);
            useMealPlanStore.getState().startPlanGeneration(mealsPerDay, response.profileId);
            notify.info("Profile created, your meal plan is on it's way.");
            navigate('/mealplan-waiting');
        } catch (err) {
            logWarn(err instanceof Error ? err.message : 'Something went wrong.');
        }
    };

    const renderSelect = (
        name: keyof CreateUserProfileEntryRequestDTO,
        label: string,
        required = true
    ) => {
        const id = `input-${name}`;
        return (
            <div className="mb-4">
                <label htmlFor={id} className="block mb-1 font-medium">{label}</label>
                <select
                    id={id}
                    {...register(name, { required })}
                    aria-invalid={errors[name] ? 'true' : 'false'}
                    aria-describedby={errors[name] ? `${id}-error` : undefined}
                    className="w-full border p-2 rounded"
                >
                    <option value="">Select...</option>
                    {getEnumOptions(name).map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {errors[name] && (
                    <p id={`${id}-error`} role="alert" className="text-red-500 text-sm">
                        This field is required
                    </p>
                )}
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            {/* Date of Birth */}
            <div className="mb-4">
                <label htmlFor="input-dateOfBirth" className="block mb-1 font-medium">Date of Birth</label>
                <input
                    id="input-dateOfBirth"
                    type="date"
                    {...register('dateOfBirth', { required: true })}
                    aria-invalid={errors.dateOfBirth ? 'true' : 'false'}
                    aria-describedby={errors.dateOfBirth ? 'input-dateOfBirth-error' : undefined}
                    className="w-full border p-2 rounded"
                />
                {errors.dateOfBirth && (
                    <p id="input-dateOfBirth-error" role="alert" className="text-red-500 text-sm">
                        This field is required
                    </p>
                )}
            </div>

            {/* Height and Weight */}
            <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="input-heightCm" className="block mb-1 font-medium">Height (cm)</label>
                    <input
                        id="input-heightCm"
                        type="number"
                        step="0.1"
                        {...register('heightCm', { required: true, min: 100, max: 250 })}
                        className="w-full border p-2 rounded"
                        aria-invalid={errors.heightCm ? 'true' : 'false'}
                        aria-describedby={errors.heightCm ? 'input-heightCm-error' : undefined}
                    />
                    {errors.heightCm && (
                        <p id="input-heightCm-error" role="alert" className="text-red-500 text-sm">
                            Valid height is required (100–250 cm)
                        </p>
                    )}
                </div>

                <div className="flex-1">
                    <label htmlFor="input-weightKg" className="block mb-1 font-medium">Weight (kg)</label>
                    <input
                        id="input-weightKg"
                        type="number"
                        step="0.1"
                        {...register('weightKg', { required: true, min: 30, max: 300 })}
                        className="w-full border p-2 rounded"
                        aria-invalid={errors.weightKg ? 'true' : 'false'}
                        aria-describedby={errors.weightKg ? 'input-weightKg-error' : undefined}
                    />
                    {errors.weightKg && (
                        <p id="input-weightKg-error" role="alert" className="text-red-500 text-sm">
                            Valid weight is required (30–300 kg)
                        </p>
                    )}
                </div>
            </div>

            {/* Enum-based Selects */}
            {renderSelect('goalType', 'Goal')}
            {renderSelect('activityLevel', 'Activity Level')}
            {renderSelect('jobActivityLevel', 'Job Activity Level')}
            {renderSelect('mealFrequency', 'Meals per Day')}
            {renderSelect('dietaryPreference', 'Dietary Preference')}

            {/* Allergies as checkboxes */}
            <fieldset className="mb-4">
                <legend className="block mb-1 font-medium">Allergies</legend>
                <div className="grid grid-cols-2 gap-2">
                    {getEnumOptions('allergen').map((opt: EnumOption) => (
                        <label key={`allergen-${opt.value}`} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value={opt.value}
                                {...register('allergies')}
                                className="accent-black"
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </fieldset>

            {/* Dietary Notes */}
            <div className="mb-4">
                <label htmlFor="input-dietaryNotes" className="block mb-1 font-medium">Dietary Notes (optional)</label>
                <textarea
                    id="input-dietaryNotes"
                    {...register('dietaryNotes')}
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="bg-black text-white py-2 px-4 rounded disabled:opacity-50"
                aria-disabled={!isValid || isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : 'Generate Meal Plan'}
            </button>
            <button
                type="reset"
                onClick={() => {
                    if (confirm("Clear the form and start again?")) {
                        useProfileFormStore.getState().clearProfileData(); // Clear the DTO
                        navigate('/create'); // Navigate to form, replacing history
                    }
                }}
                className="mt-6 ml-8 px-4 py-2 text-white bg-secondary rounded hover:bg-secondary-dark transition">
                Reset
            </button>

        </form>
    );
}
