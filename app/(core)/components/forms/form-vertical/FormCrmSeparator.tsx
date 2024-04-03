import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import CustomTextField from "../theme-elements/CustomTextField";
import CustomOutlinedInput from "../theme-elements/CustomOutlinedInput";
import { Stack } from "@mui/system";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { scrmCoreUserRegister } from "@/store/apps/userInfo/UserInfoSlice";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";

const FormCrmSeparator = () => {
  const dispatch = useDispatch();

  const userRegInfo = useSelector(
    (state: AppState) => state.userInfoReducer.userRegInfo
  );

  const [regUser, setRegUser] = useState({
    email: "",
    password: "",
    nameEn: "",
    nameLo: "",
    phone: "",
  });

  const onScrmCoreHandleRegUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegUser({
      ...regUser,
      [event.target.name]: event.target.value,
    });
  };

  const onClick = () => {
    dispatch(scrmCoreUserRegister(regUser) as any);
  };

  // password isVisible
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //

  return (
    <div>
      <Typography variant="h6" mb={3}>
        계정 정보
      </Typography>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Grid container spacing={3}>
        {/* 01. */}
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-nname" sx={{ mt: 0 }}>
            Nick Name(Eng Name)
          </CustomFormLabel>
          <CustomTextField
            id="fsNname"
            name={"nameEn"}
            placeholder="Smith"
            fullWidth
            onChange={onScrmCoreHandleRegUserInputChange}
          />
          <CustomFormLabel htmlFor="fs-phone" sx={{ mt: 0 }}>
            Phone No
          </CustomFormLabel>
          <CustomTextField
            id="fs-phone"
            placeholder="01011112222"
            name={"phone"}
            fullWidth
            onChange={onScrmCoreHandleRegUserInputChange}
          />
          <CustomFormLabel htmlFor="fs-pwd" sx={{ mt: 0 }}>
            Password
          </CustomFormLabel>
          <CustomOutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <IconEyeOff size="20" />
                  ) : (
                    <IconEye size="20" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            id="password"
            name={"password"}
            placeholder="********"
            fullWidth
            onChange={onScrmCoreHandleRegUserInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-lname" sx={{ mt: { sm: 0 } }}>
            이름
          </CustomFormLabel>
          <CustomTextField
            id="fs-lname"
            name={"nameLo"}
            placeholder="홍길동"
            fullWidth
            onChange={onScrmCoreHandleRegUserInputChange}
          />
          <CustomFormLabel htmlFor="fs-email" sx={{ mt: { sm: 0 } }}>
            Email
          </CustomFormLabel>
          <CustomTextField
            id="fs-email"
            name={"email"}
            placeholder="abc.kim@hanwha.com"
            fullWidth
            onChange={onScrmCoreHandleRegUserInputChange}
          />
        </Grid>
        {/* 02. */}
        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-message">Result Message</CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="bl-message"
            multiline
            fullWidth
            value={JSON.stringify(userRegInfo, null, 2)}
          />
        </Grid>
        {/* 03. */}
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" onClick={onClick}>
              회원가입
            </Button>
            {/*<Button variant="text" color="error">*/}
            {/*  Cancel*/}
            {/*</Button>*/}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormCrmSeparator;
