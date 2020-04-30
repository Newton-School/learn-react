import React from "react";
import useEmployeeList from "../hooks/useEmployeeList";

const EmployeeListCustomHook = () => {
  const employeeList = useEmployeeList([]);

  console.log(employeeList);

  return <p>Employee List Custom Hook</p>;
};

export default EmployeeListCustomHook;
