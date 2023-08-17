import { useContext, useEffect } from 'react';
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
import QuizLessonPage from './pages/QuizLesson';
// import Use from './pages/Test'
 import QuizTestPage from './pages/QuizTestPage';
export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
    {/* <SiteHeadingAndNav /> */}
    {/* <Use/> */}
    <QuizTestPage/>
    </>
  )
  // return <>
  //   <SiteHeadingAndNav />
  //   <main>
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/login' element={<LoginPage />} />
  //       <Route path='/sign-up' element={<SignUpPage />} />
  //       <Route path='/users' element={<UsersPage />} />
  //       <Route path='/users/:id' element={<UserPage />} />
  //       <Route path='*' element={<NotFoundPage />} />
  //     </Routes>
  //   </main>
  // </>;
}
