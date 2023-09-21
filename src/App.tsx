import React from "react";

import "./layout/App.css";
import FormRegister from "./components";
import NavigateComponent from "./components/NavigateComponent";
import Home from "./pages/Home";
import TestComponent from "./components/TestComponent";

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
