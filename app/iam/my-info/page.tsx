"use client";
import { Box, CardContent, Divider, Grid, Tab, Tabs } from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import React, { useState } from "react";
import {
  IconArticle,
  IconBell,
  IconLock,
  IconUserCircle,
} from "@tabler/icons-react";
import BlankCard from "@/app/(core)/components/shared/BlankCard";
import MyInfoTab from "@/app/(core)/components/pages/account-setting/MyInfoTab";
import ReqAuthTab from "@/app/(core)/components/pages/account-setting/ReqAuthTab";
import ReqHistoryTab from "@/app/(core)/components/pages/account-setting/ReqHistoryTab";
import AdminTab from "@/app/(core)/components/pages/account-setting/AdminTab";
import CountryCrmSelectAutocomplete from "@/app/(core)/components/forms/form-elements/autoComplete/CountryCrmSelectAutocomplete";
import styled from "styled-components";
import Scrollbar from "@/app/(core)/components/custom-scroll/Scrollbar";

const TabWrap = styled(BlankCard)`
  /* .modernize-17pmaar-MuiCardContent-root{
    max-height:500px ;
    overflow-y: auto;
  }  */
`;
const TabsScroll = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
    overflow-x: scroll;
  }
`;
const TabScroll = styled.div`
  @media (max-width: 1000px) {
    width: 600px;
  }
`;
const StepsStyled = styled.div`
  .modernize-m5vj9m-MuiStepper-root {
    padding: 0 10rem;
    @media (max-width: 1000px) {
      padding: 0 0rem;
    }
  }
  .modernize-nwb587-MuiSvgIcon-root-MuiStepIcon-root {
    width: 2.5rem;
    height: 2.5rem;
  }
  .modernize-nwb587-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
    color: #1a1d44;
  }
`;
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RegInfo() {
  const [value, setValue] = useState(0);

  const toReqAuthFromMyInfo = (num: number) => {
    setValue(num);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageContainer title="my-information" description="this is Sample page">
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <div className="account-activation">
          <div className="gra-bg">
            <div className="float">
              <div className="circle orange"></div>
              <div className="circle navy"></div>
            </div>
          </div>
          <div className="account-content">
            <div className="account-content-top">
              <h1 className="logo">
                <span className="hide">System Logo</span>
              </h1>
              <div className="lang">
                <CountryCrmSelectAutocomplete />
              </div>
            </div>
            <TabWrap>
              <BlankCard>
                <TabsScroll>
                  <TabScroll>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      scrollButtons="auto"
                      aria-label="basic tabs example"
                    >
                      <Tab
                        iconPosition="start"
                        icon={<IconUserCircle size="22" />}
                        label="My Information"
                        {...a11yProps(0)}
                      />
                      <Tab
                        iconPosition="start"
                        icon={<IconBell size="22" />}
                        label="Request Authorization"
                        {...a11yProps(1)}
                      />
                      <Tab
                        iconPosition="start"
                        icon={<IconArticle size="22" />}
                        label="Request History"
                        {...a11yProps(2)}
                      />
                      <Tab
                        iconPosition="start"
                        icon={<IconLock size="22" />}
                        label="Admin"
                        {...a11yProps(3)}
                      />
                    </Tabs>
                  </TabScroll>
                </TabsScroll>
                <Divider />
                <CardContent>
                  <TabPanel value={value} index={0}>
                    <Scrollbar sx={{ height: "500px" }}>
                      <MyInfoTab toReqAuthFromMyInfo={toReqAuthFromMyInfo} />
                    </Scrollbar>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Scrollbar sx={{ height: "500px" }}>
                      <StepsStyled>
                        <ReqAuthTab />
                      </StepsStyled>
                    </Scrollbar>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Scrollbar sx={{ height: "500px" }}>
                      <ReqHistoryTab />
                    </Scrollbar>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Scrollbar sx={{ height: "500px" }}>
                      <AdminTab />
                    </Scrollbar>
                  </TabPanel>
                </CardContent>
              </BlankCard>
            </TabWrap>
            {/* <div className="account-content-bottom">
              
            </div> */}
          </div>
        </div>
      </Grid>
    </PageContainer>
  );
}
RegInfo.layout = "Blank";
