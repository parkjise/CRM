export const ROUTER_LINK = {
  MAIN: "/", // Login-typeC
  IAM_LOGIN: "/iam/login", // Login-typeC
  IAM_WAIT: "/iam/wait", // 계정 활성화 대기-IDM01-01
  IAM_MY_INFO: "/iam/my-info", // 회원가입(접근 권한 관리)
  IAM_AUTH_REQUESTED: "/iam/auth-requested", // 접근 권한 신청 완료
  IAM_FORGOT_ID: "/iam/forgot-id", // 계정 이메일 찾기
  IAM_FORGOT_PW: "/iam/forgot-password", // 계정 비밀번호 찾기
  IAM_RESET_PW: "/iam/reset-password", // 계정 비밀번호 재설정
  IAM_DELETE_ACCOUNT: "/iam/delete-account", // 계정 삭제
};

export const ERROR_MESSAGE = {
  INCORRECT_PASSWORD: "INCORRECT_PASSWORD",
  NOT_EXISTS_EMAIL: "NOT_EXISTS_EMAIL",
};

export const REG_EXP = {
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
  PHONE:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
};

export const CONST_LANGUAGES = {
  UPPER_KR: "KR",
  LOWER_KR: "kr",
  KR_WORD_KR: "한국",
  //
  UPPER_US: "US",
  LOWER_US: "us",
  KR_WORD_US: "미국",
  //
  UPPER_CN: "CN",
  LOWER_CN: "cn",
  KR_WORD_CN: "중국",
  //
  US_WORD_KR: "Korea",
  US_WORD_US: "United States",
  US_WORD_CN: "China",
  //
  CN_WORD_KR: "韓國",
  CN_WORD_US: "美國",
  CN_WORD_CN: "中國",
  //
  LOWER_EN: "en",
};

export const LOOKUP_VALUES: any = {
  APPROVAL: {
    1: "진행",
    2: "완료",
    3: "반려",
    4: "상신취소",
  },
};

export const CONST_STRING: any = {
  DELETE: {
    ACCOUNT: "delete my account",
  },
};

export const NEXT_TS_ERRORS = {
  INVALID_SERVER_API: 71001,
  INVALID_ENTRY_EXPORT: 71002,
  INVALID_OPTION_VALUE: 71003,
  MISPLACED_CLIENT_ENTRY: 71004,
  INVALID_PAGE_PROP: 71005,
  INVALID_CONFIG_OPTION: 71006,
  INVALID_CLIENT_ENTRY_PROP: 71007,
  INVALID_METADATA_EXPORT: 71008,
  INVALID_ERROR_COMPONENT: 71009,
};

export const ALLOWED_EXPORTS = [
  "config",
  "generateStaticParams",
  "metadata",
  "generateMetadata",
  "viewport",
  "generateViewport",
];

export const LEGACY_CONFIG_EXPORT = "config";

export const DISALLOWED_SERVER_REACT_APIS: string[] = [
  "useState",
  "useEffect",
  "useLayoutEffect",
  "useDeferredValue",
  "useImperativeHandle",
  "useInsertionEffect",
  "useReducer",
  "useRef",
  "useSyncExternalStore",
  "useTransition",
  "Component",
  "PureComponent",
  "createContext",
  "createFactory",
  "experimental_useOptimistic",
  "useOptimistic",
];

export const ALLOWED_PAGE_PROPS = ["params", "searchParams"];
export const ALLOWED_LAYOUT_PROPS = ["params", "children"];
