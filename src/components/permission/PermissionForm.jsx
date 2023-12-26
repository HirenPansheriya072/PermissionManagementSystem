import { Form, Formik } from 'formik';
import React from 'react';
import PermissionTable from './PermissionTable';

// const initialValues = {
//   dashboard: { read: false, write: false, update: false, delete: false },
//   projects: { read: false, write: false, update: false, delete: false },
//   salary: { read: false, write: false, update: false, delete: false },
//   employees: { read: false, write: false, update: false, delete: false },
// };

const PermissionForm = () => {

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <PermissionTable values={values} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PermissionForm;