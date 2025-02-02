import React from 'react';
import { JobFilters } from '../../components/jobs/JobFilters';
import { JobList } from '../../components/jobs/JobList';
import { JobSearch } from '../../components/jobs/JobSearch';
import { useJobs } from '../../lib/hooks/useJobs';

const BrowseJobs = () => {
  const { jobs, isLoading, filters, setFilters } = useJobs();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Browse Projects</h1>
          <JobSearch onSearch={(term) => setFilters({ ...filters, search: term })} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <JobFilters filters={filters} onFilterChange={setFilters} />
          </div>

          <div className="w-full lg:w-3/4">
            <JobList jobs={jobs} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;