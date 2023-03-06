import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const navigate = useNavigate();

  axios.create({ baseURL: process.env.API_URL });

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email,username, password });
      navigate("/login");
    } catch (err) {}
  };
  return (
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
                className="logo"
                src="https://freesvg.org/img/Old-Fashioned-Film-Camera-Icon.png"
                alt=""
            />
            <button className="loginButton">Sign In</button>
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          {!email ? (
              <div className="input">
                <input type="email" placeholder="email address" ref={emailRef} />
                <button className="registerButton" onClick={handleStart}>
                  Get Started
                </button>
              </div>
          ) : (
              <form className="input">
                <input type="username" placeholder="username" ref={usernameRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <button className="registerButton" onClick={handleFinish}>
                  Start
                </button>
              </form>
          )}
        </div>
      </div>
  );
}
