// core/services/userService.ts
import { useEnumStore } from '@/core/store/enumStore';
import API from "@/core/api/api.ts";
import type { components } from '@/core/types/api';

type CreateUserProfileEntryRequestDTO = components['schemas']['CreateUserProfileEntryRequestDTO'];
type CreateProfileEntryResponseDTO = components['schemas']['CreateProfileEntryResponseDTO'];

export async function fetchInitialUserData() {
    const enumStore = useEnumStore.getState();
    await enumStore.fetchAllEnums();
}

export async function submitProfile(data: CreateUserProfileEntryRequestDTO): Promise<CreateProfileEntryResponseDTO>{
    const response = await API.post('/profile', data);


    return response.data;

}
