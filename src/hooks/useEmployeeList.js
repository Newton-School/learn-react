import { useState, useEffect } from "react";

const useEmployeeList = (defaultEmployeeList = []) => {
  const [employeeList, setEmployeeList] = useState(defaultEmployeeList);

  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => setEmployeeList(res.data));
  }, []);

  return employeeList;
};

export default useEmployeeList;
