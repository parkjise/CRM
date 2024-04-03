"use client";
import { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import YearlyBreakup from "@/app/(core)/components/dashboards/modern/YearlyBreakup";
import Projects from "@/app/(core)/components/dashboards/modern/Projects";
import Customers from "@/app/(core)/components/dashboards/modern/Customers";
import SalesTwo from "@/app/(core)/components/dashboards/ecommerce/SalesTwo";
import MonthlyEarnings from "@/app/(core)/components/dashboards/ecommerce/MonthlyEarnings";
import SalesOverview from "@/app/(core)/components/dashboards/ecommerce/SalesOverview";
import RevenueUpdates from "@/app/(core)/components/dashboards/ecommerce/RevenueUpdates";
import YearlySales from "@/app/(core)/components/dashboards/ecommerce/YearlySales";
import MostVisited from "@/app/(core)/components/widgets/charts/MostVisited";
import PageImpressions from "@/app/(core)/components/widgets/charts/PageImpressions";
import Followers from "@/app/(core)/components/widgets/charts/Followers";
import Views from "@/app/(core)/components/widgets/charts/Views";
import Earned from "@/app/(core)/components/widgets/charts/Earned";
import CurrentValue from "@/app/(core)/components/widgets/charts/CurrentValue";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Charts",
  },
];

const WidgetCharts = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Charts" description="this is Charts">
      {/* breadcrumb */}
      <Breadcrumb title="Charts" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Followers />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Views />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Earned />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SalesTwo isLoading={isLoading} />
        </Grid>
        <Grid item xs={12}>
          <CurrentValue />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearlyBreakup isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <MonthlyEarnings isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <MostVisited />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearlySales isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <PageImpressions />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Customers isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Projects isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <RevenueUpdates isLoading={isLoading} />
            </Grid>
            <Grid item xs={12}>
              <SalesOverview isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default WidgetCharts;
