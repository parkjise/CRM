import React, { useEffect, useState } from "react";
import { StyledDataGrid } from "@/app/(core)/components/mui-grid/StyledDataGrid";
import { useDispatch, useSelector } from "@/store/hooks";
import { scrmCoreGetAuthApproval } from "@/store/apps/userInfo/UserInfoSlice";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { LOOKUP_VALUES } from "@/utils/constants/constant";

const ReqHistoryTab = () => {
  const dispatch = useDispatch();

  const [selectionModel, setSelectionModel] = useState([] as any);

  useEffect(() => {
    dispatch(scrmCoreGetAuthApproval() as any);
  }, [dispatch]);

  const allAuthApprovalList = useSelector(
    (state) => state.userInfoReducer.allAuthApprovalList
  );

  const lookup: any = {
    1: "진행",
    2: "완료",
    3: "반려",
    4: "상신취소",
  };

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
    </>
  );
};

export default ReqHistoryTab;
