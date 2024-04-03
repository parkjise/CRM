// import { createSlice } from "@reduxjs/toolkit";
// import { AppDispatch, AppState } from "../../store";
// import axios from "axios";
// import { useSelector } from "@/store/hooks";
//
// interface StateType {
//   // userAllAuths: [] | ""; // 모든 권한 리스트 세팅
//   // userSearchList: [] | ""; // 이름으로 사원 정보 검색
//   // waitUserIdPatchResponse: {} | ""; // 사용자 계정 잠금
//   // waitUserIdDeleteResponse: {} | ""; // 사용자 계정 삭제
//   // outCorpUserRegResponse: {} | ""; // 본사 이외 유저 등록
// }
//
// const initialState = {
//   // userAllAuths: [] || "",
//   // userSearchList: [] || "",
//   // waitUserIdPatchResponse: {} || "",
//   // waitUserIdDeleteResponse: {} || "",
//   // outCorpUserRegResponse: {} || "",
// };
//
// export const UsersInfosSlice = createSlice({
//   name: "UsersInfos",
//   initialState,
//   reducers: {
//     // userAllAuths: (state, action) => {
//     //   state.userAllAuths = action.payload;
//     // },
//     // userSearchList: (state, action) => {
//     //   state.userSearchList = action.payload;
//     // },
//     // waitUserIdPatchResponse: (state, action) => {
//     //   state.waitUserIdPatchResponse = action.payload;
//     // },
//     // waitUserIdDeleteResponse: (state, action) => {
//     //   state.waitUserIdDeleteResponse = action.payload;
//     // },
//     // outCorpUserRegResponse: (state, action) => {
//     //   state.outCorpUserRegResponse = action.payload;
//     // },
//   },
// });
//
// export const {
//   // userAllAuths,
//   // userSearchList,
//   // waitUserIdPatchResponse,
//   // waitUserIdDeleteResponse,
//   // outCorpUserRegResponse,
// } = UsersInfosSlice.actions;
//
// const access = useSelector((state: AppState) => state.userInfoReducer.access);
//
// const axiosServices = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
//   headers: {
//     Authorization: `Bearer ${access}`,
//   },
// });
//
// // interceptor for http
// axiosServices.interceptors.response.use(
//   (response: any) => response,
//   (error: any) =>
//     Promise.reject((error.response && error.response.data) || "Wrong Services")
// );
//
// // 전체 권한 리스트 조회
// export const scrmCoreUserAllAuths = () => async (dispatch: AppDispatch) => {
//   try {
//     const response = await axiosServices.get(`/api/auth`);
//     dispatch(userAllAuths(response.data));
//   } catch (err: any) {
//     dispatch(userAllAuths([]));
//     console.warn("l~ warn scrmCoreCountryUserHere ");
//   }
// };
//
// // 이름으로 사원 정보 검색
// export const scrmCoreUserSearchList =
//   (name: string) => async (dispatch: AppDispatch) => {
//     try {
//       const response = await axiosServices.post(`/api/users/employees`, {
//         name: name,
//       });
//       dispatch(userSearchList(response.data));
//     } catch (err: any) {
//       dispatch(userSearchList([]));
//       console.warn("l~ warn scrmCoreUserSearchList ");
//     }
//   };
//
// // 사용자 계정 잠금
// export const scrmCoreWaitUserIdPatch =
//   (name: string) => async (dispatch: AppDispatch) => {
//     try {
//       const response = await axiosServices.patch(`/api/users`, {
//         name: name,
//       });
//       dispatch(waitUserIdPatchResponse(response.data));
//     } catch (err: any) {
//       dispatch(waitUserIdPatchResponse({}));
//       console.warn("l~ warn scrmCoreWaitUserIdPatch ");
//     }
//   };
//
// // 사용자 계정 삭제
// export const scrmCoreWaitUserIdDelete =
//   (name: string) => async (dispatch: AppDispatch) => {
//     try {
//       const response = await axiosServices.delete(`/api/users`, {});
//       dispatch(waitUserIdDeleteResponse(response.data));
//     } catch (err: any) {
//       dispatch(waitUserIdDeleteResponse({}));
//       console.warn("l~ warn scrmCoreWaitUserIdDelete ");
//     }
//   };
//
// // 본사 이외 유저 등록
// export const scrmCoreOutCorpUserRegResponse =
//   (name: string) => async (dispatch: AppDispatch) => {
//     try {
//       const response = await axiosServices.post(`/api/users`, {});
//       dispatch(outCorpUserRegResponse(response.data));
//     } catch (err: any) {
//       dispatch(outCorpUserRegResponse({}));
//       console.warn("l~ warn scrmCoreOutCorpUserRegResponse ");
//     }
//   };
//
// export default UsersInfosSlice.reducer;
