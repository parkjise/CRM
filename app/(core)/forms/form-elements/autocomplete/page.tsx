"use client";

import { Grid } from "@mui/material";

import ComboBoxAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/ComboBoxAutocomplete";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import ControlledStateAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/ControlledStateAutocomplete";
import FreeSoloAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/FreeSoloAutocomplete";
import MultipleValuesAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/MultipleValuesAutocomplete";
import CheckboxesAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CheckboxesAutocomplete";
import SizesAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/SizesAutocomplete";

import PageContainer from "@/app/(core)/components/container/PageContainer";
import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import ParentCard from "@/app/(core)/components/shared/ParentCard";
import ChildCard from "@/app/(core)/components/shared/ChildCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "AutoComplete",
  },
];

const MuiAutoComplete = () => (
  <PageContainer title="Autocomplete" description="this is Autocomplete">
    {/* breadcrumb */}
    <Breadcrumb title="AutoComplete" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Autocomplete">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Combo Box">
            <ComboBoxAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Country Select">
            <CountryCrmSelectAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Controlled State">
            <ControlledStateAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Free Solo">
            <FreeSoloAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Multiple Values">
            <MultipleValuesAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Checkboxes">
            <CheckboxesAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Sizes">
            <SizesAutocomplete />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiAutoComplete;
