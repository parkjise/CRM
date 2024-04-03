"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
} from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import CrmAuthForgotPassword from "../../auth/authForms/CrmAuthForgotPassword";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import { createGlobalStyle } from "styled-components";
import CrmCheckBlue from "@/app/(core)/components/crm/CrmCheckBlue";
import CrmFailRed from "@/app/(core)/components/crm/CrmFailRed";
import { useEffect, useState } from "react";
import { useSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import {
  forgotYourPasswordResponse,
  scrmCoreForgotYourPassword,
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
export default function ForgotPassword() {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

  const [emailAddress, setEmailAddress] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handle01ClickOpen = () => {
    setOpen01(true);
  };
  const handle01Close = () => {
    setOpen01(false);
    router.push(ROUTER_LINK.IAM_LOGIN);
  };
  const handle02Close = () => {
    setOpen02(false);
  };

  const toParentSendResetLinkButton = () => {
    if (emailAddress) {
      dispatch(scrmCoreForgotYourPassword(emailAddress) as any);
    }
  };

  const toParentEmailAddress = (etv: any) => {
    setEmailAddress(etv);
  };

  const forgotYourPassword: any = useSelector(
    (state) => state.userInfoReducer.forgotYourPasswordResponse
  );

  useEffect(() => {
    if (forgotYourPassword?.message === "SUCCESS") {
      setOpen01(true);
    } else if (forgotYourPassword?.message === "FAIL") {
      setOpen02(true);
    }
    return () => {
      dispatch(forgotYourPasswordResponse({ message: "" }) as any);
    };
  }, [forgotYourPassword?.message]);

  return (
    <>
      <PageContainer
        title="Forgot Password Page"
        description="this is Sample page"
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
                  <Box>
                    <Typography variant="h3" fontWeight="500">
                      Forgot your password?
                    </Typography>

                    <Typography
                      color="#7b7b7b"
                      variant="subtitle2"
                      fontWeight="400"
                      mt={2}
                    >
                      Please enter your email registered.
                    </Typography>
                    <CrmAuthForgotPassword
                      toParentSendResetLinkButton={toParentSendResetLinkButton}
                      toParentEmailAddress={toParentEmailAddress}
                    />
                    {/*<Box*/}
                    {/*  sx={{ marginTop: "30px", display: "flex", gap: "10px" }}*/}
                    {/*>*/}
                    {/*  <Button*/}
                    {/*    variant="outlined"*/}
                    {/*    className="btn-outline"*/}
                    {/*    onClick={handle01ClickOpen}*/}
                    {/*  >*/}
                    {/*    {" "}*/}
                    {/*    Popup01*/}
                    {/*  </Button>*/}
                    {/*  <Button*/}
                    {/*    variant="outlined"*/}
                    {/*    className="btn-outline"*/}
                    {/*    onClick={handle02ClickOpen}*/}
                    {/*  >*/}
                    {/*    {" "}*/}
                    {/*    Popup02*/}
                    {/*  </Button>*/}
                    {/*</Box>*/}
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
            <CrmCheckBlue />
            <p>Reset link has been sent to your mailbox.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          <Button variant="contained" color="primary" onClick={handle01Close}>
            Back to login page
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
            <p>Email is not registered.</p>
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
    </>
  );
}

ForgotPassword.layout = "Blank";
