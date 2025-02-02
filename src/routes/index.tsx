import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// Page imports
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import CreateProfile from '../pages/CreateProfile';
import BrowseJobs from '../pages/jobs/BrowseJobs';
import PostProject from '../pages/projects/PostProject';
import ProjectDetails from '../pages/projects/ProjectDetails';
import AdminDashboard from '../pages/admin/Dashboard';
import ProfileReviews from '../pages/admin/ProfileReviews';
import EmployerOnboarding from '../pages/onboarding/EmployerOnboarding';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/employer-onboarding"
        element={
          <PrivateRoute allowedRoles={['client']}>
            <EmployerOnboarding />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-profile"
        element={
          <PrivateRoute allowedRoles={['freelancer']}>
            <CreateProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/browse"
        element={
          <PrivateRoute allowedRoles={['freelancer']}>
            <BrowseJobs />
          </PrivateRoute>
        }
      />
      <Route
        path="/post-project"
        element={
          <PrivateRoute allowedRoles={['client']}>
            <PostProject />
          </PrivateRoute>
        }
      />
      <Route
        path="/projects/:id"
        element={
          <PrivateRoute>
            <ProjectDetails />
          </PrivateRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/profiles"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <ProfileReviews />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};