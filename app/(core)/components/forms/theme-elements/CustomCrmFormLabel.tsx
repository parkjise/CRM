import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CustomCrmFormLabel = styled((props: any) => (
  <Typography
    variant="subtitle1"
    fontWeight={400}
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))((props) => ({
  marginBottom: "10px",
  marginTop: "30px",
  display: "block",
  color: "#B5B5B5",
  fontSize: props.fontSize || "12px",
}));

export default CustomCrmFormLabel;
