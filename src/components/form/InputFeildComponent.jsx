// InputFeildComponent.js
import { ErrorMessage, Field } from 'formik';
import React from 'react';

const InputFeildComponent = ({ label, name, type}) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center m-4">
      <label className="text-gray-700 text-lg font-semibold col-span-1 capitalize" htmlFor={name}>
        {label}
      </label>
      <Field
        className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        placeholder={`Enter ${label}`}
      />
      <ErrorMessage name={name} component='span' className='text-red-600 font-medium   ' />
    </div>
  );
};

export default InputFeildComponent;
