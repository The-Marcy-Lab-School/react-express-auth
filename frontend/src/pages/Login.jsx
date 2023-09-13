import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
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
   navigate('/signup');
  };



  if (currentUser) return <Navigate to="/" />;

  return (
    <div id ="ccontainer">
  <div className="bodyContainer">
  <div className="container">
  <div className="card">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" autoComplete="username" id="username" name="username" placeholder="Enter your username" />

      <label htmlFor="password">Password</label>
      <input type="password" autoComplete="current-password" id="password" name="password" placeholder="Enter your password" />

      <button>Log in!</button>



       <div>
      {/* Your other content */}
    </div>


    </form>
    { !!errorText && <p>{errorText}</p> }
    </div>
    </div>
  </div>
      <p onClick={() => handleButtonClick()}>
        Don't have an account? <span className="sign">Sign Up</span>
      </p>
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
