import styled from "styled-components";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styling/login.scss";
import { useState } from "react";
import Home from "./home";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(106, 140, 254) 0%, #fff 100%);
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dbEmail = "test@gmail.com";
  const dbPassword = "Password123";

  const validateCrendential = (e) => {
    e.preventDefault();
    if (email === dbEmail && password === dbPassword) {
      setIsLoggedIn(true);
      alert("login successful");
    } else alert("wrong credential");
  };
  return (
    <Container>
      <Navbar />
      <div className="wrapper">
        <div className="loginBox">
          <h2 className="loginTitle">Login</h2>
          <form className="loginForm">
            <input
              className="formInput"
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="formInput"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="loginSubmit"
              type="submit"
              onClick={validateCrendential}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Login;
