"use client";
import Link from "next/link";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import AuthLogin from "../../auth/userForms/AuthLogin";
import { createGlobalStyle } from "styled-components";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import { useTranslation } from "react-i18next";
import { ROUTER_LINK } from "@/utils/constants/constant";

const GlobalStyle = createGlobalStyle`
  h3{
    text-align: center;
    font-size:2.25rem;
    font-weight:600;
  }
  @media(max-width:1200px) {
    h3{
      font-size:3rem;
      font-weight: 700;
    }
  }
`;

export default function Login() {
  const { t } = useTranslation();

  return (
    <PageContainer title="Login Page" description="this is Sample page">
      <GlobalStyle />
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={12} lg={6} xl={6} className="login-left">
          <Box className="login-left-bg">
            <div className="login-left-wrap">
              <div className="login-logo"></div>
              <div className="login-txt">
                <p>
                  Sustainable and
                  <span>
                    Inclusive <b>Growth</b>
                  </span>
                </p>
                <p>
                  We strive for social, economic, and
                  <br />
                  environmental prosperity for all.
                </p>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          xl={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#FBFBFB",
          }}
        >
          <Box p={4} className="login-form">
            <h3>{t("LogIn")}</h3>
            <AuthLogin
              subtitle={
                <Stack direction="row" spacing={1} mt={3}>
                  <Typography
                    component={Link}
                    href={ROUTER_LINK.IAM_MY_INFO}
                    fontWeight="500"
                    sx={{
                      textDecoration: "none",
                      textAlign: "center",
                      fontSize: "14px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      color: "#353968",
                      fontWeight: "600",
                    }}
                  >
                    Create an account
                  </Typography>
                </Stack>
              }
            />
            <Box>
              <Button
                className="login-btn-white"
                sx={{
                  marginTop: "1.875rem",
                }}
              >
                Just Look Around
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.875rem",
                paddingLeft: "0",
                paddingRight: "0",
              }}
            >
              <div className="lang">
                <CountryCrmSelectAutocomplete />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

Login.layout = "Blank";
