import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AuthTextBox from "@/app/(core)/components/crm/CrmAuthTextBox";
import CustomOutlinedInput from "../../forms/theme-elements/CustomOutlinedInput";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import CustomCheckbox from "@/app/(core)/components/forms/theme-elements/CustomCheckbox";
import CrmCheckBlue from "@/app/(core)/components/crm/CrmCheckBlue";
// components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  FormGroup,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";

import styled from "styled-components";
import { useFormik } from "formik";
import countryCrmData from "@/app/(core)/components/forms/form-elements/autoComplete/countryCrmData";
import { regexPhoneNumber } from "@/utils/common/regExLogic";
import Autocomplete from "@mui/material/Autocomplete";
import { REG_EXP } from "@/utils/constants/constant";
import BasicCrmTransferList from "@/app/(core)/components/ui-components/transfer-list/BasicCrmTransferList";
import CrmAuthNew from "@/app/(core)/components/crm/CrmAuthNew";
import {
  outCorpUserRegResponse,
  scrmCoreOutCorpUserRegResponse,
} from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";

const RequestForm = styled.div``;
const CertificationNmber = styled.div`
  font-size: 14px;
`;

const UsersForm = styled.div`
  border-radius: 10px;
  border: 1px solid #dfe5ef;
  padding: 1.25rem;
`;

const steps = ["", "", ""];

