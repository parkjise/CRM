import React from "react";
import styled from "styled-components";

const Fail = styled.div`
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

const CrmCheckBlue = () => {
  return (
    <Fail>
      <i className="ri-close-line"></i>
    </Fail>
  );
};
export default CrmCheckBlue;
