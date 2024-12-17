import { useCallback } from 'react';
import { useAuthStore } from '../store';
import { authApi } from '../api/auth';

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, setUser, setLoading } = useAuthStore();

  const login = useCallback(async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await authApi.login({ email, password });
      setUser(user);
      return user;
    } catch (error) {
      setUser(null);
      throw error;
    }
  }, [setUser, setLoading]);

  const register = useCallback(async (name: string, email: string, password: string, role: 'freelancer' | 'client') => {
    try {
      setLoading(true);
      const { user } = await authApi.register({ name, email, password, role });
      setUser(user);
      return user;
    } catch (error) {
      setUser(null);
      throw error;
    }
  }, [setUser, setLoading]);

  const logout = useCallback(() => {
    authApi.logout();
    setUser(null);
  }, [setUser]);

  const loadUser = useCallback(async () => {
    try {
      setLoading(true);
      const user = await authApi.getCurrentUser();
      setUser(user);
    } catch (error) {
      setUser(null);
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