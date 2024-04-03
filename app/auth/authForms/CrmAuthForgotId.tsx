import { Box, Button, Stack } from "@mui/material";

import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(core)/components/forms/theme-elements/CustomFormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import countryCrmData from "@/app/(core)/components/forms/form-elements/autoComplete/countryCrmData";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { regexPhoneNumber } from "@/utils/common/regExLogic";
import { useDispatch } from "react-redux";
import { scrmCoreForgotYourEmail } from "@/store/apps/userInfo/UserInfoSlice";

const validate = (values: any) => {
  let errors = {
    phone: "",
  };

  if (values.phone === "") {
    errors.phone = "Required";
  } else if (!regexPhoneNumber(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  return errors;
};

export default function CrmAuthForgotId(props: any) {
  const [countryCode, setCountryCode] = useState(countryCrmData[0].phone);
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const userForgotYourEmailFormik = useFormik({
    initialValues: {
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      // not operation
    },
  });

  const onClick = () => {
    if (userForgotYourEmailFormik.errors.phone === "Invalid phone number") {
      props.toParentValidPhoneFrom();
      return;
    }

    if (
      userForgotYourEmailFormik.errors.phone !== undefined &&
      userForgotYourEmailFormik.errors.phone === ""
    ) {
      dispatch(
        scrmCoreForgotYourEmail(
          countryCode,
          userForgotYourEmailFormik.values.phone
        ) as any
      );
    }
  };

  useEffect(() => {
    props.toParentPhone(userForgotYourEmailFormik.values.phone);
  }, [userForgotYourEmailFormik.values.phone]);

  return (
    <Box className="popup-form">
      <Stack mt={4} spacing={1}>
        <CustomFormLabel htmlFor="reset-email">Mobile</CustomFormLabel>
        <form onSubmit={userForgotYourEmailFormik.handleSubmit}>
          <Box className="certification-num">
            <Box sx={{ width: "120px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countryCrmData}
                fullWidth
                value={`+${countryCode ?? 82}`}
                onChange={(event: any, newValue: any) => {
                  setCountryCode(newValue?.phone);
                }}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    placeholder="+82"
                    aria-label="+82"
                  />
                )}
                sx={{
                  width: "100px",
                  height: "100%",
                  marginRight: "10px",
                }}
              />{" "}
            </Box>
            <CustomTextField
              id="fs-phone"
              placeholder="123 4567 201"
              fullWidth
              name="phone"
              value={userForgotYourEmailFormik.values.phone}
              onChange={userForgotYourEmailFormik.handleChange}
              error={
                userForgotYourEmailFormik.touched.phone &&
                Boolean(userForgotYourEmailFormik.errors.phone)
              }
              helperText={
                userForgotYourEmailFormik.touched.phone &&
                userForgotYourEmailFormik.errors.phone
              }
            />
          </Box>
          <Box sx={{ padding: "1.25rem 0", textAlign: "center" }}>CAPTCHA</Box>
          <Button
            color="primary"
            variant="contained"
            size="medium"
            fullWidth
            type="submit"
            onClick={onClick}
          >
            Find my email
          </Button>
        </form>
        <Box sx={{ padding: "1.25rem 0", textAlign: "center" }}>
          Please click{" "}
          <a href="#" className="here">
            <b>here</b>
          </a>{" "}
          to let us know if you have a problem to find sign up.
        </Box>
      </Stack>
    </Box>
  );
}
