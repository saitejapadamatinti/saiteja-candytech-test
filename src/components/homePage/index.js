import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Table from "../table";
import ToogleSwitch from "../toggleSwitch";

const Home = (props) => {
  const { employeeDatas } = props;
  // employee data state
  const [employeeData, setEmployeeData] = useState(employeeDatas);
  // active data or inactive data state
  const [activeData, setActiveData] = useState([]);
  // toggle button status state
  const [toggleSwitchStatus, setToggleswitchStatus] = useState(true);

  // const [toggleStatus, setToggleStatus] = useState();

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://testsyncoffice.netlify.app/.netlify/functions/api/getEmployeesData"
  //     )
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error))
  // }, []);

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
          <ToogleSwitch
            toggleSwitchStatus={toggleSwitchStatus}
            gettingToggleStatus={gettingToggleStatus}
          />
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
