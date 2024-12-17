import { User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@techfind.com',
    password: 'Admin123!',
    name: 'Admin User',
    role: 'admin',
    verified: true
  },
  {
    id: '2',
    email: 'freelancer@techfind.com',
    password: 'Freelancer123!',
    name: 'John Developer',
    role: 'freelancer',
    verified: true
  },
  {
    id: '3',
    email: 'client@techfind.com',
    password: 'Client123!',
    name: 'Sarah Client',
    role: 'client',
    verified: true
  }
];