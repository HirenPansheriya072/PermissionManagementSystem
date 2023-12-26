// ViewEmployeePermission.jsx
import React from "react";

const ViewEmployeePermission = ({ employee }) => {
  const permissionEntries = Object.entries(employee.permissions);
  console.log("permissionEntries", permissionEntries);

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h3 className="text-center text-lg font-semibold underline">Permissions</h3>
      <div className="text-center w-52">
        {permissionEntries.length === 0 ? (
          <div>No permissions given</div>
        ) : (
          <div className="flex text-lg capitalize gap-10">
            <div>
              <h4 className="text-xl font-semibold text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-700">Keys</h4>
              {permissionEntries.map(([key]) => (
                <div key={key}>{key}</div>
              ))}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-700">Values</h4>
              {permissionEntries.map(([, value]) => (
                <div key={value}>{value.toString()}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewEmployeePermission;
