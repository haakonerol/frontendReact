import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { LoginContext } from "../context/LoginContext";
import { LoginContext } from "../context/LoginProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const {signed, setSigned } = useContext(LoginContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    user?.email && user?.password && setSigned(true);
    setUser({ email: "", password: "" });
    navigate(-1)
    console.log(signed)
  };
  console.log(user)
  console.log(signed)
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
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
