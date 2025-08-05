import React, { useEffect } from "react";
import { useUsers } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const { currentUser, logout } = useUsers();
  const navigator = useNavigate();

  const callLogout = () => {
    logout();
    navigator("/");
  };
  if (currentUser === null) {
    return <p className="text-center mt-10">No user logged in.</p>;
  } else {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome, {currentUser.name}!
        </h1>

        <div className="mb-4">
          <p className="text-lg">
            <strong>Role:</strong> {currentUser.role}
          </p>
          <p className="text-lg">
            <strong>Password:</strong> {currentUser.password}
          </p>
        </div>

        <button
          onClick={callLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    );
  }
};

export default UserDetail;
