"use client";

import { Grid } from "@mui/material";
import { FbCrmDefaultForm } from "@/app/(core)/components/forms/form-layouts/index";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import BasicCrmLayout from "@/app/(core)/components/forms/form-vertical/BasicCrmLayout";
import ParentCard from "@/app/(core)/components/shared/ParentCard";
import BasicCrmIcons from "@/app/(core)/components/forms/form-vertical/BasicCrmIcons";
import FormCrmSeparator from "@/app/(core)/components/forms/form-vertical/FormCrmSeparator";

const BCrumb = [
  {
    to: "/",
    title: "Main",
  },
  {
    title: "Test",
  },
];

const FormLayouts = () => (
  <PageContainer title="Service CRM" description="this is Service CRM Layout">
    {/* breadcrumb */}
    <Breadcrumb title="Service CRM Layouts" items={BCrumb} />
    {/* end breadcrumb */}

    <Grid container spacing={3}>
      {/* 01. */}
      <Grid item xs={12} lg={6}>
        <ParentCard title="01-01. 인증코드 요청">
          <BasicCrmIcons />
        </ParentCard>
      </Grid>
      <Grid item xs={12} lg={6}>
        <ParentCard title="01-02. 인증코드 확인">
          <BasicCrmLayout />
        </ParentCard>
      </Grid>

      {/* 02. */}
      <Grid item lg={12} md={12} xs={12}>
        <FbCrmDefaultForm />
      </Grid>

      {/* 03. */}
      <Grid item xs={12}>
        <ParentCard title="03. 회원가입">
          <FormCrmSeparator />
        </ParentCard>
      </Grid>
    </Grid>
  </PageContainer>
);

export default FormLayouts;
