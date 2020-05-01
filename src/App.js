import React from "react";
import { StateProvider } from "./store/store";
import Navigation from "./routes/Navigation";
import "./styles/base.css";

function App() {
  return (
    <StateProvider>
      <Navigation />
    </StateProvider>
  );
}

export default App;
