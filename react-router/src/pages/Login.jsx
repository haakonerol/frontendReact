import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, Outlet } from "react-router-dom";

import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState({
    email: "test@test.no",
    password: "******",
  });

  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email === "test@test.no" && user.password === "******") {
      setIsLogged(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email}
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password}
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit" disabled>
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
