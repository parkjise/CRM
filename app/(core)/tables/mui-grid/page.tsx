"use client";

import { Box } from "@mui/material";
import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import ProductTableList from "@/app/(core)/components/apps/ecommerce/ProductTableList/ProductTableList";
import Grid1 from "@/app/(core)/components/mui-grid/Grid1";
import ProductGridList from "@/app/(core)/components/mui-grid/ProductGridList";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Mui Grid",
  },
];

const SearchTable = () => {
  return (
    <PageContainer title="Search Table" description="this is Search Table">
      {/* breadcrumb */}
      <Breadcrumb title="Search Table" items={BCrumb} />
      {/* end breadcrumb */}
      <Box>
        <ProductGridList />
      </Box>
    </PageContainer>
  );
};

export default SearchTable;
