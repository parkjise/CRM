import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CrmAuthTextBoxBasicInformation from "@/app/(core)/components/crm/CrmAuthTextBoxBasicInformation";
import CrmAuthTextBoxSelectAuthorization from "@/app/(core)/components/crm/CrmAuthTextBoxSelectAuthorization";
import CrmAuthNew from "@/app/(core)/components/crm/CrmAuthNew";
import AppovalTab from "@/app/(core)/components/pages/account-setting/AppovalTab";
// components
// images
import ParentCard from "../../shared/ParentCard";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import BasicCrmTransferList from "@/app/(core)/components/ui-components/transfer-list/BasicCrmTransferList";
import styled from "styled-components";
import { REG_EXP, ROUTER_LINK } from "@/utils/constants/constant";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import CrmCheckBlue from "@/app/(core)/components/crm/CrmCheckBlue";
import CrmFailRed from "@/app/(core)/components/crm/CrmFailRed";
import CrmAuthTextarea from "@/app/(core)/components/crm/CrmAuthTextarea";
import { useRouter } from "next/navigation";
import countryCrmData from "@/app/(core)/components/forms/form-elements/autoComplete/countryCrmData";
import Autocomplete from "@mui/material/Autocomplete";
import { regexPhoneNumber, regexSixNumber } from "@/utils/common/regExLogic";
import {
  phoneCheckMessage,
  scrmCoreMyDrafter,
  scrmCorePhoneAuthMessage,
  scrmCorePhoneCheckMessage,
  scrmCorePostAuthApproval,
  scrmCoreUserHeadRegParams,
  userApplyApproveResponse,
} from "@/store/apps/userInfo/UserInfoSlice";

const TransferBtn = styled.div`
  margin-top: 20px;
`;
const RequestForm = styled.div``;
const CertificationNmber = styled.div`
  font-size: 14px;
`;

// 마지막 팝업 01/02
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

// 마지막 팝업 02/02

const steps = ["", "", "", ""];

interface CircleInfo {
  userName?: string;
  userNameEn?: string;
  email?: string;
  mobile?: string;
  company?: string;
  department?: string;
  countryCode?: string;
}

interface userHeadRegParamsInterface {
  email?: string;
  password?: string;
  retypePassword?: string;
  nameEn?: string;
  nameLo?: string;
  countryCode?: string;
  phone?: string;
  verifyPhone?: string;
  company?: string;
  department?: string;
  auth?: [] | any;
}

