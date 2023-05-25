import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-bar-main-div">
      <NavLink
        exact = "true"
        className={({ isActive }) =>
          isActive
            ? "side-home-item-active side-bar-center-cls"
            : "side-home-item-inactive side-bar-center-cls"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
         exact = "true"
        className={({ isActive }) =>
          isActive
            ? "side-home-item-active side-bar-center-cls"
            : "side-home-item-inactive side-bar-center-cls"
        }
        to="/category"
      >
        Category
      </NavLink>
      {/* <p className="side-home-item-active side-bar-center-cls">Home</p>
        <p className="side-home-item-inactive side-bar-center-cls">Category</p> */}
    </div>
  );
};

export default Sidebar;
