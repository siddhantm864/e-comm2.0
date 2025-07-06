import styled from "styled-components";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styling/register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {GoogleLoginButton} from "../components/googleLogin";


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

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    userName: "",
    crPassword: "",
    rePassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (e) => {
    e.preventDefault();
    if (form.crPassword.trim() === form.rePassword.trim()) {
      navigate("/login");
    } else {
      alert("Password mismatch");
    }
  };

  return (
    <Container>
      <Navbar />
      <div className="wrapper">
        <div className="registerBox">
          <h2 className="registerTitle">Register</h2>
          <form className="registerForm" onSubmit={validatePassword}>
            <input
              className="formInput"
              type="text"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              className="formInput"
              type="text"
              name="userName"
              value={form.userName}
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              className="formInput"
              type="password"
              name="crPassword"
              value={form.crPassword}
              placeholder="Create Password"
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <input
              className="formInput"
              type="password"
              name="rePassword"
              value={form.rePassword}
              placeholder="Re-enter Password"
              onChange={handleChange}
              required
            />
            <button
              className="registerSubmit"
              type="submit"
              // disabled={
              //   !form.email || !form.userName || !form.crPassword || !form.rePassword
              // }
            >
              Submit
            </button>
          </form>
          <GoogleLoginButton style={{ margin: "5px" }} />
          <P onClick={() => navigate("/login")}>Go to Login</P>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Register;
