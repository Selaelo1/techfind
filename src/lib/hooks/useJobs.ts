import { useState } from 'react';
import { Project, JobFilters } from '../types';
import { useQuery } from '@tanstack/react-query';
import { projectsApi } from '../api/projects';

const defaultFilters: JobFilters = {
  search: '',
  minBudget: 0,
  maxBudget: 10000,
  skills: [],
  projectType: '',
  experienceLevel: '',
};

export const useJobs = () => {
  const [filters, setFilters] = useState<JobFilters>(defaultFilters);

  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ['projects', filters],
    queryFn: () => projectsApi.getProjects(filters),
  });

  return {
    jobs,
    isLoading,
    filters,
    setFilters,
  };
};