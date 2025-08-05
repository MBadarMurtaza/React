import React, { useState } from "react";
import { useUsers } from "../context/userContext";

const Users = () => {
  const { users } = useUsers();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-3 border rounded cursor-pointer hover:bg-blue-100"
          >
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
