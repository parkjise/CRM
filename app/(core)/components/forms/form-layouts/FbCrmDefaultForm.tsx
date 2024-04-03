import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import CustomTextField from "../theme-elements/CustomTextField";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import ParentCard from "../../shared/ParentCard";
import { useDispatch } from "react-redux";
import { scrmCoreCircleInfo } from "@/store/apps/userInfo/UserInfoSlice";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";

const FbDefaultForm = () => {
  const dispatch = useDispatch();

  const [employeeNum, setEmployeeNum] = useState("");
  const circleInfoTextArea = useSelector(
    (state: AppState) => state.userInfoReducer.circleInfo
  );

  const onScrmCoreHandleEmployeeNumInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmployeeNum(event.target.value);
  };

  const onClick = () => {
    dispatch(scrmCoreCircleInfo(employeeNum) as any);
  };

  return (
    <ParentCard title="02. 서클 유저 정보 및 국가코드">
      <form>
        <CustomFormLabel
          sx={{
            mt: 0,
          }}
          htmlFor="default-value"
        >
          사원번호
        </CustomFormLabel>
        <CustomTextField
          id="default-value"
          variant="outlined"
          placeholder={"사원정보 8자리를 입력하세요!"}
          fullWidth
          onChange={onScrmCoreHandleEmployeeNumInputChange}
        />
        <Grid item xs={12} mt={3}>
          <Button color="primary" variant="contained" onClick={onClick}>
            조회
          </Button>
        </Grid>

        {/* -------------------------------------------------------------------------------------------------------- */}

        <CustomFormLabel htmlFor="outlined-multiline-static">
          사원정보 값
        </CustomFormLabel>
        <CustomTextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          value={JSON.stringify(circleInfoTextArea, null, 2)}
        />
      </form>
    </ParentCard>
  );
};

export default FbDefaultForm;
