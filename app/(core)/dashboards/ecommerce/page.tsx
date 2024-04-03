"use client";
import React from "react";
import { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";
import PageContainer from "@/app/(core)/components/container/PageContainer";

import WeeklyStats from "@/app/(core)/components/dashboards/modern/WeeklyStats";
import YearlySales from "@/app/(core)/components/dashboards/ecommerce/YearlySales";
import PaymentGateways from "@/app/(core)/components/dashboards/ecommerce/PaymentGateways";
import WelcomeCard from "@/app/(core)/components/dashboards/ecommerce/WelcomeCard";
import Expence from "@/app/(core)/components/dashboards/ecommerce/Expence";
import Growth from "@/app/(core)/components/dashboards/ecommerce/Growth";
import RevenueUpdates from "@/app/(core)/components/dashboards/ecommerce/RevenueUpdates";
import SalesOverview from "@/app/(core)/components/dashboards/ecommerce/SalesOverview";
import SalesTwo from "@/app/(core)/components/dashboards/ecommerce/SalesTwo";
import Sales from "@/app/(core)/components/dashboards/ecommerce/Sales";
import MonthlyEarnings from "@/app/(core)/components/dashboards/ecommerce/MonthlyEarnings";
import ProductPerformances from "@/app/(core)/components/dashboards/ecommerce/ProductPerformances";
import RecentTransactions from "@/app/(core)/components/dashboards/ecommerce/RecentTransactions";

const Ecommerce = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer
      title="empty Dashboard"
      description="this is empty Dashboard"
    >
      <Box mt={3}>
        <Grid container spacing={3}>
          {/*/!* column *!/*/}
          {/*<Grid item xs={12} lg={8}>*/}
          {/*  <WelcomeCard />*/}
          {/*</Grid>*/}

          {/*/!* column *!/*/}
          {/*<Grid item xs={12} lg={4}>*/}
          {/*  <Grid container spacing={3}>*/}
          {/*    <Grid item xs={12} sm={6}>*/}
          {/*      <Expence isLoading={isLoading} />*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={12} sm={6}>*/}
          {/*      <Sales isLoading={isLoading} />*/}
          {/*    </Grid>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} sm={6} lg={4}>*/}

          {/*  <RevenueUpdates isLoading={isLoading} />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} sm={6} lg={4}>*/}

          {/*  <SalesOverview isLoading={isLoading} />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} sm={6} lg={4}>*/}
          {/*  <Grid container spacing={3}>*/}
          {/*    <Grid item xs={12} sm={6}>*/}

          {/*      <SalesTwo isLoading={isLoading} />*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={12} sm={6}>*/}
          {/*      <Growth isLoading={isLoading} />*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={12}>*/}
          {/*      <MonthlyEarnings isLoading={isLoading} />*/}
          {/*    </Grid>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          {/*/!* column *!/*/}
          {/*<Grid item xs={12} sm={6} lg={4}>*/}
          {/*  <WeeklyStats isLoading={isLoading} />*/}
          {/*</Grid>*/}
          {/*/!* column *!/*/}
          {/*<Grid item xs={12} lg={4}>*/}

          {/*  <YearlySales isLoading={isLoading} />*/}
          {/*</Grid>*/}
          {/*/!* column *!/*/}
          {/*<Grid item xs={12} lg={4}>*/}
          {/*  <PaymentGateways />*/}
          {/*</Grid>*/}
          {/*/!* column *!/*/}

          {/*<Grid item xs={12} lg={4}>*/}
          {/*  <RecentTransactions />*/}
          {/*</Grid>*/}
          {/*/!* column *!/*/}

          {/*<Grid item xs={12} lg={8}>*/}
          {/*  <ProductPerformances />*/}
          {/*</Grid>*/}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Ecommerce;
