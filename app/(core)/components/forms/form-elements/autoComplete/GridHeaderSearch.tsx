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
    width: 100%;
    height: 32px;
    border: 1px solid #DFE5EF ;
    border-radius: 7px;
    position: relative;
    & button{
      display: flex;
      align-items: center;
      padding: 4px 0px;
      min-width: auto;
      max-width: 50px;
      &:after{
        content: '';
        display: block;
        margin:0 0.625rem ;
        width: 1px;
        height: 15px;
        background-color:#DFE5EF;
      }
    }
  }
  fieldset{
    outline: 0;
    border: none;
  }

  .modernize-1kkal6p-MuiAutocomplete-root {
    .MuiOutlinedInput-root{
      padding: 0;
    }
  }
  .modernize-1kkal6p-MuiAutocomplete-root{
    .MuiOutlinedInput-root{
      .MuiAutocomplete-input{
        margin-right: 0px;
        padding: 0;
        padding-left: 2.8125rem;
        height: 32px;
        line-height:28px;
        font-size:12px;
        &::placeholder{
          font-size:12px;
          color: #7b7b7b;
          line-height:28px;
        }
      }
    }
  }
  ` 
const SearchIco = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  
`
const CrmSearchAutocomplete = () => {
  
  return (
    <CrmSearch>
      <Stack>
        <SearchIco><i className="ri-search-line"></i></SearchIco>
        <Autocomplete
          freeSolo
          fullWidth
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <CustomTextField
              {...params}
              placeholder="Search This List..."
              aria-label="Search This List..."
              inputProps={{
                ...params.inputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    </CrmSearch>
  );
};

export default CrmSearchAutocomplete;
