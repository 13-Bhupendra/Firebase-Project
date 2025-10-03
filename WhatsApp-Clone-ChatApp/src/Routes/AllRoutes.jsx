import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import { useSelector } from "react-redux";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";

const AllRoutes = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <Routes>
      <Route
        path="/signup"
        element={!currentUser ? <SignUp /> : <Navigate to="/home" />}
      />
      <Route
        path="/signin"
        element={!currentUser ? <SignIn /> : <Navigate to="/home" />}
      />

      <Route
        path="/home"
        element={currentUser ? <Home /> : <Navigate to="/signin" />}
      />
      <Route
        path="/profile"
        element={currentUser ? <Profile /> : <Navigate to="/signin" />}
      />

      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );
};

export default AllRoutes;
