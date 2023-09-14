import React, { FC } from "react";
import { INavigate } from "../types/types";
import { Routes, Route } from "react-router-dom";

const NavigateComponent: FC<INavigate> = ({ path, element }) => {
  return (
    <>
      <Routes>
        <Route path={path} element={element} />
      </Routes>
    </>
  );
};

export default NavigateComponent;
