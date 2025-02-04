import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store';

export const useRedirect = () => {
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      switch (user.role) {
        case 'freelancer':
          navigate('/dashboard');
          break;
        case 'client':
          navigate('/dashboard');
          break;
        case 'admin':
          navigate('/admin');
          break;
      }
    }
  }, [isAuthenticated, user, navigate]);
};