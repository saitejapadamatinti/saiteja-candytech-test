import React from "react";
import { NavLink } from "react-router-dom";

const sideBarHomeActive =
  "h-[50px] w-[160px] text-white bg-black flex justify-center items-center decoration-none";
const inActivesideBarHome =
  "h-[50px] w-[160px] text-white bg-none flex justify-center items-center decoration-none hover:bg-gray-600 transition hover:ease-in-out delay-100";

const Sidebar = () => {
  return (
    <div className="h-[90vh] w-[160px] bg-neutral-500 flex flex-col items-center">
      <div className="flex flex-col">
        <NavLink
          exact="true"
          className={({ isActive }) =>
            isActive ? `${sideBarHomeActive}` : `${inActivesideBarHome}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact="true"
          className={({ isActive }) =>
            isActive ? `${sideBarHomeActive}` : `${inActivesideBarHome}`
          }
          to="/category"
        >
          Category
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
