import { create } from 'zustand';
import type {components} from "@/core/types/api";

type CreateUserProfileEntryRequestDTO = components['schemas']['CreateUserProfileEntryRequestDTO'];


const defaultProfileData: Partial<CreateUserProfileEntryRequestDTO> = {
    dietaryPreference: "NONE",
    allergies: [],
    // Add other default values here if needed
};

interface ProfileFormStore {
    profileData: Partial<CreateUserProfileEntryRequestDTO>;
    setProfileData: (data: Partial<CreateUserProfileEntryRequestDTO>) => void;
    clearProfileData: () => void;
}

export const useProfileFormStore = create<ProfileFormStore>((set) => ({
    profileData: {
        ...defaultProfileData
    },
    setProfileData: (data) => set({ profileData: data }),
    clearProfileData: () => set({ profileData: { ...defaultProfileData } }),


}));

