import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Table from "../table";
import ToogleSwitch from "../toggleSwitch";

const employeeDatas = [
  {
    id: "ceeb9e3c-d687-4676-8fde-290608b0a344",
    name: "John Skiles MD",
    email: "Nils15@gmail.com",
    department: "Music",
    designamtion: "Chief Response Agent",
    status: "Active",
  },
  {
    id: "1cd8cd3e-28a0-4320-8105-3d3141512aab",
    name: "Dr. Alan Halvorson",
    email: "Annabell.Murphy81@yahoo.com",
    department: "Health",
    designamtion: "Investor Directives Architect",
    status: "Inactive",
  },
  {
    id: "65f4bce5-8771-4ef2-9e3d-796b3ffbaafd",
    name: "Lynne Morissette",
    email: "Willie56@yahoo.com",
    department: "Home",
    designamtion: "Internal Functionality Facilitator",
    status: "Inactive",
  },
  {
    id: "97cbccc3-0877-4961-9328-ae8a276449bb",
    name: "Audrey Bechtelar",
    email: "Katelyn_Marvin78@hotmail.com",
    department: "Movies",
    designamtion: "Customer Operations Orchestrator",
    status: "Active",
  },
  {
    id: "10266ba6-2272-496b-8054-a880e838d18a",
    name: "Francis Littel",
    email: "Diana.McCullough97@gmail.com",
    department: "Games",
    designamtion: "Chief Program Planner",
    status: "Inactive",
  },
  {
    id: "8a505db1-5202-48b5-85bc-c78c18f5d634",
    name: "Marion Schultz",
    email: "Karl9@yahoo.com",
    department: "Kids",
    designamtion: "Central Assurance Agent",
    status: "Active",
  },
  {
    id: "8fe3a954-a8ea-463c-9ef8-5d1d895e564f",
    name: "Darin Mohr",
    email: "Green32@yahoo.com",
    department: "Grocery",
    designamtion: "Internal Solutions Administrator",
    status: "Active",
  },
  {
    id: "ad24d522-c34e-4851-84d0-1a27110ba016",
    name: "Gabriel Greenfelder",
    email: "Leonie.Baumbach-Rice12@gmail.com",
    department: "Health",
    designamtion: "Investor Division Orchestrator",
    status: "Active",
  },
  {
    id: "30a5c224-6e40-4e39-8533-653361ce12e2",
    name: "Sherman Gislason",
    email: "Consuelo.Hudson@hotmail.com",
    department: "Jewelery",
    designamtion: "Corporate Group Developer",
    status: "Active",
  },
  {
    id: "70aabccb-538f-4075-baba-4236953c9734",
    name: "Marcella Mitchell",
    email: "Marlene_Bauch55@gmail.com",
    department: "Outdoors",
    designamtion: "Corporate Communications Liaison",
    status: "Active",
  },
  {
    id: "fd4cf65c-bb3d-404c-abee-fed4db1a1645",
    name: "Eleanor Hudson-Oberbrunner",
    email: "Rusty_Becker@gmail.com",
    department: "Sports",
    designamtion: "Central Identity Director",
    status: "Active",
  },
  {
    id: "8a172528-9128-4302-9ce1-d6d6601e567d",
    name: "Mr. Jeremiah Littel",
    email: "Margaret85@hotmail.com",
    department: "Home",
    designamtion: "International Accounts Coordinator",
    status: "Active",
  },
  {
    id: "8e0b5455-ef3f-4195-a433-497e2af4f61b",
    name: "Lillian Cummerata",
    email: "Lincoln9@hotmail.com",
    department: "Health",
    designamtion: "Future Tactics Coordinator",
    status: "Active",
  },
  {
    id: "6487089e-493f-4c73-9ac1-ef9c678ace6c",
    name: "Santiago Rippin",
    email: "Bridgette.Turcotte45@yahoo.com",
    department: "Games",
    designamtion: "Product Branding Technician",
    status: "Active",
  },
  {
    id: "45f91309-f641-440b-a52d-4c4589837211",
    name: "Lyle Blanda",
    email: "Dashawn.Waters@hotmail.com",
    department: "Outdoors",
    designamtion: "Principal Accounts Engineer",
    status: "Active",
  },
  {
    id: "1b778078-62c5-40f8-9575-1206fee50886",
    name: "Kevin Torphy",
    email: "Beulah54@hotmail.com",
    department: "Jewelery",
    designamtion: "Direct Paradigm Coordinator",
    status: "Active",
  },
  {
    id: "a4cb7eac-d994-4f9f-97ff-69b8ac72cf3d",
    name: "Elvira Balistreri",
    email: "Odessa74@hotmail.com",
    department: "Clothing",
    designamtion: "Customer Marketing Agent",
    status: "Inactive",
  },
  {
    id: "aabb9551-b205-4c8e-b462-bebccfb48906",
    name: "Nathaniel O'Conner DDS",
    email: "Maureen_Reichel46@yahoo.com",
    department: "Games",
    designamtion: "Lead Communications Architect",
    status: "Active",
  },
  {
    id: "eab172a3-b931-40e3-9f4f-90291d95521d",
    name: "Moses Lakin-Kulas",
    email: "Deshawn_Zemlak@yahoo.com",
    department: "Home",
    designamtion: "Principal Division Planner",
    status: "Inactive",
  },
  {
    id: "c8ef76d6-a430-4f32-904f-77141b5b35bf",
    name: "Sherri King",
    email: "Jaime_Cole@hotmail.com",
    department: "Baby",
    designamtion: "Dynamic Solutions Specialist",
    status: "Active",
  },
];

const Home = () => {
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
