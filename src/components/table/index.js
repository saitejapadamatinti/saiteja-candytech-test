import React from "react";

const Table = (props) => {
  const { employeeData } = props;

  return (
    <div className="overflow-auto h-[76vh] pr-3">
      <div>
        <table className="border-collapse border border-slate-900 w-full">
          <thead>
            <tr className="table-headings table-tr active-background bg-slate-200">
              <th className="border border-slate-400 p-2 text-start w-1/6">Id</th>
              <th className="border border-slate-400  p-2 text-start w-1/6">
                Employee Name
              </th>
              <th className="border border-slate-400  p-2 text-start w-1/6">Email</th>
              <th className="border border-slate-400  p-2 text-start w-1/6">
                Department
              </th>
              <th className="border border-slate-400  p-2 text-start w-1/6">
                Designamation
              </th>
              <th className="border border-slate-400  p-2 text-start w-1/6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((eachEmployee) => (
              <tr className="table-tr even:bg-gray-200 hover:bg-gray-400 transition ease-in-out delay-100" key={eachEmployee.id}>
                <td className="border border-slate-400 p-2">{eachEmployee.id}</td>
                <td className="border border-slate-400 p-2">{eachEmployee.name}</td>
                <td className="border border-slate-400 p-2">
                  {eachEmployee.email}
                </td>
                <td className="border border-slate-400 p-2">
                  {eachEmployee.department}
                </td>
                <td className="border border-slate-400 p-2">
                  {eachEmployee.designamtion}
                </td>
                <td className="border border-slate-400 p-2">
                  {eachEmployee.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
