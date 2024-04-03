"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import HeaderCrm from "./layout/vertical/header/HeaderCrm";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Customizer from "./layout/shared/customizer/Customizer";
import Navigation from "./layout/horizontal/navbar/Navigation";
import HorizontalHeader from "./layout/horizontal/header/Header";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookies/cookie";

// const MainWrapper = styled("div")(() => ({
//   display: "flex",
//   minHeight: "100vh",
//   width: "100%",
// }));

// const PageWrapper = styled("div")(() => ({
//   display: "flex",
//   flexGrow: 1,
//   paddingBottom: "60px",
//   flexDirection: "column",
//   zIndex: 1,
//   width: "100%",
//   backgroundColor: "transparent",
// }));
const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();
  const router = useRouter();

  const cookieToken = getCookie("token");

  // if (a01 === "smt") {
  //   router.push("http://localhost:1100")
  // } else if (a01 === "tool") {
  //   router.push("http://localhost:1200")
  // }

  const userInfo = useSelector((state) => state.userInfoReducer.userInfo);

  // redux-persist의 기능 중에 rehydrate 기능이 있어서 '새로고침'하여도 redux의 값들이 유지가 됨

  // if (
  //   userInfo === "" ||
  //   userInfo === undefined ||
  //   Object.keys(userInfo).length === 0
  // ) {
  //   router.push(ROUTER_LINK.IAM_LOGIN);
  // }
  // if (cookieToken === "" || cookieToken === undefined || cookieToken === null) {
  //   router.push(ROUTER_LINK.IAM_LOGIN);
  // }

  // useEffect(() => {
  //   if (
  //     cookieToken === "" ||
  //     cookieToken === undefined ||
  //     cookieToken === null
  //   ) {
  //     router.replace(ROUTER_LINK.IAM_LOGIN);
  //   }
  // }, []);

  const CONST_SERVICE_NAME = "S-CRM Admin";

  return (
    <MainWrapper>
      {/*<title>Service-CRM core</title>*/}
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      {customizer.isHorizontal ? "" : <Sidebar />}
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper
        className="page-wrapper"
        sx={{
          ...(customizer.isCollapse && {
            [theme.breakpoints.up("lg")]: {
              ml: `${customizer.MiniSidebarWidth}px`,
            },
          }),
        }}
      >
        {/* ------------------------------------------- */}
        {/* HeaderCrm */}
        {/* ------------------------------------------- */}
        {customizer.isHorizontal ? <HorizontalHeader /> : <HeaderCrm />}
        {/* PageContent */}
        {customizer.isHorizontal ? <Navigation /> : ""}
        <Container
          sx={{
            maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",      
          }}
        >
          {/* ------------------------------------------- */}
          {/* PageContent */}
          {/* ------------------------------------------- */}

          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            {/* <Outlet /> */}
            {children}
            {/* <Index /> */}
          </Box>

          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Container>
        <Customizer />
      </PageWrapper>
    </MainWrapper>
  );
}
