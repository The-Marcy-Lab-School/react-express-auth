import { React, useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FormGroup, Label, Input, Form, Button } from "reactstrap";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ username, password });
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return <>
    <h1>Sign Up</h1>
    <Form id="sign-up-form" onSubmit={handleSubmit} onChange={handleChange}>
    <Row>
      <Col>
        <FormGroup>
          <Label htmlFor="username">
            Username
          </Label>
          <Input
            id="username"
            name="email"
            placeholder="Username"
            type="text"
            autoComplete="username"
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="off"
          onChange={handleChange}
          value={password}
          />
        </FormGroup>
      </Col>
    </Row>
    <Button>
      Sign Up
    </Button>
  </Form>
    { !!errorText && <p>{errorText}</p> }
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
    </>;
  }
  
  {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
    <label htmlFor="password-confirm">Password Confirm</label>
    <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
  */}
