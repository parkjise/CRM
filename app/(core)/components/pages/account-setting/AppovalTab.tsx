import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from "@mui/material";
import styled from "styled-components";
import CrmTitleTypeA from "@/app/(core)/components/crm/CrmTitleTypeA";
import CrmAuthBtnHeader from "@/app/(core)/components/crm/CrmAuthBtnHeader";
import CrmAuthTextarea from "@/app/(core)/components/crm/CrmAuthTextarea";
import CrmSearchUserAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CrmSearchUserAutocomplete";
import { useSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { IconSearch } from "@tabler/icons-react";
import BlankCard from "@/app/(core)/components/shared/BlankCard";
import { newArrAllocateIdSeq } from "@/utils/common/arrayLogic";
import _ from "lodash";
import { AppState } from "@/store/store";

// ApprovalTab.tsx
const TableScroll = styled.div`
  overflow-x: auto;
`;

const SearchStyle = styled.div`
  .modernize-1kkal6p-MuiAutocomplete-root {
    .MuiOutlinedInput-root {
      padding: 6px 0 6px 15px;
    }
  }
  i {
    font-size: 24px;
  }
`;

interface CircleInfo {
  userName?: string;
  userNameEn?: string;
  email?: string;
  mobile?: string;
  company?: string;
  department?: string;
  countryCode?: string;
}
// -- ApprovalTab.tsx

// ApprovalTable.tsx
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
// -- ApprovalTable.tsx

const StyledRadioButton = styled.input`
  margin: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:checked {
    background-color: #000;
    color: #fff;
  }
`;

const AppovalTab = (props: any) => {
  const dispatch = useDispatch();

  let myDrafter = useSelector(
    (state: AppState) => state.userInfoReducer.myDrafter
  );

  // @ts-ignore
  myDrafter = { ...myDrafter, seq: 0 };

  // 유저 검색 팝업 리스트
  const userSearchList = useSelector(
    (state) => state.userInfoReducer.userSearchList
  );

  // 유저 검색 팝업 리스트에서 매핑
  const [approveUsers, setApproveUsers] = useState([myDrafter] as Array<any>);
  // 결재선 리스트 결과의 유저
  const [approvePresetUsers, setApprovePresetUsers] = useState([
    myDrafter,
  ] as Array<any>);
  // 유저 검색 팝업 리스트에서 선택
  const [tempUsers, setTempUsers] = useState([] as Array<any>);

  const [open01, setOpen01] = useState(false);

  // 유저 검색 팝업 리스트에서 선택
  const [checkedUsers, setCheckedUsers] = useState([]);

  // 결재선에 유저 추가하는 버튼
  const [tempPushButton, setTempPushButton] = useState(0);

  // [TIP] React MUI TableRow 클릭 시 단일 선택 구현
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const toParentCheckedUsers = (nums: []) => {
    setCheckedUsers(nums);
  };

  const handle01SearchUserClickOpen = () => {
    setTempUsers([]); // 사원 검색 레이어 팝업 useState 초기화
    setSelectedRowId(null); // 사원 목록 selected의 useState 초기화
    setOpen01(true);
  };
  const handle01SearchUserClose = () => {
    setOpen01(false);
  };

  const handle01SearchUserConfirm = () => {
    setTempPushButton(tempPushButton + 1);
  };

  /**/
  useEffect(() => {
    if (checkedUsers.length !== 0) {
      checkedUsers.map((current: any, index: any) => {
        setTempUsers([...tempUsers, userSearchList[current - 1]]);
      });
    }
  }, [checkedUsers]);

  useEffect(() => {
    if (userSearchList !== undefined && userSearchList.length === 1) {
      setTempPushButton(tempPushButton + 1);
    }
  }, [tempUsers]);

  useEffect(() => {
    let data: Array<any> = [];

    if (tempUsers.length !== 0) {
      data = [...approveUsers, ...tempUsers];
      data = _.uniqBy(data, "userKey");
      data = newArrAllocateIdSeq(data);

      // setApproveUsers(data);

      //

      let data02: Array<any>;

      // assignType, sequence, comment 할당
      data02 = data.map((item: any, idx: any) => ({
        ...item,
        seq: idx,
        companyName: item.company,
        assignType: "1",
        sequence: idx,
        comment: "",
      }));

      // 첫번째 유저는 기안자이므로 assignType을 "0"으로 할당
      const [firstData, ...restData] = data02;
      const updatedFirstUser = { ...firstData, assignType: "0" };
      const updatedUsers = [updatedFirstUser, ...restData];

      // companyName을 사용하기에 company의 hasOwnProperty는 모두 삭제
      // updatedUsers.forEach((user) => delete user.company);

      setApproveUsers(updatedUsers);
      setApprovePresetUsers(updatedUsers);
    }
  }, [tempPushButton]);
  /**/

  const toggleActive01 = (seq: string | number) => {
    // [TIP] React 객체 배열에서 row.id와 일치한 row의 데이터 수정 후 setState
    const updatedRows = approvePresetUsers.map((row) => {
      if (row.seq === seq) {
        return { ...row, assignType: "1" };
      }
      return row;
    });

    setApproveUsers(updatedRows);
    setApprovePresetUsers(updatedRows);
  };
  const toggleActive02 = (seq: string | number) => {
    const updatedRows = approvePresetUsers.map((row) => {
      if (row.seq === seq) {
        return { ...row, assignType: "2" };
      }
      return row;
    });

    setApproveUsers(updatedRows);
    setApprovePresetUsers(updatedRows);
  };
  const toggleActive03 = (seq: string | number) => {
    const updatedRows = approvePresetUsers.map((row) => {
      if (row.seq === seq) {
        return { ...row, assignType: "9" };
      }
      return row;
    });

    setApproveUsers(updatedRows);
    setApprovePresetUsers(updatedRows);
  };

  const handleDelete = useCallback(
    (seq: string | number) => {
      let updatedRows = approvePresetUsers.filter((row) => row.seq !== seq);

      updatedRows = newArrAllocateIdSeq(updatedRows);

      setApproveUsers(updatedRows);
      setApprovePresetUsers(updatedRows);
    },
    [approvePresetUsers]
  );

  const toParentAll1 = () => {
    // [TIP] React 객체 배열에서 첫 번째 인덱스를 제외한 나머지 데이터(rows)의 데이터 수정 후 setState
    const updatedRows = approvePresetUsers.slice(1).map((row) => {
      return { ...row, assignType: "1" };
    });

    setApproveUsers([approvePresetUsers[0], ...updatedRows]);
    setApprovePresetUsers([approvePresetUsers[0], ...updatedRows]); // 첫 번째 인덱스 유지
  };

  const toParentAll2 = () => {
    const updatedRows = approvePresetUsers.slice(1).map((row) => {
      return { ...row, assignType: "2" };
    });

    setApproveUsers([approvePresetUsers[0], ...updatedRows]);
    setApprovePresetUsers([approvePresetUsers[0], ...updatedRows]);
  };

  const toParentAll9 = () => {
    const updatedRows = approvePresetUsers.slice(1).map((row) => {
      return { ...row, assignType: "9" };
    });

    setApproveUsers([approvePresetUsers[0], ...updatedRows]);
    setApprovePresetUsers([approvePresetUsers[0], ...updatedRows]);
  };

  // [TIP] MUI TableRow 선택한 Row 상하 이동 예시
  const handleSwap = (sourceIndex: any, destinationIndex: number | any) => {
    if (selectedRowId === null) return;

    const newRows = approvePresetUsers.slice();
    const [removed] = newRows.splice(sourceIndex, 1);
    newRows.splice(destinationIndex, 0, removed);

    setApprovePresetUsers(newRows);
    setSelectedRowId(destinationIndex);
    setSelectedRowIndex(destinationIndex);
  };

  const toParentDoUpAndUp = () => {
    if (selectedRowIndex === 0 || selectedRowIndex === 1) return;
    handleSwap(selectedRowIndex!, 1);
  };
  const toParentDoUp = () => {
    if (selectedRowIndex === 0 || selectedRowIndex === 1) return;
    handleSwap(selectedRowIndex!, selectedRowIndex! - 1);
  };
  const toParentDoDown = () => {
    if (selectedRowIndex === approvePresetUsers.length - 1) return;
    handleSwap(selectedRowIndex!, selectedRowIndex! + 1);
  };
  const toParentDoDownAndDown = () => {
    if (selectedRowIndex === approvePresetUsers.length - 1) return;
    handleSwap(selectedRowIndex!, approvePresetUsers.length - 1);
  };

  const toParentAllDelete = () => {
    const updatedRows = approvePresetUsers.slice(0, 1);

    setApproveUsers(updatedRows);
    setApprovePresetUsers(updatedRows);
  };

  const handleSelect = (event: any, rowId: any, index: any) => {
    setSelectedRowId(index);
    setSelectedRowIndex(index);
  };

  useEffect(() => {
    if (userSearchList !== undefined && userSearchList.length === 1) {
      toParentCheckedUsers([1] as any);
      handle01SearchUserClose();
    }
  }, [userSearchList]);

  useEffect(() => {
    props.toParentApprovePresetUsers(approvePresetUsers);
  }, [selectedRowId, approveUsers, approvePresetUsers]);

  return (
    <Box sx={{ border: "1px solid #DFE5EF", padding: "1.25rem" }}>
      <Box>
        <CrmTitleTypeA />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={12} sm={12} lg={4}></Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <FormControl
              style={{ width: "100%" }}
              onClick={handle01SearchUserClickOpen}
            >
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <IconSearch width={20} />
                  </InputAdornment>
                }
                id="username2-text"
                placeholder="Search User"
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}></Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <CrmAuthBtnHeader
          toChildApproveUserCounts={approvePresetUsers.length - 1}
          toParentAll1={toParentAll1}
          toParentAll2={toParentAll2}
          toParentAll9={toParentAll9}
          toParentDoUpAndUp={toParentDoUpAndUp}
          toParentDoUp={toParentDoUp}
          toParentDoDown={toParentDoDown}
          toParentDoDownAndDown={toParentDoDownAndDown}
          toParentAllDelete={toParentAllDelete}
        />
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        <TableScroll>
          {/*<ApprovalTable approveUsers={approveUsers} />*/}
          <TableStyle>
            <BlankCard>
              <TableContainer>
                <Table aria-label="simple table" sx={{ whiteSpace: "nowrap" }}>
                  <TableBody>
                    {approvePresetUsers.map((row: any, index: number) => {
                      const isSelected = selectedRowId === index && index !== 0;

                      return (
                        <TableRow
                          hover
                          key={index}
                          aria-checked={isSelected}
                          role="checkbox"
                          tabIndex={-1}
                          selected={isSelected}
                          onClick={(event) =>
                            handleSelect(event, row.seq, index)
                          }
                        >
                          <TableCell align="center" className="cellfirst">
                            {index}
                          </TableCell>
                          <TableCell align="center" className="cellsecond">
                            <BtnWrap>
                              {row.seq === 0 && (
                                <>
                                  {" "}
                                  <Button
                                    variant="outlined"
                                    className="btn-outline"
                                    value={row.assignType}
                                  >
                                    기안
                                  </Button>
                                </>
                              )}
                              {row.seq !== 0 && (
                                <>
                                  <Button
                                    value={row.assignType}
                                    variant="outlined"
                                    className={
                                      "btn-outline" +
                                      (row.assignType === "1" ? " active" : "")
                                    }
                                    onClick={() => toggleActive01(row.seq)}
                                  >
                                    결재
                                  </Button>
                                  <Button
                                    value={row.assignType}
                                    variant="outlined"
                                    className={
                                      "btn-outline" +
                                      (row.assignType === "2" ? " active" : "")
                                    }
                                    onClick={() => toggleActive02(row.seq)}
                                  >
                                    합의
                                  </Button>
                                  <Button
                                    value={row.assignType}
                                    variant="outlined"
                                    className={
                                      "btn-outline" +
                                      (row.assignType === "9" ? " active" : "")
                                    }
                                    onClick={() => toggleActive03(row.seq)}
                                  >
                                    통보
                                  </Button>
                                </>
                              )}
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
                            sx={{
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                            }}
                          >
                            {row.userName} / {row.userId} / {row.position} /{" "}
                            {row.department} / {row.company ?? row.companyName}
                          </TableCell>
                          <TableCell className="cellfifth">
                            <AuthBtnIco>
                              <Tooltip title="Write" placement="top">
                                <Button
                                  variant="outlined"
                                  className="btn-outline"
                                >
                                  <i className="ri-file-edit-line"></i>
                                </Button>
                              </Tooltip>
                            </AuthBtnIco>
                          </TableCell>
                          <TableCell className="cellsixth">
                            {row.seq !== 0 && (
                              <AuthBtnIco>
                                <Tooltip title="Delete" placement="top">
                                  <Button
                                    variant="outlined"
                                    className="btn-outline"
                                    onClick={() => handleDelete(row.seq)}
                                  >
                                    <i className="ri-close-line"></i>
                                  </Button>
                                </Tooltip>
                              </AuthBtnIco>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </BlankCard>
          </TableStyle>
          {/*<ApprovalTable approveUsers={approveUsers} />*/}
        </TableScroll>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <CrmAuthTextarea />
      </Box>
      <Dialog
        open={open01}
        onClose={handle01SearchUserClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Search user</DialogTitle>
        <DialogContent sx={{ padding: "2.4rem 2.4rem 2.4rem 2.4rem" }}>
          <DialogContentText>
            <Box sx={{ marginTop: "20px" }}>
              {/*<CrmUserSearchTypeA />*/}
              <SearchStyle>
                <CrmSearchUserAutocomplete
                  toParentCheckedUsers={toParentCheckedUsers}
                />
              </SearchStyle>
            </Box>
            {/*<Box>Grid Area abc</Box>*/}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "2.4rem",
          }}
        >
          {/* <Button color="error" onClick={handle02Close}>
            Cancel
          </Button> */}
          <Button
            variant="contained"
            color="inherit"
            onClick={handle01SearchUserClose}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handle01SearchUserConfirm}
          >
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AppovalTab;
