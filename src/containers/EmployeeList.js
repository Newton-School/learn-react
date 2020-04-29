import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getEmployees } from "../actions/employees";

class EmployeeList extends React.PureComponent {
  componentDidMount() {
    this.props.getEmployees();
  }

  navigateHandler = (employee, history) => {
    history.push("/employee-detail", { ...employee });
  };

  gotoEmployeeDetail = (employee) => {
    return () => this.navigateHandler(employee, this.props.history);
  };

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
      <div style={{ margin: 10 }}>
        <ul>
          {this.props.employeeList.map((employee) => (
            <li key={employee.id} style={{ margin: 10 }}>
              <Link to={`/employees/${employee.id}`}>
                Get data from param: {employee.employee_name}
              </Link>

              <br />

              <Link
                to={{
                  pathname: "/employee-detail",
                  state: {
                    ...employee,
                  },
                }}
              >
                Get data from state: {employee.employee_name}
              </Link>

              <br />

              <button onClick={this.gotoEmployeeDetail(employee)}>
                Navigate based on event: {employee.employee_name}
              </button>
            </li>
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
