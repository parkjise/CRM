import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import { setCookie } from "@/utils/cookies/cookie";
import { ERROR_MESSAGE } from "@/utils/constants/constant";
import axios from "../../../utils/axios";

interface StateType {
  access: "";
  refresh: "";
  result: ""; // rest api 결과값
  userRegInfo: object | {}; // 임시 회원가입
  userInfo: object | {}; // 로그인 후 얻어지는 access, refresh
  phoneAuthMessage: string | ""; // 입력된 국가코드와 휴대폰번호로 인증코드 발송하는 API
  phoneCheckMessage: string | ""; // 유저의 휴대폰번호로 인증코드 검증하는 API
  circleInfo: object | {}; // 서클 유저 정보 및 국가코드 조회하는 임시 API
  circleAfterLoginInfo: object | {}; // 로그인 후에 서클 유저 정보 및 국가코드 조회
  requestParams: object | {}; // 미국 출장 중에 전화번호 인증, 사원조회 테스트
  userWaitParams: object | {}; // 계정 활성화 대기
  userWaitResponse: object | {}; // 계정 (결과값) 활성화 대기
  userMyInfoRegParams: object | {}; // 회원가입(접근 권한 관리)
  countryUserHere: object | {}; // "지금 접속하신 국가는..."
  myDrafter: object | {}; // 기안자 정보 가져오기
  userHeadRegParams: object | {}; // 본사 유저 회원가입
  userHeadRegResponse: object | {}; // 본사 유저 회원가입 결과값
  userApplyApproveResponse: object | {}; // 결재 요청 결과값
  forgotYourPasswordResponse: object | {}; // 이메일 인증 결과값
  passAndRepassResponse: object | {}; // 비밀번호 찾기 결과값
  findedMyEmailResponse: object | {}; // 이메일 찾기 결과값
  digits6Response: object | {}; // 6자리 인증 값
  //
  userAllAuths: [] | ""; // 모든 권한 리스트 세팅
  userSearchList: [] | ""; // 이름으로 사원 정보 검색
  waitUserIdPatchResponse: {} | ""; // 사용자 계정 잠금
  waitUserIdDeleteResponse: {} | ""; // 사용자 계정 삭제
  outCorpUserRegResponse: {} | ""; // 본사 이외 유저 등록
  apprPatchMngResponse: {} | ""; // 권한 신청 건 승인
  apprPutMngResponse: {} | ""; // 권한 신청 건 거절
  checkPasswordResponse: {} | ""; // 유저 비밀번호 확인
  confirmCancellationResponse: {} | ""; // 계정 탈퇴
  adminPhoneEmailResponse: {} | ""; // 유저 인증 진행 경과 확인하기
  authEmailResponse: {} | ""; // 인증 이메일 전송
  authSmsResponse: {} | ""; // 인증 문자 전송
  //
  allAgencyList: [] | ""; // 대리점
  allAuthApprovalList: [] | ""; // 전체 권한 리스트 조회
}

interface regUserInterface {
  email?: string;
  password?: string;
  nameEn?: string;
  nameLo?: string;
  phone?: string;
}

interface phoneAuthCodeInterface {
  countryCode?: string;
  phone?: string;
}

interface phoneCheckCodeInterface {
  authCode?: string;
  phone?: string;
}

interface reqPrmsInterface {
  phone?: string;
  countryCode?: string;
  authCode?: string;
}

interface userWaitParamsInterface {
  phone?: string;
  countryCode?: string;
  authCode?: string;
  email?: string;
  radioEmail?: string;
  radioPhone?: string;
}

interface userWaitResponseInterface {
  isApprovedByAdmin?: string;
  isEmailVerify?: string;
  isMobileVerify?: string;
  isAllVerifyOk?: string;
}
interface userMyInfoRegParamsInterface {
  phone?: string;
  countryCode?: string;
  authCode?: string;
  email?: string;
  radioEmail?: string;
  radioPhone?: string;
}

interface userHeadRegParamsInterface {
  email?: string;
  password?: string;
  retypePassword?: string;
  nameEn?: string;
  nameLo?: string;
  countryCode?: string;
  phone?: string;
  verifyPhone?: string;
  company?: string;
  department?: string;
  auth?: [];
}

