import { Button, Grid } from "@mui/material";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import CustomTextField from "../theme-elements/CustomTextField";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { scrmCorePhoneCheckMessage } from "@/store/apps/userInfo/UserInfoSlice";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";

interface reqPrmsInterface {
  phone?: string;
  countryCode?: string;
  authCode?: string;
}
const BasicCrmLayout = () => {
  const dispatch = useDispatch();

  const requestParams: reqPrmsInterface = useSelector(
    (state: AppState) => state.userInfoReducer.requestParams
  );
  const phoneCheckMessage = useSelector(
    (state: AppState) => state.userInfoReducer.phoneCheckMessage
  );

  useEffect(() => {
    setPhoneCheckCode({ ...phoneCheckCode, phone: requestParams.phone ?? "" });
  }, [requestParams]);

  const [phoneCheckCode, setPhoneCheckCode] = useState({
    authCode: "",
    phone: "",
  });

  const onScrmCoreHandlePhoneCheckCodeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneCheckCode({ ...phoneCheckCode, authCode: event.target.value });
  };

  const onClick02 = () => {
    dispatch(scrmCorePhoneCheckMessage(phoneCheckCode) as any);
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Grid container>
        {/* 4 */}
        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-phone">Auth Code</CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="bl-phone"
            placeholder="123456"
            fullWidth
            onChange={onScrmCoreHandlePhoneCheckCodeInputChange}
          />
        </Grid>
        {/* 5 */}
        <Grid item xs={12} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bl-message">Result Message</CustomFormLabel>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="bl-message"
            multiline
            fullWidth
            value={JSON.stringify(phoneCheckMessage, null, 2)}
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <Button variant="contained" color="primary" onClick={onClick02}>
            검증
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default BasicCrmLayout;
