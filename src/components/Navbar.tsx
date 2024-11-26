import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8" />
              <span className="font-bold text-xl">TechFind</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/browse" className="hover:bg-gray-800 px-3 py-2 rounded-md">Browse Jobs</Link>
              <Link to="/talents" className="hover:bg-gray-800 px-3 py-2 rounded-md">Find Talent</Link>
              <Link to="/network" className="hover:bg-gray-800 px-3 py-2 rounded-md">Network</Link>
              <Link to="/login" className="hover:bg-gray-800 px-3 py-2 rounded-md">Login</Link>
              <Link to="/register" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                Join Now
              </Link>
            </div>
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
            <Link to="/browse" className="block hover:bg-gray-800 px-3 py-2 rounded-md">Browse Jobs</Link>
            <Link to="/talents" className="block hover:bg-gray-800 px-3 py-2 rounded-md">Find Talent</Link>
            <Link to="/network" className="block hover:bg-gray-800 px-3 py-2 rounded-md">Network</Link>
            <Link to="/login" className="block hover:bg-gray-800 px-3 py-2 rounded-md">Login</Link>
            <Link to="/register" className="block bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;