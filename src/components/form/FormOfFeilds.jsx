import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputFeildComponent from "./InputFeildComponent";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required..."),

  email: Yup.string()
    .email("Enter valid email")
    .required("Email is required..."),

  city: Yup.string().required("City is required..."),

  phone_number: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  department: Yup.string().required("Department is required..."),

  designation: Yup.string().required("Designation is required..."),

  salary: Yup.number()
    .min(0, "Salary must be a positive number")
    .required("Salary is required..."),
});

const inputFeilds = [
  {
    label: "name",
    input: {
      type: "text",
      name: "name",
    },
  },
  {
    label: "email",
    input: {
      type: "email",
      name: "email",
    },
  },
  {
    label: "city",
    input: {
      type: "text",
      name: "city",
    },
  },
  {
    label: "phone_number",
    input: {
      type: "number",
      name: "phone_number",
    },
  },
  {
    label: "department",
    input: {
      type: "text",
      name: "department",
    },
  },
  {
    label: "designation",
    input: {
      type: "text",
      name: "designation",
    },
  },
  {
    label: "salary",
    input: {
      type: "number",
      name: "salary",
    },
  },
];

const FormOfFeilds = ({initialValues, onSubmit}) => {
  return (
    <div className="flex items-center justify-center">
      <Formik
        initialValues={initialValues || {}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="grid">
          {inputFeilds?.map((i, index) => (
            <InputFeildComponent
              key={index}
              label={i.label}
              name={i.input.name}
              type={i.input.type}
            />
          ))}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            Submit
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default FormOfFeilds;


