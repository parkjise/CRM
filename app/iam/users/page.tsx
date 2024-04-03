"use client";
import React,{useState} from 'react';
import {
  Box,
  Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} 
  from "@mui/material";
// components
import Scrollbar from "@/app/(core)/components/custom-scroll/Scrollbar";
import AddUsers from "@/app/(core)/components/pages/account-setting/AddUsers";


const AuthApproval = () => {
  
  const [open01, setOpen01] = useState(false);

  const handle01ClickOpen = () => {
    setOpen01(true);
  };
  const handle01Close = () => {
    setOpen01(false);
  };

  return(
    <Box>
      <Box sx={{marginTop:"30px", display:"flex",gap:"10px"}}>
        <Button variant="contained" onClick={handle01ClickOpen}>Search User Popup01</Button>
      </Box>
      <Dialog open={open01} onClose={handle01Close} 
          fullWidth
          maxWidth="md"
      >
        <Button onClick={handle01Close} className="pop-close" >
          < i className="ri-close-line"></i>
        </Button>
        <DialogTitle>Add user</DialogTitle>
        <DialogContent sx={{padding:"2.4rem 2.4rem 2.4rem 2.4rem"}}>
          <DialogContentText>
            <Scrollbar sx={{ height: "500px" }}>
              <Box className="crm-step">
                <AddUsers/>
              </Box>
            </Scrollbar>
          </DialogContentText>
        </DialogContent>
        <DialogActions 
            sx={{
            justifyContent:"center",
            paddingBottom:"2.4rem"
          }}>
        </DialogActions>
      </Dialog>
    </Box>
    
  );
};
export default AuthApproval;