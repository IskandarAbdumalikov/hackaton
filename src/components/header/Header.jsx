import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCaretLeft, FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [home, setHome] = useState(location.pathname === "/");

  useEffect(() => {
    setHome(location.pathname === "/");
  }, [location]);

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <header className="header container">
      <div className="header__left">
        {!home && (
          <button
            onClick={() => navigate(-1)}
            className="button-19"
            role="button"
          >
            Back <FaCaretLeft />
          </button>
        )}
        <Link to={"/login"}>
          <FaRegUserCircle />
        </Link>
      </div>
      <div className="header__right">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
