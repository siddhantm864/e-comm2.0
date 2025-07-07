import styled from "styled-components";
import axios from "axios";
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
    username: "",
    crPassword: "",
    rePassword: "",
  });
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const  handleRegister= async(e) => {
    e.preventDefault();
    setError("")
    if(form.crPassword.trim()!==form.rePassword.trim()){
      setError("password mismatch");
      return;
    }
    setLoading(true);
    try{
      const res=await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          email:form.email,
          username:form.username,
          password:form.crPassword,
          provider:"local"
        }
      );
      navigate("/login")
    } catch(err){
      setError(
      err.reponse?.data?.message ||
      err.response?.data?.error ||
      "Registration failed"
      );
    } finally{
      setLoading(false);
    }
  };

  return (
    <Container>
      <Navbar />
      <div className="wrapper">
        <div className="registerBox">
          <h2 className="registerTitle">Register</h2>
          <form className="registerForm" onSubmit={handleRegister}>
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
              name="username"
              value={form.username}
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
            {error && <div style={{ color: "red", margin: "8px 0" }}>{error}</div>}
            <button
              className="registerSubmit"
              type="submit"
              disabled={loading}
            >
              {loading?"Registering..":"Submit"}
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
