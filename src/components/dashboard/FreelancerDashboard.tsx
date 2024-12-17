import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, DollarSign, Star, Clock } from 'lucide-react';

const FreelancerDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Briefcase className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Active Projects</h3>
              <p className="text-3xl font-bold">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <DollarSign className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Earnings</h3>
              <p className="text-3xl font-bold">$2,450</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Star className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Rating</h3>
              <p className="text-3xl font-bold">4.9</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Clock className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Hours</h3>
              <p className="text-3xl font-bold">124</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Available Projects</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((project) => (
                <div key={project} className="border-b pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Mobile App Development</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Posted 3 hours ago • Budget: $2,000 - $3,000
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          React Native
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Firebase
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/projects/${project}`}
                      className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((activity) => (
                <div key={activity} className="flex items-start">
                  <div className="h-2 w-2 bg-black rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm">Your bid was accepted for Project X</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;