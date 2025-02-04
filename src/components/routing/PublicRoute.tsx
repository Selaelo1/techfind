import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../lib/store';

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user) {
    switch (user.role) {
      case 'freelancer':
        return <Navigate to="/dashboard" replace />;
      case 'client':
        return <Navigate to="/dashboard" replace />;
      case 'admin':
        return <Navigate to="/admin" replace />;
      default:
        return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};