import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div className="login-container">
            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="terminal-icon red"></span>
                    <span className="terminal-icon yellow"></span>
                    <span className="terminal-icon green"></span>
                </div>
                <div className="terminal-body">
                    <p className="terminal-prompt">C:\ADCBootcamp\UserLogin&gt;</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <p className="login-message">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
