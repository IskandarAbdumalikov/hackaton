import React from "react";
import "./singleArea.scss";
import race1 from "../../assets/race-1.jpg";
import race2 from "../../assets/race-2.jpg";
import { Link } from "react-router-dom";
const SingleArea = () => {
  return (
    <div className="container single__area">
      <div className="types">
        <h1>Type of race</h1>
        <h3>LINE/ROUND</h3>
      </div>
      <div className="single__area__cards">
        <Link to={"/single__area/line"} className="single__area__card">
          <span>1</span>
          <h2>Line</h2>
          <img src={race1} alt="" />
        </Link>
        <Link to={"/single__area/round"} className="single__area__card">
          <span>1</span>
          <h2>ROUND</h2>
          <img src={race2} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SingleArea;
