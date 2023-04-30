import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './signup.css';

function Signup() {
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
      .post('http://localhost:8020/user/signup', newUser)
      .then(() => {
        alert('Registered successfully!!!');
        window.location.href = '#';
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="loginpg">
      <Form className="loginForm" id="loginForm">
        <h1 className="text-center">
          <span className="font-weight-bolf">Signup</span>
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
          Signup
        </Button>
        <div className="text-center pt-3"></div>
        <div className="text-center">
          <a href="/login">Login</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
