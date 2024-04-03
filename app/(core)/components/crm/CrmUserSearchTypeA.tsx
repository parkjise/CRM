import React from "react";
import styled from "styled-components";
import CrmSearchUserAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CrmSearchUserAutocomplete";

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

const CrmUserSearchTypeA = () => {
  return (
    <SearchStyle>
      <CrmSearchUserAutocomplete></CrmSearchUserAutocomplete>
    </SearchStyle>
  );
};
export default CrmUserSearchTypeA;