const initialState = {
  access: "",
  refresh: "",
  result: "",
  userRegInfo: {} || "",
  userInfo: "" || {},
  phoneAuthMessage: {} || "",
  phoneCheckMessage: {} || "",
  circleInfo: {} || "",
  circleAfterLoginInfo: {} || "",
  requestParams: {} || "",
  userWaitParams: {} || "",
  userWaitResponse: {} || "",
  userMyInfoRegParams: {} || "",
  countryUserHere: {} || "",
  myDrafter: {} || "",
  userHeadRegParams: {} || "",
  userHeadRegResponse: {} || "",
  userApplyApproveResponse: {} || "",
  forgotYourPasswordResponse: {} || "",
  passAndRepassResponse: {} || "",
  findedMyEmailResponse: {} || "",
  digits6Response: {} || "",
  //
  userAllAuths: [] || "",
  userSearchList: [] || "",
  waitUserIdPatchResponse: {} || "",
  waitUserIdDeleteResponse: {} || "",
  outCorpUserRegResponse: {} || "",
  apprPatchMngResponse: {} || "",
  apprPutMngResponse: {} || "",
  checkPasswordResponse: {} || "",
  confirmCancellationResponse: {} || "",
  adminPhoneEmailResponse: {} || "",
  authEmailResponse: {} || "",
  authSmsResponse: {} || "",
  //
  allAgencyList: [] || "",
  allAuthApprovalList: [] || "",
};

export const UserInfoSlice = createSlice({
  name: "UserInfo",
  initialState,
  reducers: {
    access: (state, action) => {
      state.access = action.payload;
    },
    refresh: (state, action) => {
      state.refresh = action.payload;
    },
    userRegInfo: (state, action) => {
      state.userRegInfo = action.payload;
    },
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    phoneAuthMessage: (state, action) => {
      state.phoneAuthMessage = action.payload;
    },
    phoneCheckMessage: (state, action) => {
      state.phoneCheckMessage = action.payload;
    },
    circleInfo: (state, action) => {
      state.circleInfo = action.payload;
    },
    circleAfterLoginInfo: (state, action) => {
      state.circleAfterLoginInfo = action.payload;
    },
    requestParams: (state, action) => {
      state.requestParams = action.payload;
    },
    userWaitParams: (state, action) => {
      state.userWaitParams = action.payload;
    },
    userWaitResponse: (state, action) => {
      state.userWaitResponse = action.payload;
    },
    userMyInfoRegParams: (state, action) => {
      state.userMyInfoRegParams = action.payload;
    },
    countryUserHere: (state, action) => {
      state.countryUserHere = action.payload;
    },
    myDrafter: (state, action) => {
      state.myDrafter = action.payload;
    },
    userHeadRegParams: (state, action) => {
      state.userHeadRegParams = action.payload;
    },
    userHeadRegResponse: (state, action) => {
      state.userHeadRegResponse = action.payload;
    },
    userApplyApproveResponse: (state, action) => {
      state.userApplyApproveResponse = action.payload;
    },
    forgotYourPasswordResponse: (state, action) => {
      state.forgotYourPasswordResponse = action.payload;
    },
    passAndRepassResponse: (state, action) => {
      state.passAndRepassResponse = action.payload;
    },
    findedMyEmailResponse: (state, action) => {
      state.findedMyEmailResponse = action.payload;
    },
    digits6Response: (state, action) => {
      state.digits6Response = action.payload;
    },
    //
    userAllAuths: (state, action) => {
      state.userAllAuths = action.payload;
    },
    userSearchList: (state, action) => {
      state.userSearchList = action.payload;
    },
    waitUserIdPatchResponse: (state, action) => {
      state.waitUserIdPatchResponse = action.payload;
    },
    waitUserIdDeleteResponse: (state, action) => {
      state.waitUserIdDeleteResponse = action.payload;
    },
    outCorpUserRegResponse: (state, action) => {
      state.outCorpUserRegResponse = action.payload;
    },
    apprPatchMngResponse: (state, action) => {
      state.apprPatchMngResponse = action.payload;
    },
    apprPutMngResponse: (state, action) => {
      state.apprPutMngResponse = action.payload;
    },
    checkPasswordResponse: (state, action) => {
      state.checkPasswordResponse = action.payload;
    },
    confirmCancellationResponse: (state, action) => {
      state.confirmCancellationResponse = action.payload;
    },
    adminPhoneEmailResponse: (state, action) => {
      state.adminPhoneEmailResponse = action.payload;
    },
    authEmailResponse: (state, action) => {
      state.authEmailResponse = action.payload;
    },
    authSmsResponse: (state, action) => {
      state.authSmsResponse = action.payload;
    },
    //
    allAgencyList: (state, action) => {
      state.allAgencyList = action.payload;
    },
    allAuthApprovalList: (state, action) => {
      state.allAuthApprovalList = action.payload;
    },
  },
});

