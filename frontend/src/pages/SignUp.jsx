import { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import './loginSignUp.css';
// Controlling the signup form is a good idea because we want to adde (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/" />;


console.log("current user",currentUser)

//console.log("Setcurrent user",setCurrentUser.username)



const handleSignUp = async (event) => {
  event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ username, password });
    if (error) return setErrorText(error.statusText);
    
    // console.log("im a user", user.username)
    const messageSignUp = async () => {
      try {
        const response = await fetch('http://localhost:3000/s', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"username": `${user.username}`, "secret": `${user.username}`}),
        });
    
        if (response.ok) {
          const data = await response.json();
          // Assuming data contains the score count, update the state
         // setScoreCount(data.scoreCount);
        } else {
          console.error('Failed to fetch quiz score');
        }
      } catch (error) {
        console.error('An error occurred while fetching quiz score:', error);
      }
    };
    messageSignUp();
    // useEffect(() => {
    //   // Call the fetchQuizScore function when the component mounts
    //   messageSignUp();
    // }, []);


    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return <>
   <div className="flex min-h-screen items-center justify-center p-12" style={{ backgroundImage:`url('https://cdn.dribbble.com/users/1273747/screenshots/4666662/final.gif')`, backgroundSize: "cover" , backgroundRepeat: 'no-repeat', alignItems: 'center', justifyContent: 'center' }}>
   <div className="container" style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
   <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900 card" style={{  width: '350px', backgroundColor: 'white', borderRadius: '15px', padding: '40px', backdropFilter: 'blur(10px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'}}>
    <form style={{display: 'flex', flexDirection: 'column', border: 'none'}} onSubmit={handleSignUp} onChange={handleChange}>
    <h1 className="text-xl font-semibold text-gray-800 dark:text-white" style={{ textAlign: 'center', color: 'black', marginBottom: '20px'}}>Sign Up</h1>
      <label style={{color: 'black'}} htmlFor="username">Create Username</label>
      <input
        autoComplete="off"
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={username}
        placeholder="Enter your username" 
      />

      <label style={{color: 'black'}} htmlFor="password">Create Password</label>
      <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
        placeholder="Enter your password" 
      />

      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}
      <br/>
      <button className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white sign">Sign Up Now!</button>
      <div>
        <br/>
    <p>Already have an account with us? <Link to="/login" className="sign">Log in!</Link></p>
    </div>
    </form>
    </div>
  </div>
</div>
    { !!errorText && <p>{errorText}</p> }
  </>;
}
