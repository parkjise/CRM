import React from "react";
import styled from "styled-components";

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 60px;
  height: 60px;
  background-color: #cc563d;
  border-radius: 50%;
  i {
    color: #fff;
    font-size: 40px;
  }
`;

const CrmErrorRed = () => {
  return (
    <Error>
      <i className="ri-error-warning-line"></i>
    </Error>
  );
};
export default CrmErrorRed;
