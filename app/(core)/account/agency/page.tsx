"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// components
import Scrollbar from "@/app/(core)/components/custom-scroll/Scrollbar";
import AddUsers from "@/app/(core)/components/pages/account-setting/AddUsers";
import { GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "@/store/hooks";
import {
  scrmCoreAllAgencyList,
  scrmCoreWaitUserIdDelete,
  scrmCoreWaitUserIdPatch,
  waitUserIdDeleteResponse,
  waitUserIdPatchResponse,
} from "@/store/apps/userInfo/UserInfoSlice";
import moment from "moment";
import compStyled from "styled-components";
import { StyledDataGrid } from "@/app/(core)/components/mui-grid/StyledDataGrid";
import { AppState } from "@/store/store";

const TableScroll = compStyled.div`
  overflow-x: auto;
`;
const UsersForm = compStyled.div`
  border-radius: 10px;
  border: 1px solid #dfe5ef;
  padding: 1.25rem;
`;
const StepsStyled = compStyled.div`
  .modernize-m5vj9m-MuiStepper-root {
    margin: 1.875rem auto;
    padding: 0 10rem;
    @media (max-width: 1000px) {
      padding: 0 0rem;
    }
  }
`;
const AuthApproval = () => {
  const dispatch = useDispatch();

  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [open03, setOpen03] = useState(false);
  const [open04, setOpen04] = useState(false);

  const [selectionModel, setSelectionModel] = useState([] as any);
  const [selectionObjectModel, setSelectionObjectModel] = useState([] as any);

  const waitUserIdRespPatch: any = useSelector(
    (state: AppState) => state.userInfoReducer.waitUserIdPatchResponse
  );

  const waitUserIdRespDelete: any = useSelector(
    (state: AppState) => state.userInfoReducer.waitUserIdDeleteResponse
  );

  const handle01ClickOpen = () => {
    setOpen01(true);
  };
  const handle01Close = () => {
    setOpen01(false);
  };

  const handle02ClickOpen = () => {
    if (selectionModel.length !== 0) {
      selectionModel.map(async (item: any, index: any) => {
        await dispatch(scrmCoreWaitUserIdPatch(item) as any);
      });
    } else {
      alert("선택하세요");
    }
    // setOpen02(true);
  };

  useEffect(() => {
    if (waitUserIdRespPatch?.message === "SUCCESS") {
      alert("요청 완료");
    } else if (waitUserIdRespPatch?.message === "FAIL") {
      alert("요청 실패");
    }
    return () => {
      dispatch(waitUserIdPatchResponse({ message: "" }));
    };
  }, [waitUserIdRespPatch?.message]);

  const handle02Close = () => {
    // setOpen02(false);
  };

  const handle03ClickOpen = () => {
    if (selectionModel.length !== 0) {
      selectionModel.map(async (item: any, index: any) => {
        await dispatch(scrmCoreWaitUserIdDelete(item) as any);
      });
    } else {
      alert("선택하세요");
    }
    // setOpen03(true);
  };

  useEffect(() => {
    if (waitUserIdRespDelete?.message === "SUCCESS") {
      alert("요청 완료");
      // { message: "SUCCESS" } 값 나오면 밑에 주석 해제 필요! 현수(Back-end)씨에게 요청 필요!
      // dispatch(scrmCoreAllAgencyList() as any);
    } else if (waitUserIdRespDelete?.message === "FAIL") {
      alert("요청 실패");
    }
    return () => {
      dispatch(waitUserIdDeleteResponse({ message: "" }));
    };
  }, [waitUserIdRespDelete?.message]);

  const handle03Close = () => {
    setOpen03(false);
  };
  const handle04ClickOpen = () => {
    setOpen04(true);
  };
  const handle04Close = () => {
    setOpen04(false);
  };

  useEffect(() => {
    dispatch(scrmCoreAllAgencyList() as any);
  }, [dispatch]);

  useEffect(() => {
    // const selectedObjects = allInitAgencyList.filter(
    //   (object: any, index: any) => selectionModel.includes(index)
    // );

    setSelectionObjectModel(
      allInitAgencyList.filter((object: any, index: any) =>
        selectionModel.includes(index)
      )
    );
  }, [selectionModel]);

  const allInitAgencyList = useSelector(
    (state) => state.userInfoReducer.allAgencyList
  );

  // [TIP] MUI DataGrid에서 배열 렌더링 방법
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

  const toParentCloseChildLayer = () => {
    setOpen01(false);
  };

  return (
    <>
      <div style={{ height: 600, width: "100%" }}>
        <StyledDataGrid
          rows={allInitAgencyList ?? []}
          columns={columns}
          getRowId={(row) => row.id}
          checkboxSelection
          onRowSelectionModelChange={(itm: any) => setSelectionModel(itm)}
        />
      </div>
      <Box>
        <Box sx={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <Button variant="contained" onClick={handle01ClickOpen}>
            사용자 추가
          </Button>
        </Box>
        <Box sx={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <Button variant="contained" onClick={handle02ClickOpen}>
            사용자 잠금
          </Button>
        </Box>
        <Box sx={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <Button variant="contained" onClick={handle03ClickOpen}>
            사용자 삭제
          </Button>
        </Box>
        <Dialog open={open01} onClose={handle01Close} fullWidth maxWidth="md">
          <Button onClick={handle01Close} className="pop-close">
            <i className="ri-close-line"></i>
          </Button>
          <DialogTitle>Add user</DialogTitle>
          <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
            <DialogContentText>
              <Scrollbar sx={{ height: "500px" }}>
                <StepsStyled>
                  <AddUsers toParentCloseChildLayer={toParentCloseChildLayer} />
                </StepsStyled>
              </Scrollbar>
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              justifyContent: "center",
              paddingBottom: "2.4rem",
            }}
          ></DialogActions>
        </Dialog>
      </Box>
    </>
  );
};
export default AuthApproval;
