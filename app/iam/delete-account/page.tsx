"use client";

import {
  Avatar,
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
import { IconMail } from "@tabler/icons-react";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import { createGlobalStyle } from "styled-components";
import CrmFailRed from "@/app/(core)/components/crm/CrmFailRed";
import CrmErrorRed from "@/app/(core)/components/crm/CrmErrorRed";
import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(core)/components/forms/theme-elements/CustomFormLabel";

import { useEffect, useState } from "react";
import { useSelector } from "@/store/hooks";
import {
  checkPasswordResponse,
  confirmCancellationResponse,
  scrmCorePostUsersCancellation,
  scrmCorePostUsersCheckPw,
} from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { CONST_STRING, ROUTER_LINK } from "@/utils/constants/constant";

const GlobalStyle = createGlobalStyle`
  .account-content{
    width: 800px;
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

  .modernize-1qb73d0-MuiGrid-root{
    justify-content:flex-start;
  }
  .MuiDialog-container {
    .MuiInputBase-root,.txt-box{
      width: 500px;
    }
    @media(max-width:1000px){
      .MuiInputBase-root,.txt-box{
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
export default function ForgotPassword() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

  const [checkPassword, setCheckPassword] = useState("");
  const [checkDeleteString, setCheckDeleteString] = useState("");

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
    router.push(ROUTER_LINK.IAM_LOGIN);
  };

  const checkRespPassword: any = useSelector(
    (state) => state.userInfoReducer.checkPasswordResponse
  );

  const confirmRespCancellation: any = useSelector(
    (state) => state.userInfoReducer.confirmCancellationResponse
  );

  const onCheckPassword = () => {
    if (checkPassword.length > 0) {
      dispatch(scrmCorePostUsersCheckPw(checkPassword) as any);
    } else {
      alert("입력하세요");
    }
  };
  const onDeleteaccount = () => {
    if (checkDeleteString === CONST_STRING.DELETE.ACCOUNT) {
      dispatch(scrmCorePostUsersCancellation() as any);
    } else {
      alert("일치 실패");
    }
  };

  useEffect(() => {
    if (checkRespPassword?.message === "SUCCESS") {
      setOpen01(true);
    } else if (checkRespPassword?.message === "FAIL") {
      alert("요청 실패");
    }
    return () => {
      dispatch(checkPasswordResponse({ message: "" }) as any);
    };
  }, [checkRespPassword?.message]);

  // logicWait => 삭제 시 상태값만 바꾸는 임시 로직으로 생성해놨음
  useEffect(() => {
    if (confirmRespCancellation?.message === "") {
      setOpen02(true);
    } else if (confirmRespCancellation?.message === "FAIL") {
      alert("요청 실패");
    }
    return () => {
      dispatch(confirmCancellationResponse({ message: "logicWait" }) as any);
    };
  }, [confirmRespCancellation?.message]);

  return (
    <>
      <PageContainer
        title="Delete Account Page"
        description="Delete Account Page"
      >
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
                  <Grid item lg={12}>
                    <Typography variant="h3" fontWeight="500">
                      For security purposes, please
                      <br />
                      re-enter your password below.
                    </Typography>
                    <Grid
                      container
                      sm={12}
                      alignItems={"center"}
                      justifyContent={"flex-start"}
                    >
                      <Grid xs={12} sm={6}>
                        <Stack
                          direction="column"
                          pt={8}
                          pb={3}
                          spacing={2}
                          alignItems="center"
                        >
                          <Avatar
                            src={"/images/profile/user-1.jpg"}
                            alt={"ProfileImg"}
                            sx={{ width: 95, height: 95 }}
                          />
                          <Box textAlign={"center"}>
                            <Typography
                              variant="subtitle2"
                              color="#272B2F"
                              fontWeight={600}
                            >
                              Mathew Anderson
                            </Typography>
                            <Typography variant="subtitle2" color="#7b7b7b">
                              Designer
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="#7b7b7b"
                              display="flex"
                              alignItems="center"
                              gap={1}
                            >
                              <IconMail width={15} height={15} />
                              info@modernize.com
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid xs={12} sm={6} alignItems="center">
                        <Box className="popup-form">
                          <CustomFormLabel htmlFor="reset-email">
                            Password
                          </CustomFormLabel>
                          <CustomTextField
                            id="reset-email"
                            variant="outlined"
                            placeholder="Enter your password"
                            fullWidth
                            type="password"
                            onChange={(event: any) =>
                              setCheckPassword(event.target.value)
                            }
                          />
                        </Box>
                        <Box sx={{ padding: "1.25rem 0", textAlign: "center" }}>
                          CAPTCHA
                        </Box>
                        <Button
                          color="primary"
                          variant="contained"
                          size="medium"
                          fullWidth
                          onClick={onCheckPassword}
                        >
                          Continue
                        </Button>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{ marginTop: "30px", display: "flex", gap: "10px" }}
                    >
                      <Button
                        variant="outlined"
                        className="btn-outline"
                        onClick={handle01ClickOpen}
                      >
                        {" "}
                        Popup01
                      </Button>
                      <Button
                        variant="outlined"
                        className="btn-outline"
                        onClick={handle02ClickOpen}
                      >
                        {" "}
                        Popup02
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
      </PageContainer>
      <Dialog open={open01} onClose={handle01Close} maxWidth="lg">
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
            <CrmErrorRed />
            <Grid item xs={12}>
              <Box
                className="txt-box"
                sx={{
                  border: "1px solid #DFE5EF",
                  padding: "1.25rem",
                  fontSize: "14px",
                  color: "#7b7b7b",
                  "& a,b": {
                    color: "#272B2F",
                    fontWeight: "500",
                  },
                }}
              >
                Are you sure you want to delete your account? Deleting your{" "}
                <a href="#">hg.bak@hanwha.com</a> account will delete all your
                activities you have created. You cannot undo this operation. For
                more information about how we treat your data, please see our
                <a href="#"> Privacy Policy</a>. To confirm, please type
                <b> delete my account</b> below.
              </Box>
            </Grid>
            <Grid item xs={12} mt={4}>
              <CustomTextField
                id=""
                variant="outlined"
                placeholder="delete my account"
                fullWidth
                onChange={(event: any) =>
                  setCheckDeleteString(event.target.value)
                }
              />
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            className="btn-outline"
            onClick={handle01Close}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={onDeleteaccount}>
            Delete account
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
            <p>Your account and personal information has been deleted.</p>
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
            Go Back to Main Page
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ForgotPassword.layout = "Blank";
