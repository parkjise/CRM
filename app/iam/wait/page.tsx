"use client";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  Grid,
} from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import React, { ChangeEvent, useEffect, useState } from "react";
import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import { useDispatch, useSelector } from "@/store/hooks";
import { useFormik } from "formik";
import { REG_EXP } from "@/utils/constants/constant";
import { regexPhoneNumber } from "@/utils/common/regExLogic";
import {
  authEmailResponse,
  authSmsResponse,
  scrmCoreGetPhoneEmailAdmin,
  scrmCorePostAuthEmail,
  scrmCorePostAuthSms,
  scrmCoreUserWaitParams,
} from "@/store/apps/userInfo/UserInfoSlice";
import Autocomplete from "@mui/material/Autocomplete";
import countryCrmData from "@/app/(core)/components/forms/form-elements/autoComplete/countryCrmData";

const validate = (values: any) => {
  let errors = {
    email: "",
    phone: "",
  };

  const emailRegex = new RegExp(REG_EXP.EMAIL);
  if (!values.email) {
    errors.email = "Required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.phone === "") {
    errors.phone = "Required";
  } else if (!regexPhoneNumber(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  return errors;
};

export default function Wait() {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [open03, setOpen03] = useState(false);
  const [open04, setOpen04] = useState(false);

  const [button01Active, setButton01Active] = useState(false);
  const [button02Active, setButton02Active] = useState(false);
  const [button03Active, setButton03Active] = useState(false);

  const [selected01Value, setSelected01Value] = useState("0");
  const [selected02Value, setSelected02Value] = useState("0");

  const dispatch = useDispatch();

  const circleInfo: any = useSelector(
    (state) => state.userInfoReducer.circleInfo
  );

  useEffect(() => {
    dispatch(scrmCoreGetPhoneEmailAdmin() as any);
  }, [dispatch]);

  const adminPhoneRespEmail: any = useSelector(
    (state) => state.userInfoReducer.adminPhoneEmailResponse
  );

  const authRespEmail: any = useSelector(
    (state) => state.userInfoReducer.authEmailResponse
  );

  const authRespSms: any = useSelector(
    (state) => state.userInfoReducer.authSmsResponse
  );

  useEffect(() => {
    if (Object.keys(adminPhoneRespEmail).length > 0) {
      setButton01Active(adminPhoneRespEmail?.adminAuthentication);
      setButton02Active(adminPhoneRespEmail?.emailAuthentication);
      setButton03Active(adminPhoneRespEmail?.phoneAuthentication);
    }
  }, [adminPhoneRespEmail?.adminAuthentication]);

  useEffect(() => {
    if (authRespEmail?.message === "SUCCESS") {
      setOpen01(false);
      setOpen03(true);
    } else if (authRespEmail?.message === "FAIL") {
      alert("요청 실패");
    }
    return () => {
      dispatch(authEmailResponse({ message: "" }) as any);
    };
  }, [authRespEmail?.message]);

  useEffect(() => {
    if (authRespSms?.message === "SUCCESS") {
      setOpen02(false);
      setOpen04(true);
    } else if (authRespSms?.message === "FAIL") {
      alert("요청 실패");
    }
    return () => {
      dispatch(authSmsResponse({ message: "" }) as any);
    };
  }, [authRespSms?.message]);

  const emailFormik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      // not operation
    },
  });

  const phoneFormik = useFormik({
    initialValues: {
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      // not operation
    },
  });

  const filterByEmail = [
    {
      id: 0,
      label: `Send to : ${circleInfo.email}`,
      value: "0",
    },
    {
      id: 1,
      label: "Send to other",
      value: "1",
    },
  ];
  const filterByMobile = [
    {
      id: 0,
      label: `Send to : ${circleInfo.mobile}`,
      value: "0",
    },
    {
      id: 1,
      label: "Send to other",
      value: "1",
    },
  ];

  const handle01ClickOpen = () => {
    setOpen01(true);
  };

  const handle01Close = () => {
    setOpen01(false);
  };

  const [fin01Button, setFin01Button] = useState(0);
  const [fin02Button, setFin02Button] = useState(0);

  const handle01Finish = () => {
    if (selected01Value === "0") {
      setPhoneAuthCode({
        ...phoneAuthCode,
        email: circleInfo?.email,
        radioEmail: selected01Value,
      });
    } else if (
      selected01Value === "1" &&
      emailFormik.errors.email !== undefined &&
      emailFormik.errors.email === ""
    ) {
      setPhoneAuthCode({
        ...phoneAuthCode,
        email: emailFormik.values.email,
        radioEmail: selected01Value,
      });
    }
    setFin01Button(fin01Button + 1);
  };

  useEffect(() => {
    if (fin01Button !== 0) {
      dispatch(scrmCorePostAuthEmail(phoneAuthCode) as any);
    }
  }, [fin01Button]);

  const handle02ClickOpen = () => {
    setOpen02(true);
  };

  const handle02Close = () => {
    setOpen02(false);
  };

  const [countryCode, setCountryCode] = useState(countryCrmData[0].phone);

  const handle02Finish = () => {
    if (selected02Value === "0") {
      setPhoneAuthCode({
        ...phoneAuthCode,
        countryCode: countryCode,
        phone: circleInfo?.mobile,
        radioPhone: selected02Value,
      });
    } else if (
      selected02Value === "1" &&
      phoneFormik.errors.phone !== undefined &&
      phoneFormik.errors.phone === ""
    ) {
      setPhoneAuthCode({
        ...phoneAuthCode,
        countryCode: countryCode,
        phone: phoneFormik.values.phone,
        radioPhone: selected02Value,
      });
    }
    setFin02Button(fin02Button + 1);
  };

  useEffect(() => {
    if (fin02Button !== 0) {
      dispatch(scrmCorePostAuthSms(phoneAuthCode) as any);
    }
  }, [fin02Button]);
  const handle03Close = () => {
    setOpen03(false);
  };

  const handle04Close = () => {
    setOpen04(false);
  };

  const handlerSelected01Filter = (value: ChangeEvent<HTMLInputElement>) => {
    if (value.target.checked) {
      setSelected01Value(value.target.value);
    }
  };

  const handlerSelected02Filter = (value: ChangeEvent<HTMLInputElement>) => {
    if (value.target.checked) {
      setSelected02Value(value.target.value);
    }
  };

  const [phoneAuthCode, setPhoneAuthCode] = useState({
    countryCode: "82",
    phone: circleInfo.mobile,
    email: circleInfo.email,
    radioEmail: "",
    radioPhone: "",
  });

  useEffect(() => {
    dispatch(scrmCoreUserWaitParams(phoneAuthCode) as any);
  }, [
    dispatch,
    phoneAuthCode.countryCode,
    phoneAuthCode.phone,
    phoneAuthCode.email,
    phoneAuthCode.radioEmail,
    phoneAuthCode.radioPhone,
  ]);

  return (
    <PageContainer title="Wait Page" description="this is Sample page">
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <div className="account-activation">
          <div className="gra-bg">
            <div className="float">
              <div className="circle orange"></div>
              <div className="circle navy"></div>
            </div>
          </div>
          <div className="account-content">
            <div className="account-content-top">
              <h1 className="logo">
                <span className="hide">System Logo</span>
              </h1>
              <div className="lang">
                <div className="country">
                  {/*<span className="lang-en"></span>
                    <span className="lang-ko"></span>
                  <span className="lang-cn"></span> */}
                </div>
                <div className="lang">
                  <CountryCrmSelectAutocomplete />
                </div>
              </div>
            </div>
            <div className="account-content-bottom">
              <div className="bottom-left">
                <p>
                  <span>Few tasks are required to</span>
                  activate this account
                </p>
              </div>
              <div className="bottom-right">
                <ul>
                  <li>
                    <span className={button01Active ? "activate" : "disabled"}>
                      <i></i>
                      <span> Not Approved by admin yet.</span>
                    </span>
                  </li>
                  <li>
                    <span className={button02Active ? "activate" : "disabled"}>
                      <i></i>
                      <span>Email verification completed.</span>
                    </span>
                    <button
                      type="button"
                      className="h-btn small black"
                      onClick={handle01ClickOpen}
                    >
                      Details
                    </button>
                    {/*<button*/}
                    {/*  type="button"*/}
                    {/*  className="h-btn small black"*/}
                    {/*  onClick={handle03ClickOpen}*/}
                    {/*>*/}
                    {/*  팝업샘플*/}
                    {/*</button>*/}
                    <Dialog open={open01} onClose={handle01Close}>
                      <form onSubmit={emailFormik.handleSubmit}>
                        <Button onClick={handle01Close} className="pop-close">
                          <i className="ri-close-line"></i>
                        </Button>
                        {/* <DialogTitle>Subscribe</DialogTitle> */}
                        <DialogContent>
                          <DialogContentText
                            sx={{
                              fontSize: "18px",
                              color: "#868E96",
                              lineHeight: "140%",
                            }}
                          >
                            <p>
                              If the email has not been sent to your mail box{" "}
                              <span className="point">{circleInfo?.email}</span>
                              , please request verification email again.
                            </p>
                          </DialogContentText>

                          <Box
                            sx={{
                              borderTop: "1px solid #EFEFEF",
                              borderRadius: "0",
                              marginTop: "30px",
                              paddingTop: "20px",
                            }}
                          >
                            <FormGroup>
                              {filterByEmail.map((constData) => (
                                <FormControlLabel
                                  key={constData.label}
                                  control={
                                    <Radio
                                      checked={
                                        selected01Value === constData.value
                                      }
                                      value={constData.value || "0"}
                                      onChange={handlerSelected01Filter}
                                    />
                                  }
                                  label={constData.label}
                                />
                              ))}
                            </FormGroup>
                            <Box
                              sx={{
                                // display:"flex",
                                alignItems: "center",
                              }}
                            >
                              <CustomTextField
                                className="login-pop-input"
                                autoFocus
                                margin="dense"
                                label="Email Address"
                                fullWidth
                                id="email"
                                name="email"
                                value={emailFormik.values.email}
                                onChange={emailFormik.handleChange}
                                error={
                                  emailFormik.touched.email &&
                                  Boolean(emailFormik.errors.email)
                                }
                                helperText={
                                  emailFormik.touched.email &&
                                  emailFormik.errors.email
                                }
                                disabled={selected01Value === "0"}
                                sx={{
                                  marginTop: "0",
                                  marginBottom: "0",
                                  height: "53.13px",
                                  padding: "0",
                                  lineHeight: "53.13px",
                                }}
                                // onChange={handlerText01InputChange}
                              />
                            </Box>
                          </Box>
                        </DialogContent>
                        <DialogActions
                          sx={{
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handle01Finish}
                            type="submit"
                          >
                            Send Email
                          </Button>
                        </DialogActions>
                      </form>
                    </Dialog>
                  </li>
                  <li>
                    <span className={button03Active ? "activate" : "disabled"}>
                      <i></i>
                      <span>Mobile is not verified yet.</span>
                    </span>
                    <button
                      type="button"
                      className="h-btn small black"
                      onClick={handle02ClickOpen}
                    >
                      Details
                    </button>
                    <Dialog open={open02} onClose={handle02Close}>
                      <form onSubmit={phoneFormik.handleSubmit}>
                        <Button onClick={handle02Close} className="pop-close">
                          <i className="ri-close-line"></i>
                        </Button>
                        {/* <DialogTitle>Subscribe</DialogTitle> */}
                        <DialogContent>
                          <DialogContentText
                            sx={{
                              fontSize: "18px",
                              color: "#868E96",
                              lineHeight: "140%",
                            }}
                          >
                            If the text message has not been sent to your mobile
                            device{" "}
                            <span className="point"> {circleInfo?.mobile}</span>
                            , please request verification message again.
                          </DialogContentText>
                          <Box
                            sx={{
                              borderTop: "1px solid #EFEFEF",
                              borderRadius: "0",
                              marginTop: "30px",
                              paddingTop: "20px",
                            }}
                          >
                            <FormGroup>
                              {filterByMobile.map((constData) => (
                                <FormControlLabel
                                  key={constData.label}
                                  control={
                                    <Radio
                                      checked={
                                        selected02Value === constData.value
                                      }
                                      value={constData.value || "0"}
                                      onChange={handlerSelected02Filter}
                                    />
                                  }
                                  label={constData.label}
                                />
                              ))}
                            </FormGroup>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {/*<ComboCrmCountryCodeBox*/}
                              {/*  isDisabled={selected02Value}*/}
                              {/*/>*/}
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
                                disabled={selected02Value === "0"}
                                sx={{
                                  width: "100px",
                                  height: "100%",
                                  marginRight: "10px",
                                }}
                              />
                              <CustomTextField
                                className="login-pop-input"
                                autoFocus
                                margin="dense"
                                label="Phone Number"
                                fullWidth
                                id="phone"
                                name="phone"
                                value={phoneFormik.values.phone}
                                onChange={phoneFormik.handleChange}
                                error={
                                  phoneFormik.touched.phone &&
                                  Boolean(phoneFormik.errors.phone)
                                }
                                helperText={
                                  phoneFormik.touched.phone &&
                                  phoneFormik.errors.phone
                                }
                                disabled={selected02Value === "0"}
                                sx={{
                                  marginTop: "0",
                                  marginBottom: "0",
                                  height: "53.13px",
                                  padding: "0",
                                  lineHeight: "53.13px",
                                }}
                              />
                              {/*</Box>*/}
                            </Box>
                          </Box>
                        </DialogContent>
                        <DialogActions
                          sx={{
                            justifyContent: "center",
                          }}
                        >
                          {/* <Button color="error" onClick={handle02Close}>
                          Cancel
                        </Button> */}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handle02Finish}
                            type="submit"
                          >
                            Send Mesasge
                          </Button>
                        </DialogActions>
                      </form>
                    </Dialog>
                    {/* Popup sample */}
                    <Dialog open={open03} onClose={handle03Close}>
                      <Button onClick={handle03Close} className="pop-close">
                        <i className="ri-close-line"></i>
                      </Button>
                      {/* <DialogTitle>Subscribe</DialogTitle> */}
                      <DialogContent>
                        <DialogContentText
                          sx={{
                            fontSize: "18px",
                            color: "#868E96",
                            lineHeight: "140%",
                            textAlign: "center",
                          }}
                        >
                          Verification email has been
                          <br />
                          sent to{" "}
                          <span className="point">
                            {" "}
                            {circleInfo?.email ?? emailFormik.values.email}
                          </span>
                          <br />
                          <span className="point">
                            Please check your mailbox.
                          </span>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        {/* <Button color="error" onClick={handle02Close}>
                          Cancel
                        </Button> */}
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
                      <Button onClick={handle04Close} className="pop-close">
                        <i className="ri-close-line"></i>
                      </Button>
                      {/* <DialogTitle>Subscribe</DialogTitle> */}
                      <DialogContent>
                        <DialogContentText
                          sx={{
                            fontSize: "18px",
                            color: "#868E96",
                            lineHeight: "140%",
                            textAlign: "center",
                          }}
                        >
                          Verification message has been
                          <br />
                          sent to{" "}
                          <span className="point">
                            {phoneAuthCode.radioPhone === "0"
                              ? circleInfo?.mobile
                              : phoneFormik.values.phone}
                          </span>
                          <br />
                          <span className="point">
                            Please check your mobile device.
                          </span>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        {/* <Button color="error" onClick={handle02Close}>
                          Cancel
                        </Button> */}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handle04Close}
                        >
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </PageContainer>
  );
}

Wait.layout = "Blank";
