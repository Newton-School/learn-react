import React from "react";

const EmployeesAboveLakh = ({ employees }) => {
  console.log(employees);

  return (
    <div>
      <h2>Employees earning above lakh:</h2>
      <br />
      <ul>
        {employees.map((employee) => {
          return employee.employee_salary > 100000 ? (
            <li key={employee.id} style={{ marginBottom: 5 }}>
              Name: {employee.employee_name} employee_salary:{" "}
              {employee.employee_salary}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default EmployeesAboveLakh;
