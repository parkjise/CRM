import React from "react";
import { Button, Tooltip } from "@mui/material";
import styled from "styled-components";

const AuthBtn = styled.div`
  .approval-btn-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  }
  button {
    padding: 4px 14px;
    min-width: 55px;
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    .approval-btn-wrap {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .approval-btn-left {
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .approval-btn-right {
      width: 100%;
      margin-top: 10px;
      justify-content: flex-end;
    }
  }
`;

const AuthBtnIco = styled.div`
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

const CrmAuthBtnHeader = (props: any) => {
  const toParentAll1 = () => {
    props.toParentAll1();
  };
  const toParentAll2 = () => {
    props.toParentAll2();
  };
  const toParentAll9 = () => {
    props.toParentAll9();
  };

  const toParentDoUpAndUp = () => {
    props.toParentDoUpAndUp();
  };

  const toParentDoUp = () => {
    props.toParentDoUp();
  };

  const toParentDoDown = () => {
    props.toParentDoDown();
  };

  const toParentDoDownAndDown = () => {
    props.toParentDoDownAndDown();
  };

  const toParentAllDelete = () => {
    props.toParentAllDelete();
  };

  return (
    <AuthBtn>
      <div className="approval-btn-wrap">
        <div className="approval-btn-left">
          <div>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentAll1}
            >
              결재
            </Button>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentAll2}
            >
              합의
            </Button>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentAll9}
            >
              통보
            </Button>
            {/*로직 구현 해당사항 아님*/}
            {/*<Button variant="outlined" className="btn-outline">*/}
            {/*  병렬*/}
            {/*</Button>*/}
            {/*<Button variant="outlined" className="btn-outline">*/}
            {/*  병렬해제*/}
            {/*</Button>*/}
          </div>
          <AuthBtnIco>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentDoUpAndUp}
            >
              <i className="ri-arrow-up-double-line"></i>
            </Button>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentDoUp}
            >
              <i className="ri-arrow-up-s-line"></i>
            </Button>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentDoDown}
            >
              <i className="ri-arrow-down-s-line"></i>
            </Button>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentDoDownAndDown}
            >
              <i className="ri-arrow-down-double-line"></i>
            </Button>
            <Button
              variant="outlined"
              className="btn-outline"
              onClick={toParentAllDelete}
            >
              <i className="ri-close-line"></i>
            </Button>
          </AuthBtnIco>
          <div>
            총 <b>{props.toChildApproveUserCounts}</b> 명
          </div>
        </div>
        <div className="approval-btn-right">
          <AuthBtnIco>
            <Tooltip title="Refresh" placement="top">
              <Button variant="outlined" className="btn-outline">
                <i className="ri-refresh-line"></i>
              </Button>
            </Tooltip>
          </AuthBtnIco>
        </div>
      </div>
    </AuthBtn>
  );
};
export default CrmAuthBtnHeader;
