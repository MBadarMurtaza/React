import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import UsercContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UsercContextProvider>
      <h1>Badar and React</h1>
      <Login />
      <Profile />
    </UsercContextProvider>
  );
}

export default App;
