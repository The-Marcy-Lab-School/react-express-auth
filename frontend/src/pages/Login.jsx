import { React, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FormGroup, Label, Input, Form, Button } from "reactstrap";


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
    <h1>Login</h1>
    <Form id="create-form" onSubmit={ handleSubmit }>
      <Row>
        <Col>
          <FormGroup>
            <Label for="username">
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
            <Label for="password">
              Password
            </Label>
            <Input
              id='password'
              name="password"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
            />
          </FormGroup>
        </Col>
      </Row>
      <Button>
        Log in
      </Button>
    </Form>
    { !!errorText && <p>{errorText}</p> }
  </>;
}
