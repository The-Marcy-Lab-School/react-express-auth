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
import AI from './pages/Components/CustomMessageForm/Ai';
//import QuizLessonPage from './pages/QuizLesson';
//import SelectLanguages from './pages/SelectLanguage';
//import TestPage from './pages/Test';
// import Quiz from './pages//QuizTestPage';
//import MessagePage from './pages/Components/chats/Index'
import QuizTestPage from './pages/QuizTestPage';
import QuizLesson from './pages/QuizLesson';
import SearchDiscussions from './pages/Discussion'
import SelectLanguage from './pages/SelectLanguage';
import Test from './pages/Test';
import CommentsPage from './pages/CommentsPage'
import Message from "./pages/Components/chats/Index"
export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  console.log("curent context", setCurrentUser)
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  // return (
  //   <>
  //   {/* <SiteHeadingAndNav /> */}
  //   {/* <Use/> */}
  //   {/* <Use/> */}
  //   <LoginPage/>
  //   </>
  // )
  return (
  <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<CommentsPage/>} />
        <Route path='/lessons' element={<QuizLesson />} />
        <Route path='/quiz' element={<QuizTestPage />} />
        <Route path='test' element={<Test />} />
        <Route path='/Home' element={<Homee />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </main>
   </>
  )
}
