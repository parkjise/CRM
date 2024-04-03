import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "@/store/hooks";
import {
  toggleMobileSidebar,
  toggleSidebar,
} from "@/store/customizer/CustomizerSlice";
import { IconMenu2 } from "@tabler/icons-react";
import ProfileCrm from "./ProfileCrm";
import { AppState } from "@/store/store";

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={
            lgUp
              ? () => dispatch(toggleSidebar())
              : () => dispatch(toggleMobileSidebar())
          }
        >
          <IconMenu2 size="20" />
        </IconButton>

        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
        {/*<Search />*/}
        {/*{lgUp ? (*/}
        {/*  <>*/}
        {/*    <Navigation />*/}
        {/*  </>*/}
        {/*) : null}*/}

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {/*<Language />*/}
          {/*/!* ------------------------------------------- *!/*/}
          {/*/!* Ecommerce Dropdown *!/*/}
          {/*/!* ------------------------------------------- *!/*/}
          {/*<Cart />*/}
          {/*/!* ------------------------------------------- *!/*/}
          {/*/!* End Ecommerce Dropdown *!/*/}
          {/*/!* ------------------------------------------- *!/*/}
          {/*<Notifications />*/}
          {/*/!* ------------------------------------------- *!/*/}
          {/*/!* Toggle Right Sidebar for mobile *!/*/}
          {/*/!* ------------------------------------------- *!/*/}
          {/*{lgDown ? <MobileRightSidebar /> : null}*/}
          <ProfileCrm />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
