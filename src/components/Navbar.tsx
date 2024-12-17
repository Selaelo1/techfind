import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { NavLinks } from './navigation/NavLinks';
import { UserMenu } from './navigation/UserMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8" />
              <span className="font-bold text-xl">TechFind</span>
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLinks />
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <UserMenu />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <UserMenu />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;