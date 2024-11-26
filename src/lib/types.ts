export type UserRole = 'freelancer' | 'client' | 'admin';
export type ProfileStatus = 'pending' | 'approved' | 'rejected';
export type ProjectStatus = 'open' | 'in_progress' | 'completed' | 'cancelled';
export type BidStatus = 'pending' | 'accepted' | 'rejected';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  verified: boolean;
}

export interface FreelancerProfile {
  userId: string;
  hourlyRate: number;
  skills: string[];
  bio: string;
  qualifications: Qualification[];
  portfolio: PortfolioItem[];
  status: ProfileStatus;
  reviewNotes?: string;
}

export interface Qualification {
  title: string;
  institution: string;
  year: number;
  certificateUrl?: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  url?: string;
  images?: string[];
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
  };
  skills: string[];
  status: ProjectStatus;
  createdAt: string;
  deadline?: string;
}

export interface Bid {
  id: string;
  projectId: string;
  freelancerId: string;
  amount: number;
  proposal: string;
  estimatedDuration: number;
  status: BidStatus;
  createdAt: string;
}