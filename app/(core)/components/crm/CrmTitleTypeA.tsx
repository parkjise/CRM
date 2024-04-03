import React from "react";
import styled from "styled-components";

const TblTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 20px;
    color: #272b2f;
    font-weight: 500;
  }
  h3 {
    font-size: 14px;
    color: #7b7b7b;
    font-weight: normal;
  }
  @media (max-width: 1000px) {
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AuthApproval = () => {
  return (
    <TblTitle>
      <h2>Approval</h2>
      <h3>Approval session ends in 29:31</h3>
    </TblTitle>
  );
};
export default AuthApproval;
