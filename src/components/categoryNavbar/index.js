import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const CategoryNav = () => {
  return (
    <div className="category-nav-div">
      <NavLink
        exact="true"
        className={({ isActive }) =>
          isActive
            ? "category-nav-item-active category-nav-div-center"
            : "category-nav-item-inActive category-nav-div-center"
        }
        to="/category/department"
      >
        DEPARTMENT
      </NavLink>
      <NavLink
        exact="true"
        className={({ isActive }) =>
          isActive
            ? "category-nav-item-active category-nav-div-center"
            : "category-nav-item-inActive category-nav-div-center"
        }
        to="/category/designation"
      >
        DESIGNATION
      </NavLink>
    </div>
  );
};

export default CategoryNav;
