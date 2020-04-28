import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import "./styles/base.css";
import EmployeeList from "./containers/EmployeeList";

function App() {
  return (
    <Provider store={store}>
      <EmployeeList />
    </Provider>
  );
}

export default App;
