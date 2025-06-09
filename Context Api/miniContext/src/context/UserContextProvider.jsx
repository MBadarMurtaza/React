import React, { useState } from "react";
import UserContext from "./useContext";
const UsercContextProvider = ({ children }) => {
    const [user,setUser]=useState(null);
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    </>
  );
};

export default UsercContextProvider;
