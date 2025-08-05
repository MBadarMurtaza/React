import { useEffect, useState } from "react";
import { Login, Users, UserDetail } from "./components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./layout";
import { UserProvider } from "./context/userContext";
function App() {
  const [currentUser, setcurrentUser] = useState(null);
  const [users, setusers] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Login />} />
        <Route path="user" element={<UserDetail />} />
        <Route path="users" element={<Users />} />
      </Route>
    )
  );

  useEffect(() => {
    const userArray = JSON.parse(localStorage.getItem("users"));
    if (userArray && userArray.length > 0) {
      setusers(userArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const login = (user) => {
    setcurrentUser(user);
    setusers((prev) => [user, ...prev]);
  };
  const logout = () => {
    setcurrentUser(null);
  };
  return (
    <UserProvider value={{ users, currentUser, login, logout }}>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
