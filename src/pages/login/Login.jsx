import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../context/api/userApi";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [signIn, { data, isLoading }] = useSignInMutation();
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate()
  console.log(data);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn({ username, password }).unwrap();
      localStorage.setItem("x-auth-token", response.token);
      toast.success("Login Successful");
      navigate("/")
    } catch (err) {
      console.error("Failed to login:", err);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="login__section">
      <div className="login">
        <img
          className="user__img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
          alt=""
        />
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone / Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="password__input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
          </div>
          <div className="remember__input">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <button type="submit">{isLoading?'LOADING...':'LOGIN'}</button>
          <Link to="/register">Forgot password / Username?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
