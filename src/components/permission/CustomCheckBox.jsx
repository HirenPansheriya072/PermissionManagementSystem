import { Field } from "formik";
import React from "react";

const CustomCheckBox = ({ type, name, value }) => {
  return (
    <label>
      {value}
      <Field type={type} name={name} value={value} />
    </label>
  );
};
export default CustomCheckBox;
