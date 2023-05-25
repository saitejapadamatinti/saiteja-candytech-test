import React from "react";
import "./index.css";

const Table = (props) => {
  const { employeeData } = props;
  // const {id,department, designamtion , email, name, status} = employeeData
  // console.log(id,department, designamtion , email, name, status)

  return (
    <div>
      <div className="table-div">
        <table className="table-main">
          <tr className="table-headings table-tr active-background">
            <th className="table-th">Id</th>
            <th className="table-th">Employee Name</th>
            <th className="table-th">Email</th>
            <th className="table-th">Department</th>
            <th className="table-th">Designamation</th>
            <th className="table-th">Status</th>
          </tr>
          {employeeData.map((eachEmployee) => (
            <tr className="table-tr" key={eachEmployee.id}>
              <td className="table-td">{eachEmployee.id}</td>
              <td className="table-td">{eachEmployee.name}</td>
              <td className="table-td">{eachEmployee.email}</td>
              <td className="table-td">{eachEmployee.department}</td>
              <td className="table-td">{eachEmployee.designamtion}</td>
              <td className="table-td">{eachEmployee.status}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
