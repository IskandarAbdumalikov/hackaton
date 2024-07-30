import React from "react";
import "../login/login.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login__section">
      <div className="login">
        <img
          className="user__img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
          alt=""
        />
        <h1>Register</h1>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Phone / Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Image" />
          <button>Register</button>
          <Link to={"/login"}>Do yuo have already account?Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
