import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginResponse = await axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={submit}>
          <Row lg={true} className="" style={{ marginTop: "18%" }}>
            <Col
              md={{ span: 4, offset: 8 }}
              className="py-4 p-4"
              style={{
                border: "2px solid #abc0c8",
                borderRadius: "1rem",
                boxShadow: "1px 1px 11px #9E9E9E",
              }}
            >
              {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )}
              <h5 style={{ color: "#007BFF", paddingBottom: "3px" }}>
                Login Page
              </h5>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{ width: "100px" }}
                  variant="outline-primary"
                  onClick={register}
                >
                  Sign Up
                </Button>
                <Button
                  style={{ width: "100px" }}
                  variant="primary"
                  type="submit"
                  className=" "
                >
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
}

export default Login;
