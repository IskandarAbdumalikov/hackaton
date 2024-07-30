import React, { Fragment } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Area from "./pages/area/Area";
import Race from "./pages/race/Race";
import Cars from "./pages/cars/Cars";
import Users from "./pages/users/Users";
import SingleRace from "./pages/singleRace/SingleRace";
import SingleCars from "./pages/singleCars/SingleCars";
import SingleUsers from "./pages/singleUsers/SingleUsers";
import SingleArea from "./pages/singleArea/SingleArea";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area" element={<Area />} />
        <Route path="/area/:areId" element={<SingleArea />} />
        <Route path="/race" element={<Race />} />
        <Route path="/race/:raceId" element={<SingleRace />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car/:carId" element={<SingleCars />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<SingleUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
