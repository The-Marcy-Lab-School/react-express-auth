import { useContext, useEffect } from 'react';
//import { Routes, Route } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
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
import SelectLanguages from './pages/SelectLanguage';
// import QuizTestPage from './pages/QuizTestPage';
//import QuizContextProvider from './pages/SelectLanguage.jsx';
export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  // return (
  //   <>
  //   <SiteHeadingAndNav />
  //   {/* <Use/> */}
  //   <Use/>
  //   </>
  // )
  return (<>
    <SiteHeadingAndNav />
    {/* <QuizContextProvider/> */}
    {/* <SelectLanguages/> */}
  
    <main>
      <Routes>
      {/* <QuizLessonPage/> */}
        <Route path='/' element={<SelectLanguages />} />
        <Route path='/lessons' element={<QuizLessonPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        {/* <Route path='/users' element={<Use />} /> */}
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>);
}
