import React from "react";
import { Link } from "react-router-dom";
import { JobFilters } from "../../lib/types";
import { Calendar, DollarSign, Clock } from "lucide-react";

interface JobCardProps {
  job: JobFilters;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            <Link to={`/projects/${job.id}`} className="hover:text-gray-600">
              {job.title}
            </Link>
          </h2>
          <p className="mt-2 text-gray-600 line-clamp-2">{job.description}</p>
        </div>
        <Link
          to={`/projects/${job.id}`}
          className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900"
        >
          View Details
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1" />${job.budget.min} - $
          {job.budget.max}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          Posted {new Date(job.createdAt).toLocaleDateString()}
        </div>
        {job.deadline && (
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Due {new Date(job.deadline).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
};
