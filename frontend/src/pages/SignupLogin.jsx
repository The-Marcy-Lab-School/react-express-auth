import { NavLink } from "react-router-dom";



export default function SignUpLogin() {
  return <>
    <h1>Sign Up / Login</h1>
      <button><NavLink to='/login'>Login</NavLink></button>
      <button><NavLink to='/sign-up'>Sign Up</NavLink></button>
  </>;
}
