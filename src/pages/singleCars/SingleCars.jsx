import React from "react";
import "./singleCars.scss";
import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../../context/api/carApi";
import Loading from "../../components/loading/Loading";

const SingleCars = () => {
  let { carId } = useParams();
  let { data } = useGetCarByIdQuery(carId);
  if (!data) return <Loading />;


  return (
    <div className="singleCar container">
      <div className="singleCar__left">
        <h1>{data?.title}</h1>
        <div className="singleCar__information">
          <h3>
            <span>Power</span>
            <span>{data?.stock}</span>
          </h3>
          <h3>
            <span>Color</span>
            <span>white</span>
          </h3>
          <h3>
            <span>Weight</span>
            <span>{data?.weight} kg</span>
          </h3>
          <h3>
            <span>Speed</span>
            <span>{data?.price} km/s</span>
          </h3>
          <h3>
            <span>Balance</span>
            <span>{data?.price}$</span>
          </h3>
        </div>
      </div>
      <div className="singleCar__right">
        <img src={data?.thumbnail} alt="" />
      </div>
    </div>
  );
};

export default SingleCars;
