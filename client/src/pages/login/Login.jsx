import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      await axios.post("auth/login", { email,password });
      navigate("/");
    } catch (err) {

    }
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://freesvg.org/img/Old-Fashioned-Film-Camera-Icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
