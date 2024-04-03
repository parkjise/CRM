"use client";
import { Box } from "@mui/material";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CrmGridHeader from "@/app/(core)/components/crm/CrmGridHeader";
import OrdersList from "@/app/(core)/orders/orders-search/OrdersList";


export default function Orders() {
  return (
    <>
      <CrmGridHeader/>
      <OrdersList/>
    </>
  );
}
