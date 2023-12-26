import React, { useEffect, useState } from "react";
import { MODULESs, PERMISSIONS } from "../../assets/Global";
import {
  useGetEmpDataQuery,
  useUpdateEmployeeMutation,
} from "../../store/Slice";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const initialModulePermissions = MODULESs.reduce((acc, cur) => {
  acc[cur] = [];
  return acc;
}, {});

const PermissionTable = () => {
  const { id } = useParams();
  const { data: employees, isLoading } = useGetEmpDataQuery("", {
    refetchOnMountOrArgChange: true,
  });

  const employee = employees?.find((emp) => emp.id === Number(id));

  const [modulePermissions, setModulePermissions] = useState(
    initialModulePermissions
  );
  useEffect(() => {
    if (employee?.permissions) {
      setModulePermissions(employee?.permissions);
    }
  }, [employee]);

  const [updateEmp] = useUpdateEmployeeMutation();

  const __onChange = (module, permission) => {
    setModulePermissions((prev) => ({
      ...prev,
      [module]: prev[module].includes(permission)
        ? prev[module].filter((per) => per !== permission)
        : [...prev[module], permission],
    }));
  };

  const onChange = (module, permission) => {
    setModulePermissions((prevState) => {
      if (prevState[module].includes(permission)) {
        return {
          ...prevState,
          [module]: prevState[module].filter((i) => i !== permission),
        };
      }

      return {
        ...prevState,
        [module]: [...prevState[module], permission],
      };
    });
  };

  // PUT : it replace the whole data with payload
  // PATCH : it only update the data which is passed in payload
  // both used to update the document.
  // POST: it is used to create new document.
  // DELETE: it is used to delete the document.
  // GET: it is used to get the documents.

  const handleSubmit = async () => {
    const updatedEmployee = {
      // ...employee,
      userId: employee?.id,
      permissions: { ...modulePermissions },
    };

    try {
      // Update the employee data with permissions using the API
      await updateEmp(updatedEmployee);

      toast.update("Updated Employee:", updatedEmployee);
      toast.success("Employee permissions saved successfully!");
    } catch (error) {
      toast.error("Error updating employee data:", error);
    }
  };

  return (
    <div className="text-center">
      <div className="grid container border-2 border-red-800 justify-center items-center grid-flow-col gap-20">
        {MODULESs.map((mod) => (
          <div key={mod} className="grid">
            <div className="grid col-span-2">
              <div className="grid text-lg font-extrabold">{mod}</div>
            </div>
            <div className="grid col-span-4 ">
              {PERMISSIONS.map((per) => {
                return (
                  <div className="grid col-span-3" key={per}>
                    <div>{per}</div>
                    <input
                      type="checkbox"
                      checked={modulePermissions[mod].includes(per)}
                      onChange={() => onChange(mod, per)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="my-10 p-3 text-lg font-bold bg-blue-400"
      >
        Save Permissions
      </button>
      <ToastContainer />
    </div>
  );
};

export default PermissionTable;
