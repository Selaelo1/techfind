import { LoginCredentials, RegisterData } from './auth';
import { mockUsers } from '../mockData/users';
import { User } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAuthApi = {
  login: async (credentials: LoginCredentials) => {
    await delay(1000); // Simulate network delay

    const user = mockUsers.find(u => 
      u.email === credentials.email && 
      'password' in u && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const { password, ...userWithoutPassword } = user;
    const token = btoa(JSON.stringify(userWithoutPassword));

    return {
      user: userWithoutPassword,
      token
    };
  },

  register: async (userData: RegisterData) => {
    await delay(1000);

    if (mockUsers.some(u => u.email === userData.email)) {
      throw new Error('Email already exists');
    }

    const newUser: User = {
      id: (mockUsers.length + 1).toString(),
      email: userData.email,
      name: userData.name,
      role: userData.role,
      verified: userData.role === 'client',
    };

    mockUsers.push({ ...newUser, password: userData.password });

    const token = btoa(JSON.stringify(newUser));

    return {
      user: newUser,
      token
    };
  },

  getCurrentUser: async () => {
    await delay(500);
    
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    try {
      const user = JSON.parse(atob(token));
      return user;
    } catch {
      throw new Error('Invalid token');
    }
  }
};