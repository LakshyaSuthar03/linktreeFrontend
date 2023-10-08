import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import DynamicRoute from "./DynamicRoute";
import EditProfile from "./EditProfile/EditProfile";
import EditLinks from "./EditLinks/EditLinks";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get/:linktree" element={<DynamicRoute />} />
        <Route path="/edit/profile" element={<EditProfile />} />
        <Route path="/edit/links" element={<EditLinks />} />
      </Routes>
    </>
  );
};

export default Main;
