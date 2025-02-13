import { mockAuthApi } from './mockAuth';


export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'freelancer' | 'client';
}

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const { token, user } = await mockAuthApi.login(credentials);
    localStorage.setItem('token', token);
    return { token, user };
  },

  register: async (userData: RegisterData) => {
    const { token, user } = await mockAuthApi.register(userData);
    localStorage.setItem('token', token);
    return { token, user };
  },

  getCurrentUser: async () => {
    return await mockAuthApi.getCurrentUser();
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};