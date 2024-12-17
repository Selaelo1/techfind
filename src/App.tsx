import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './lib/hooks/useAuth';
import { AppProviders } from './components/providers/AppProviders';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import ProfileReviews from './pages/admin/ProfileReviews';
import CreateProfile from './pages/CreateProfile';
import PostProject from './pages/projects/PostProject';
import ProjectDetails from './pages/projects/ProjectDetails';

function App() {
  const { loadUser } = useAuth();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <AppProviders>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/profiles"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <ProfileReviews />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/create-profile"
                element={
                  <ProtectedRoute allowedRoles={['freelancer']}>
                    <CreateProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/post-project"
                element={
                  <ProtectedRoute allowedRoles={['client']}>
                    <PostProject />
                  </ProtectedRoute>
                }
              />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProviders>
  );
}

export default App;