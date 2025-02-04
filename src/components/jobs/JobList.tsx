import React from 'react';
import { Project } from '../../lib/types';
import { JobCard } from './JobCard';
import { LoadingSpinner } from '../common/LoadingSpinner';

interface JobListProps {
  jobs: Project[];
  isLoading: boolean;
}

export const JobList: React.FC<JobListProps> = ({ jobs, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};