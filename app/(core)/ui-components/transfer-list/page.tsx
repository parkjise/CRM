"use client";

import { Grid } from "@mui/material";
import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import ParentCard from "@/app/(core)/components/shared/ParentCard";
import ChildCard from "@/app/(core)/components/shared/ChildCard";
import BasicTransferList from "@/app/(core)/components/ui-components/transfer-list/BasicTransferList";
import EnhancedTransferList from "@/app/(core)/components/ui-components/transfer-list/EnhancedTransferList";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Transfer List",
  },
];

const MuiTransferList = () => (
  <PageContainer title="Transfer List" description="this is Transfer List">
    {/* breadcrumb */}
    <Breadcrumb title="Transfer List" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Transfer List">
      <Grid container spacing={3}>
        <Grid item xs={12} display="flex" alignItems="stretch">
          <ChildCard title="Basic">
            <BasicTransferList />
          </ChildCard>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="stretch">
          <ChildCard title="Enhanced">
            <EnhancedTransferList />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiTransferList;
