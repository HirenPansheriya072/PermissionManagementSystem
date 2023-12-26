import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import { useCreateEmployeeMutation } from "../../store/Slice";
import { v4 as uuidv4 } from "uuid";
import FormOfFeilds from "../form/FormOfFeilds";
import PermissionTable from "../permission/PermissionTable";

const initial = {
  id: "",
  name: "",
  email: "",
  city: "",
  phone_number: "",
  department: "",
  designation: "",
  salary: "",
  permissions: {}, // Add permissions property
};

const AddEmployee = () => {
  const [createEmp] = useCreateEmployeeMutation();

  const handlerOnSubmit = async (values, { resetForm }) => {
    try {
      await createEmp({ id: uuidv4(), ...values });
      toast.success("Employee added successfully!");
      resetForm();
    } catch (error) {
      toast.error(
        error + " An error occurred while processing the request."
      );
    }
  };

  return (
    <>
      <div className="flex lg:px-20 md:px-0">
        <Link to="/">
          <button className="w-32 flex justify-center items-center gap-3 p-3 bg-gray-300 rounded-md font-serif font-semibold hover:bg-gray-500 hover:text-white">
            <IoMdArrowRoundBack />
            Back
          </button>
        </Link>
      </div>
      <h2 className="pb-3 text-center text-lg font-semibold underline">
        Add Employee Details
      </h2>
      {/* Render your permission table */}
      {/* <PermissionTable /> */}
      {/* Render your form */}
      <FormOfFeilds initialValues={initial} onSubmit={handlerOnSubmit} />
    </>
  );
};

export default AddEmployee;










// import React from "react";
// import {
//   useCreateEmployeeMutation,
// } from "../../store/Slice";
// import FormOfFeilds from "../form/FormOfFeilds";
// import { v4 as uuidv4 } from "uuid";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import { IoMdArrowRoundBack } from "react-icons/io";

// const initial = {
//   id: "",
//   name: "",
//   email: "",
//   city: "",
//   phone_number: "",
//   department: "",
//   designation: "",
//   salary: "",
// };

// const AddEmployee = () => {
//   const [createEmp] = useCreateEmployeeMutation();

//   const handlerOnSubmit = async (values, { resetForm }) => {
//     try {
//       await createEmp({ id: uuidv4(), ...values });
//       toast.success("Employee added successfully!");
//       resetForm();
//     } catch (error) {
//       toast.error(error + "An error occurred while processing the request.");
//     }
//   };

//   return (
//     <>
//       <div className="flex lg:px-20 md:px-0">
//         <Link to="/">
//           <button className="w-32 flex justify-center items-center gap-3 p-3 bg-gray-300 rounded-md font-serif font-semibold hover:bg-gray-500 hover:text-white">
//             <IoMdArrowRoundBack />
//             Back
//           </button>
//         </Link>
//       </div>
//       <h2 className="pb-3 text-center text-lg font-semibold underline">
//         Add Employee Details
//       </h2>
//       <FormOfFeilds initialValues={initial} onSubmit={handlerOnSubmit} />
//     </>
//   );
// };

// export default AddEmployee;
