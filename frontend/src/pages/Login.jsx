import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  // users shouldn't be able to see the login page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to 
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData));
    if (error) {
      return setErrorText(error.cause === 404 ? 'User Not Found' : 'Incorrect Password. Try Again.');
    }
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  return <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit} aria-labelledby="login-heading">
      <h2 id='login-heading'>Log back in!</h2>
      <label htmlFor="username">Username</label>
      <input type="text" autoComplete="username" id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" autoComplete="current-password" id="password" name="password" />

      <button>Log in!</button>
    </form>
    {!!errorText && <p>{errorText}</p>}
    <p>Don't have an account yet? <Link to="/sign-up">Sign Up!</Link></p>
  </>;
}
