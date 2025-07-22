import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import UsersPage from './pages/Users';
import UserPage from './pages/User';

// Component imports
import SiteHeadingAndNav from './components/SiteHeadingAndNav';

// Context and adapter imports
import UserContext from './contexts/current-user-context.js';
import { checkForLoggedInUser } from './adapters/auth-adapter';

// Route configuration
const ROUTES = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/users', element: <UsersPage /> },
  { path: '/users/:id', element: <UserPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  
  // Load current user on app initialization
  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        const [data] = await checkForLoggedInUser();
        if (data) {
          setCurrentUser(data);
        }
      } catch (error) {
        console.error('Error loading current user:', error);
      }
    };
    
    loadCurrentUser();
  }, [setCurrentUser]);

  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Accessibility: Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Navigation */}
      <SiteHeadingAndNav />
      
      {/* Main Content Area */}
      <main 
        id="main-content" 
        className="h-[calc(100vh-80px)] pt-20 overflow-hidden"
      >
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}