export const {
  access,
  refresh,
  userRegInfo,
  userInfo,
  phoneAuthMessage,
  phoneCheckMessage,
  circleInfo,
  circleAfterLoginInfo,
  requestParams,
  userWaitParams,
  userWaitResponse,
  userMyInfoRegParams,
  countryUserHere,
  myDrafter,
  userHeadRegParams,
  userHeadRegResponse,
  userApplyApproveResponse,
  forgotYourPasswordResponse,
  passAndRepassResponse,
  findedMyEmailResponse,
  digits6Response,
  //
  userAllAuths,
  userSearchList,
  waitUserIdPatchResponse,
  waitUserIdDeleteResponse,
  outCorpUserRegResponse,
  apprPatchMngResponse,
  apprPutMngResponse,
  checkPasswordResponse,
  confirmCancellationResponse,
  adminPhoneEmailResponse,
  authEmailResponse,
  authSmsResponse,
  //
  allAgencyList,
  allAuthApprovalList,
} = UserInfoSlice.actions;

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

// 회원가입
export const scrmCoreUserRegister =
  (regUser: regUserInterface) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/`, {
        email: regUser["email"],
        password: regUser["password"],
        nameEn: regUser["nameEn"],
        nameLo: regUser["nameLo"],
        phone: regUser["phone"],
      });
      dispatch(userRegInfo(response.data));
    } catch (err: any) {
      dispatch(userRegInfo({}));
    }
  };

// 로그인 후 얻어지는 access, refresh
export const scrmCoreLogin =
  (email: string, password: string, setRememberThisDevice: boolean) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/login`, {
        email: email,
        password: password,
      });
      dispatch(userInfo(response.data));
      dispatch(access(response.data.access));
      dispatch(refresh(response.data.refresh));

      localStorage.setItem("token", response.data?.access);
      localStorage.setItem("refreshToken", response.data?.refresh);
      sessionStorage.setItem("token", response.data?.access);
      sessionStorage.setItem("refreshToken", response.data?.refresh);

      if (setRememberThisDevice) {
        // 1주일은 7 x 24 = 168시간
        setCookie("token", response.data?.access, 168);
        setCookie("refreshToken", response.data?.refresh, 168);
      } else {
        // 1 => 1시간, 0.5 => 30분, 0.1 => 6분
        setCookie("token", response.data?.access, 1);
        setCookie("refreshToken", response.data?.refresh, 1);
      }
    } catch (err: any) {
      const errMsg = err.response.data.message;

      dispatch(userInfo(""));
      dispatch(access(""));
      dispatch(refresh(""));
      // localStorage.setItem("token", "");
      localStorage.setItem("token", "");
      localStorage.setItem("refreshToken", "");
      sessionStorage.setItem("token", "");
      sessionStorage.setItem("refreshToken", "");
      setCookie("token", "", 0);
      setCookie("refreshToken", "", 0);

      if (errMsg === ERROR_MESSAGE.INCORRECT_PASSWORD) {
        alert(ERROR_MESSAGE.INCORRECT_PASSWORD);
      } else if (errMsg === ERROR_MESSAGE.NOT_EXISTS_EMAIL) {
        alert(ERROR_MESSAGE.NOT_EXISTS_EMAIL);
      }
      // throw new Error(JSON.stringify(err));
    }
  };

// 로그아웃
export const scrmCoreLogout = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userInfo(""));
    setCookie("token", "", 0);
    setCookie("refreshToken", "", 0);
  } catch (err: any) {}
};

