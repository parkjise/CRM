import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { loginType } from "@/app/(core)/types/auth/auth";
import CustomCheckbox from "@/app/(core)/components/forms/theme-elements/CustomCheckbox";
import CustomCrmFormLabel from "@/app/(core)/components/forms/theme-elements/CustomCrmFormLabel";
import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import InputAdornment from "@mui/material/InputAdornment";
import { IconEye, IconEyeOff, IconLock, IconMail } from "@tabler/icons-react";
import { useSelector } from "@/store/hooks";
import { getCookie } from "@/utils/cookies/cookie";
import { REG_EXP, ROUTER_LINK } from "@/utils/constants/constant";
import {
  scrmCoreCircleInfo,
  scrmCoreCountryUserHere,
  scrmCoreLogin,
} from "@/store/apps/userInfo/UserInfoSlice";
import { setRememberThisDevice } from "@/store/customizer/CustomizerSlice";
import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";

interface CircleInfo {
  userName?: string;
  userNameEn?: string;
  email?: string;
  mobile?: string;
  company?: string;
  department?: string;
  countryCode?: string;
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // C:\Users\HAPM\WebstormProjects\ouranos-main\src\components\forms\loginForm\LoginForm.tsx
  const [userId, setUserId] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [isValidLogin, setIsValidLogin] = useState(0);
  const [isPushLoginButton, setIsPushLoginButton] = useState(0);

  const userInfo = useSelector((state) => state.userInfoReducer.userInfo);
  const customizer = useSelector((state) => state.customizer);

  const cookieToken = getCookie("token");

  const [showPassword, setShowPassword] = useState(false);

  const [state, setState] = useState({
    checkedA: false,
  });

  const [circleId, setCircleId] = useState(""); // 20240133

  const [open01, setOpen01] = useState(false);

  const handle01ClickOpen = () => {
    setOpen01(true);
  };

  const handle01Close = () => {
    setOpen01(false);
  };

  const onTempCircle = () => {
    dispatch(scrmCoreCircleInfo(circleId) as any);
    setOpen01(false);
  };

  const handleChange = (event: any) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(setRememberThisDevice(event.target.checked));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onScrmCoreLogin = () => {
    // if (userId.value.length === 0 || password.value.length === 0) {
    //   alert("이메일 또는 패스워드를 입력하세요.");
    // } else {
    //   dispatch(
    //     scrmCoreLogin(
    //       userId.value,
    //       password.value,
    //       customizer.setRememberThisDevice as boolean
    //     ) as any
    //   );
    // }
    if (isValidLogin === 1) {
      dispatch(
        scrmCoreLogin(
          userId.value,
          password.value,
          customizer.setRememberThisDevice as boolean
        ) as any
      );
    } else if (userId.value.length === 0 || password.value.length === 0) {
      alert("이메일 또는 패스워드를 입력하세요.");
    }
  };

  useEffect(() => {
    // if (Object.keys(userInfo).length !== 0) {
    if (cookieToken !== "" && cookieToken !== null) {
      router.push(ROUTER_LINK.MAIN);
    }
  });
  // useEffect(() => {
  //   if (Object.keys(userInfo).length !== 0) {
  //     router.replace("/");
  //   }
  // }, [userInfo]);

  useEffect(() => {
    // 이메일 형식 유효성 검사
    const emailRegex = new RegExp(REG_EXP.EMAIL);
    if (userId.value?.length !== 0) {
      if (!emailRegex.test(userId.value)) {
        setUserId({ ...userId, error: "1" });
        setIsValidLogin(0);
      } else {
        setUserId({ ...userId, error: "" });
        setIsValidLogin(1);
      }
    } else {
      setUserId({ ...userId, error: "" });
      setIsValidLogin(0);
    }

    // 비밀번호 유효성 검사
    const passwordRegex = new RegExp(REG_EXP.PASSWORD);

    if (password.value?.length !== 0) {
      if (!passwordRegex.test(password.value)) {
        setPassword({ ...password, error: "1" });
        setIsValidLogin(0);
      } else {
        setPassword({ ...password, error: "" });
        setIsValidLogin(1);
      }
    } else {
      setPassword({ ...password, error: "" });
      setIsValidLogin(0);
    }
  }, [userId.value, password.value]);

  const onScrmCoreHandleUserIdInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setUserId({ ...userId, value: event.target.value });
  };

  const onScrmCoreHandlePasswordInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPassword({ ...password, value: event.target.value });
  };

  useEffect(() => {
    dispatch(scrmCoreCountryUserHere() as any);
  }, [dispatch]);

  const onEnterKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onScrmCoreLogin();
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      {/* <AuthSocialButtons title="Sign in with" /> */}
      <Box mt={3}>
        {/* <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign in with
          </Typography>
        </Divider> */}
      </Box>

      <Stack>
        <Box>
          <CustomCrmFormLabel htmlFor="username">Email</CustomCrmFormLabel>
          <OutlinedInput
            sx={{
              backgroundColor: "#fff",
            }}
            startAdornment={
              <InputAdornment position="start">
                <IconMail width={20} />
              </InputAdornment>
            }
            id="username"
            placeholder="Enter your Email address"
            fullWidth
            onChange={onScrmCoreHandleUserIdInputChange}
            error={!!userId.error}
          />
          {!!userId.error ? (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {"The email format is incorrect"}
            </FormHelperText>
          ) : (
            <FormHelperText> </FormHelperText>
          )}
        </Box>
        <Box>
          <CustomCrmFormLabel htmlFor="password">Password</CustomCrmFormLabel>
          <OutlinedInput
            sx={{
              backgroundColor: "#fff",
            }}
            startAdornment={
              <InputAdornment position="start">
                <IconLock width={20} />
              </InputAdornment>
            }
            id="password"
            placeholder="Enter your password"
            fullWidth
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!showPassword ? (
                    <IconEyeOff size="20" />
                  ) : (
                    <IconEye size="20" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            onChange={onScrmCoreHandlePasswordInputChange}
            error={!!password.error}
            onKeyDown={onEnterKeyPress}
          />
          {!!password.error ? (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {
                "The password must be 8 characters or more and contain uppercase and lowercase letters, numbers, and special characters"
              }
            </FormHelperText>
          ) : (
            <FormHelperText> </FormHelperText>
          )}
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <CustomCheckbox
                  color="primary"
                  checked={customizer.setRememberThisDevice}
                  onClick={handleChange}
                  name="checkedA"
                />
              }
              label="Remember this Device"
            />
          </FormGroup>
          <Typography
            component={Link}
            href={ROUTER_LINK.IAM_FORGOT_PW}
            fontWeight="400"
            sx={{
              textDecoration: "none",
              // color: "scrmPrimary.main",
              // color: "primary.main",
            }}
          >
            <span className="forgot-txt">Forgot Password ?</span>
          </Typography>
          <span className="forgot-txt" onClick={handle01ClickOpen}>
            ?
          </span>
        </Stack>
      </Stack>
      <Box>
        <Button
          className="login-btn-orange"
          // color="scrmPrimary"
          // variant="contained"
          // size="large"
          // fullWidth
          // // component={Link}
          // // href={ROUTER_LINK.MAIN}
          onClick={onScrmCoreLogin}
          // type="submit"
        >
          Sign In
        </Button>
      </Box>

      {/*임시 circle 정보*/}
      <Dialog open={open01} onClose={handle01Close}>
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
              서클 링크 접속 -{" "}
              <span className="point"> 사원 번호 ex)20240138</span>, please
              request verification id.
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
            <FormGroup></FormGroup>
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
                label="사원 번호"
                fullWidth
                id="employeeNum"
                name="employeeNum"
                value={circleId}
                sx={{
                  marginTop: "0",
                  marginBottom: "0",
                  height: "53.13px",
                  padding: "0",
                  lineHeight: "53.13px",
                }}
                onChange={(e: any) => setCircleId(e.target.value)}
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
            onClick={onTempCircle}
            type="submit"
          >
            서클 접속 세팅 실행
          </Button>
        </DialogActions>
      </Dialog>
      {/**/}

      {subtitle}
    </>
  );
};
export default AuthLogin;
