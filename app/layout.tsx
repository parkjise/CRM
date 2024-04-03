"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@/app/(core)/layout/shared/customizer/RTL";
import { ThemeSettings } from "@/utils/theme/Theme";
import { AppState, store } from "@/store/store";
import { useSelector } from "@/store/hooks";
import { Provider } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@/app/api/index";
import "@/utils/i18n";
import { NextAppDirEmotionCacheProvider } from "@/utils/theme/EmotionCache";
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/style.css";
import { useRouter } from "next/navigation";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { getCookie } from "@/utils/cookies/cookie";

const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings();

  const customizer = useSelector((state: AppState) => state.customizer);
  // const userInfo = useSelector((state) => state.userInfoReducer.userInfo);

  const router = useRouter();

  const cookieToken = getCookie("token");

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

  // if (a01 === "smt") {
  //   router.push("http://localhost:1100")
  // } else if (a01 === "tool") {
  //   router.push("http://localhost:1200")
  // }

  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "modernize" }}>
        <ThemeProvider theme={theme}>
          <RTL direction={customizer.activeDir}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </RTL>
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};

const persistor = persistStore(store);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  const CONST_CI_COLOR = "#F37321";

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {loading ? (
              // eslint-disable-next-line react/no-children-prop
              <MyApp children={children} />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                }}
              >
                <CircularProgress style={{ color: CONST_CI_COLOR }} />
              </Box>
            )}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
