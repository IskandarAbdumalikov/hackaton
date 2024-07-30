import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import race from "../../assets/race.jpg";
import users from "../../assets/users.jpg";
import area from "../../assets/area.jpg";
import cars from "../../assets/cars.jpg";

const Home = () => {
  return (
    <div className="container home">
      <div className="home__hero">
        <h1>NEED FOR SPEED</h1>
        <h3>UZBEKISTAN</h3>
      </div>
      <div className="home__cards">
        <Link to={"/area"} className="card">
          <img src={area} alt="" />
          <h3>Area</h3>
        </Link>
        <Link to={"/race"} className="card">
          <img src={race} alt="" />
          <h3>Race</h3>
        </Link>
        <Link to={"/cars"} className="card">
          <img src={cars} alt="" />
          <h3>Cars</h3>
        </Link>
        <Link to={"/users"} className="card">
          <img src={users} alt="" />
          <h3>Users</h3>
        </Link>
      </div>
    </div>
  );
};

export default Home;
