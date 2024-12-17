import React from 'react';
import { useAuthStore } from '../lib/store';
import { Navigate } from 'react-router-dom';
import ClientDashboard from '../components/dashboard/ClientDashboard';
import FreelancerDashboard from '../components/dashboard/FreelancerDashboard';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black pb-32">
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome back, {user?.name}
            </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        {user?.role === 'client' ? <ClientDashboard /> : <FreelancerDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;