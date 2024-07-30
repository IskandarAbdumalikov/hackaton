import React from "react";
import "./users.scss";
import { useGetUsersQuery } from "../../context/api/userApi";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const Users = () => {
  let { data } = useGetUsersQuery({ limit: 4 });
  if (!data) return <Loading />;

  return (
    <div className="users container">
      <h1>USERS</h1>
      <div className="users__cards">
        {data?.users?.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id} className="user__card">
            <img src={user.image} alt="" />
            <div className="user__card__info">
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p>{user.email}</p>
              <p>{user.university}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
