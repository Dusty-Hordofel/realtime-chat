"use client";
import React from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatSidebarHeader from "../chat/chat-sidebar/chat-sidebar-header";
import { ChatSidebarProps } from "../../@types/user.interfaces";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "../../lib/utils";

const ChatSidebar = ({ chats, isCollapsed }: ChatSidebarProps) => {
  return (
    <>
      <ChatSidebarHeader chats={chats} />
      <nav className="grid px-2">
        {chats.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];
          return isCollapsed ? (
            <TooltipProvider key={chat.id}>
              <Tooltip key={chat.id}>
                <TooltipTrigger asChild>
                  <Link href={`/messges/${chat.id}`}>
                    <Avatar>
                      <AvatarImage
                        src={chat.avatar}
                        alt={chat.avatar}
                        width={6}
                        height={6}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                      <span className="sr-only">{chat.name}</span>
                    </Avatar>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{chat.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              key={chat.id}
              href={`/messges/${chat.id}`}
              className={cn(
                `${chats[0].id === chat.id && "bg-blue-100/60"} ${
                  chats[0].id !== chat.id && "hover:bg-gray-200"
                } p-2 rounded-lg flex justify-start gap-4 h-20`
              )}
            >
              <div className="flex justify-center items-center">
                <Avatar>
                  <AvatarImage
                    src={chat.avatar}
                    alt={chat.avatar}
                    width={6}
                    height={6}
                    className="w-10 h-10 "
                  />
                </Avatar>
              </div>
              <div className="w-full flex flex-col  justify-center p-2">
                <span className="font-medium">{chat.name}</span>
                {chat.messages.length > 0 && (
                  <span className="text-zinc-300 text-xs truncate ">
                    {lastMessage.name.split(" ")[0]}:{" "}
                    {lastMessage.isLoading ? "Typing..." : lastMessage.message}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default ChatSidebar;
