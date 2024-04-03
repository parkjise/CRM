import React from "react";
import styled from "styled-components";

const AuthChip = styled.div``;
const AuthCheck = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #efefef;
  background-color: #fff;
  margin-right: 10px;
  i {
    font-size: 20px;
  }
`;
const AuthClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #efefef;
  background-color: #fff;
  i {
    font-size: 20px;
  }
`;
const AuthStatus = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;
const Del = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 33px; */
  height: 23px;
  border-radius: 7px;
  background-color: #cc563d;
  color: #fff;
  font-weight: 600;
  padding: 3px 4px;
  margin-right: 10px;
  font-size: 11px;
`;
const CrmAuthDel = () => {
  return (
    <AuthChip className="authchip">
      <AuthStatus>
        <Del>Del</Del>
        Auth 1
      </AuthStatus>
      <AuthClose>
        <i className="ri-close-line"></i>
      </AuthClose>
    </AuthChip>
  );
};
export default CrmAuthDel;
