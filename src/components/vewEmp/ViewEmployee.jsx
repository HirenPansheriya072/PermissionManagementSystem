// ViewEmployee.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useGetEmpDataQuery } from "../../store/Slice.jsx";
import ViewEmployeePermission from "./ViewEmployeePermission.jsx";

const ViewEmployee = () => {
  const { id } = useParams();
  const { data: employees, isLoading: employeeLoading } = useGetEmpDataQuery();

  let employee;
  if (employees) {
    employee = employees.find((emp) => emp.id === Number(id));
  }

  if (employeeLoading) {
    return <div>Loading...</div>;
  }

  console.log("employee", employee);

  return (
    <div className="flex max-w-full ">
      <div className="text-center flex flex-col justify-center pt-5 lg:px-20 md:px-0 gap-4">
        <div className="flex lg:px-20 md:px-0 gap-96 ">
          <Link to="/">
            <button className="w-32 flex justify-center items-center gap-3 p-3 bg-gray-300 rounded-md font-serif font-semibold hover:bg-gray-500 hover:text-white">
              <IoMdArrowRoundBack />
              Back
            </button>
          </Link>
          <h2 className="text-center text-lg font-semibold underline">
            Employee Details
          </h2>
        </div>

        <table className="table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-700">
            <tr>
              <th className="table_cell_head">Emp ID</th>
              <th className="table_cell_head">Name</th>
              <th className="table_cell_head">Email</th>
              <th className="table_cell_head">City</th>
              <th className="table_cell_head">Mobile No.</th>
              <th className="table_cell_head">Department</th>
              <th className="table_cell_head">Designation</th>
              <th className="table_cell_head">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr
              key={employee.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="table_cell_p">{employee.id}</td>
              <td className="table_cell_p">{employee.name}</td>
              <td className="table_cell_p">{employee.email}</td>
              <td className="table_cell_p">{employee.city}</td>
              <td className="table_cell_p">{employee.phone_number}</td>
              <td className="table_cell_p">{employee.department}</td>
              <td className="table_cell_p">{employee.designation}</td>
              <td className="table_cell_p">{employee.salary}</td>
            </tr>
          </tbody>
        </table>

        {/* New Permissions Table */}
        <div className="mt-4">
          <ViewEmployeePermission employee={employee} />
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
