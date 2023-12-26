import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { IoMdArrowRoundBack } from "react-icons/io";


const EmployeeForm = () => {

  return (
    <div className="lg:px-20 md:px-0">
      {/* <div className="flex flex-row w-32 justify-center items-center"> */}
        <Link to="/">
          <button className="w-32 flex justify-center items-center gap-3 p-3 bg-gray-300 rounded-md font-serif font-semibold hover:bg-gray-500 hover:text-white">
            <IoMdArrowRoundBack />
            Back
          </button>
        </Link>
      {/* </div> */}

    {/* <AddEmployee /> */}
    {/* <ToastContainer /> */}

      
    </div>
  );
};

export default EmployeeForm;


