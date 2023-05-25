import React, { useState } from "react";
// import CategoryNav from '../categoryNavbar'
import "./index.css";
import Department from "../department";
import Designation from "../designation";

const activeClass = "category-tab-item-active category-tab-div-center"
const inActiveClass = "category-tab-item-inActive category-tab-div-center"

const Category = () => {
  const [selectedTab, setSelectedTab] = useState("department");
  return (
    <div className="category-main-div">
      <div className="category-nav-div">
        <p className={(selectedTab === "department" ? `${activeClass}` : `${inActiveClass}`)  } onClick={() => setSelectedTab("department")}>department</p>
        <p className={(selectedTab === "designation" ? `${activeClass}` : `${inActiveClass}`)  }  onClick={() => setSelectedTab("designation")}>designation</p>
      </div>
      <div className="">
        {selectedTab === "department" ? <Department /> : <Designation />}
      </div>
    </div>
  );
};

export default Category;
