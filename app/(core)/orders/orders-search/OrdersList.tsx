import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tooltip, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
}
from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Scrollbar from "@/app/(core)/components/custom-scroll/Scrollbar";
import InstallRequest from "@/app/(core)/orders/orders-search/InstallRequest";
import styled from "styled-components";
const TableStyle = styled.div`
  margin-top:20px;
  h3{
    font-size:14px;
    margin-bottom: 10px;
    font-weight:500;
  }
  .MuiPaper-root {
    box-shadow: none;
  }
  .MuiTableHead-root{
    background-color: #F1F5F8;
    th{
      padding:8px 16px;
      font-weight:600;
    }
  }
`

function createData(
  name: string,
  calories: string
) {
  return { name, calories };
}

const rows = [
  createData('', ""),

];

const OrdersList = () => {
  const [open01, setOpen01] = useState(false);
  const handle01ClickOpen = () => {
    setOpen01(true);
  };
  const handle01Close = () => {
    setOpen01(false);
  };
  return (
    <>
      <TableStyle>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{width:"20%"}}>오더 아이템</TableCell>
              <TableCell align="center">
                출하(GI)
              </TableCell>
              <TableCell align="center">
                서비스
              </TableCell>
              <TableCell align="center">
                설치
              </TableCell>
              <TableCell align="center">
                설치
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box className="tbl-btn-ico">
                    <Tooltip title="Write" placement="top">
                      <Button variant="outlined" className="btn-outline">
                        <i className="ri-file-list-line"></i>
                      </Button>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box className="tbl-btn-ico">
                    <Tooltip title="Write" placement="top">
                      <Button variant="outlined" className="btn-outline" onClick={handle01ClickOpen}>
                        <i className="ri-search-line"></i>
                      </Button>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box className="tbl-btn-ico">
                    <Tooltip title="Write" placement="top">
                      <Button variant="outlined" className="btn-outline">
                        <i className="ri-tv-2-line"></i>
                      </Button>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box className="tbl-btn-ico">
                    <Tooltip title="Write" placement="top">
                      <Button variant="outlined" className="btn-outline">
                        <i className="ri-mouse-line"></i>
                      </Button>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box className="tbl-btn-ico">
                    <Tooltip title="Write" placement="top">
                      <Button variant="outlined" className="btn-outline">
                      <i className="ri-question-mark"></i>
                      </Button>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </TableStyle>
      <Dialog open={open01} onClose={handle01Close} 
          fullWidth
          maxWidth="md"
      >
        <Button onClick={handle01Close} className="pop-close" >
          < i className="ri-close-line"></i>
        </Button>
        <DialogTitle>설치의뢰</DialogTitle>
        <DialogContent sx={{padding:"2.4rem 2.4rem 2.4rem 2.4rem"}}>
          <DialogContentText>
            <Scrollbar sx={{ height: "500px" }}>
              <Box className="crm-step">
                <InstallRequest/>
              </Box>
            </Scrollbar>
          </DialogContentText>
        </DialogContent>
        <DialogActions 
            sx={{
            justifyContent:"center",
            paddingBottom:"2.4rem"
          }}>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default OrdersList;
