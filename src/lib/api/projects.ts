import api from './axios';
import { Project, Bid } from '../types';

export const projectsApi = {
  createProject: async (projectData: Partial<Project>) => {
    const { data } = await api.post<Project>('/projects', projectData);
    return data;
  },

  getProjects: async (filters?: Record<string, any>) => {
    const { data } = await api.get<Project[]>('/projects', { params: filters });
    return data;
  },

  getProject: async (id: string) => {
    const { data } = await api.get<Project>(`/projects/${id}`);
    return data;
  },

  submitBid: async (projectId: string, bidData: Partial<Bid>) => {
    const { data } = await api.post<Bid>(`/projects/${projectId}/bids`, bidData);
    return data;
  },

  getProjectBids: async (projectId: string) => {
    const { data } = await api.get<Bid[]>(`/projects/${projectId}/bids`);
    return data;
  },

  updateBidStatus: async (projectId: string, bidId: string, status: 'accepted' | 'rejected') => {
    const { data } = await api.put(`/projects/${projectId}/bids/${bidId}`, { status });
    return data;
  },
};