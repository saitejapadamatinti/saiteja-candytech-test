import React, { useState } from "react";
import Department from "../department";
import Designation from "../designation";

const activeClass = "font-semibold text-sky-700 border-b-[3px] border-sky-700 h-[48px] flex justify-center items-center pointer decoration-none cursor-pointer";
const inActiveClass = "font-semibold text-gray-500 justify-center items-center h-[48px] decoration-none cursor-pointer";

const Category = () => {
  const [selectedTab, setSelectedTab] = useState("department");
  return (
    <div className="w-full p-[30px]">
      <div className="flex items-baseline gap-[20px] border-2 border-gray-400 h-[50px] pl-[20px]">
        <p
          className={
            selectedTab === "department" ? `${activeClass}` : `${inActiveClass}`
          }
          onClick={() => setSelectedTab("department")}
        >
          DEPARTMENT
        </p>
        <p
          className={
            selectedTab === "designation"
              ? `${activeClass}`
              : `${inActiveClass}`
          }
          onClick={() => setSelectedTab("designation")}
        >
          DESIGNATION
        </p>
      </div>
      <div className="">
        {selectedTab === "department" ? <Department /> : <Designation />}
      </div>
    </div>
  );
};

export default Category;
