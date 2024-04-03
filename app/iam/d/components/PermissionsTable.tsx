import React from "react";
import {Box,Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "styled-components";
const TableStyle = styled.div`
  h3{
    font-size:14px;
    margin-bottom: 10px;
    font-weight:500;
  }
  .MuiTableHead-root{
    background-color: #F1F5F8;
    th{
      padding:10px 16px;
      font-weight:600;
    }
  }
`
function createData(
  name: string,
  calories: number
) {
  return { name, calories };
}

const rows = [
  createData('Frozen yoghurt', 159),

];

const PermissionsTable = () => {
  return (
    <TableStyle>
      <Typography variant="h3">
        Permissions
      </Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width:"20%"}}>Code</TableCell>
            <TableCell align="left">Desc</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <Box mt={2} sx={{fontSize:"13dpx",color:"#7b7b7b"}}>
      ※ You can ask additionalpermissions at <b>IAM</b> page.
      </Box>
    </TableStyle>
  );
};
export default PermissionsTable;
