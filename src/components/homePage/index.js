import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Table from "../table";
import ToogleSwitch from "../toggleSwitch";




// const employeeUrl =
// "https://testsyncoffice.netlify.app/.netlify/functions/api/getEmployeesData";

const Home = (props) => {
  const {employeeDatas} = props
  const [employeeData, setEmployeeData] = useState(employeeDatas);
  const [activeData, setActiveData] = useState([]);
  const [toggleSwitchStatus, setToggleswitchStatus] = useState(true);

  const [toggleStatus, setToggleStatus] = useState();

  // const fetchingDataFromAPi = async () => {
      
  // };

  useEffect(() => {
    // fetchingDataFromAPi()
    axios.get("https://testsyncoffice.netlify.app/.netlify/functions/api/getEmployeesData").then(
      response => console.log(response)
    )
      // const data =await response.json()
  }, [])

  // checking toggle status and filtering data 
  useEffect(() => {
    filteringEmployeeData(toggleSwitchStatus);
  }, [toggleSwitchStatus]);

  const filteringEmployeeData = (toggleSwitchStatus) => {
    if (toggleSwitchStatus === true) {
      const filterdActiveData = employeeData.filter(
        (eachEmployee) => eachEmployee.status === "Active"
      );
      setActiveData(filterdActiveData);
    } else {
      const filterdActiveData = employeeData.filter(
        (eachEmployee) => eachEmployee.status === "Inactive"
      );
      setActiveData(filterdActiveData);
    }
  };

  const gettingToggleStatus = (toggleValue) => {
    setToggleswitchStatus(toggleValue);
  };

  return (
    <div className="home-main-container">
      <div className="home-employee-container">
        <div>
          <p>Employee's</p>
        </div>
        <div className="toggle-div">
          <span className="home-toggle-text">Active</span>
          <ToogleSwitch toggleSwitchStatus={toggleSwitchStatus} gettingToggleStatus={gettingToggleStatus} />
          <span className="home-toggle-text">InActive</span>
        </div>
      </div>
      <div>
        <Table employeeData={activeData} />
      </div>
    </div>
  );
};

export default Home;
