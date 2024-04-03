"use client";

import Grid from "@mui/material/Grid";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import ProfileBanner from "@/app/(core)/components/apps/userprofile/profile/ProfileBanner";
import GalleryCard from "@/app/(core)/components/apps/userprofile/gallery/GalleryCard";

const Gallery = () => {
  return (
    <PageContainer title="Gallery" description="this is Gallery">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12}>
          <GalleryCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Gallery;
