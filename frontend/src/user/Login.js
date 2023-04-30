import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const EmailSetter = (e) => {
    setEmail(e.target.value);
  };

  const PasswordSetter = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password
    };

    axios
      .post('http://localhost:8020/user/logins', newUser)
      .then((res) => {
        alert('Login Successfully!!!');
        window.location.href = '/signup';
      })
      .catch((err) => {
        alert('Enter valid details...');
      });
  };

  return (
    <div className="loginpg">
      <Form className="loginForm" id="loginForm">
        <h1 className="text-center">
          <span className="font-weight-bolf">Login</span>
        </h1>
        <h2 className="text-center">
          <span className="tittle">HerbalMed</span>
        </h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" required onChange={EmailSetter} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" required onChange={PasswordSetter} />
        </FormGroup>
        <Button className="logbtn" type="submit" onClick={onSubmit}>
          Login
        </Button>
        <div className="text-center pt-3"></div>
        <div className="text-center">
          <a href="/signup">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    </div>
  );
}

export default Login;
