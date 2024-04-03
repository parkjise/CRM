import React from "react";
import { Box } from "@mui/material";
import CrmAuthDefault from "@/app/(core)/components/crm/CrmAuthDefault";
import CrmAuthNew from "@/app/(core)/components/crm/CrmAuthNew";
import CrmAuthDel from "@/app/(core)/components/crm/CrmAuthDel";
import AuthTextBox from "@/app/(core)/components/crm/CrmAuthTextBox";
import CrmAuthBtnIco from "@/app/(core)/components/crm/CrmAuthBtnIco";

const CrmCurrentAuthorization = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <CrmAuthDefault />
        <CrmAuthNew />
        <CrmAuthDel />
      </Box>
      <Box>
        <h2>Text</h2>
        <AuthTextBox />
      </Box>
      <Box>
        <h2>버튼</h2>
        <CrmAuthBtnIco />
      </Box>
    </>
  );
};
export default CrmCurrentAuthorization;
