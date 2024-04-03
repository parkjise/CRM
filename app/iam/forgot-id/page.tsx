"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import CrmAuthForgotId from "../../auth/authForms/CrmAuthForgotId";
import { createGlobalStyle } from "styled-components";
import CrmCheckBlue from "@/app/(core)/components/crm/CrmCheckBlue";
import CrmFailRed from "@/app/(core)/components/crm/CrmFailRed";
import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";
import React, { useEffect, useState } from "react";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { useDispatch } from "react-redux";
import {
  digits6Response,
  findedMyEmailResponse,
  scrmCore6DigitsCodeYouReceived,
} from "@/store/apps/userInfo/UserInfoSlice";
import { useRouter } from "next/navigation";
import { ROUTER_LINK } from "@/utils/constants/constant";

const GlobalStyle = createGlobalStyle`
  .account-content{
    width: auto;
    .here{
      &:link,&:visited{
        color: #272B2F;
      }
    }
    .account-content-bottom{
      > div{
        width: 100%;
      }
    }
  }
  @media(max-width:1000px){
    .account-content{
      width: 90%;
    }
  }
`;
export default function ForgotEmail() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [open03, setOpen03] = useState(false);
  const [open04, setOpen04] = useState(false);
  const [open05, setOpen05] = useState(false);

  const [digitNum, setDigitNum] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
  });

  const [finDigitNumber, setFinDigitNumber] = useState("");

  useEffect(() => {
    setFinDigitNumber(
      digitNum.num1 +
        digitNum.num2 +
        digitNum.num3 +
        digitNum.num4 +
        digitNum.num5 +
        digitNum.num6
    );
  }, [digitNum, finDigitNumber]);

  const [phone, setPhone] = useState("");

  const handle01Close = () => {
    setOpen01(false);
  };

  const handle02Close = () => {
    setOpen02(false);
  };
  const handle03Close = () => {
    setOpen03(false);
  };
  const handle04ClickOpen = () => {
    setOpen04(true);
  };
  const handle04Close = () => {
    setOpen04(false);
  };
  const handle05Close = () => {
    setOpen05(false);
  };

  const emailResult: any = useSelector(
    (state: AppState) => state.userInfoReducer.findedMyEmailResponse
  );

  useEffect(() => {
    if (emailResult?.message === "SUCCESS") {
      setOpen01(true); // 6 digits
    } else if (emailResult?.message === "NOT_REGISTERED_PHONE") {
      setOpen02(true);
    }
    return () => {
      dispatch(findedMyEmailResponse({ message: "" }) as any);
    };
  }, [emailResult?.message]);

  const handle01VerifyCode = async () => {
    if (finDigitNumber.length === 6) {
      await dispatch(
        scrmCore6DigitsCodeYouReceived(finDigitNumber, phone) as any
      );
    } else {
      // alert("6자리를 정확히 입력해주세요.");
      setOpen05(true);
    }
  };

  const digits6Result: any = useSelector(
    (state: AppState) => state.userInfoReducer.digits6Response
  );

  useEffect(() => {
    if (digits6Result?.message === "SUCCESS") {
      setOpen01(false); // 6 digits
      setOpen04(true);
    } else if (digits6Result?.message === "FAIL") {
      setOpen05(true);
    }
    return () => {
      dispatch(digits6Response({ message: "" }) as any);
    };
  }, [digits6Result?.message]);

  const toParentPhone = (param: any) => {
    setPhone(param);
  };

  const onGoForgotPw = () => {
    router.push(ROUTER_LINK.IAM_FORGOT_PW);
  };

  const onGoLoginPage = () => {
    router.push(ROUTER_LINK.IAM_LOGIN);
  };

  const toParentValidPhoneFrom = () => {
    setOpen03(true);
  };

  return (
    <>
      <PageContainer title="Forgot ID Page" description="Forgot ID Page">
        <GlobalStyle />
        <Grid
          container
          justifyContent="center"
          spacing={0}
          sx={{ overflowX: "hidden" }}
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
                  <CountryCrmSelectAutocomplete />
                </div>
              </div>
              <div className="account-content-bottom">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  xl={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h3" fontWeight="500">
                      Forgot your email?
                    </Typography>

                    <Typography
                      color="#7b7b7b"
                      variant="subtitle2"
                      fontWeight="400"
                      mt={2}
                    >
                      Please enter your mobile number to find your email.
                    </Typography>
                    <CrmAuthForgotId
                      toParentPhone={toParentPhone}
                      toParentValidPhoneFrom={toParentValidPhoneFrom}
                    />
                    <Box
                      sx={{
                        marginTop: "30px",
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      {/*<Button*/}
                      {/*  variant="outlined"*/}
                      {/*  className="btn-outline"*/}
                      {/*  onClick={handle01ClickOpen}*/}
                      {/*>*/}
                      {/*  {" "}*/}
                      {/*  Popup01*/}
                      {/*</Button>*/}
                      {/*<Button*/}
                      {/*  variant="outlined"*/}
                      {/*  className="btn-outline"*/}
                      {/*  onClick={handle02ClickOpen}*/}
                      {/*>*/}
                      {/*  {" "}*/}
                      {/*  Popup02*/}
                      {/*</Button>*/}
                      {/*<Button*/}
                      {/*  variant="outlined"*/}
                      {/*  className="btn-outline"*/}
                      {/*  onClick={handle03ClickOpen}*/}
                      {/*>*/}
                      {/*  {" "}*/}
                      {/*  Popup03*/}
                      {/*</Button>*/}
                      <Button
                        variant="outlined"
                        className="btn-outline"
                        onClick={handle04ClickOpen}
                      >
                        {" "}
                        Popup04
                      </Button>
                      {/*<Button*/}
                      {/*  variant="outlined"*/}
                      {/*  className="btn-outline"*/}
                      {/*  onClick={handle05ClickOpen}*/}
                      {/*>*/}
                      {/*  {" "}*/}
                      {/*  Popup05*/}
                      {/*</Button>*/}
                    </Box>
                  </Box>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
      </PageContainer>
      <Dialog open={open01} onClose={handle01Close} maxWidth="xs">
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
            <Box>Enter 6 digits code you received.</Box>
            <Stack spacing={2} direction="row" marginTop={4}>
              <CustomTextField
                id="code"
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                onChange={(event: any) =>
                  setDigitNum({ ...digitNum, num1: event.target.value })
                }
              />
              <CustomTextField
                id="code"
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                onChange={(event: any) =>
                  setDigitNum({ ...digitNum, num2: event.target.value })
                }
              />
              <CustomTextField
                id="code"
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                onChange={(event: any) =>
                  setDigitNum({ ...digitNum, num3: event.target.value })
                }
              />
              <CustomTextField
                id="code"
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                onChange={(event: any) =>
                  setDigitNum({ ...digitNum, num4: event.target.value })
                }
              />
              <CustomTextField
                id="code"
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                onChange={(event: any) =>
                  setDigitNum({ ...digitNum, num5: event.target.value })
                }
              />
              <CustomTextField
                id="code"
                variant="outlined"
                fullWidth
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                onChange={(event: any) =>
                  setDigitNum({ ...digitNum, num6: event.target.value })
                }
              />
            </Stack>
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
            onClick={handle01VerifyCode}
          >
            Verify code
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
            <CrmFailRed />
            <Box>Mobile number is not registered</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
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
            <Box>Please check the number format again.</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          <Button variant="contained" color="primary" onClick={handle03Close}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open04} onClose={handle04Close} maxWidth="xs">
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
            <Box>
              Your email address is
              <p>xxxx@xxxx.net</p>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
            flexDirection: "column",
            Direction: "column",
          }}
        >
          <Button variant="contained" color="primary" onClick={onGoLoginPage}>
            Back to login page
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="btn-outline"
            sx={{ mt: 4 }}
            onClick={onGoForgotPw}
          >
            Or, I need to find my password
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open05} onClose={handle05Close} maxWidth="xs">
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
            <Box>Verification code is not valid.</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          <Button variant="contained" color="primary" onClick={handle05Close}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ForgotEmail.layout = "Blank";
