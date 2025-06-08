// core/services/authService.ts
import API from '@/core/api/api';
import type { components } from '@/core/types/api';

type LoginRequestDTO = components['schemas']['LoginRequestDTO'];
type CreateUserRequestDTO = components['schemas']['CreateUserRequestDTO'];
type LoginResponseDTO = components['schemas']['LoginResponseDTO'];


export async function loginUser(payload: LoginRequestDTO): Promise<LoginResponseDTO> {
    const response = await API.post('/auth/login', payload);
    return response.data;
}

export async function createGuest(payload: CreateUserRequestDTO): Promise<LoginResponseDTO> {
    const response = await API.post('/auth/guest', payload);
    return response.data;
}
