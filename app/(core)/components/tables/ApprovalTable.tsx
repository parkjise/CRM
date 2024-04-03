import React from "react";
import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";
import styled from "@emotion/styled";

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  button {
    padding: 4px 14px;
    min-width: 55px;
    font-size: 12px;
  }
`;
const TableStyle = styled.div`
  td {
    padding: 6px;
    border-right: 1px solid #e5eaef;
    &:last-child {
      border: none;
    }
  }
  .cellfirst {
    width: 5%;
  }
  .cellsecond {
    width: 20%;
  }
  .cellthird {
    width: 10%;
  }
  .cellfourth {
    width: 45%;
  }
  .cellfifth {
    width: 10%;
  }
  .cellsixth {
    width: 10%;
  }
  .modernize-5rewhp-MuiPaper-root-MuiCard-root {
    border: 1px solid #e5eaef;
    box-shadow: none;
  }
  @media (max-width: 1000px) {
    width: 1000px;
    overflow-x: auto;
  }
`;
const AuthBtnIco = styled.div`
  display: flex;
  justify-content: center;
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

interface approvalPreset {
  userKey?: string;
  userName?: string;
  userId?: string;
  companyName?: string;
  position?: string;
  department?: string;
  assignType?: string;
  sequence?: string;
  comment?: string;
}

/*
userKey:"516_6177896"
userName:"전현수"
userId:"hyunsoo.jeon"
company:"한화정밀기계" -> companyName
position:"사원"
department:"서비스기획팀"
id:1
*/

/*
* {
    "user_key": "516_6177896",
    "user_name": "전현수",
    "user_id": "hyunsoo.jeon",
    "company_name": "한화정밀기계",
    "position": "사원",
    "department": "서비스기획팀",
    "assign_type": "0",
    "sequence": "0",
    "comment": "결재모듈테스트입니다."
 },
{
    "user_key": "516_6178573",
    "user_name": "박지세",
    "user_id": "jise.park123",
    "company_name": "한화정밀기계",
    "position": "차장",
    "department": "서비스기획팀",
    "assign_type": "1",
    "sequence": "1",
    "comment": ""
}
*/

const ApprovalTable = (props: any) => {
  const filterByApproval = [
    {
      id: 0,
      label: "결재",
      value: "1",
    },
    {
      id: 1,
      label: "합의",
      value: "2",
    },
    {
      id: 2,
      label: "통보",
      value: "9",
    },
  ];

  return (
    <TableStyle>
      <BlankCard>
        <TableContainer>
          <Table aria-label="simple table" sx={{ whiteSpace: "nowrap" }}>
            <TableBody>
              {props.approveUsers.map((row: any, index: number) => (
                <TableRow key={index}>
                  <TableCell align="center" className="cellfirst">
                    {index}
                  </TableCell>
                  <TableCell align="center" className="cellsecond">
                    <BtnWrap>
                      {row.status === "0" && (
                        <Button variant="outlined" className="btn-outline">
                          기안
                        </Button>
                      )}
                      {filterByApproval.map((constData, index) => (
                        <Button
                          variant="outlined"
                          className="btn-outline"
                          key={index}
                        >
                          {constData.label}
                        </Button>
                      ))}
                    </BtnWrap>
                  </TableCell>
                  <TableCell align="center" className="cellthird">
                    <Chip
                      label={"Circle"}
                      sx={{
                        backgroundColor: "#FEF1E9",
                        color: "#F37321",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    className="cellfourth"
                    sx={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  >
                    {row.userName}
                  </TableCell>
                  <TableCell className="cellfifth">
                    <AuthBtnIco>
                      <Tooltip title="Write" placement="top">
                        <Button variant="outlined" className="btn-outline">
                          <i className="ri-file-edit-line"></i>
                        </Button>
                      </Tooltip>
                    </AuthBtnIco>
                  </TableCell>
                  <TableCell className="cellsixth">
                    <AuthBtnIco>
                      <Tooltip title="Delete" placement="top">
                        <Button variant="outlined" className="btn-outline">
                          <i className="ri-close-line"></i>
                        </Button>
                      </Tooltip>
                    </AuthBtnIco>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </BlankCard>
    </TableStyle>
  );
};

export default ApprovalTable;
