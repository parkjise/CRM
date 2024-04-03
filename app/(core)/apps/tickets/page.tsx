"use client";

import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import TicketListing from "@/app/(core)/components/apps/tickets/TicketListing";
import TicketFilter from "@/app/(core)/components/apps/tickets/TicketFilter";
import ChildCard from "@/app/(core)/components/shared/ChildCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tickets",
  },
];

const TicketList = () => {
  return (
    <PageContainer title="Ticket App" description="this is Ticket App">
      <Breadcrumb title="Tickets app" items={BCrumb} />
      <ChildCard>
        <TicketFilter />
        <TicketListing />
      </ChildCard>
    </PageContainer>
  );
};

export default TicketList;
