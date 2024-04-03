import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import CustomFormLabel from "@/app/(core)/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";

const TextareaStyle = styled.div`
  label {
    margin-top: 0;
  }
`;
const TextByte = styled.div`
  font-size: 13px;
  color: #b5b5b5;
  span {
    color: #272b2f;
  }
`;
const CrmAuthTextarea = () => {
  return (
    <TextareaStyle>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <CustomFormLabel htmlFor="bl-message">comment</CustomFormLabel>
        <TextByte>
          <span>0</span> / 1024 byte
        </TextByte>
      </Grid>
      <Grid item xs={12}>
        <CustomTextField id="bl-message" multiline fullWidth />
      </Grid>
    </TextareaStyle>
  );
};
export default CrmAuthTextarea;
