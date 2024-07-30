import React, { useState } from "react";
import { useGetRacesQuery } from "../../context/api/raceApi";
import "./race.scss";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const Race = () => {
  let { data } = useGetRacesQuery({ limit: 4 });
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data) return <Loading />;

  return (
    <div className="race container">
      <div className="race__left">
        <Link
          to={`/race/${data?.products[activeIndex]?.id}`}
          className="race__left-large"
        >
          <img
            src={data?.products[activeIndex]?.thumbnail}
            alt={data?.products[activeIndex]?.title}
          />
        </Link>
        <div className="race__left-small">
          {data?.products?.map((race, index) => (
            <img
              key={index}
              src={race.images[0]}
              alt={race.title}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>
      <div className="race__right">
        {data?.products?.map((race, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`race__right-item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <span className="race__right-item-index">{index + 1}</span>
            <span className="race__right-item-title">{race.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Race;
