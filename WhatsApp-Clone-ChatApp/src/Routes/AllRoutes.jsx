import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import { useSelector } from "react-redux";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const AllRoutes = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <Routes>
      {/* Public Route */}
      {/* <Route
        path="/"
        element={!currentUser?.email ? <SignIn /> : <Navigate to="/home" replace />}
      /> */}

      {/* Protected Route */}
      {/* <Route
        path="/home"
        element={currentUser?.email ? <Home /> : <Navigate to="/" replace />}
      /> */}

      <Route path="/" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default AllRoutes;
