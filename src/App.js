import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Navigation from "./routes/Navigation";
import "./styles/base.css";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
