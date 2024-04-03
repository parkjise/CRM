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
  name: number,
  calories: string,
  fat: string,
  carbs: number,
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(1, "loredfdddddddddddddddddddddddd"," 6.0",24),

];

const UpdateHistory = () => {
  return (
    <TableStyle>
      <Typography variant="h3">
        Update history
      </Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={"50px"}>No</TableCell>
            <TableCell align="left">Content</TableCell>
            <TableCell  align="center">by</TableCell>
            <TableCell  width={"100px"} align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </TableStyle>
  );
};
export default UpdateHistory;
