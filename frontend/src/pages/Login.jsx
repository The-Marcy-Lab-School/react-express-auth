import { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(
      Object.fromEntries(formData.entries())
    );
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <div className="backImg">
        <div className="login-page">
          <h1 className="form-title">Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="username-label">
              Username
            </label>
            <input
              type="text"
              autoComplete="username"
              id="username"
              name="username"
            />

            <label htmlFor="password" className="password-label">
              Password
            </label>
            <input
              type="password"
              autoComplete="current-password"
              id="password"
              name="password"
            />

            <button>Log in!</button>
          </form>
          {!!errorText && <p>{errorText}</p>}
          <p className="form-redirect">
            Don't have an account?{" "}
            <Link to="/sign-up" className="form-redirect-link">
              Sign up!
            </Link>
          </p>
        </div>
      </div>
      <div>
        <div id="signInMap"></div>
        <button id="btn-spin">Pause rotation</button>
      </div>
    </>
  );
}
