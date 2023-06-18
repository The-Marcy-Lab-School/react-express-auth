import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData.entries()));
    if (error) return setErrorText('User not found');
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  // return <>
  //   <h1>Login</h1>
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="username">Username</label>
  //     <input type="text" autoComplete="username" id="username" name="username" />

  //     <label htmlFor="password">Password</label>
  //     <input type="password" autoComplete="current-password" id="password" name="password" />

  //     <button>Log in!</button>
  //   </form>
  //   { !!errorText && <p>{errorText}</p> }
  // </>;
  return (
    <div id="logInContainer">
      <div id='logInBox'>
        <form onSubmit={handleSubmit} id="logInForm">
          <h1 className="title">Log In</h1>
          <div id='errorTextDiv'>
            <label className="is-size-5" htmlFor='username'>Username</label>
            {!!errorText && <p className="has-text-danger">{errorText}</p>}
          </div>
          <input type="text" className='input is-medium' placeholder="Username" id='username' name='username'></input>
          <label className="is-size-5" htmlFor='password'>Password</label>
          <input type="password" className='input is-medium' id='password' name='password' placeholder="Password"></input>
          <button type='submit' className="button logInButton mb-3 is-rounded">Log In</button>
          <Link to='/sign-up'>
            <p className="has-text-centered has-text-black" id='clickToSignUp'>Don't have an account? Click here to sign up</p>
          </Link>
        </form>
      </div>
    </div>
  )
}
