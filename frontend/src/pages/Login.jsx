// import { React, useContext, useState } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
// import { logUserIn } from "../adapters/auth-adapter";
// import CurrentUserContext from "../contexts/current-user-context";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col, Card, FormGroup, Label, Input, Form, Button } from "reactstrap";


// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [errorText, setErrorText] = useState('');
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrorText('');
//     const formData = new FormData(event.target);
//     const [user, error] = await logUserIn(Object.fromEntries(formData.entries()));
//     if (error) return setErrorText(error.statusText);
//     setCurrentUser(user);
//     navigate(`/users/${user.id}`);
//   };

//   if (currentUser) return <Navigate to="/" />;

//   return <>
//     <div id="login-form" style={{
//       display:'flex',
//       justifyContent:"center",

//     }}>
//     <Card style={{
//       width:'350px',
//       display:'flex',
//       justifyContent:'center',
//       alignItems:'center',
//       backgroundColor:"black",
//       color:"white"
//     }}>
//     <h1>Log In</h1>
//     <Form id="create-form" onSubmit={ handleSubmit }>
//       <Row id="signup-row">
//         <Col md={9}>
//           <FormGroup>
//           <Label for="username">Username</Label>
//             <Input
//               id="username"
//               name="username"
//               type="text"
//               autoComplete="username"
//               bsSize="md"
//               placeHolder="Username"
//               style={{
//               }}
//             />
//           </FormGroup>
//           <FormGroup>
//           <Label for="password">Password</Label>
//             <Input
//               id='password'
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               bsSize="md"
//               placeHolder="Password"
//             />
//           </FormGroup>
//         </Col>
//       </Row>
//     </Form>
//       <Button size="lg" color="success">
//         Log In
//       </Button>
//     </Card>
//     </div>
//     { !!errorText && <p>{errorText}</p> }
//   </>;
// }






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

  return <>
    <h1>Login!</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" autoComplete="username" id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" autoComplete="current-password" id="password" name="password" />

      <button>Log in!</button>
    </form>
    { !!errorText && <p>{errorText}</p> }
  </>;
}

