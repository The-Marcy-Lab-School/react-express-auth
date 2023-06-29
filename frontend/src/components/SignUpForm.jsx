import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../events.css'
import { Row, Col, Card, FormGroup, Label, Input, Form, Button } from "reactstrap";

export default function SignUpForm(){
    return <>
    <div id="signup-form">

    <Card>
      <Form id="sign-up-form">
        <Row>
          <Col md={6}>
          <FormGroup>
                  <Label for="username">
                  First Name
                  </Label>
                  <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="First Name"
                  type="email"
                  />
          </FormGroup>
          <FormGroup>
                  <Label for="username">
                  Last Name
                  </Label>
                  <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Last Name"
                  type="email"
                  />
          </FormGroup>
          </Col>
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
                autoComplete="current-password"
              />
            </FormGroup>   
          </Col>
        </Row>
        <Button>
          Sign Up
        </Button>
      </Form>
    </Card>
    </div>
    </>
}