"use client";

import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import ProductTableList from "@/app/(core)/components/apps/ecommerce/ProductTableList/ProductTableList";
import BlankCard from "@/app/(core)/components/shared/BlankCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Shop",
  },
];

const EcomProductList = () => {
  return (
    <PageContainer
      title="eCommerce Product List"
      description="this is eCommerce Product List"
    >
      {/* breadcrumb */}
      <Breadcrumb title="Ecom-Shop" items={BCrumb} />
      <BlankCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <ProductTableList />
      </BlankCard>
    </PageContainer>
  );
};

export default EcomProductList;
