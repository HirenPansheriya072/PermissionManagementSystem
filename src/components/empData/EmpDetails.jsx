import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteEmployeeMutation,
  useGetEmpDataQuery,
} from "../../store/Slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDeleteForever } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa6";

import { FaEdit } from "react-icons/fa";

const EmpDetails = () => {
  const { data: employees, isLoading } = useGetEmpDataQuery("");
  //   const { data: employees, isLoading } = useGetPostsQuery("", {refetchOnMountOrArgChange: true,});
  const [deletePost] = useDeleteEmployeeMutation();

  const handleDelete = (id) => {
    // deletePost(id);
    // toast.success("Employee deleted successfully!");

    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-3">
          <span>Are you sure you want to delete this employee data?</span>
          <div className="flex flex-row gap-5 justify-center items-center">
            <button
              className="py-2 px-6 bg-green-400 hover:bg-green-500 rounded-md text-black font-semibold"
              onClick={() => {
                deletePost(id);
                toast.success("Employee deleted successfully!");
                closeToast();
              }}
            >
              OK
            </button>
            <button
              onClick={closeToast}
              className="py-2 px-6 bg-red-400 hover:bg-red-500 rounded-md text-black font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <>
      <h2 className="text-center text-lg font-semibold underline">
        Employees Details
      </h2>
      <div className="text-center flex flex-col justify-center pt-5 lg:px-20 md:px-0 gap-4">
        <div className="flex">
          <Link to="/employee/add">
            <button className="p-3 bg-green-500 rounded-md font-serif font-semibold hover:bg-green-300 items-end">
              Add Employee
            </button>
          </Link>
        </div>
        <table className="table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-700">
            <tr>
              <th className="table_cell_head">Emp ID</th>
              <th className="table_cell_head">Name</th>
              <th className="table_cell_head">Email</th>
              <th className="table_cell_head">City</th>
              <th className="table_cell_head">Department</th>
              <th className="table_cell_head">Designation</th>
              <th className="table_cell_head">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr colSpan="7">Loading...</tr>
            ) : (
              employees?.map((i) => (
                <tr
                  key={i.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="table_cell_p">{i.id}</td>
                  <td className="table_cell_p">{i.name}</td>
                  <td className="table_cell_p">{i.email}</td>
                  <td className="table_cell_p">{i.city}</td>
                  <td className="table_cell_p">{i.department}</td>
                  <td className="table_cell_p">{i.designation}</td>
                  <td className="table_cell_p">
                    <div className="flex gap-5 items-center justify-center">
                      <Link
                        to={`/employee/edit/${i.id}`}
                        className="hover:text-blue-500 text-xl"
                      >
                        <FaEdit />
                      </Link>

                      <button
                        className="hover:text-red-500 text-2xl"
                        onClick={() => handleDelete(i.id)}
                      >
                        <MdDeleteForever />
                      </button>

                      <Link
                        to={`/employee/emp-permission/${i.id}`}
                        className="hover:text-blue-500 text-xl"
                      >
                        <IoSettingsSharp />
                      </Link>

                      <Link
                        to={`employee/view/${i.id}`}
                        className="hover:text-yellow-500 text-xl"
                      >
                        <FaClipboardList />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div></div>

      <ToastContainer />
    </>
  );
};

export default EmpDetails;