// 입력된 국가코드와 휴대폰번호로 인증코드 발송하는 API
export const scrmCorePhoneAuthMessage =
  (phoneAuthCode: phoneAuthCodeInterface) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/auth-code`, {
        countryCode: phoneAuthCode["countryCode"],
        phone: phoneAuthCode["phone"],
      });
      dispatch(phoneAuthMessage(response.data));
    } catch (err: any) {
      dispatch(phoneAuthMessage({}));
    }
  };

// 유저의 휴대폰번호로 인증코드 검증하는 API
export const scrmCorePhoneCheckMessage =
  (phoneCheckCode: phoneCheckCodeInterface) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/check-code`, {
        authCode: phoneCheckCode["authCode"],
        phone: phoneCheckCode["phone"],
      });
      dispatch(phoneCheckMessage(response.data));
      return response.data;
    } catch (err: any) {
      dispatch(phoneCheckMessage({}));
      return null;
    }
  };

// 서클 유저 정보 및 국가코드 조회하는 임시 API
export const scrmCoreCircleInfo =
  (employeeNum: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/circle-info`, {
        employeeNum: employeeNum,
      });
      dispatch(circleInfo(response.data));
    } catch (err: any) {
      dispatch(circleInfo({}));
    }
  };

// 로그인 후에 서클 유저 정보 및 국가코드 조회
export const scrmCoreCircleAfterLoginInfo =
  (employeeNum: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/circle-info`, {
        employeeNum: employeeNum,
      });
      dispatch(circleAfterLoginInfo(response.data));
    } catch (err: any) {
      dispatch(circleAfterLoginInfo({}));
    }
  };

// 입력값들
export const scrmCoreRequestParams =
  (reqPrms: reqPrmsInterface) => async (dispatch: AppDispatch) => {
    try {
      const params = {
        phone: reqPrms["phone"],
        countryCode: reqPrms["countryCode"],
      };
      dispatch(requestParams(params));
    } catch (err: any) {
      dispatch(requestParams({}));
    }
  };

// 계정 활성화 대기
export const scrmCoreUserWaitParams =
  (reqPrms: userWaitParamsInterface) => async (dispatch: AppDispatch) => {
    try {
      const params = {
        countryCode: reqPrms["countryCode"],
        phone: reqPrms["phone"],
        email: reqPrms["email"],
        radioEmail: reqPrms["radioEmail"],
        radioPhone: reqPrms["radioPhone"],
      };
      dispatch(userWaitParams(params));
    } catch (err: any) {
      dispatch(userWaitParams({}));
    }
  };

// 계정 (결과값) 활성화 대기
export const scrmCoreUserWaitResponse =
  (reqPrms: userWaitResponseInterface) => async (dispatch: AppDispatch) => {
    try {
      const params = {
        // phone: reqPrms["phone"],
        // countryCode: reqPrms["countryCode"],
        // email: reqPrms["email"],
        // radioEmail: reqPrms["radioEmail"],
        // radioPhone: reqPrms["radioPhone"],
      };
      dispatch(userWaitParams(params));
    } catch (err: any) {
      dispatch(userWaitParams({}));
    }
  };

// 접근 권한 관리
export const scrmCoreUserMyInfoRegParams =
  (reqPrms: userMyInfoRegParamsInterface) => async (dispatch: AppDispatch) => {
    try {
      const params = {
        phone: reqPrms["phone"],
        countryCode: reqPrms["countryCode"],
      };
      dispatch(userMyInfoRegParams(params));
    } catch (err: any) {
      dispatch(userMyInfoRegParams({}));
    }
  };

// 접속한 국가지역 코드
export const scrmCoreCountryUserHere = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`/api/users/country`);
    dispatch(countryUserHere(response.data));
  } catch (err: any) {
    dispatch(countryUserHere({}));
  }
};

