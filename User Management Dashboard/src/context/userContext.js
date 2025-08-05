import { createContext, useContext, useState } from "react";
export const userContext = createContext({
  users: [
    {
      id: 1,
      name: "Ahmad",
      password: "abcd1234",
      role: "Administator",
    },
  ],
  currentUser: null,
  login: (user) => {},
  logout: (id) => {},
});

export const UserProvider = userContext.Provider;
export const useUsers = () => useContext(userContext);
