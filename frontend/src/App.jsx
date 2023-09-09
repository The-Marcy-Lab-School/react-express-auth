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
import QuizLessonPage from './pages/QuizLesson'
import Use from './pages/QuizTestPage'
import QuizTestPage from './pages/QuizTestPage';
import SelectedlanguagePage from './pages/SelectLanguage'
import AI from './pages/Components/CustomMessageForm/Ai'
import Message from './pages/Components/chats/Index'
export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  // return (
  //   <>
  //   < Home />
  //   </>
  // )
  return <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/quiz' element={<QuizTestPage />} />
        <Route path='/quiz-lesson' element={<QuizLessonPage />} />
        <Route path='/selected-language' element={<SelectedlanguagePage />} />
        <Route path='/quiz-lesson' element={<QuizLessonPage />} />
        <Route path='/ai' element={<AI/>} />
        <Route path='/message' element={<Message/>} />
      </Routes>
    </main>
  </>;
}
