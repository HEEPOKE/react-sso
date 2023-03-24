import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  FormCheck,
} from "react-bootstrap";

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Implement your login logic here
    console.log(formData);
  };

  const signInWithGoogle = () => {
    // Implement your sign in with Google logic here
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormCheck
            name="rememberMe"
            type="checkbox"
            label="Remember me"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="link" onClick={handleForgotPassword}>
          Forgot password?
        </Button>
      </Form>
      <hr />
      <Button variant="outline-primary" onClick={signInWithGoogle}>
        Login with Google
      </Button>
    </div>
  );
}
