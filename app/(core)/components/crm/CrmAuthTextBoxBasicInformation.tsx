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

const CrmAuthTextBoxBasicInformation = () => {
  return (
    <TextBox>
      <TextLi>
        Please check your both Local and English full name which will be shown
        to other users in this system
      </TextLi>
      <TextLi>
        Please confirm your mobile number so that you can get various
        notifications and alarms properly  from the system.
      </TextLi>
      <TextLi>
        Your email will be use as user ID for authentication on internet
        environment.
      </TextLi>
      <TextLi>
        Please enter your password for authentication on internet environment.
      </TextLi>
    </TextBox>
  );
};
export default CrmAuthTextBoxBasicInformation;
