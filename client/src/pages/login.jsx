import styled from "styled-components";
import Navbar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import "../styling/login.scss";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { GoogleLoginBtn } from "../components/googleLogin";

const backendURI=process.env.REACT_APP_BACKEND_URI

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(106, 140, 254) 0%, #fff 100%);
`;
const P = styled.p`
  margin: 4px;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      console.log("entered here",backendURI)
      const res = await axios.post(`${backendURI}/api/auth/login`, {
        email,
        password,
      }, { withCredentials: true });

      navigate("/"); // Redirect on successful login
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Login failed"
      );
      console.log("entered failed")
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Navbar />
      <div className="wrapper">
        <div className="loginBox">
          <h2 className="loginTitle">Login</h2>
          <form className="loginForm" onSubmit={handleLogin}>
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
              // onClick={validateCrendential}
              disabled={loading}
            >
              {loading ? "Logging.." : "Submit"}
            </button>
          </form>
          <GoogleLoginBtn
            style={{ margin: "5px" }}
          />
          <P>Forgot Password</P>
          <P onClick={() => navigate("/register")}>Create a account</P>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Login;
