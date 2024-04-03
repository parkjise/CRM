import React, { useEffect, useState } from "react";
import CustomTextField from "../../theme-elements/CustomTextField";
import Autocomplete from "@mui/material/Autocomplete";
import countryCrmData from "./countryCrmData";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const ComboCrmCountryCodeBox = (isDisabled: any) => {
  const [value, setValue] = useState(countryCrmData[0].phone);

  useEffect(() => {}, [isDisabled]);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countryCrmData}
        fullWidth
        value={`+${value ?? 82}`}
        onChange={(event: any, newValue: any) => {
          setValue(newValue?.phone);
        }}
        renderInput={(params) => (
          <CustomTextField {...params} placeholder="+82" aria-label="+82" />
        )}
        disabled={isDisabled.isDisabled === "0"}
        sx={{
          width: "100px",
          height: "100%",
          marginRight: "10px",
        }}
      />
    </>
  );
};

export default ComboCrmCountryCodeBox;
