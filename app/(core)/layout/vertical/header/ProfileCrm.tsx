import Link from "next/link";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import * as dropdownData from "./data";
import { IconMail } from "@tabler/icons-react";
import { Stack } from "@mui/system";
import { scrmCoreLogout } from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ROUTER_LINK } from "@/utils/constants/constant";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const onScrmCoreLogout = () => {
    dispatch(scrmCoreLogout() as any);
    router.refresh();
  };

  const onScrmCoreGoDeleteMyAccount = () => {
    router.push(ROUTER_LINK.IAM_DELETE_ACCOUNT);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={"/images/profile/user-1.jpg"}
          alt={"ProfileImg"}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "360px",
            p: 4,
          },
        }}
      >
        {/* <Typography variant="h5">User Profile</Typography> */}
        <Stack direction="column" pb={3} spacing={2} alignItems="center">
          <Avatar
            src={"/images/profile/user-1.jpg"}
            alt={"ProfileImg"}
            sx={{ width: 95, height: 95 }}
          />
          <Box textAlign={"center"}>
            <Typography variant="subtitle2" color="#272B2F" fontWeight={600}>
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
        <Divider />
        {dropdownData.profile.map((profile) => (
          <Box key={profile.title}>
            <Box sx={{ py: 2, px: 0 }} className="hover-text-primary">
              <Link href={profile.href}>
                <Stack direction="row" spacing={2}>
                  <Box
                    width="45px"
                    height="45px"
                    // bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink="0"
                  >
                    <Avatar
                      src={profile.icon}
                      alt={profile.icon}
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      className="text-hover"
                      noWrap
                      sx={{
                        width: "240px",
                      }}
                    >
                      {profile.title}
                    </Typography>
                    <Typography
                      color="#7b7b7b"
                      variant="subtitle2"
                      sx={{
                        width: "240px",
                      }}
                      noWrap
                    >
                      {profile.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </Link>
            </Box>
          </Box>
        ))}
        <Box mt={2}>
          {/*<Box bgcolor="primary.light" p={3} mb={3} overflow="hidden" position="relative">*/}
          {/*  <Box display="flex" justifyContent="space-between">*/}
          {/*    <Box>*/}
          {/*      <Typography variant="h5" mb={2}>*/}
          {/*        Unlimited <br />*/}
          {/*        Access*/}
          {/*      </Typography>*/}
          {/*      <Button variant="contained" color="primary">*/}
          {/*        Upgrade*/}
          {/*      </Button>*/}
          {/*    </Box>*/}
          {/*    <Image src={"/images/backgrounds/unlimited-bg.png"} width={150} height={183} alt="unlimited" className="signup-bg" />*/}
          {/*  </Box>*/}
          {/*</Box>*/}
          <Button
            variant="outlined"
            fullWidth
            onClick={onScrmCoreGoDeleteMyAccount}
            className="btn-outline gray"
            sx={{
              color: "#272B2F",
            }}
          >
            Delete my account
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={onScrmCoreLogout}
            className="btn-outline"
            sx={{
              color: "#272B2F",
              mt: 1,
            }}
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
