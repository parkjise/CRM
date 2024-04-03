"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";
import AccountMg from "@/app/iam/d/components/AccountMg";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment/moment";
import { StyledDataGrid } from "@/app/(core)/components/mui-grid/StyledDataGrid";
import { scrmCoreAllAgencyList } from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch, useSelector } from "@/store/hooks";

const TableScroll = styled.div`
  overflow-x: auto;
`;
const AccountManagement = () => {
  const dispatch = useDispatch();

  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [open03, setOpen03] = useState(false);

  const [selectionModel, setSelectionModel] = useState([] as any);

  const handle01ClickOpen = () => {
    setOpen01(true);
  };
  const handle01Close = () => {
    setOpen01(false);
  };

  const handle02ClickOpen = () => {
    setOpen02(true);
  };
  const handle02Close = () => {
    setOpen02(false);
  };
  const handle03ClickOpen = () => {
    setOpen03(true);
  };
  const handle03Close = () => {
    setOpen03(false);
  };

  useEffect(() => {
    dispatch(scrmCoreAllAgencyList() as any);
  }, [dispatch]);

  const allInitAgencyList = useSelector(
    (state) => state.userInfoReducer.allAgencyList
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 10 },
    { field: "nameEn", headerName: "영문 이름", width: 150 },
    { field: "nameLo", headerName: "이름", width: 150 },
    { field: "email", headerName: "이메일", minWidth: 200 },
    {
      field: "countryCode",
      headerName: "국가코드",
      headerAlign: "center",
      align: "center",
      maxWidth: 150,
    },
    { field: "phone", headerName: "전화번호", width: 150 },
    { field: "company", headerName: "회사", width: 150 },
    {
      field: "createdAt",
      headerName: "생성일시",
      renderCell: (params) => {
        const formattedDate = moment(params.row.createdAt).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        return formattedDate;
      },
      width: 150,
    },
    {
      field: "auth",
      headerName: "권한",
      renderCell: (params) => {
        const { value } = params;
        return (
          <ul>
            {value.map((item: any, index: any) => {
              if (value.length - 1 === index) {
                return (
                  <>
                    <i key={index}>{item}</i>
                  </>
                );
              } else {
                return (
                  <>
                    <i key={index}>{item}, </i>
                  </>
                );
              }
            })}
          </ul>
        );
      },
      width: 150,
    },
    {
      field: "companyCode",
      headerName: "회사코드",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={0} xs={12}>
          <div style={{ height: 600, width: "100%" }}>
            <StyledDataGrid
              rows={allInitAgencyList ?? []}
              columns={columns}
              getRowId={(row) => row.id}
              checkboxSelection
              onRowSelectionModelChange={(itm: any) => setSelectionModel(itm)}
            />
          </div>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Box
            sx={{
              bgcolor: "#F9F9F9",
              borderRadius: "7px",
              border: "1px solid #DFE5EF",
              padding: "1.25rem",
            }}
          >
            <Stack direction="column" p={4} spacing={2} alignItems="center">
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Avatar
                  src={"/images/profile/user-1.jpg"}
                  alt={"ProfileImg"}
                  sx={{ width: 120, height: 120 }}
                />
                <Button
                  sx={{
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    bgcolor: "#F37321",
                    padding: "0",
                    minWidth: "auto",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 10px rgba(0,0,0,.2)",
                  }}
                >
                  <i className="ri-camera-2-fill"></i>
                </Button>
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  variant="subtitle2"
                  color="#272B2F"
                  fontWeight={600}
                >
                  Mathew Anderson
                </Typography>
                <Typography variant="subtitle2" color="#7b7b7b">
                  Designer
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#7b7b7b"
                  display="flex"
                  alignItems="center"
                  gap={1}
                ></Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item sm={9} xs={12}>
          <Box
            sx={{
              borderRadius: "7px",
              border: "1px solid #DFE5EF",
            }}
          >
            <AccountMg />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Box sx={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <Button variant="contained" onClick={handle01ClickOpen}>
            {" "}
            Popup01
          </Button>
          <Button variant="contained" onClick={handle02ClickOpen}>
            {" "}
            Popup02
          </Button>
          <Button variant="contained" onClick={handle03ClickOpen}>
            {" "}
            Popup03
          </Button>
        </Box>
        <Dialog open={open01} onClose={handle01Close} maxWidth="xs">
          {/* <DialogTitle>Search user</DialogTitle> */}
          <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
            <DialogContentText
              sx={{
                fontSize: "1.25rem",
                color: "#272B2F",
                lineHeight: "140%",
                textAlign: "center",
              }}
            >
              <p>
                Verificationemailhas been sent to xxx@xxx.net. Please check your
                mail box.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              justifyContent: "center",
              paddingBottom: "2.4rem",
            }}
          >
            <Button variant="contained" color="primary" onClick={handle01Close}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={open02} onClose={handle02Close} maxWidth="xs">
          {/* <DialogTitle>Search user</DialogTitle> */}
          <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
            <DialogContentText
              sx={{
                fontSize: "1.25rem",
                color: "#272B2F",
                lineHeight: "140%",
                textAlign: "center",
              }}
            >
              <p>
                Verificationmessage has been sent to 010-0000-0000. Please check
                your mobile device.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              justifyContent: "center",
              paddingBottom: "2.4rem",
            }}
          >
            <Button variant="contained" color="primary" onClick={handle02Close}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={open03} onClose={handle03Close} maxWidth="xs">
          {/* <DialogTitle>Search user</DialogTitle> */}
          <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
            <DialogContentText
              sx={{
                fontSize: "1.25rem",
                color: "#272B2F",
                lineHeight: "140%",
                textAlign: "center",
                padding: "0",
                margin: "0",
                marginBlockStart: "0",
                marginBlockEnd: "0",
                // margin-block-start: "1em",
                // margin-block-end: 1em,
              }}
            >
              <Box
                sx={{
                  padding: "3.125rem",
                  paddingBottom: "0",
                  paddingTop: "0",
                }}
              >
                <img src="/images/images/profile.svg" alt="" />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              justifyContent: "center",
              paddingBottom: "2.4rem",
            }}
          >
            <Button variant="outlined" color="primary" className="btn-outline">
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handle03Close}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};
export default AccountManagement;
