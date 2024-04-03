import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

// components
import CustomTextField from "../../../(core)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "../../../(core)/components/forms/theme-elements/CustomFormLabel";
import ComboBoxAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/ComboBoxAutocomplete";
import { Button,Box } from "@mui/material";
import PermissionsTable from "@/app/iam/d/components/PermissionsTable";
import UpdateHistory from "@/app/iam/d/components/UpdateHistory";


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const AccountProfile = () => {


  return (
    <>
      <Grid container rowSpacing={0} columnSpacing={3} className="popup-form">
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Your Fullname (EN, default)
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder="John Deo"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Your Fullname (Local language)
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-email">Email</CustomFormLabel>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            className="certification-num"
          >
            <CustomTextField
              id=""
              placeholder=""
              fullWidth
            />
            <Button variant="outlined" className="btn-outline gray green">
              Verified
            </Button>
            <Button variant="outlined" className="btn-outline gray red">
              Not verified
            </Button>
            <Button variant="outlined" className="btn-outline gray blue">
              Verification
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-pwd">Mobile</CustomFormLabel>
          <Box  className="certification-num">
            <Box sx={{ width: "120px" }}>
              <ComboBoxAutocomplete />
            </Box>
            <CustomTextField
              placeholder=""
              fullWidth
              id=""
              name=""
            />
            <Button variant="outlined" className="btn-outline gray red">
              Not verified
            </Button>
            <Button variant="outlined" className="btn-outline gray blue">
              Verification
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CustomFormLabel htmlFor="">
            Profile Image
          </CustomFormLabel>
          <Box className="certification-num">
            <CustomTextField
              id=""
              placeholder=""
              fullWidth
            />
            <Button variant="outlined" className="btn-outline gray">
              <i className="ri-download-2-line"></i>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Company
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Company Code
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Department_hanwha
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Level_hanwha
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Department_other
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Level_other
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} mt={4}>
          <PermissionsTable/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Created
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="">
            Last updated
          </CustomFormLabel>
          <CustomTextField
            id=""
            placeholder=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} mt={4}>
          <UpdateHistory/>
        </Grid>
      </Grid>
      
    </>
  );
};

export default AccountProfile;