const validate = (values: any) => {
  let errors = {
    userName: "",
    userNameEn: "",
    email: "",
    mobile: "",
  };

  const emailRegex = new RegExp(REG_EXP.EMAIL);

  if (values.mobile === "") {
    errors.mobile = "Required";
  } else if (!regexPhoneNumber(values.mobile)) {
    errors.mobile = "Invalid phone number";
  }

  if (values.userNameEn === "") {
    errors.userNameEn = "Required";
  } else if (values.userNameEn.length < 2) {
    errors.userNameEn = "The user-name(eng) must be 8 characters";
  }

  if (values.userName === "") {
    errors.userName = "Required";
  } else if (values.userName.length < 2) {
    errors.userName = "The name must be 8 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const AddUsers = (props: any) => {
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [addUserLayer, setAddUserLayer] = useState(false);
  const [check, setCheck] = useState(false);

  const [phoneAuthCode, setPhoneAuthCode] = useState({
    countryCode: "82",
    phone: "",
  });

  const [phoneCheckCode, setPhoneCheckCode] = useState({
    authCode: "",
    phone: "",
  });

  const isStepSkipped = (step: any) => skipped.has(step);

  const handleNext = () => {
    if (
      userRegFormik0402.errors.mobile !== undefined &&
      userRegFormik0402.errors.mobile === "" &&
      userRegFormik0402.errors.userNameEn !== undefined &&
      userRegFormik0402.errors.userNameEn === "" &&
      userRegFormik0402.errors.userName !== undefined &&
      userRegFormik0402.errors.userName === "" &&
      userRegFormik0402.errors.email !== undefined &&
      userRegFormik0402.errors.email === ""
    ) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handle01ClickOpen = async () => {
    if (check) {
      await dispatch(scrmCoreOutCorpUserRegResponse(userRegParams) as any);
    }
    // setAddUserLayer(true);
  };

  const outCorpUserRespReg: any = useSelector(
    (state: AppState) => state.userInfoReducer.outCorpUserRegResponse
  );

  useEffect(() => {
    if (Object.keys(outCorpUserRespReg).length > 0) {
      setAddUserLayer(true);
    }
    return () => {
      dispatch(outCorpUserRegResponse({}));
    };
  }, [outCorpUserRespReg.id]);

  const handle01Close = () => {
    setAddUserLayer(false);
    props.toParentCloseChildLayer();
  };

  const userRegFormik0402 = useFormik({
    initialValues: {
      userNameEn: "",
      userName: "",
      email: "",
      mobile: "",
    },
    validate,
    onSubmit: (values) => {
      // not operation
    },
  });

  const [userRegParams, setUserRegParams] = useState({} as any);
  const [countryCode, setCountryCode] = useState(countryCrmData[0].phone); // 국가 지역 전화번호 코드

  const [checkAuths, setCheckAuths] = useState([] as Array<any>); // auth1 ~ auth10

  useEffect(() => {
    setUserRegParams({
      ...userRegParams,
      nameEn: userRegFormik0402.values.userNameEn,
      nameLo: userRegFormik0402.values.userName,
      countryCode: countryCode,
      phone: userRegFormik0402.values.mobile,
      email: userRegFormik0402.values.email,
    });
  }, [userRegFormik0402.values]);

  useEffect(() => {
    setPhoneAuthCode({
      ...phoneAuthCode,
      countryCode: countryCode,
      phone: userRegFormik0402.values.mobile,
    });

    setPhoneCheckCode({
      ...phoneCheckCode,
      phone: userRegFormik0402.values.mobile ?? "",
    });
  }, [countryCode, userRegFormik0402.values.mobile]);

  const toParentCheckedAuths = (num: []) => {
    setCheckAuths(num);
  };

  useEffect(() => {
    setUserRegParams({
      ...userRegParams,
      auth: checkAuths,
    });
  }, [checkAuths]);

  const onParentDeleteClick = (index: any) => {
    const updatedRows = userRegParams.auth.filter(
      (str: any, idx: any) => idx !== index
    );
    setCheckAuths(updatedRows);
  };

  const handleSteps = (step: any) => {
    switch (step) {
      case 0:
        // Request Authorization
        return (
          <RequestForm className="popup-form">
            <Box sx={{ marginTop: "1.65rem" }}>
              <UsersForm className="popup-form">
                <Typography variant="h6" mb={3}>
                  Basic Information
                </Typography>
                <form
                  id="userRegIdFormik0402"
                  onSubmit={userRegFormik0402.handleSubmit}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Your Fullname (EN, default)
                      </CustomFormLabel>
                      <CustomTextField
                        placeholder="John Deo"
                        fullWidth
                        id="userNameEn"
                        name="userNameEn"
                        value={userRegFormik0402.values.userNameEn}
                        onChange={userRegFormik0402.handleChange}
                        error={
                          userRegFormik0402.touched.userNameEn &&
                          Boolean(userRegFormik0402.errors.userNameEn)
                        }
                        helperText={
                          userRegFormik0402.touched.userNameEn &&
                          userRegFormik0402.errors.userNameEn
                        }
                      />

                      <CustomFormLabel htmlFor="fs-email">
                        Email
                      </CustomFormLabel>
                      <CustomTextField
                        placeholder="abc.123@hanwha.com"
                        fullWidth
                        id="email"
                        name="email"
                        value={userRegFormik0402.values.email}
                        onChange={userRegFormik0402.handleChange}
                        error={
                          userRegFormik0402.touched.email &&
                          Boolean(userRegFormik0402.errors.email)
                        }
                        helperText={
                          userRegFormik0402.touched.email &&
                          userRegFormik0402.errors.email
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Your Fullname (Local language)
                      </CustomFormLabel>
                      <CustomTextField
                        placeholder="John Deo"
                        fullWidth
                        id="userName"
                        name="userName"
                        value={userRegFormik0402.values.userName}
                        onChange={userRegFormik0402.handleChange}
                        error={
                          userRegFormik0402.touched.userName &&
                          Boolean(userRegFormik0402.errors.userName)
                        }
                        helperText={
                          userRegFormik0402.touched.userName &&
                          userRegFormik0402.errors.userName
                        }
                      />
                      <CustomFormLabel htmlFor="fs-pwd">Mobile</CustomFormLabel>
                      <Box className="certification-num">
                        <Box sx={{ width: "120px" }}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={countryCrmData}
                            fullWidth
                            value={`+${countryCode ?? 82}`}
                            onChange={(event: any, newValue: any) => {
                              setCountryCode(newValue?.phone);
                            }}
                            renderInput={(params) => (
                              <CustomTextField
                                {...params}
                                placeholder="+82"
                                aria-label="+82"
                              />
                            )}
                            sx={{
                              width: "100px",
                              height: "100%",
                              marginRight: "10px",
                            }}
                          />
                        </Box>
                        <CustomTextField
                          placeholder="01011112222"
                          fullWidth
                          id="mobile"
                          name="mobile"
                          value={userRegFormik0402.values.mobile}
                          onChange={userRegFormik0402.handleChange}
                          error={
                            userRegFormik0402.touched.mobile &&
                            Boolean(userRegFormik0402.errors.mobile)
                          }
                          helperText={
                            userRegFormik0402.touched.mobile &&
                            userRegFormik0402.errors.mobile
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Company
                      </CustomFormLabel>
                      <Box className="certification-num">
                        <CustomTextField
                          id="fs-uname"
                          placeholder="John Deo"
                          fullWidth
                        />
                        <Button variant="outlined" className="btn-outline gray">
                          <i className="ri-arrow-left-right-line"></i>
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                        Business Area
                      </CustomFormLabel>
                      <CustomTextField id="fs-uname" placeholder="" fullWidth />
                    </Grid>
                  </Grid>
                </form>
              </UsersForm>
            </Box>
          </RequestForm>
        );
      case 1:
        // Select Authorization
        return (
          <Box sx={{ marginTop: "1.65rem" }}>
            <UsersForm className="popup-form">
              <Typography variant="h6" mb={3}>
                Permissions
              </Typography>
              <AuthTextBox />
              <Box className="step-style">
                <BasicCrmTransferList
                  toParentCheckedAuths={toParentCheckedAuths}
                />{" "}
              </Box>
            </UsersForm>
          </Box>
        );
      case 2:
        // Confirm Authorization
        return (
          <Box sx={{ marginTop: "1.65rem" }}>
            <UsersForm className="popup-form">
              <Typography variant="h6" mb={3}>
                Check Account Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                    Your Fullname (EN, default)
                  </CustomFormLabel>
                  <CustomTextField
                    id="fs-uname"
                    placeholder="John Deo"
                    fullWidth
                    value={userRegParams.nameEn}
                    disabled
                  />

                  <CustomFormLabel htmlFor="fs-email">Email</CustomFormLabel>
                  <CustomOutlinedInput
                    id="fs-email"
                    placeholder="john.deo"
                    fullWidth
                    value={userRegParams.email}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                    Your Fullname (Local language)
                  </CustomFormLabel>
                  <CustomTextField
                    id="fs-uname"
                    placeholder="John Deo"
                    fullWidth
                    value={userRegParams.nameLo}
                    disabled
                  />
                  <CustomFormLabel htmlFor="fs-pwd">Mobile</CustomFormLabel>
                  <Box className="certification-num">
                    <CustomTextField
                      id="fs-phone"
                      placeholder="123 4567 201"
                      fullWidth
                      value={`+${userRegParams.countryCode} ${userRegParams.phone}`}
                      disabled
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                    Company
                  </CustomFormLabel>
                  <Box className="certification-num">
                    <CustomTextField
                      id="fs-uname"
                      placeholder="John Deo"
                      fullWidth
                    />
                    <Button variant="outlined" className="btn-outline gray">
                      <i className="ri-arrow-left-right-line"></i>
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel htmlFor="fs-uname" sx={{ mt: 0 }}>
                    Company code
                  </CustomFormLabel>
                  <CustomTextField id="fs-uname" placeholder="" fullWidth />
                </Grid>
              </Grid>
              <Typography variant="h6" mt={5} mb={3}>
                Permissions
              </Typography>
              <Grid container spacing={3}>
                <Box
                  sx={{
                    padding: "24px",
                    display: "flex",
                    width: "100%",
                    gap: "10px",
                  }}
                  className="current-auth"
                >
                  {checkAuths.map((row, index) => (
                    <div key={index}>
                      <CrmAuthNew
                        toChildCheckedAuthName={row}
                        onParentDeleteClick={() => onParentDeleteClick(index)}
                      />
                    </div>
                  ))}
                </Box>
              </Grid>
              <Box>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        color="primary"
                        name="checkedA"
                        onClick={() => setCheck(!check)}
                      />
                    }
                    label="위 사람은 OOO 소속의 직원이며. 기재한 사항을 모두 확인하였습니다"
                  />
                </FormGroup>
              </Box>
            </UsersForm>
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

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              mt={3}
            >
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
                type="submit"
                form="userRegIdFormik0402"
              >
                Next
              </Button>

              {/* modal popup*/}
              <Dialog open={addUserLayer} onClose={handle01Close} maxWidth="xs">
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
                    <p>Your request has been sent.</p>
                  </DialogContentText>
                </DialogContent>
                <DialogActions
                  sx={{
                    justifyContent: "center",
                    paddingBottom: "2.4rem",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handle01Close}
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Box>
        </>
      </Grid>
    </Grid>
  );
};

export default AddUsers;
