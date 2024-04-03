import React, { ChangeEvent, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import CustomTextField from "../../theme-elements/CustomTextField";
import styled from "styled-components";
import { GridColDef } from "@mui/x-data-grid";
import { scrmCoreUserSearchList } from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { StyledDataGrid } from "../../../mui-grid/StyledDataGrid";

const CrmSearch = styled.div`
  > div {
    margin: 0 auto;
    width: 31.25rem;
    height: 50px;
    border: 1px solid #efefef;
    border-radius: 50px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    position: relative;
  }
  fieldset {
    outline: 0;
    border: none;
  }
  input {
    margin-right: 50px;
  }
  @media (max-width: 1000px) {
    > div {
      width: 80%;
      height: 50px;
    }
  }
`;
const SearchIco = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
`;

const columns: GridColDef[] = [
  // { field: "id", headerName: "seq", width: 150 },
  { field: "userName", headerName: "성명", width: 150 },
  { field: "userId", headerName: "사용자 ID", width: 150 },
  { field: "position", headerName: "직책", width: 150 },
  { field: "department", headerName: "부서", width: 150 },
  { field: "company", headerName: "회사", width: 150 },
];

const CrmSearchUserAutocomplete = (props: any) => {
  const dispatch = useDispatch();

  const userSearchList = useSelector(
    (state) => state.userInfoReducer.userSearchList
  );

  const [employeeName, setEmployeeName] = useState("");

  const [selectionModel, setSelectionModel] = useState([] as any);

  useEffect(() => {
    props.toParentCheckedUsers(selectionModel);
  }, [selectionModel]);

  const onEnterKeyPress = () => {
    dispatch(scrmCoreUserSearchList(employeeName) as any);
  };

  return (
    <>
      <CrmSearch>
        <Stack>
          <CustomTextField
            className="login-pop-input"
            autoFocus
            fullWidth
            id="phone"
            name="phone"
            value={employeeName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setEmployeeName(event.target.value);
            }}
            sx={{
              marginTop: "0",
              marginBottom: "0",
              height: "53.13px",
              padding: "0",
              lineHeight: "53.13px",
            }}
            onKeyPress={onEnterKeyPress}
          />
          {/*<Autocomplete*/}
          {/*  freeSolo*/}
          {/*  fullWidth*/}
          {/*  id="free-solo-2-demo"*/}
          {/*  disableClearable*/}
          {/*  options={top100Films.map((option) => option.title)}*/}
          {/*  renderInput={(params) => (*/}
          {/*    <CustomTextField*/}
          {/*      {...params}*/}
          {/*      placeholder="Search User"*/}
          {/*      aria-label="Search User"*/}
          {/*      inputProps={{*/}
          {/*        ...params.inputProps,*/}
          {/*        type: "search",*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*  value={employeeName}*/}
          {/*  onChange={(event: any, newValue: any) => {*/}
          {/*    setEmployeeName(newValue);*/}
          {/*  }}*/}
          {/*/>*/}
          <SearchIco onClick={onEnterKeyPress}>
            <i className="ri-search-line"></i>
          </SearchIco>
        </Stack>
      </CrmSearch>
      <div style={{ height: 300, width: "100%" }}>
        {/*<DataGrid rows={userSearchList} columns={columns} />*/}
        <StyledDataGrid
          rows={userSearchList ?? []}
          columns={columns}
          getRowId={(row) => row.seq}
          checkboxSelection
          onRowSelectionModelChange={(itm: any) => setSelectionModel(itm)}
          sx={{
            "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
              {
                display: "none",
              },
          }}
        />
      </div>
    </>
  );
};

export default CrmSearchUserAutocomplete;
