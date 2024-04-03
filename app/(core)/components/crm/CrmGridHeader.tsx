import React from "react";
import { Button, Tooltip,Box } from "@mui/material";
import RecordsCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/RecordsCrmSelectAutocomplete";
import GridHeaderSearch from "@/app/(core)/components/forms/form-elements/autoComplete/GridHeaderSearch";
import styled from "styled-components";

const AuthBtn = styled.div`
  .approval-btn-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .approval-btn-left,
  .approval-btn-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .approval-btn-left {
    > div {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
  }
  .grid-header-search{
    width: 230px;
  }
  @media (max-width: 1000px) {
    .approval-btn-wrap {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .approval-btn-left {
      width: 100%;
      /* flex-direction: column; */
      flex-wrap: wrap;
      align-items: center;
    }
    .approval-btn-right {
      width: 100%;
      margin-top: 10px;
      justify-content: flex-start;
    }
    .grid-header-search{
      width: 20rem;
    }
  }
`;

const AuthBtnIco = styled.div`
  display: flex;
  align-content: center;
  gap: 5px;
  button {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    min-width: auto;
  }
`;

const CrmGridHeader = (props: any) => {

  return (
    <AuthBtn>
      <Box className="approval-btn-wrap">
        <Box className="approval-btn-left">
          <RecordsCrmSelectAutocomplete/>
          <Box>
            전체 <b>10</b>건
          </Box>
          <Box className="tbl-btn-ico">
            <Tooltip title="접수취소" placement="top">
              <Button variant="outlined" className="btn-outline">
                <i className="ri-close-line"></i>
              </Button>
            </Tooltip>
            <Tooltip title="사용자 추가" placement="top">
              <Button variant="outlined" className="btn-outline">
                <i className="ri-user-add-line"></i>
              </Button>
            </Tooltip>
            <Tooltip title="사용자 잠금" placement="top">
              <Button variant="outlined" className="btn-outline">
                <i className="ri-lock-line"></i>
              </Button>
            </Tooltip>
            <Tooltip title="사용자 삭제" placement="top">
              <Button variant="outlined" className="btn-outline">
                <i className="ri-user-unfollow-line"></i>
              </Button>
            </Tooltip>
          </Box>
        </Box>
        <Box className="approval-btn-right">
          <Box className="grid-header-search">
            <GridHeaderSearch />
          </Box>
          <Box className="tbl-btn-ico" sx={{gap:"5px"}}>
            <Tooltip title="새로고침" placement="top">
              <Button variant="outlined" className="btn-outline">
                <i className="ri-refresh-line"></i>
              </Button>
            </Tooltip>
            <Tooltip title="설정" placement="top">
              <Button variant="outlined" className="btn-outline">
                <i className="ri-settings-2-line"></i>
              </Button>
            </Tooltip>
            <Tooltip title="행주가" placement="top">
              <Button variant="outlined" className="btn-outline">
              <i className="ri-add-line"></i>
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </AuthBtn>
  );
};
export default CrmGridHeader;
