/* eslint-disable @typescript-eslint/no-explicit-any */
// Add these types to your existing types.ts file

import { ReactNode } from "react";

export interface JobFilters {
  id: any;
  budget: any;
  createdAt: string | number | Date;
  deadline: any;
  description: ReactNode;
  title: ReactNode;
  search: string;
  minBudget: number;
  maxBudget: number;
  skills: string[];
  projectType: string;
  experienceLevel: string;
}