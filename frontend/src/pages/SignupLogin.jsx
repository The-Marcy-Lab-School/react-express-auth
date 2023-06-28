import { NavLink } from "react-router-dom";



export default function SignUpLogin() {
  return (
    <div className="signuplogincomponent">
      <div className="welcome">
        <h1 className="welcome-text" style={{ fontSize: '50px', fontWeight: 'bold' }}>
         <em> Welcome to CareCompanion!</em>
        </h1>
      </div>
      <div class="signuplogindiv">
        <form class="box" id="sign_box">
          <h1 class="title is-4 instructions">
            Please Sign In or Create an Account
          </h1>
          <div class="button-container">
            <div class="button-field">
              <div class="control">
                <NavLink to="/login">
                  <button class="button loginout-button">
                    Login
                  </button>
                </NavLink>
              </div>
            </div>
            <div class="button-field">
              <div class="control">
                <NavLink to="/sign-up">
                  <button class="button loginout-button">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
