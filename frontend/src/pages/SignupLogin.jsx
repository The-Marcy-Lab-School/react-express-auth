import { NavLink } from "react-router-dom";

export default function SignUpLogin() {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-6">
          <div className="box is-square">
            <h1>Sign Up / Login</h1>
            <div className="buttons is-centered">
              <button className="button is-light">
                <NavLink to="/login">Login</NavLink>
              </button>
              <button className="button is-light">
                <NavLink to="/sign-up">Sign Up</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
