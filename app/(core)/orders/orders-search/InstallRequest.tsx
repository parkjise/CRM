import React, { useState } from "react";
import CrmSearchTypeA from "@/app/(core)/components/crm/CrmSearchTypeA";

// components
import {
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  Dialog,
  DialogContentText,
  Step,
  StepLabel,
  Stepper,
  FormControlLabel,
  FormGroup,
  ListItemText,
  ListItemButton,
  List,
  AppBar,
  Toolbar,
  Divider   

} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import styled from "styled-components";



const UsersForm = styled.div`
  border-radius: 10px;
  border: 1px solid #DFE5EF;
  padding: 1.25rem;
  .enDfAj > div{
    width: 18.75rem;
  }
`
const BootstrapDialog = styled(Dialog)(({ theme }) => ({

}));




const steps = ["", "", ""];

const ReqAuthTab = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [open01, setOpen01] = useState(false);

  const isStepSkipped = (step: any) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handle01ClickOpen = () => {
    setOpen01(true);
  };

  const handle01Close = () => {
    setOpen01(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSteps = (step: any) => {
    switch (step) {
      case 0:
        // Request Authorization
        return (
          <Grid>
            <Box sx={{marginTop:"1.65rem",width:"100%"}}>
              <UsersForm>
                <Typography variant="h6" mt={2} mb={4} textAlign={"center"}>
                  설치 고객사 정보를 확인해 주세요.
                </Typography>
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
                <Typography variant="h6"  mt={6} mb={2} textAlign={"center"}>
                  새로운 고객사 정보를 확인해주세요.
                </Typography>
                <CrmSearchTypeA/>
                <Grid container spacing={3} mt={2}>
                  {/* 검색결과 */}
                  <Grid item xs={12} sm={12}>
                    <Box className="box-type-2">
                      <Typography>A03030303</Typography>
                      <Typography>삼성전자</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Box className="nodata">
                      <Typography>검색 결과 없음</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </UsersForm>
            </Box>
            <Button onClick={handleClickOpen}>1111</Button>
          </Grid>
        );
      case 1:
        // Select Authorization
        return (
          <Box sx={{marginTop:"1.65rem"}}>
          
          </Box>
        );
      case 2:
        // Confirm Authorization
        return (
          <Box sx={{marginTop:"1.65rem"}}>
 
          </Box>
        );
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Edit Details */}
      <Grid item xs={12}>
        <>
          <Box width="100%">
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                // if (isStepOptional(index)) {
                //   labelProps.optional = (
                //     <Typography variant="caption">Optional</Typography>
                //   );
                // }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }

                return (
                  <Step key={label + index} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {/* step */}
            <Box>{handleSteps(activeStep)}</Box>

            <Box display="flex" flexDirection="row" justifyContent="center" mt={3}>
              <Button
                color="inherit"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                className="btn-outline"
              >
                Back
              </Button>
              <Button
                onClick={
                  activeStep === steps.length - 1
                    ? handle01ClickOpen
                    : handleNext
                }
                variant="contained"
                color={
                  activeStep === steps.length - 1 ? "secondary" : "secondary"
                }
              >
                Next
              </Button>

              {/* modal popup*/}
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
              >
                <AppBar sx={{ position: 'relative' }}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                      Sound
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                      save
                    </Button>
                  </Toolbar>
                </AppBar>
                <List>
                  <ListItemButton>
                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <ListItemText
                      primary="Default notification ringtone"
                      secondary="Tethys"
                    />
                  </ListItemButton>
                </List>
              </Dialog>  
            </Box>
          </Box>
        </>
      </Grid>
    </Grid>
  );
};

export default ReqAuthTab;
