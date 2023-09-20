import React, { useState } from "react";
import "./login.css"; // Import your CSS file for styling
import axios from "axios";
import { useEffect } from "react";
import { clear } from "../../utils/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    clear();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = "https://v2napi.com/vfs_vacct/client/authenticate";

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!trimmedUsername.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(url, {
        username: trimmedUsername,
        password: trimmedPassword,
      });
      if (data.status === 200) {
        localStorage.setItem("HNGx_token", data?.data?.access_token);
        localStorage.setItem("HNGx_stage3_login", "true");
        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        setError("Username or password is incorrect");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError("An error occurred. Please try again later.");
    }
  };

  const handleInputClick = () => {
    setError("");
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setError("");
    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="email"
            id="username"
            name="username"
            value={username}
            onClick={handleInputClick}
            onChange={(e) => {
              handleInputChange(e);
              setUsername(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onClick={handleInputClick}
            onChange={(e) => {
              handleInputChange(e);
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit" className="login-button">
          {loading ? "otiloing otiloing" : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
