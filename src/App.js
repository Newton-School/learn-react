import React from "react";
// import Todo from "./containers/Todo/Todo";
import employeesData from "./containers/EmployeesData/EmployeesData";
import EmployeesBelowFifty from "./components/EmployeesBelowFifty/EmployeesBelowFifty";
import EmployeesAboveLakh from "./components/EmployeesAboveLakh/EmployeesAboveLakh";
import "./styles/base.css";

const EmployeesBelowFiftyComp = employeesData(EmployeesBelowFifty);

const EmployeesAboveLakhComp = employeesData(EmployeesAboveLakh);

function App() {
  return (
    <div style={{ display: "flex" }}>
      <EmployeesBelowFiftyComp label="Add Submit" />
      <EmployeesAboveLakhComp />
    </div>
  );
}

export default App;
