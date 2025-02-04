import React from 'react';
import { JobFilters as FilterType } from '../../lib/types';
import { Slider } from '../ui/Slider';

interface JobFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

export const JobFilters: React.FC<JobFiltersProps> = ({ filters, onFilterChange }) => {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python',
    'Java', 'AWS', 'Docker', 'DevOps'
  ];

  const handleSkillToggle = (skill: string) => {
    const updatedSkills = filters.skills.includes(skill)
      ? filters.skills.filter(s => s !== skill)
      : [...filters.skills, skill];
    onFilterChange({ ...filters, skills: updatedSkills });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6 sticky top-20">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Filters</h3>
        <div className="space-y-6">
          {/* Budget Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range (USD)
            </label>
            <Slider
              min={0}
              max={10000}
              step={100}
              value={[filters.minBudget, filters.maxBudget]}
              onChange={([min, max]) => 
                onFilterChange({ ...filters, minBudget: min, maxBudget: max })
              }
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>${filters.minBudget}</span>
              <span>${filters.maxBudget}</span>
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <select
              value={filters.projectType}
              onChange={(e) => onFilterChange({ ...filters, projectType: e.target.value })}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black rounded-md"
            >
              <option value="">All Types</option>
              <option value="fixed">Fixed Price</option>
              <option value="hourly">Hourly Rate</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <div className="space-y-2">
              {skills.map((skill) => (
                <label key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience Level
            </label>
            <select
              value={filters.experienceLevel}
              onChange={(e) => onFilterChange({ ...filters, experienceLevel: e.target.value })}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black rounded-md"
            >
              <option value="">All Levels</option>
              <option value="entry">Entry Level</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};