import React from "react";
import { connect } from "react-redux";
import { getEmployees } from "../actions/employees";

class EmployeeList extends React.PureComponent {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    const { err, loading, employeeList } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (err && Object.keys(err).length) {
      return <p>{err.message}</p>;
    }

    if (!employeeList.length) {
      return <p>Employee List is empty.</p>;
    }

    return (
      <div>
        <ul>
          {this.props.employeeList.map((employee) => (
            <li key={employee.id}>{employee.employee_name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.employees });

export default connect(mapStateToProps, {
  getEmployees,
})(EmployeeList);
