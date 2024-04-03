import React from "react";
import styled from "styled-components";

const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 60px;
  height: 60px;
  background-color: #4172be;
  border-radius: 50%;
  i {
    color: #fff;
    font-size: 40px;
  }
`;

const CrmCheckBlue = () => {
  return (
    <Check>
      <i className="ri-check-line"></i>
    </Check>
  );
};
export default CrmCheckBlue;
