import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import SideBar from './components/SideBar';

export default function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [userName, setUserName] = useState('Log In');
  const isLoggedIn = !!currentUser;
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
    if (isLoggedIn) {
      setUserName(`Welcome back ${currentUser.username}`);
    } else {
      setUserName('Log In');
    }
  }, [setCurrentUser, isLoggedIn]);

  return (
    <SideBar name={userName}>
      <SiteHeadingAndNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </SideBar>
  );
}
