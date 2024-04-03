"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Breadcrumb from "@/app/(core)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(core)/components/container/PageContainer";
import ChatSidebar from "@/app/(core)/components/apps/chats/ChatSidebar";
import ChatContent from "@/app/(core)/components/apps/chats/ChatContent";
import ChatMsgSent from "@/app/(core)/components/apps/chats/ChatMsgSent";
import AppCard from "@/app/(core)/components/shared/AppCard";

const Chats = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <PageContainer title="Chat" description="this is Chat">
      <Breadcrumb title="Chat app" subtitle="Messenger" />
      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}

        <ChatSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        <Box flexGrow={1}>
          <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
          <Divider />
          <ChatMsgSent />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default Chats;