// 기안자 정보 가져오기
export const scrmCoreMyDrafter =
  (email: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/auth/drafter`, {
        email: email,
      });
      dispatch(myDrafter(response.data));
    } catch (err: any) {
      dispatch(myDrafter({}));
    }
  };

// 회원가입
export const scrmCoreUserHeadRegParams =
  (reqPrms: userHeadRegParamsInterface) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/head-quater`, {
        email: reqPrms["email"],
        password: reqPrms["password"],
        nameEn: reqPrms["nameEn"],
        nameLo: reqPrms["nameLo"],
        countryCode: reqPrms["countryCode"],
        phone: reqPrms["phone"],
        company: reqPrms["company"],
        department: reqPrms["department"],
        auth: reqPrms["auth"],
      });
      dispatch(userHeadRegResponse(response.data));
      // scrmCoreMyDrafter(reqPrms["email"] as string);
    } catch (err: any) {
      dispatch(userHeadRegResponse({}));
      // scrmCoreMyDrafter(reqPrms["email"] as string);
      const errMsg = err.response.data.message;
      // alert(errMsg);
    }
  };

// 권한 결재 요청
export const scrmCorePostAuthApproval =
  (reqPrms: any, id: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/auth/approval?id=${id}`, reqPrms);
      dispatch(userApplyApproveResponse(response.data));
    } catch (err: any) {
      dispatch(userApplyApproveResponse({ message: "FAIL" }));
      const errMsg = err.response.data.message;
      alert(errMsg);
    }
  };

// 비밀번호 초기화
export const scrmCoreForgotYourPassword =
  (emailAddress: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/password`, {
        email: emailAddress,
      });
      dispatch(forgotYourPasswordResponse(response.data));
    } catch (err: any) {
      dispatch(forgotYourPasswordResponse({ message: "FAIL" }));
      const errMsg = err.response.data.message;
    }
  };

// 비밀번호 재설정
export const scrmCoreResetYourPassword =
  (password: any, rePassword: any, token: any) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.patch(`/api/users/password`, {
        password: password,
        rePassword: rePassword,
        token: token,
      });
      dispatch(passAndRepassResponse(response.data));
    } catch (err: any) {
      dispatch(passAndRepassResponse({ message: "FAIL" }));
      const errMsg = err.response.data.message;
    }
  };

// 이메일 찾기
export const scrmCoreForgotYourEmail =
  (countryCode: any, phone: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/code`, {
        countryCode: countryCode,
        phone: phone,
      });
      dispatch(findedMyEmailResponse(response.data));
    } catch (err: any) {
      const errMsg = err.response.data.message;
      dispatch(findedMyEmailResponse({ message: errMsg }));
    }
  };

// 6자리 인증번호
export const scrmCore6DigitsCodeYouReceived =
  (authCode: any, phone: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/check-code`, {
        authCode: authCode,
        phone: phone,
      });
      dispatch(digits6Response(response.data));
    } catch (err: any) {
      const errorCode = err.response.data.message;
      dispatch(digits6Response({ message: "FAIL" }));

      const errMsg = err.response.data.message;
    }
  };

//
export const scrmCoreUserAllAuths = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`/api/auth`);
    dispatch(userAllAuths(response.data));
  } catch (err: any) {
    dispatch(userAllAuths([]));
  }
};

