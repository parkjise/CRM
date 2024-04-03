import React from "react";
import styled from "styled-components";
import ComboBoxAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CrmSearchAutocomplete";

const SearchStyle = styled.div`
  .modernize-1kkal6p-MuiAutocomplete-root {
    .MuiOutlinedInput-root {
      padding: 6px 0 6px 15px;
    }
  }
  i {
    font-size: 24px;
  }
`;

const CrmSearchTypeA = () => {
  return (
    <SearchStyle>
      <ComboBoxAutocomplete></ComboBoxAutocomplete>
    </SearchStyle>
  );
};
export default CrmSearchTypeA;
