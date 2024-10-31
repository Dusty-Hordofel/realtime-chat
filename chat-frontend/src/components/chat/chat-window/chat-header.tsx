import React from "react";
import { Info, Phone, Video } from "lucide-react";
import Link from "next/link";
import { ChatUser } from "@/@types/user.interfaces";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ExpandableChatHeader } from "./expandable-chat";

interface ChatTopbarProps {
  selectedUser: ChatUser;
}

export const ChatHeaderIcons = [
  { icon: Phone },
  { icon: Video },
  { icon: Info },
];

export default function ChatHeader({ selectedUser }: ChatTopbarProps) {
  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="w-10 h-10"
          />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.name}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>

      <div className="flex gap-1">
        {ChatHeaderIcons.map((icon, index) => (
          <Link
            key={index}
            href="#"
            className="h-11 w-11  flex justify-center items-center hover:bg-gray-100 rounded-full"
          >
            <icon.icon size={24} className="text-muted-foreground" />
          </Link>
        ))}
      </div>
    </ExpandableChatHeader>
  );
}