// 이름으로 사원 정보 검색
export const scrmCoreUserSearchList =
  (name: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/employees`, {
        name: name,
      });
      dispatch(userSearchList(response.data));
    } catch (err: any) {
      dispatch(userSearchList([]));
    }
  };

// 사용자 계정 잠금
export const scrmCoreWaitUserIdPatch =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.patch(`/api/users/${id}`, {});
      dispatch(waitUserIdPatchResponse(response.data));
    } catch (err: any) {
      dispatch(waitUserIdPatchResponse({ message: "FAIL" }));
    }
  };

// 사용자 계정 삭제
export const scrmCoreWaitUserIdDelete =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.delete(`/api/users/${id}`, {});
      dispatch(waitUserIdDeleteResponse(response.data));
    } catch (err: any) {
      dispatch(waitUserIdDeleteResponse({ message: "FAIL" }));
    }
  };

// 본사 이외 유저 등록
export const scrmCoreOutCorpUserRegResponse =
  (reqPrms: any) => async (dispatch: AppDispatch) => {
    try {
      // company, companyCode 기획 미정의 되었음. 요청 필요
      // response: company : "이 필드는 blank일 수 없습니다." => 에스티에스, S1 하드코딩
      const response = await axios.post(`/api/users`, {
        nameEn: reqPrms["nameEn"],
        nameLo: reqPrms["nameLo"],
        email: reqPrms["email"],
        countryCode: reqPrms["countryCode"],
        phone: reqPrms["phone"],
        company: "에스티에스",
        companyCode: "S1",
        auth: reqPrms["auth"],
      });
      dispatch(outCorpUserRegResponse(response.data));
    } catch (err: any) {
      dispatch(outCorpUserRegResponse({}));
    }
  };

// 유저 리스트 조회
export const scrmCoreAllAgencyList = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`/api/users`);
    dispatch(allAgencyList(response.data));
  } catch (err: any) {
    dispatch(allAgencyList([]));
  }
};

// 해당 유저의 회사 및 회사코드 조회
export const scrmCoreGetUsersCompany = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`/api/users/company`);
    dispatch(allAgencyList(response.data));
  } catch (err: any) {
    dispatch(allAgencyList([]));
  }
};

// 권한 신청 건 승인
export const scrmCorePatchAuthApprovalManagement =
  (reqPrms: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.patch(`/api/auth/approval/management`, {
        approvalId: reqPrms,
      });
      dispatch(apprPatchMngResponse(response.data));
    } catch (err: any) {
      dispatch(apprPatchMngResponse({ message: "FAIL" }));
    }
  };

// 권한 신청 건 거절
export const scrmCorePutAuthApprovalManagement =
  (reqPrms: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.put(`/api/auth/approval/management`, {
        approvalId: reqPrms,
      });
      dispatch(apprPutMngResponse(response.data));
    } catch (err: any) {
      dispatch(apprPutMngResponse({ message: "FAIL" }));
    }
  };

// 권한 신청 내역 조회
export const scrmCoreGetAuthApproval = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`/api/auth/approval`);
    dispatch(allAuthApprovalList(response.data));
  } catch (err: any) {
    dispatch(allAuthApprovalList([]));
  }
};

// 권한 신청 내역 상세 조회
export const scrmCoreGetAuthIdApproval =
  () => async (dispatch: AppDispatch) => {
    const a01 = "1";
    try {
      const response = await axios.get(`/api/auth/approval?id=${a01}`);
      dispatch(allAgencyList(response.data));
    } catch (err: any) {
      dispatch(allAgencyList([]));
    }
  };

// 유저 비밀번호 확인
export const scrmCorePostUsersCheckPw =
  (password: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/check-password`, {
        password: password,
      });
      dispatch(checkPasswordResponse(response.data));
    } catch (err: any) {
      dispatch(checkPasswordResponse({ message: "FAIL" }));
    }
  };

// 계정 탈퇴
export const scrmCorePostUsersCancellation =
  () => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/users/cancellation`, {});
      dispatch(confirmCancellationResponse(response.data));
    } catch (err: any) {
      dispatch(confirmCancellationResponse({ message: "FAIL" }));
    }
  };

// 유저 인증 진행 경과 확인하기
export const scrmCoreGetPhoneEmailAdmin =
  () => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`/api/auth/check`);
      dispatch(adminPhoneEmailResponse(response.data));
    } catch (err: any) {
      dispatch(
        adminPhoneEmailResponse({
          phoneAuthentication: false,
          emailAuthentication: false,
          adminAuthentication: false,
        })
      );
    }
  };

// 유저 인증 진행 경과 확인하기
export const scrmCorePostAuthEmail =
  (phoneAuthCode: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/auth/email`, {
        email: phoneAuthCode["email"],
      });
      dispatch(authEmailResponse(response.data));
    } catch (err: any) {
      dispatch(authEmailResponse({ message: "FAIL" }));
    }
  };

// 유저 인증 진행 경과 확인하기
export const scrmCorePostAuthSms =
  (phoneAuthCode: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`/api/auth/sms`, {
        countryCode: phoneAuthCode["countryCode"],
        phone: phoneAuthCode["phone"],
      });
      dispatch(authSmsResponse(response.data));
    } catch (err: any) {
      dispatch(authSmsResponse({ message: "FAIL" }));
    }
  };

export default UserInfoSlice.reducer;
