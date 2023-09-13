import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import "./layout/App.css";
import FormRegister from "./components";
import NavigateComponent from "./components/NavigateComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Box>FormRegister</Box>
      <FormRegister />
      <NavigateComponent path="/login" element={<FormRegister />} />
    </div>
  );
}

export default App;
