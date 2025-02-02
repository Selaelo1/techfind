// Add these types to your existing types.ts file

export interface JobFilters {
  search: string;
  minBudget: number;
  maxBudget: number;
  skills: string[];
  projectType: string;
  experienceLevel: string;
}