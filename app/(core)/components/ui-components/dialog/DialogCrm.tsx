"use client";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import React, { useState } from "react";
import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";

export const DialogCrm = () => {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

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
return(
  <>
    <Dialog open={open01} onClose={handle01Close}>
    <Button onClick={handle02Close}>
      Cancel
    </Button>
    {/* <DialogTitle>Subscribe</DialogTitle> */}
    <DialogContent>
      <DialogContentText
        sx={{
          fontSize:"16px",
          color:"#868E96",
          lineHeight:"140%",
        }}
      >
      <p>
        If the email has not been 
    sent to your mail box <span className="point">(xxx@xxx.net)</span>, please request verification email again.
      </p>
      </DialogContentText>
      <Box mt={2}>
        <CustomTextField
          autoFocus
          margin="dense"
          id="name01"
          label="Email Address01"
          type="email"
          fullWidth
        />
      </Box>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handle01Close}>
        Cancel
      </Button>
      <Button onClick={handle01Close}>Subscribe</Button>
    </DialogActions>
    </Dialog>
  </>
)
}
export default DialogCrm;