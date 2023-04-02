import React from "react";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return <div>
        <h1>DashBoard Routes and go</h1>
        <Outlet />
  </div>;
};

export default DashBoard;
