import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import SiteHeadingAndNav from "./components/SiteHeadingAndNav";
import Page404 from "./pages/Page404";
import UserContext from "./contexts/current-user-context";
import { checkForLoggedInUser } from "./adapters/auth-adapter";
import UsersPage from "./pages/Users";
import UserDashBoard from "./pages/UserDashBoard";
import UserHome from "./pages/UserHome";
import Item from "./pages/Item";
import GroceryList from "./pages/GroceryList";

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
      <SiteHeadingAndNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDashBoard />} />
          <Route path="/users/search" element={<UserHome />} />
          <Route path="/product/:id" element={<Item />} />
          <Route path="/users/:id/grocerylist/:id" element={<GroceryList/>}/>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </>
  );
}
