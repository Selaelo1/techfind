import api from './axios';
import { FreelancerProfile } from '../types';

export const profilesApi = {
  createProfile: async (profileData: Partial<FreelancerProfile>) => {
    const { data } = await api.post<FreelancerProfile>('/profiles', profileData);
    return data;
  },

  getProfile: async (userId: string) => {
    const { data } = await api.get<FreelancerProfile>(`/profiles/${userId}`);
    return data;
  },

  updateProfile: async (userId: string, profileData: Partial<FreelancerProfile>) => {
    const { data } = await api.put<FreelancerProfile>(`/profiles/${userId}`, profileData);
    return data;
  },

  getPendingProfiles: async () => {
    const { data } = await api.get<FreelancerProfile[]>('/profiles/pending');
    return data;
  },

  approveProfile: async (userId: string) => {
    const { data } = await api.post(`/profiles/${userId}/approve`);
    return data;
  },

  rejectProfile: async (userId: string, reason: string) => {
    const { data } = await api.post(`/profiles/${userId}/reject`, { reason });
    return data;
  },
};