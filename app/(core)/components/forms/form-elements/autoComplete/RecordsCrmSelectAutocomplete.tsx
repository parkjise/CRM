// import Autocomplete from '@mui/material/Autocomplete';

import React from 'react';
import CustomTextField from '../../theme-elements/CustomTextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from '@emotion/styled';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank ', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather', year: 1974 },
  { label: 'The Dark ', year: 2008 },
  { label: '12 Angry ', year: 1957 },
  { label: "Schindler'", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

const RecordsSelect = styled.div`
  width: 200px;
  height: 32px;
  .modernize-1xt0r1m-MuiInputBase-root-MuiOutlinedInput-root{
    border-radius: 0;
  }
  
  .modernize-1d3z3hw-MuiOutlinedInput-notchedOutline,.MuiOutlinedInput-notchedOutline{
    border: none;
    border-bottom: 2px solid #272B2F;
  }
  
  .MuiOutlinedInput-notchedOutline{
    border-color: none;
  }
  .modernize-1kkal6p-MuiAutocomplete-root {
    .MuiOutlinedInput-root{
      padding: 0;
    }
  }
  button{
    padding: 0;
    min-width: auto;
  }
  @media(max-width:1000px){
    width: 100%;
  }
  .modernize-1xt0r1m-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline{
    border-color: #272B2F;
  }
`
const RecordsCrmSelectAutocomplete = () => (

    <RecordsSelect>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        fullWidth
        renderInput={(params) => (
          <CustomTextField {...params} placeholder="All Records" aria-label="Select movie" />
  
          )}
      />
    </RecordsSelect>

);

export default RecordsCrmSelectAutocomplete;
