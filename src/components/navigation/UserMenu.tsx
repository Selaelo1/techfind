import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/hooks/useAuth';
import { useAuthStore } from '../../lib/store';
import { Bell, User, LogOut } from 'lucide-react';

export const UserMenu = () => {
  const { user } = useAuthStore();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);

  if (!user) {
    return (
      <div className="flex items-center space-x-4">
        <Link to="/login" className="hover:bg-gray-800 px-3 py-2 rounded-md">Login</Link>
        <Link to="/register" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
          Join Now
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <button className="text-white hover:bg-gray-800 p-2 rounded-full relative">
        <Bell className="h-5 w-5" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-black" />
      </button>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-white hover:bg-gray-800 px-3 py-2 rounded-md"
        >
          <User className="h-5 w-5" />
          <span>{user.name}</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile Settings
            </Link>
            {user.role === 'freelancer' && (
              <Link
                to="/portfolio"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Portfolio
              </Link>
            )}
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};