import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const BtnOutline = styled.div`
  button {
    border: 1px solid #efefef;
    color: #7b7b7b;
    background-color: #fff;
    box-sizing: border-box;
  }
`;

const CrmBtnOutline = () => {
  return <Button variant="outlined">결재</Button>;
};
export default CrmBtnOutline;
