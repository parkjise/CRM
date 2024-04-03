import React from "react";
import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";

import styled from "@emotion/styled";

const rows = [
  {
    num: "0",
    status: "",
    circle: "Circle",
    name: "",
    project: "",
    write: "",
    close: "",
  },
];

const Table2 = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      width: 15%;
    }
    .cellthird {
      width: 10%;
    }
    .cellfourth {
      width: 50%;
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
  return (
    <TableStyle>
      <BlankCard>
        <TableContainer>
          <Table aria-label="simple table" sx={{ whiteSpace: "nowrap" }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Users</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Project Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Team</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Budget</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" className="cellfirst">
                    0
                  </TableCell>
                  <TableCell align="center" className="cellsecond">
                    <BtnWrap>
                      <Button variant="outlined" className="btn-outline active">
                        결재
                      </Button>
                      <Button variant="outlined" className="btn-outline">
                        합의
                      </Button>
                      <Button variant="outlined" className="btn-outline">
                        통보
                      </Button>
                    </BtnWrap>
                  </TableCell>
                  <TableCell align="center" className="cellthird">
                    <Chip
                      label={row.circle}
                      sx={{
                        backgroundColor: "#FEF1E9",
                        color: "#F37321",
                      }}
                    />
                  </TableCell>
                  <TableCell className="cellfourth">Test</TableCell>
                  <TableCell className="cellfifth">
                    <AuthBtnIco>
                      <Button variant="outlined" className="btn-outline">
                        <i className="ri-file-edit-line"></i>
                      </Button>
                    </AuthBtnIco>
                  </TableCell>
                  <TableCell className="cellsixth">
                    <AuthBtnIco>
                      <Button variant="outlined" className="btn-outline">
                        <i className="ri-close-line"></i>
                      </Button>
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

export default Table2;
