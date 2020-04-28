import { EMPLOYEES } from "../type";

const defaultState = {
  employeeList: [],
  loading: false,
  err: null,
};

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case EMPLOYEES.GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case EMPLOYEES.GET_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        err: null,
        employeeList: [...action.payload],
      };
    case EMPLOYEES.GET_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default counter;
