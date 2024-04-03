"use client";

import { Box } from "@mui/material";
import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import ProductTableList from "@/app/(core)/components/apps/ecommerce/ProductTableList/ProductTableList";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Search Table",
  },
];

const SearchTable = () => {
  return (
    <PageContainer title="Search Table" description="this is Search Table">
      {/* breadcrumb */}
      <Breadcrumb title="Search Table" items={BCrumb} />
      {/* end breadcrumb */}
      <Box>
        <ProductTableList />
      </Box>
    </PageContainer>
  );
};

export default SearchTable;
