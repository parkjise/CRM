"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import styled from "styled-components";
import CrmTitleTypeA from "@/app/(core)/components/crm/CrmTitleTypeA";
import CrmSearchTypeA from "@/app/(core)/components/crm/CrmSearchTypeA";
import CrmAuthBtnHeader from "@/app/(core)/components/crm/CrmAuthBtnHeader";
import ApprovalTable from "@/app/(core)/components/tables/ApprovalTable";
import CrmAuthTextarea from "@/app/(core)/components/crm/CrmAuthTextarea";
import CrmCheckBlue from "@/app/(core)/components/crm/CrmCheckBlue";
import CrmFailRed from "@/app/(core)/components/crm/CrmFailRed";

const TableScroll = styled.div`
  overflow-x: auto;
`;
const AuthApproval = () => {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [open03, setOpen03] = useState(false);

  const handle01ClickOpen = () => {
    setOpen01(true);
  };
  const handle01Close = () => {
    setOpen01(false);
  };

  const handle02ClickOpen = () => {
    setOpen02(true);
  };
  const handle02Close = () => {
    setOpen02(false);
  };

  const handle03ClickOpen = () => {
    setOpen03(true);
  };
  const handle03Close = () => {
    setOpen03(false);
  };

  return (
    <Box>
      <Box>
        <CrmTitleTypeA />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <CrmSearchTypeA />
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <CrmAuthBtnHeader />
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        <TableScroll>
          <ApprovalTable />
        </TableScroll>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <CrmAuthTextarea />
      </Box>
      <Box sx={{ marginTop: "30px", display: "flex", gap: "10px" }}>
        <Button variant="contained" onClick={handle01ClickOpen}>
          Search User Popup
        </Button>
        <Button variant="contained" onClick={handle02ClickOpen}>
          {" "}
          Popup01
        </Button>
        <Button variant="contained" onClick={handle03ClickOpen}>
          {" "}
          Popup02
        </Button>
      </Box>
      <Dialog open={open01} onClose={handle01Close} fullWidth maxWidth="md">
        <DialogTitle>Search user</DialogTitle>
        <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
          <DialogContentText>
            <Box sx={{ marginTop: "20px" }}>
              <CrmSearchTypeA />
            </Box>
            <Box>Grid Area</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          {/* <Button color="error" onClick={handle02Close}>
            Cancel
          </Button> */}
          <Button variant="contained" color="primary" onClick={handle01Close}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open02} onClose={handle02Close} maxWidth="xs">
        {/* <DialogTitle>Search user</DialogTitle> */}
        <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
          <DialogContentText
            sx={{
              fontSize: "1.25rem",
              color: "#272B2F",
              lineHeight: "140%",
              textAlign: "center",
            }}
          >
            <CrmCheckBlue />
            <p>
              Your request for permission(s) has been sent to Groupware. Your
              permission(s) will be activated after approval of your request the
              email has not been
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          {/* <Button color="error" onClick={handle02Close}>
            Cancel
          </Button> */}
          <Button variant="contained" color="primary" onClick={handle02Close}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open03} onClose={handle03Close} maxWidth="xs">
        {/* <DialogTitle>Search user</DialogTitle> */}
        <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
          <DialogContentText
            sx={{
              fontSize: "1.25rem",
              color: "#272B2F",
              lineHeight: "140%",
              textAlign: "center",
            }}
          >
            <CrmFailRed />
            <p>
              Your request for permission has not been sent to Groupware. Please
              checkdetails and try again.
            </p>
            <Box sx={{ marginTop: "40px" }}>
              <CrmAuthTextarea />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          {/* <Button color="error" onClick={handle02Close}>
            Cancel
          </Button> */}
          <Button variant="contained" color="primary" onClick={handle03Close}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default AuthApproval;
