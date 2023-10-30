import React, { FC } from "react";
import MainContainer from "../MainContainer";
import { Box } from "@mui/material";
import { IGeneralContent } from "../../types/types";
import { useParams } from "react-router-dom";

const GeneralContent: FC<IGeneralContent> = ({ name }) => {
  const checkVisible = true;
  const { id } = useParams();

  return (
    <MainContainer arguments={checkVisible}>
      Welcome General Container
      <Box>{name}</Box>
      <Box>{id}</Box>
    </MainContainer>
  );
};

export default GeneralContent;
