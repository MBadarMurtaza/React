import React from "react";
import { NavLink } from "react-router-dom";
import { useUsers } from "../context/userContext";

function Navbar() {
  const { logout } = useUsers();
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="flex justify-center gap-8">
        <NavLink
          onClick={logout}
          to="/"
          className={({ isActive }) =>
            `text-lg font-semibold transition duration-200 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 underline" : "text-white"
            }`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `text-lg font-semibold transition duration-200 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 underline" : "text-white"
            }`
          }
        >
          User
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `text-lg font-semibold transition duration-200 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 underline" : "text-white"
            }`
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
