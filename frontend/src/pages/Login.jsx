import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
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
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <div id="login-component">
        <div id="login-content">
          <div id="login-text">
            <h1>Log In to your account!</h1>
          </div>
          <form id="loginform" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username" className="label">
                Username
              </label>
              <div className="control">
                <input
                  type="text"
                  autoComplete="username"
                  id="username"
                  name="username"
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control">
                <input
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <div id="login-button" className="control">
                <button type="submit" className="button is-link log_in">
                  Log in!
                </button>
              </div>
            </div>
          </form>
        </div>
        {!!errorText && <p>{errorText}</p>}
      </div>
    </>
  );
}
