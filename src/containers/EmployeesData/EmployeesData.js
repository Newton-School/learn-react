import React from "react";

const employeesData = (WrappedComponent) => {
  return class EmployeesData extends React.PureComponent {
    state = {
      employees: [],
    };

    componentDidMount() {
      fetch("https://dummy.restapiexample.com/api/v1/employees")
        .then((res) => res.json())
        .then((res) => {
          this.setState({ employees: [...res.data] });
        });
    }

    render() {
      const { employees } = this.state;

      return (
        <div id="render-employee-fifty">
          <WrappedComponent employees={employees} {...this.props} />
        </div>
      );
    }
  };
};

export default employeesData;
