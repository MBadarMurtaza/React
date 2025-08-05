import React, { use, useState } from "react";
import { useUsers } from "../context/userContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const { login } = useUsers();
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    if (!username || !password || !role) {
      alert("Kindly fill full form to login");
    } else {
      const user = {
        id: nanoid(),
        name: username,
        password: password,
        role: role,
      };
      login(user);
      navigate("/user");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={loginUser}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setusername(e.target.value)}
          value={username}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value={"Administrator"}
              checked={role === "Administrator"}
              onChange={(e) => setrole(e.target.value)}
              className="accent-blue-600"
            />
            Administrator
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value={"User"}
              checked={role === "User"}
              onChange={(e) => setrole(e.target.value)}
              className="accent-blue-600"
            />
            User
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
