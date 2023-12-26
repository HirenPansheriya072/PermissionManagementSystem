import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetEmpDataQuery } from '../../store/Slice';
import PermissionTable from './PermissionTable';
import { IoMdArrowRoundBack } from 'react-icons/io';

const SingleEmployeeData = () => {

    const {id} = useParams();
    const {data: employees, isLoading} = useGetEmpDataQuery("");

    const employee = employees?.find((emp) => emp.id === Number(id));

    console.log("id",id);
    console.log("object",employee);

  return (
    <div className=' lg:px-20 md:px-0 flex flex-col gap-5'>
        
        <h2 className="text-center text-lg font-semibold underline">
            Permission Table
        </h2>
        <div className="text-center flex flex-col justify-center pt-5 lg:px-20 md:px-0 gap-4">
            <div className="flex">
                <Link to="/">
                    <button className="w-32 flex justify-center items-center gap-3 p-3 bg-gray-300 rounded-md font-serif font-semibold hover:bg-gray-500 hover:text-white">
                        <IoMdArrowRoundBack />
                        Back
                    </button>
                </Link>
            </div>
        </div>

        <table className="table-fixed w-96">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-700">
            <tr>
              <th className="table_cell_head">Emp ID</th>
              <th className="table_cell_head">Name</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr colSpan="7">Loading...</tr>
            ) : (
                <tr
                  key={employee.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="table_cell_p text-center">{employee.id}</td>
                  <td className="table_cell_p text-center">{employee.name}</td>
                </tr>
            )}
          </tbody>
        </table>

        <PermissionTable employeeId={employee?.id} />

    </div>
  )
}

export default SingleEmployeeData;







