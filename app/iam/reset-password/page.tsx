"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import { createGlobalStyle } from "styled-components";

import React, { useEffect, useState } from "react";
import { REG_EXP, ROUTER_LINK } from "@/utils/constants/constant";
import { useFormik } from "formik";
import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";
import {
  passAndRepassResponse,
  scrmCoreResetYourPassword,
} from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";

const GlobalStyle = createGlobalStyle`
  .account-content{
    width: 500px;
    .here{
      &:link,&:visited{
        color: #272B2F;
      }
    }
    .account-content-bottom{
      div{
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

const validate = (values: any) => {
  let errors = {
    password: "",
    rePassword: "",
  };

  const passwordRegex = new RegExp(REG_EXP.PASSWORD);

  if (values.password === "") {
    errors.password = "Required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "The password must be 8 characters or more and contain uppercase and lowercase letters, numbers, and special characters";
  }
  if (values.rePassword === "") {
    errors.rePassword = "Required";
  } else if (values.password !== values.rePassword) {
    errors.rePassword = "Not a match password";
  }

  return errors;
};

export default function ResetPassword() {
  const dispatch = useDispatch();

  const params = useSearchParams();
  const router = useRouter();

  const [queryToken, setQueryToken] = useState(params.get("token"));

  const userPatchEmailFormik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
    },
    validate,
    onSubmit: (values) => {
      // not operation
    },
  });

  const passAndRepass: any = useSelector(
    (state: AppState) => state.userInfoReducer.passAndRepassResponse
  );

  const onclick = () => {
    if (
      userPatchEmailFormik.errors.password !== undefined &&
      userPatchEmailFormik.errors.password === "" &&
      userPatchEmailFormik.errors.rePassword !== undefined &&
      userPatchEmailFormik.errors.rePassword === ""
    ) {
      dispatch(
        scrmCoreResetYourPassword(
          userPatchEmailFormik.values.password,
          userPatchEmailFormik.values.rePassword,
          queryToken
        ) as any
      );
    }
  };

  useEffect(() => {
    if (passAndRepass?.message === "SUCCESS") {
      router.push(ROUTER_LINK.IAM_LOGIN);
    } else if (passAndRepass?.message === "FAIL") {
      alert("요청 실패");
    }
    return () => {
      dispatch(passAndRepassResponse({ message: "" }) as any);
    };
  }, [passAndRepass?.message]);

  return (
    <>
      <PageContainer
        title="Reset Password Page"
        description="Reset Password Page"
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
                  flexDirection="column"
                >
                  <form
                    id="userPatchEmailFormik"
                    onSubmit={userPatchEmailFormik.handleSubmit}
                  >
                    <Box>
                      <Typography variant="h3" fontWeight="500">
                        Reset your password.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        mt: 6,
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                      }}
                    >
                      <CustomTextField
                        type="password"
                        placeholder="Enter your password"
                        fullWidth
                        id="password"
                        name="password"
                        value={userPatchEmailFormik.values.password}
                        onChange={userPatchEmailFormik.handleChange}
                        error={
                          userPatchEmailFormik.touched.password &&
                          Boolean(userPatchEmailFormik.errors.password)
                        }
                        helperText={
                          userPatchEmailFormik.touched.password &&
                          userPatchEmailFormik.errors.password
                        }
                      />
                      <CustomTextField
                        type="password"
                        placeholder="Enter your password again."
                        fullWidth
                        margin="100px"
                        id="rePassword"
                        name="rePassword"
                        value={userPatchEmailFormik.values.rePassword}
                        onChange={userPatchEmailFormik.handleChange}
                        error={
                          userPatchEmailFormik.touched.rePassword &&
                          Boolean(userPatchEmailFormik.errors.rePassword)
                        }
                        helperText={
                          userPatchEmailFormik.touched.rePassword &&
                          userPatchEmailFormik.errors.rePassword
                        }
                      />
                    </Box>
                    <Button
                      color="primary"
                      variant="contained"
                      size="medium"
                      fullWidth
                      sx={{
                        marginTop: 4,
                      }}
                      type="submit"
                      onClick={onclick}
                    >
                      Reset Password
                    </Button>
                  </form>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
      </PageContainer>
    </>
  );
}

ResetPassword.layout = "Blank";
