import React from 'react';
import FormOfFeilds from '../form/FormOfFeilds';
import { useGetEmpDataQuery, useUpdateEmployeeMutation } from '../../store/Slice';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdArrowRoundBack } from 'react-icons/io';

const EditEmployee = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    // console.log("object",id);
    const {data: employees} = useGetEmpDataQuery("");
    const [updateEmp] = useUpdateEmployeeMutation();

    // console.log("object",employees);
    const employee = employees.find((emp) => emp.id === Number(id));
    
    const handlerOnSubmit = async (values) => {
        try{
            await updateEmp({id: values.id, ...values});
            toast.success("Employee updated successfully!");
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }catch(error) {
            toast.error(error + "An error occurred while processing the request.")
        }
        // navigate('/');
    }

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
            <h2 className="pb-3 text-center text-lg font-semibold underline">Update Employee Details</h2>
        <FormOfFeilds initialValues={employee} onSubmit={handlerOnSubmit} />
        <ToastContainer />
    </>
  )
}

export default EditEmployee;