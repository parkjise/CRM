import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const CrmAuthBtnIco = () => {
  return (
    <>
      <BtnWrap>
        <Button variant="outlined" className="btn-outline">
          결재
        </Button>
        <Button variant="outlined" className="btn-outline">
          합의
        </Button>
        <Button variant="outlined" className="btn-outline">
          통보
        </Button>
      </BtnWrap>
      <BtnWrap>
        <Button variant="outlined" className="btn-outline">
          병렬
        </Button>
        <Button variant="outlined" className="btn-outline">
          병렬해제
        </Button>
      </BtnWrap>
      <BtnWrap>
        <Button variant="outlined" className="btn-outline">
          <i className="ri-arrow-up-double-line"></i>
        </Button>
        <Button variant="outlined" className="btn-outline">
          <i className="ri-arrow-up-s-line"></i>
        </Button>
        <Button variant="outlined" className="btn-outline">
          <i className="ri-arrow-down-s-line"></i>
        </Button>
        <Button variant="outlined" className="btn-outline">
          <i className="ri-arrow-down-double-line"></i>
        </Button>
        <Button variant="outlined" className="btn-outline">
          <i className="ri-refresh-line"></i>
        </Button>
      </BtnWrap>
    </>
  );
};
export default CrmAuthBtnIco;
