import React from 'react';
import { useAuthStore } from '../lib/store';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome, {user?.name}</h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">Your dashboard is being set up...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;