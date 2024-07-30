import React from "react";
import "./area.scss";
import { useGetAreasQuery } from "../../context/api/area";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const Area = () => {
  let { data } = useGetAreasQuery();
  if (!data) return <Loading />;
  
  return (
    <>
      <div className="container area">
        <h1>AREA</h1>
        <div className="area__cards">
          {data?.products?.map((product) => (
            <Link to={`/area/${product.id}`} key={product.id} className="area__card">
              <div>
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="area__card__info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Area;
