// import axios from "../../../utils/axios";
// import { createSlice } from "@reduxjs/toolkit";
// import { AppDispatch } from "../../store";
//
// interface StateType {
//   allAgencyList: [] | ""; //
// }
//
// const initialState = {
//   allAgencyList: [] || "",
// };
//
// export const AgencySlice = createSlice({
//   name: "Agency",
//   initialState,
//   reducers: {
//     allAgencyList: (state, action) => {
//       state.allAgencyList = action.payload;
//     },
//   },
// });
//
// export const { allAgencyList } = AgencySlice.actions;
//
// //
// export const scrmCoreAllAgencyList = () => async (dispatch: AppDispatch) => {
//   try {
//     const response = await axios.get(`/api/users`);
//     dispatch(allAgencyList(response.data));
//   } catch (err: any) {
//     dispatch(allAgencyList([]));
//     console.warn("l~ warn scrmCoreAllAgencyList ");
//   }
// };
//
// export default AgencySlice.reducer;
