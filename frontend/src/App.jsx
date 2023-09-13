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
import Test2 from './pages/Test2'
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

  
  // fetch('http://localhost:3000/authenticate', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(setCurrentUser)
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error('Sign-in failed');
  //     }
  //   })
  //   .then((userData) => {
  //     // Successfully signed in, handle the response here if needed
  //    // setCurrentUser(userData);
  //     // Perform any other actions you need after sign-in
  //   })
  //   .catch((error) => {
  //     // Handle errors here
  //     console.error('An error occurred during sign-in:', error);
  //   });

//   const signInData = {
//     username: 'unfortunatelyEve',
//     secret: 'unfortunatelyEve'
//   };

//   axios.post('http://localhost:3000/authenticate', signInData, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then((response) => {
//     if (response.status === 200) {
//       // Successfully signed in, handle the response here if needed
//       console.log('Sign-in successful');
//       // Perform any other actions you need after sign-in
//     } else {
//       // Handle other status codes or errors here
//       console.error('Sign-in failed');
//     }
//   })
//   .catch((error) => {
//     // Handle network or other errors here
//     console.error('An error occurred during sign-in:', error);
//   });
// };


  // return (
  //   <>
  //   {/* <SiteHeadingAndNav /> */}
  //   {/* <Use/> */}
  //   {/* <Use/> */}
  //   <Test2/>
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
        <Route path='test' element={<Test2 />} />
        <Route path='/Home' element={<Homee />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </main>
   </>
  )
}
