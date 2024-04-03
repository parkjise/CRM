import React from 'react';
import { Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CustomTextField from '../../theme-elements/CustomTextField';
import top100Films from './data';
import styled from 'styled-components';
import { color } from 'framer-motion';

const CrmSearch = styled.div`
  > div{
    margin:0 auto;
    width: 31.25rem;
    height: 50px;
    border: 1px solid #EFEFEF;
    border-radius: 50px;
    box-shadow:0 10px 25px rgba(0,0,0,.05) ;
    position: relative;
  }
  fieldset{
    outline: 0;
    border: none;
  }
  input{
    margin-right: 50px;
  }
  @media(max-width:1000px){
    > div{
      width: 80%;
      height: 50px;
    }
  }
`
const SearchIco = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
`
const CrmSearchAutocomplete = () => {
  
  return (
    <CrmSearch>
      <Stack>
        <Autocomplete
          freeSolo
          fullWidth
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <CustomTextField
              {...params}
              placeholder="Search User"
              aria-label="Search User"
              inputProps={{
                ...params.inputProps,
                type: 'search',
              }}
            />
          )}
        />
      <SearchIco><i className="ri-search-line"></i></SearchIco>
      </Stack>
    </CrmSearch>
  );
};

export default CrmSearchAutocomplete;
