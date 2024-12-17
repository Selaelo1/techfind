import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Bell, Settings } from 'lucide-react';

const ClientDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Briefcase className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Active Projects</h3>
              <p className="text-3xl font-bold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Total Bids</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Bell className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <p className="text-3xl font-bold">5</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Settings className="h-10 w-10 text-black" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Settings</h3>
              <Link to="/settings" className="text-sm text-gray-500 hover:text-black">
                Manage
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Projects</h2>
              <Link
                to="/post-project"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900"
              >
                Post New Project
              </Link>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((project) => (
                <div key={project} className="border-b pb-4">
                  <h3 className="font-medium">E-commerce Platform Development</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Posted 2 days ago • 5 bids
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      Node.js
                    </span>
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
                    <p className="text-sm">New bid received on Project Name</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
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

export default ClientDashboard;