import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import SiteHeadingAndNav from "./components/SiteHeadingAndNav";
import Disaster from "./pages/Disaster";
import NotFoundPage from "./pages/NotFound";
import UserContext from "./contexts/current-user-context";
import { checkForLoggedInUser } from "./adapters/auth-adapter";
import UsersPage from "./pages/Users";
import UserPage from "./pages/User";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <SiteHeadingAndNav />
                <Home />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <SiteHeadingAndNav />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <SiteHeadingAndNav />
                <LoginPage />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <SiteHeadingAndNav />
                <SignUpPage />
              </>
            }
          />
          <Route
            path="/users"
            element={
              <>
                {" "}
                <SiteHeadingAndNav />
                <UsersPage />
              </>
            }
          />
          <Route
            path="/users/:id"
            element={
              <>
                {" "}
                <SiteHeadingAndNav />
                <UserPage />
              </>
            }
          />
          <Route
            path="/disaster"
            element={
              <>
                <SiteHeadingAndNav />
                <Disaster />
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
