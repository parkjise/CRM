import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// components
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import { Button } from "@mui/material";
import ParentCard from "../../shared/ParentCard";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { scrmCoreUserAllAuths } from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";

interface CircleInfo {
  userName?: string;
  userNameEn?: string;
  email?: string;
  mobile?: string;
  company?: string;
  department?: string;
  countryCode?: string;
}
const MyInfoTab = (props: any) => {
  const TabWrap = styled.div``;

  const dispatch = useDispatch();

  const circleUserInfo: CircleInfo = useSelector(
    (state: AppState) => state.userInfoReducer.circleInfo
  );

  const handleClick = () => {
    props.toReqAuthFromMyInfo(1);
  };

  useEffect(() => {
    // dispatch(scrmCoreCircleInfo("20240138") as any); // 하드코딩
    dispatch(scrmCoreUserAllAuths() as any);
  }, [dispatch]);

  // // 03/04에서 02/04로 이동
  // useEffect(() => {
  //   dispatch(scrmCoreMyDrafter() as any);
  // }, [dispatch]);

  return (
    <>
      <Typography variant="h6" mb={3}>
        Basic Information
      </Typography>
      {/**/}
      <Grid container rowSpacing={0} columnSpacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-uname">
            Your Fullname (EN, default)
          </CustomFormLabel>
          <CustomTextField
            id="fs-uname"
            placeholder="John Deo"
            fullWidth
            value={circleUserInfo.userNameEn}
            disabled={!!circleUserInfo.userNameEn}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-uname">
            Your Fullname (Local language)
          </CustomFormLabel>
          <CustomTextField
            id="fs-uname"
            placeholder="김한화"
            fullWidth
            value={circleUserInfo.userName}
            disabled={!!circleUserInfo.userName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-email">Email</CustomFormLabel>
          <CustomTextField
            id="fs-email"
            placeholder="abc.123@hanwha.com"
            fullWidth
            value={circleUserInfo.email}
            disabled={!!circleUserInfo.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-pwd">Mobile</CustomFormLabel>
          <CustomTextField
            id="fs-phone"
            placeholder="01011112222"
            fullWidth
            value={circleUserInfo.mobile}
            disabled={!!circleUserInfo.mobile}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-uname">Company</CustomFormLabel>
          <CustomTextField
            id="fs-uname"
            placeholder="한화정밀기계"
            fullWidth
            value={circleUserInfo.company}
            disabled={!!circleUserInfo.company}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-uname">Department</CustomFormLabel>
          <CustomTextField
            id="fs-uname"
            placeholder="서비스기획팀"
            fullWidth
            value={circleUserInfo.department}
            disabled={!!circleUserInfo.department}
          />
        </Grid>
      </Grid>
      {/**/}
      <Grid container item xs={12} sx={{ mt: 4 }}>
        <ParentCard title="Current Authorization">
          <>
            <Box sx={{ textAlign: "center" }}>
              There is no access permission.
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Button variant="contained" color="primary" onClick={handleClick}>
                Request Authorization
              </Button>
            </Box>
          </>
        </ParentCard>
      </Grid>
      {/*임시 - 추후에 다른 페이지로 이동해야 함. 여기서는 무쓸모*/}
      {/*<Grid container item xs={12} sx={{ mt: 4 }}>*/}
      {/*  <ParentCard title="Current Authorization">*/}
      {/*    <>*/}
      {/*      <Box*/}
      {/*        sx={{ textAlign: "center", display: "flex", gap: "5px" }}*/}
      {/*        className="current-auth"*/}
      {/*      >*/}
      {/*        <CrmAuthNew />*/}
      {/*        <CrmAuthDefault />*/}
      {/*        <CrmAuthDel />*/}
      {/*      </Box>*/}
      {/*    </>*/}
      {/*  </ParentCard>*/}
      {/*</Grid>*/}
    </>
  );
};

export default MyInfoTab;
