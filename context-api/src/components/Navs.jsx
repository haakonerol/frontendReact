import { Link } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
// import { LoginContext } from "../context/LoginContext";
import { LoginContext } from "../context/LoginProvider";
import { useContext } from "react";

function Navs() {
  const { signed, setSigned } = useContext(LoginContext);

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://clarusway.com/wp-content/uploads/2022/12/clarusway-logo-black.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>
            {signed ? (
              <Link className="nav-link" to="/login" onClick={() => setSigned(false)}>
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
