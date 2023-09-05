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
import Homee from './pages/Home'
import Use from './pages/Components/CustomMessageForm/Ai';
import QuizLessonPage from './pages/QuizLesson';
//import SelectLanguages from './pages/SelectLanguage';
//import TestPage from './pages/Test';
// import Quiz from './pages//QuizTestPage';
// import MessagePage from './pages/MessagePage'
//import Video from './pages/Components/chats/Index'
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
  return (
  <>
{/* <Video/> */}
  <Use/>
   </>
  )
}
