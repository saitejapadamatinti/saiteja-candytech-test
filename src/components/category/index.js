import React, { useEffect, useState } from "react";
import Table from "../table";
import "./index.css";

const Category = ({ employeeDatas }) => {
  // fetched Array Data state
  const [categoryEmployeeData, setCategoryEmployeeData] =
    useState(employeeDatas);
  // filtered Array Data state
  const [filterdCategoryData, setFilterdCategoryData] = useState([]);
  // department category Array Data state
  const [category, setCategory] = useState("All");

  // getting all department names into array
  const departmentArray = [];
  for (let eachItem of employeeDatas) {
    const { department } = eachItem;
    departmentArray.push(department);
  }

  // removing duplicates from departmentArray
  const departsArray = departmentArray.filter((current, nextId) => {
    return departmentArray.indexOf(current) === nextId;
  });

  // fliltering as per selected department data
  useEffect(() => {
    if (category === "All") {
      setFilterdCategoryData(categoryEmployeeData);
    } else {
      const categoryArray = employeeDatas.filter(
        (each) => each.department === category
      );
      setFilterdCategoryData(categoryArray);
    }
  }, [category]);

  return (
    <div className="category-main-div">
      <div className="category-opyion-div">
        <select
          className="category-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option className="category-option-item">All</option>
          {departsArray.map((eachDepartment) => (
            <option key={eachDepartment}>{eachDepartment}</option>
          ))}
        </select>
      </div>
      <div>
        <Table employeeData={filterdCategoryData} />
      </div>
    </div>
  );
};

export default Category;
