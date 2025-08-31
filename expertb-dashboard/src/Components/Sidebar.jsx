import { NavLink, useNavigate } from "react-router-dom";
import { FaPlusCircle, FaUsers, FaSignOutAlt } from "react-icons/fa";
import logo from "./assets/expertb-logo.png"; // ✅ Ensure this path is correct

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-screen w-64 bg-white text-red-600 border-r border-red-200 flex flex-col shadow-sm fixed">
      {/* Logo */}
      <div className="flex items-center justify-center py-6 border-b border-red-100">
        <img
          src={logo}
          alt="ExpertB Logo"
          className="h-[12vh] max-h-[100px] w-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink
          to="/dashboard/add-student"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
              isActive ? "bg-red-100 font-semibold" : "hover:bg-red-100"
            }`
          }
        >
          <FaPlusCircle />
          <span className="text-sm">Add Student</span>
        </NavLink>

        <NavLink
          to="/dashboard/students"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
              isActive ? "bg-red-100 font-semibold" : "hover:bg-red-100"
            }`
          }
        >
          <FaUsers />
          <span className="text-sm">View Students</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="px-4 mb-6">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          <FaSignOutAlt />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
