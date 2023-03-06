import "./login.css";
import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // handleLogin...

    return (
        <div className="login">
            <form className="loginForm">
                <input
                    type="text"
                    placeholder="email"
                    className="loginInput"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    className="loginInput"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="loginButton"
                    //onClick={handleLogin}
                >
                    Login
                </button>
            </form>
        </div>
    );
}