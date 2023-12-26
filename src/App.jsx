import React from 'react';
import EmpDetails from './components/empData/EmpDetails';
import { Route, Routes } from 'react-router-dom';
import { useGetEmpDataQuery } from "./store/Slice.jsx";
import AddEmployee from './components/Actions/AddEmployee.jsx';
import EditEmployee from './components/Actions/EditEmployee.jsx';
import PermissionForm from './components/permission/PermissionForm.jsx';
import SingleEmployeeData from './components/permission/SingleEmployeeData.jsx';
import ViewEmployee from './components/vewEmp/ViewEmployee.jsx';

const App = () => {

  // const {data: employees} = useGetEmpDataQuery('');


  return (
    <>
        <h1 className='text-center text-2xl font-serif font-bold py-5'>Permission Management System</h1>
        {/* <EmpDetails /> */}

        <Routes>
          <Route exact path='/' element={<EmpDetails />} />
          <Route exact path='/employee/add' element={<AddEmployee />} />
          <Route exact path='/employee/edit/:id' element={<EditEmployee />} />
          <Route exact path='/employee/emp-permission/:id' element={<SingleEmployeeData />} />
          {/* <Route exact path='/employee/:id' element={<SingleEmployeeData />} /> */}
          <Route exact path='/employee/view/:id' element={<ViewEmployee />} />

        </Routes>



    </>
  )
}

export default App;
