import React from "react";
import { Grid,Box,Typography } from "@mui/material";
import styled from "styled-components";

const BtnWrap = styled.div`
  
`;

const CrmCardTypeA = () => {
  return (
    <Grid container spacing={3}>
      {/* 현재 고객사 */}
      <Grid item xs={12} sm={6}>
        <Box className="box-type-1">
          <Typography>현재 고객사</Typography>
          <Typography>삼희에스엠티</Typography>
        </Box>
      </Grid>
      {/* 고객코드 */}
      <Grid item xs={12} sm={6}>
        <Box className="box-type-1">
          <Typography>고객코드</Typography>
          <Typography>SO-202311130083</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default CrmCardTypeA;
