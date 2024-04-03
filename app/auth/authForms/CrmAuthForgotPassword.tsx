import { Box, Button, Stack } from "@mui/material";

import CustomTextField from "@/app/(core)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(core)/components/forms/theme-elements/CustomFormLabel";

export default function CrmAuthForgotPassword(props: any) {
  const onclick = () => {
    props.toParentSendResetLinkButton();
  };

  const onChange = (event: any) => {
    props.toParentEmailAddress(event.target.value);
  };

  return (
    <Box className="popup-form">
      <Stack mt={4} spacing={1}>
        <CustomFormLabel htmlFor="reset-email">Email Adddress</CustomFormLabel>
        <CustomTextField
          id="reset-email"
          variant="outlined"
          fullWidth
          onChange={onChange}
        />
        <Box sx={{ padding: "1.25rem 0", textAlign: "center" }}>CAPTCHA</Box>
        <Button
          color="primary"
          variant="contained"
          size="medium"
          fullWidth
          // sx={{
          //   maxWidth:"1/4",
          //   padding:" 0 1.25rem"
          // }}
          onClick={onclick}
        >
          Send reset link
        </Button>
        <Box sx={{ padding: "1.25rem 0", textAlign: "center" }}>
          Please click{" "}
          <a href="#" className="here">
            <b>here</b>
          </a>{" "}
          to let us know if you have a problem to find sign up.
        </Box>
        {/* <Button
          color="primary"
          size="large"
          fullWidth
          component={Link}
          href="/auth/auth1/login"
        >
          Back to Login
        </Button> */}
      </Stack>
    </Box>
  );
}
