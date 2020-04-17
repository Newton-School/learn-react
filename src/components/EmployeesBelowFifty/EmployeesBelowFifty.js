import React from "react";

const EmployeesBelowFifty = ({ employees }) => {
  console.log(employees);

  return (
    <div>
      <h2>Employees below age 50:</h2>
      <br />
      <ul>
        {employees.map((employee) => {
          return (
            employee.employee_age < 50 && (
              <li key={employee.id} style={{ marginBottom: 5 }}>
                Name: {employee.employee_name} age: {employee.employee_age}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default EmployeesBelowFifty;
