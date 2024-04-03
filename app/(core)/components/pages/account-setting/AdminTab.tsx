import React, { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment/moment";
import {
  apprPatchMngResponse,
  apprPutMngResponse,
  scrmCoreGetAuthApproval,
  scrmCorePatchAuthApprovalManagement,
  scrmCorePutAuthApprovalManagement,
} from "@/store/apps/userInfo/UserInfoSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { StyledDataGrid } from "@/app/(core)/components/mui-grid/StyledDataGrid";
import { LOOKUP_VALUES } from "@/utils/constants/constant";
import { Box, Button } from "@mui/material";

const AdminTab = () => {
  const dispatch = useDispatch();

  const [selectionModel, setSelectionModel] = useState([] as any);

  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

  const apprPatchRespMng: any = useSelector(
    (state) => state.userInfoReducer.apprPatchMngResponse
  );
  const apprPutRespMng: any = useSelector(
    (state) => state.userInfoReducer.apprPutMngResponse
  );

  const handle01Click = () => {
    if (selectionModel.length !== 0) {
      selectionModel.map(async (item: any, index: any) => {
        dispatch(scrmCorePatchAuthApprovalManagement(selectionModel) as any);
      });
    } else {
      alert("선택하세요");
    }
  };

  const handle02Click = () => {
    if (selectionModel.length !== 0) {
      selectionModel.map(async (item: any, index: any) => {
        dispatch(scrmCorePutAuthApprovalManagement(selectionModel) as any);
      });
    } else {
      alert("선택하세요");
    }
  };

  useEffect(() => {
    dispatch(scrmCoreGetAuthApproval() as any);
  }, [dispatch]);

  const allAuthApprovalList = useSelector(
    (state) => state.userInfoReducer.allAuthApprovalList
  );

  useEffect(() => {
    if (apprPatchRespMng?.message === "SUCCESS") {
      alert("요청 성공");
    } else if (apprPatchRespMng?.message === "FAIL") {
      alert("요청 실패");
    }

    return () => {
      dispatch(apprPatchMngResponse({ message: "" }) as any);
    };
  }, [apprPatchRespMng?.message]);

  useEffect(() => {
    if (apprPutRespMng?.message === "SUCCESS") {
      alert("요청 성공");
    } else if (apprPatchRespMng?.message === "FAIL") {
      alert("요청 실패");
    }

    return () => {
      dispatch(apprPutMngResponse({ message: "" }) as any);
    };
  }, [apprPutRespMng?.message]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 10 },
    { field: "drafter", headerName: "기안자", width: 150 },
    { field: "company", headerName: "회사", width: 150 },
    { field: "email", headerName: "이메일", minWidth: 200 },
    { field: "department", headerName: "부서", minWidth: 150 },
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
      field: "status",
      headerName: "상태",
      valueGetter: (params) => {
        const status = params.row.status;
        return LOOKUP_VALUES.APPROVAL[status];
      },
      minWidth: 150,
    },
  ];

  return (
    <>
      <div style={{ height: 600, width: "100%" }}>
        <StyledDataGrid
          rows={allAuthApprovalList ?? []}
          columns={columns}
          getRowId={(row) => row.id + row.email}
          checkboxSelection
          onRowSelectionModelChange={(itm: any) => setSelectionModel(itm)}
        />
      </div>
      <div>
        <Box sx={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <Button variant="contained" onClick={handle01Click}>
            권한 신청 건 승인
          </Button>
        </Box>
        <Box sx={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <Button variant="contained" onClick={handle02Click}>
            권한 신청 건 거절
          </Button>
        </Box>
      </div>
    </>
  );
};

export default AdminTab;
