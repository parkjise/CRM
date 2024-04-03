import React from "react";
import styled from "styled-components";

const TextBox = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  background-color: #f8f8f8;
  border: 1px solid #efefef;
  min-width: 150px;
  font-size: 14px;
  padding: 20px 40px;
  color: #7b7b7b;
  border-radius: 7px;
`;
const TextLi = styled.li`
  list-style: disc;
`;

const CrmAuthTextBoxSelectAuthorization = () => {
  return (
    <TextBox>
      <TextLi>Please select authorizations only for your role.</TextLi>
      <TextLi>
        Your request may not be approved if considered as out of your role.
      </TextLi>
    </TextBox>
  );
};
export default CrmAuthTextBoxSelectAuthorization;
