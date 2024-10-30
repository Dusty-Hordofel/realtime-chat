"use client";
import Image from "next/image";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ChatSidebar from "@/components/chat/chat-sidebar";
import { userData } from "./data/user-data";
import { useFormattedUserData } from "@/hooks/chats/use-formatted-user-data";
import React from "react";

export default function Home() {
  const [selectedUser, setSelectedUser] = React.useState(userData[0]);
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const formattedUserData = useFormattedUserData(userData, selectedUser);

  return (
    <div className="w-96">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
      <ChatSidebar chats={formattedUserData} isCollapsed={isCollapsed} />
    </div>
  );
}
