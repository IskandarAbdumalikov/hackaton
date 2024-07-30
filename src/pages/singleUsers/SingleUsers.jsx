import React from 'react'
import './singleUsers.scss'
import { useParams } from 'react-router-dom'
import { useGetUserByIdQuery } from '../../context/api/userApi'
import { FaPlus } from 'react-icons/fa'
import Loading from '../../components/loading/Loading'

const SingleUsers = () => {
  let {userId} = useParams()
  let {data} = useGetUserByIdQuery(userId)

    if (!data) return <Loading />;

  return (
    <div className="singleUser container">
      <div className="singleUser__left">
        <div className="singleUser__left__top">
          <img src={data?.image} alt="" />
          <h2>
            {data?.firstName} {data?.lastName}
          </h2>
        </div>
        <div className="singleUser__left__bottom">
          <h3>
            <span>WIN</span>
            <span>4</span>
          </h3>
          <h3>
            <span>CAR</span>
            <span>{data?.role}</span>
          </h3>
          <h3>
            <span>PHONE</span>
            <span>{data?.phone}</span>
          </h3>
          <h3>
            <span>BALANCE</span>
            <span>300 $</span>
          </h3>
        </div>
      </div>
      <div className="singleUser__right">
        <span>
          <FaPlus />
        </span>
      </div>
    </div>
  );
}

export default SingleUsers