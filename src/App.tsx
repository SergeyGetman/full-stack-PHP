import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import "./layout/App.css";
import FormRegister from "./components";
import NavigateComponent from "./components/NavigateComponent";
import Home from "./pages/Home";
import TestComponent from "./components/TestComponent";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <div className="App">
        <NavigateComponent path="/" element={<Home />} />
        <NavigateComponent path="/login" element={<FormRegister />} />
        <NavigateComponent path="/test" element={<TestComponent />} />
      </div>
    </>
  );
}

export default App;
