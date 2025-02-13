import { Link } from "react-router-dom";
import { useAuthStore } from "../../lib/store";

export const NavLinks = () => {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <>
        <Link to="/browse" className="hover:bg-gray-800 px-3 py-2 rounded-md">
          Browse Jobs
        </Link>
        <Link to="/talents" className="hover:bg-gray-800 px-3 py-2 rounded-md">
          Find Talent
        </Link>
        <Link to="/network" className="hover:bg-gray-800 px-3 py-2 rounded-md">
          Network
        </Link>
      </>
    );
  }

  if (user.role === "admin") {
    return (
      <>
        <Link to="/admin" className="hover:bg-gray-800 px-3 py-2 rounded-md">
          Dashboard
        </Link>
        <Link
          to="/admin/profiles"
          className="hover:bg-gray-800 px-3 py-2 rounded-md"
        >
          Profile Reviews
        </Link>
        <Link
          to="/admin/projects"
          className="hover:bg-gray-800 px-3 py-2 rounded-md"
        >
          Projects
        </Link>
      </>
    );
  }

  if (user.role === "client") {
    return (
      <>
        <Link
          to="/dashboard"
          className="hover:bg-gray-800 px-3 py-2 rounded-md"
        >
          Dashboard
        </Link>
        <Link to="/talents" className="hover:bg-gray-800 px-3 py-2 rounded-md">
          Find Talent
        </Link>
        <Link
          to="/my-projects"
          className="hover:bg-gray-800 px-3 py-2 rounded-md"
        >
          My Projects
        </Link>
        <Link
          to="/post-project"
          className="hover:bg-gray-800 px-3 py-2 rounded-md"
        >
          Post a Project
        </Link>
      </>
    );
  }

  return (
    <>
      <Link to="/dashboard" className="hover:bg-gray-800 px-3 py-2 rounded-md">
        Dashboard
      </Link>
      <Link to="/browse" className="hover:bg-gray-800 px-3 py-2 rounded-md">
        Browse Jobs
      </Link>
      <Link to="/my-bids" className="hover:bg-gray-800 px-3 py-2 rounded-md">
        My Bids
      </Link>
      <Link to="/network" className="hover:bg-gray-800 px-3 py-2 rounded-md">
        Network
      </Link>
    </>
  );
};
