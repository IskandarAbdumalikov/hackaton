import React from "react";
import "./singleRace.scss";
import { useParams } from "react-router-dom";
import { useGetRaceByIdQuery } from "../../context/api/raceApi";
import { FaPlus } from "react-icons/fa";
import Loading from "../../components/loading/Loading";

const SingleRace = () => {
  let { raceId } = useParams();
  let { data: singleData } = useGetRaceByIdQuery(raceId);
  if (!singleData) return <Loading />;
  

  return (
    <div className="singleRace container">
      <div className="singleRace__left">
        <img src={singleData?.thumbnail} alt="" />
      </div>
      <div className="singleRace__right">
        <h1>
          WAY
          <br />
          LITTLE ROUND
        </h1>
        <div className="description">
          <span>1</span>
          <p>{singleData?.description}</p>
        </div>
        <div className="singleRace__information">
          <h3>
            <span>Racer</span>
            <span>{singleData?.stock}</span>
          </h3>
          <h3>
            <span>Payment</span>
            <span>{singleData?.price} $</span>
          </h3>
          <h3>
            <span>Circle</span>
            <span>{singleData?.rating.toFixed(0)}</span>
          </h3>
          <h3>
            <span>Achievement</span>
            <span>{singleData?.price} $</span>
          </h3>
          <h3>
            <span>START-TIME</span>
            <span>{singleData?.meta.createdAt.split("T")[0]}</span>
          </h3>
        </div>
        <span className="plus">
          <FaPlus />
        </span>
      </div>
    </div>
  );
};

export default SingleRace;
