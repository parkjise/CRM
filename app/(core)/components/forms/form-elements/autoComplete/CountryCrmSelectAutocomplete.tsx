import React, { useEffect, useState } from "react";
import { Avatar, Box, Tooltip } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CustomTextField from "../../theme-elements/CustomTextField";
import countryCrmData from "./countryCrmData";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { useTranslation } from "react-i18next";
import { setLanguage } from "@/store/customizer/CustomizerSlice";
import { useRouter } from "next/navigation";
import { CONST_LANGUAGES, ROUTER_LINK } from "@/utils/constants/constant";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  .lang{
    /* width: 100%; */
    .MuiAutocomplete-root{
        width:10rem;
        height: 32px;
        .MuiInputBase-root{
          height: 100%;
          padding: 0 10px;
          color: #868E96;
          font-size:12px;
          background-color: #fff;
        }
        .modernize-1q60rmi-MuiAutocomplete-endAdornment{
          top: 50%;
          transform: translateY(-50%);
        }
      }
  }
`;

const countryToFlag = (isoCode: any) =>
  typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char: any) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;

const Languages = [
  {
    flagname: "USA (US)",
    icon: "/images/flag/icon-flag-en.svg",
    value: "en",
  },
  {
    flagname: "대한민국 (KR)",
    icon: "/images/flag/icon-flag-kr.svg",
    value: "kr",
  },
  {
    flagname: "中国人 (Chinese)",
    icon: "/images/flag/icon-flag-cn.svg",
    value: "cn",
  },
];

const CountryCrmSelectAutocomplete = () => {
  const dispatch = useDispatch();
  const customizer = useSelector((state: AppState) => state.customizer);
  const router = useRouter();

  const { t } = useTranslation();
  const countryUserHere = useSelector(
    (state) => state.userInfoReducer.countryUserHere
  );

  const [hereLang, setHereLang] = useState("");

  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) ||
    Languages[1];

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customizer.isLanguage]);

  useEffect(() => {
    // @ts-ignore
    const inCountry = countryUserHere?.country;

    if (customizer.isLanguage === CONST_LANGUAGES.LOWER_KR) {
      if (inCountry === CONST_LANGUAGES.UPPER_KR) {
        setHereLang(CONST_LANGUAGES.KR_WORD_KR);
      } else if (inCountry === CONST_LANGUAGES.UPPER_US) {
        setHereLang(CONST_LANGUAGES.KR_WORD_US);
      } else if (inCountry === CONST_LANGUAGES.UPPER_CN) {
        setHereLang(CONST_LANGUAGES.KR_WORD_CN);
      }
    } else if (customizer.isLanguage === CONST_LANGUAGES.LOWER_EN) {
      if (inCountry === CONST_LANGUAGES.UPPER_KR) {
        setHereLang(CONST_LANGUAGES.US_WORD_KR);
      } else if (inCountry === CONST_LANGUAGES.UPPER_US) {
        setHereLang(CONST_LANGUAGES.US_WORD_US);
      } else if (inCountry === CONST_LANGUAGES.UPPER_CN) {
        setHereLang(CONST_LANGUAGES.US_WORD_CN);
      }
    } else if (customizer.isLanguage === CONST_LANGUAGES.LOWER_CN) {
      if (inCountry === CONST_LANGUAGES.UPPER_KR) {
        setHereLang(CONST_LANGUAGES.CN_WORD_KR);
      } else if (inCountry === CONST_LANGUAGES.UPPER_US) {
        setHereLang(CONST_LANGUAGES.CN_WORD_US);
      } else if (inCountry === CONST_LANGUAGES.UPPER_CN) {
        setHereLang(CONST_LANGUAGES.CN_WORD_CN);
      }
    }
  }, [customizer.isLanguage]);

  const onClickWait = () => {
    router.push(ROUTER_LINK.IAM_WAIT);
  };

  return (
    <>
      <GlobalStyle />
      {/* 01/03. */}
      <Tooltip
        title={t("The country you are accessing from is the") + hereLang}
        placement="top"
      >
        <Avatar
          src={currentLang.icon}
          alt={currentLang.value}
          sx={{ width: 20, height: 20 }}
          onClick={onClickWait}
        />
      </Tooltip>

      {/* 02/03. */}
      {/* <CustomCrmFormLabel htmlFor="Language" fontSize={"10px"}>
        Language has been set to
      </CustomCrmFormLabel> */}
      {/* 03/03. */}
      <Autocomplete
        id="country-select-demo"
        fullWidth
        options={countryCrmData}
        autoHighlight
        onChange={(event: any, newValue: any) => {
          // setValue(newValue.code);
          dispatch(setLanguage(newValue?.code || "en"));
        }}
        sx={{
          "#country-select-demo": {
            fontSize: "12px",
          },
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ fontSize: 12, "& > span": { mr: "10px", fontSize: 12 } }}
            {...props}
            key={props.id}
          >
            {/*<span>{countryToFlag(option.code)}</span>*/}
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            placeholder="Select Language"
            aria-label="Select Language"
            autoComplete="off"
            inputProps={{
              ...params.inputProps,
              autoComplete: "country", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </>
  );
};

export default CountryCrmSelectAutocomplete;
