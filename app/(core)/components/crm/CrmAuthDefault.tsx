import React from "react";
import styled from "styled-components";

const AuthChip = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid #efefef;
  min-width: 150px;
  font-size: 14px;
  padding: 8px 14px;
  color: #7b7b7b;
  border-radius: 50px;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;
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

const CrmAuthDefault = () => {
  return (
    <AuthChip>
      <AuthCheck>
        <i className="ri-check-line"></i>
      </AuthCheck>
      Auth 1
    </AuthChip>
  );
};
export default CrmAuthDefault;
