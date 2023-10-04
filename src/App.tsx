import React from "react";

import "./layout/App.css";
import FormRegister from "./components";
import NavigateComponent from "./components/NavigateComponent";
import Home from "./pages/Home";
import TestComponent from "./components/TestComponent";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <div className="App">
        <NavigateComponent path="/" element={<Home />} />
        <NavigateComponent path="/register" element={<FormRegister />} />
        <NavigateComponent path="/test" element={<TestComponent />} />
        <NavigateComponent path="/login" element={<SignIn />} />
      </div>
    </>
  );
}

export default App;
