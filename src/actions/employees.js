import { EMPLOYEES } from "../type";

const requestEmployees = () => {
  return {
    type: EMPLOYEES.GET_EMPLOYEE_REQUEST,
  };
};

const receivedEmployees = (employeeList) => {
  return { type: EMPLOYEES.GET_EMPLOYEE_SUCCESS, payload: [...employeeList] };
};

const errFetchEmployees = (err) => {
  return { type: EMPLOYEES.GET_EMPLOYEE_ERROR, payload: err };
};

export const getEmployees = () => (dispatch) => {
  dispatch(requestEmployees());

  fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then((res) => {
      dispatch(receivedEmployees(res.data));
    })
    .catch((err) => {
      dispatch(errFetchEmployees(err));
    });
};
