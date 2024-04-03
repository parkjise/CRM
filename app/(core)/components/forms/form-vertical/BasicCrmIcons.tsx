import { Button, Grid, InputAdornment } from "@mui/material";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import CustomOutlinedInput from "../theme-elements/CustomOutlinedInput";
import { IconMessage2, IconPhone, IconPlane } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  scrmCorePhoneAuthMessage,
  scrmCoreRequestParams,
} from "@/store/apps/userInfo/UserInfoSlice";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";

const BasicCrmIcons = () => {
  const dispatch = useDispatch();
  const phoneAuthMessage = useSelector(
    (state: AppState) => state.userInfoReducer.phoneAuthMessage
  );

  const [phoneAuthCode, setPhoneAuthCode] = useState({
    countryCode: "+82",
    phone: "",
  });

  const onScrmCoreHandleCountryCodeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneAuthCode({ ...phoneAuthCode, countryCode: event.target.value });
  };
  const onScrmCoreHandlePhoneInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneAuthCode({ ...phoneAuthCode, phone: event.target.value });
  };

  const onClick01 = () => {
    dispatch(scrmCorePhoneAuthMessage(phoneAuthCode) as any);
  };

  useEffect(() => {
    dispatch(scrmCoreRequestParams(phoneAuthCode) as any);
  }, [dispatch, phoneAuthCode.phone, phoneAuthCode.countryCode]);

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Grid container>
        {/* 3 */}
        <Grid item xs={12}>
          <CustomFormLabel htmlFor="bi-countryCode">
            Country Code
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconPlane size="20" />
              </InputAdornment>
            }
            id="bi-countryCode"
            value={phoneAuthCode.countryCode}
            fullWidth
            onChange={onScrmCoreHandleCountryCodeInputChange}
          />
        </Grid>
        {/* 4 */}
        <Grid item xs={12}>
          <CustomFormLabel htmlFor="bi-phone">Phone No</CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconPhone size="20" />
              </InputAdornment>
            }
            id="bi-phone"
            placeholder="01011112222"
            fullWidth
            onChange={onScrmCoreHandlePhoneInputChange}
          />
        </Grid>
        {/* 5 */}
        <Grid item xs={12}>
          <CustomFormLabel htmlFor="bi-message">Result Message</CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomOutlinedInput
            id="bi-message"
            startAdornment={
              <InputAdornment position="start">
                <IconMessage2 size="20" />
              </InputAdornment>
            }
            multiline
            fullWidth
            value={JSON.stringify(phoneAuthMessage, null, 2)}
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <Button variant="contained" color="primary" onClick={onClick01}>
            요청
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default BasicCrmIcons;
