import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="outer_body">
      <Sidebar />
    </div>
  );
};

export default DashBoard;
