import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import './loginSignUp.css';
export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData.entries()));
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  const handleButtonClick = () => {
    console.log("login")
   navigate('/sign-up');
  };



  if (currentUser) return <Navigate to="/" />;

  return (
   <div className="flex min-h-screen items-center justify-center p-12" style={{ backgroundImage:`url('https://cdn.dribbble.com/users/1273747/screenshots/4666662/final.gif')`, backgroundSize: "cover" , backgroundRepeat: 'no-repeat', alignItems: 'center', justifyContent: 'center' }}>
  <div className="container" style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
  <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900 card" style={{  width: '350px', backgroundColor: 'white', borderRadius: '15px', padding: '40px', backdropFilter: 'blur(10px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'}}>
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', border: 'none'}}>
    <h1 className="text-xl font-semibold text-gray-800 dark:text-white" style={{ textAlign: 'center', color: 'black', marginBottom: '20px'}}>Login</h1>
      <label htmlFor="username" style={{color: 'black'}}>Username</label>
      <input  type="text" autoComplete="username" id="username" name="username" placeholder="Enter your username" />

      <label htmlFor="password" style={{color: 'black'}}>Password</label>

      <input type="password" autoComplete="current-password" id="password" name="password" placeholder="Enter your password" />
      <br/>
      <button className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">Log in!</button>



       <div>
      {/* Your other content */}
    </div>


    </form>
      <div>
      <p className="text-sm tracking-wide text-gray-600 dark:text-gray-500" onClick={() => handleButtonClick()}>
        Don't have an account ? <Link to="/sign-up">Sign Up! </Link>
      </p>
      </div>
    { !!errorText && <p>{errorText}</p> }
    </div>
  </div>
  </div>

  )
}
// import React from 'react';
// import './loginSignUp.css';

// function LoginPage() {
//   return (
//     <div className="container">
//     <div className="card">
//       <h2>Login Form</h2>
//       <form>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" placeholder="Enter your username" />

//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" placeholder="Enter your password" />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   </div>
//   );
// }

// export default LoginPage;
