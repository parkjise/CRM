"use client";

import React from "react";
import PageContainer from "@/app/(core)/components/container/PageContainer";

// components
import Banner from "@/app/(core)/components/landingpage/banner/Banner";
import C2a from "@/app/(core)/components/landingpage/c2a/C2a";
import C2a2 from "@/app/(core)/components/landingpage/c2a/C2a2";
import DemoSlider from "@/app/(core)/components/landingpage/demo-slider/DemoSlider";
import Features from "@/app/(core)/components/landingpage/features/Features";
import Footer from "@/app/(core)/components/landingpage/footer/Footer";
import Frameworks from "@/app/(core)/components/landingpage/frameworks/Frameworks";
import LpHeader from "@/app/(core)/components/landingpage/header/Header";
import Testimonial from "@/app/(core)/components/landingpage/testimonial/Testimonial";

export default function Landingpage() {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Banner />
      <DemoSlider />
      <Frameworks />
      <Testimonial />
      <Features />
      <C2a />
      <C2a2 />
      <Footer />
    </PageContainer>
  );
}

Landingpage.layout = "Blank";
