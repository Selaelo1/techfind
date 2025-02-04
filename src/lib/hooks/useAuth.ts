import { useCallback } from 'react';
import { useAuthStore } from '../store';
import { authApi } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, setUser, setLoading } = useAuthStore();
  const navigate = useNavigate();

  const login = useCallback(async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await authApi.login({ email, password });
      setUser(user);
      
      // Redirect based on role and onboarding status
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'client' && !user.onboardingCompleted) {
        navigate('/employer-onboarding');
      } else {
        navigate('/dashboard');
      }
      
      return user;
    } catch (error) {
      setUser(null);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setUser, setLoading, navigate]);

  const register = useCallback(async (name: string, email: string, password: string, role: 'freelancer' | 'client') => {
    try {
      setLoading(true);
      const { user } = await authApi.register({ name, email, password, role });
      setUser(user);
      
      // Redirect based on role
      if (role === 'freelancer') {
        navigate('/create-profile');
      } else {
        navigate('/employer-onboarding');
      }
      
      return user;
    } catch (error) {
      setUser(null);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setUser, setLoading, navigate]);

  const logout = useCallback(() => {
    authApi.logout();
    setUser(null);
    navigate('/login');
  }, [setUser, navigate]);

  const loadUser = useCallback(async () => {
    try {
      setLoading(true);
      const user = await authApi.getCurrentUser();
      setUser(user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [setUser, setLoading]);

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    loadUser,
  };
};