const validate = (values: any) => {
  let errors = {
    password: "",
    retypePassword: "",
    verifyMobile: "",
    //
    userName: "",
    userNameEn: "",
    email: "",
    mobile: "",
    company: "",
    department: "",
    countryCode: "",
  };

  const passwordRegex = new RegExp(REG_EXP.PASSWORD);

  if (values.password === "") {
    errors.password = "Required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "The password must be 8 characters or more and contain uppercase and lowercase letters, numbers, and special characters";
  }
  if (values.retypePassword === "") {
    errors.retypePassword = "Required";
  } else if (values.password !== values.retypePassword) {
    errors.retypePassword = "Not a match password";
  }

  if (values.mobile === "") {
    errors.mobile = "Required";
  } else if (!regexPhoneNumber(values.mobile)) {
    errors.mobile = "Invalid phone number";
  }

  if (values.verifyMobile === "") {
    errors.verifyMobile = "Required";
  } else if (!regexSixNumber(values.verifyMobile)) {
    errors.verifyMobile = "Invalid auth number";
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

  return errors;
};

const ReqAuthTab = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userHeadRegResponse: any = useSelector(
    (state: AppState) => state.userInfoReducer.userHeadRegResponse
  );

  const [activeStep, setActiveStep] = useState(0); // 지금 내가 보고 있는 tab
  const [skipped, setSkipped] = useState(new Set()); // 이동해야 할 tab

  const [open03, setOpen03] = useState(false);
  const [open04, setOpen04] = useState(false);

  const [checkAuths, setCheckAuths] = useState([] as Array<any>); // auth1 ~ auth10

  const [approveRequestPresetUsers, setApproveRequestPresetUsers] = useState(
    [] as Array<any>
  ); // 결재선에서 최종 request api 요청하기 전 마지막 state

  const [countryCode, setCountryCode] = useState(countryCrmData[0].phone); // 국가 지역 전화번호 코드
  const [userRegParams, setUserRegParams] =
    useState<userHeadRegParamsInterface>({}); // 회원가입 신청할 유저 정보

  const [minutes, setMinutes] = useState(5); // 타이머 초기 분
  const [seconds, setSeconds] = useState(0); // 타이머 초기 초
  const [isStarted, setIsStarted] = useState(false); // 타이머 시작 여부

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // 타이머 종료
            clearInterval(interval);
            setIsStarted(false);
            setMinutes(5);
            setSeconds(0);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isStarted, seconds]);

  const getFormattedTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  useEffect(() => {
    setUserRegParams({
      ...userRegParams,
      auth: checkAuths,
    });
  }, [checkAuths]);

  const toParentCheckedAuths = (num: []) => {
    setCheckAuths(num);
  };

  const userRegFormik0402 = useFormik({
    initialValues: {
      password: "",
      retypePassword: "",
      mobile: "",
      verifyMobile: "",
      userNameEn: "",
      userName: "",
    },
    validate,
    onSubmit: (values) => {
      // not operation
    },
  });

  const circleUserInfo: CircleInfo = useSelector(
    (state: AppState) => state.userInfoReducer.circleInfo
  );

  const isStepSkipped = (step: any) => skipped.has(step);

  const handleNext0104 = () => {
    if (!tempAuth) {
      alert("인증 필요");
    } else if (
      userRegFormik0402.errors.password !== undefined &&
      userRegFormik0402.errors.password === "" &&
      userRegFormik0402.errors.retypePassword !== undefined &&
      userRegFormik0402.errors.retypePassword === "" &&
      userRegFormik0402.errors.mobile !== undefined &&
      userRegFormik0402.errors.mobile === "" &&
      userRegFormik0402.errors.verifyMobile !== undefined &&
      userRegFormik0402.errors.verifyMobile === "" &&
      userRegFormik0402.errors.userNameEn !== undefined &&
      userRegFormik0402.errors.userNameEn === "" &&
      userRegFormik0402.errors.userName !== undefined &&
      userRegFormik0402.errors.userName === ""
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
  const handleNext0204 = () => {
    if (checkAuths.length === 0 || checkAuths[0] === "") {
      alert("권한을 선택하세요");
    } else {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };
  const handleNext0304 = async () => {
    await dispatch(scrmCoreUserHeadRegParams(userRegParams) as any);

    await dispatch(scrmCoreMyDrafter(userRegParams.email as string) as any);

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    // }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const userApplyRespApprove: any = useSelector(
    (state) => state.userInfoReducer.userApplyApproveResponse
  );
  const handle03ClickOpen = () => {
    dispatch(
      scrmCorePostAuthApproval(
        approveRequestPresetUsers,
        userHeadRegResponse.id as any
      ) as any
    );
  };

  useEffect(() => {
    if (userApplyRespApprove?.message === "SUCCESS") {
      setOpen03(true);
    } else if (userApplyRespApprove?.message === "FAIL") {
      setOpen04(true);
    }
    return () => {
      dispatch(userApplyApproveResponse({ message: "" }));
    };
  }, [userApplyRespApprove?.message]);

  const toParentApprovePresetUsers = (approvePresetUsers: Array<any>) => {
    setApproveRequestPresetUsers(approvePresetUsers);
  };

  const handle03Close = () => {
    router.push(ROUTER_LINK.IAM_WAIT);
    setOpen03(false);
  };
  const handle04Close = () => {
    setOpen04(false);
  };

  useEffect(() => {
    setUserRegParams({
      ...userRegParams,
      email: circleUserInfo.email,
      password: userRegFormik0402.values.password,
      retypePassword: userRegFormik0402.values.retypePassword,
      nameEn: userRegFormik0402.values.userNameEn,
      nameLo: userRegFormik0402.values.userName,
      countryCode: countryCode,
      phone: userRegFormik0402.values.mobile,
      verifyPhone: userRegFormik0402.values.verifyMobile,
      company: circleUserInfo.company,
      department: circleUserInfo.department,
    });
  }, [userRegFormik0402.values]);

  const [phoneAuthCode, setPhoneAuthCode] = useState({
    countryCode: "82",
    phone: "",
  });

  const [phoneCheckCode, setPhoneCheckCode] = useState({
    authCode: "",
    phone: "",
  });

  const onStartTimer = () => {
    if (!isStarted) {
      setIsStarted(true);
    }
    dispatch(scrmCorePhoneAuthMessage(phoneAuthCode) as any);
  };

  useEffect(() => {
    setPhoneAuthCode({
      ...phoneAuthCode,
      countryCode: countryCode,
      phone: userRegFormik0402.values.mobile,
    });

    setPhoneCheckCode({
      ...phoneCheckCode,
      phone: userRegFormik0402.values.mobile ?? "",
      authCode: userRegFormik0402.values.verifyMobile,
    });
  }, [
    countryCode,
    userRegFormik0402.values.mobile,
    userRegFormik0402.values.verifyMobile,
  ]);

  const phoneCheckResult: any = useSelector(
    (state: AppState) => state.userInfoReducer.phoneCheckMessage
  );

  const onAuthCheck = () => {
    dispatch(scrmCorePhoneCheckMessage(phoneCheckCode) as any);
    // setButton(button + 1);
  };

  const [tempAuth, setTempAuth] = useState(false);
  const [authComplete, setAuthComplete] = useState(false);

  useEffect(() => {
    if (phoneCheckResult.message === "SUCCESS") {
      setIsStarted(false);
      setMinutes(5);
      setSeconds(0);
      setTempAuth(true);
      setAuthComplete(true);
    }
    return () => {
      dispatch(phoneCheckMessage({}));
    };
  }, [phoneCheckResult.message]);

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
              <Typography variant="h6" mb={3}>
                Basic Information
              </Typography>
              <CrmAuthTextBoxBasicInformation />
              <form
                id="userRegIdFormik0402"
                onSubmit={userRegFormik0402.handleSubmit}
              >
                <Grid container rowSpacing={0} columnSpacing={3} mt={2}>
                  <Grid item xs={12} lg={12} pt={0}>
                    <CustomFormLabel htmlFor="fs-uname">
                      Your user ID / Email
                    </CustomFormLabel>
                    <CustomTextField
                      id="fs-uname"
                      placeholder=""
                      fullWidth
                      value={circleUserInfo.email}
                      disabled={!!circleUserInfo.email}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} pt={0}>
                    <CustomFormLabel htmlFor="fs-password">
                      Password
                    </CustomFormLabel>
                    <CustomTextField
                      placeholder="********"
                      fullWidth
                      type="password"
                      id="password"
                      name="password"
                      value={userRegFormik0402.values.password}
                      onChange={userRegFormik0402.handleChange}
                      error={
                        userRegFormik0402.touched.password &&
                        Boolean(userRegFormik0402.errors.password)
                      }
                      helperText={
                        userRegFormik0402.touched.password &&
                        userRegFormik0402.errors.password
                      }
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <CustomFormLabel htmlFor="fs-retypePassword">
                      Retype password
                    </CustomFormLabel>
                    <CustomTextField
                      placeholder="********"
                      fullWidth
                      type="password"
                      id="retypePassword"
                      name="retypePassword"
                      value={userRegFormik0402.values.retypePassword}
                      onChange={userRegFormik0402.handleChange}
                      error={
                        userRegFormik0402.touched.retypePassword &&
                        Boolean(userRegFormik0402.errors.retypePassword)
                      }
                      helperText={
                        userRegFormik0402.touched.retypePassword &&
                        userRegFormik0402.errors.retypePassword
                      }
                    />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <CustomFormLabel htmlFor="fs-uname">Mobile</CustomFormLabel>
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
                        disabled={authComplete}
                      />
                      <Button
                        variant="outlined"
                        className="btn-outline gray"
                        onClick={onStartTimer}
                        disabled={authComplete}
                      >
                        인증번호 발송
                      </Button>
                      <CustomTextField
                        placeholder="인증번호 입력"
                        fullWidth
                        id="verifyMobile"
                        name="verifyMobile"
                        value={userRegFormik0402.values.verifyMobile}
                        onChange={userRegFormik0402.handleChange}
                        error={
                          userRegFormik0402.touched.verifyMobile &&
                          Boolean(userRegFormik0402.errors.verifyMobile)
                        }
                        helperText={
                          userRegFormik0402.touched.verifyMobile &&
                          userRegFormik0402.errors.verifyMobile
                        }
                        disabled={authComplete}
                      />
                      <Box sx={{ padding: "0 10px" }}>
                        {getFormattedTime(minutes)}:{getFormattedTime(seconds)}{" "}
                      </Box>
                      <Button
                        variant="outlined"
                        className="btn-outline gray"
                        onClick={onAuthCheck}
                        disabled={authComplete}
                      >
                        인증
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <CustomFormLabel htmlFor="fs-userNameEn">
                      Your Fullname (EN, default)
                    </CustomFormLabel>
                    <CustomTextField
                      placeholder="John Doe"
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
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <CustomFormLabel htmlFor="fs-userName">
                      Your Fullname (Local language)
                    </CustomFormLabel>
                    <CustomTextField
                      placeholder="김한화"
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
                  </Grid>
                </Grid>
              </form>
            </Box>
          </RequestForm>
        );
      case 1:
        // Select Authorization
        return (
          <Box sx={{ marginTop: "1.65rem" }}>
            <Typography variant="h6" mb={3}>
              Basic Information
            </Typography>
            <CrmAuthTextBoxSelectAuthorization />
            <TransferBtn className="step-style">
              <BasicCrmTransferList
                toParentCheckedAuths={toParentCheckedAuths}
              />
            </TransferBtn>
          </Box>
        );
      case 2:
        // Confirm Authorization
        return (
          <Grid container item xs={12} sx={{ mt: 4 }}>
            <ParentCard title="Current Authorization">
              <>
                <Box
                  sx={{ textAlign: "center", display: "flex", gap: "5px" }}
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
                  {/*<CrmAuthDefault />*/}
                  {/*<CrmAuthDel />*/}
                </Box>
              </>
            </ParentCard>
          </Grid>
          // <ChildCard title="Filled">
          //   <InlineItemCard>
          //     <Chip label="Default Deletable" onDelete={handleDelete} />
          //   </InlineItemCard>
          // </ChildCard>
        );
      case 3:
        // Approval
        return (
          <Box sx={{ marginTop: "40px" }}>
            <AppovalTab
              toParentApprovePresetUsers={toParentApprovePresetUsers}
              toChildEmail={userRegParams.email}
            />
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
              {activeStep !== 0 && (
                <Button
                  color="inherit"
                  variant="contained"
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  className="btn-outline"
                >
                  Back
                </Button>
              )}
              {activeStep === 0 && (
                <Button
                  onClick={handleNext0104}
                  variant="contained"
                  color={"secondary"}
                  type="submit"
                  form="userRegIdFormik0402"
                  name="Next01/04"
                >
                  Next
                </Button>
              )}
              {activeStep === 1 && (
                <Button
                  onClick={handleNext0204}
                  variant="contained"
                  color={"secondary"}
                  name="Next02/04"
                >
                  Next
                </Button>
              )}
              {activeStep === 2 && (
                <Button
                  onClick={handleNext0304}
                  variant="contained"
                  color={"secondary"}
                  name="Next03/04"
                >
                  Next
                </Button>
              )}
              {activeStep === 3 && (
                <Button
                  onClick={handle03ClickOpen}
                  variant="contained"
                  color={"secondary"}
                  name="Next04/04"
                >
                  Next
                </Button>
              )}

              {/* modal popup*/}
              <Dialog open={open03} onClose={handle03Close}>
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
                      Your request for permission(s) has been sent to Groupware.
                      Your permission(s) will be activated after approval of
                      your request the email has not been
                    </p>
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
                    onClick={handle03Close}
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog open={open04} onClose={handle04Close}>
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
                      Your request for permission has not been sent to
                      Groupware. Please checkdetails and try again.
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handle04Close}
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

export default ReqAuthTab;
