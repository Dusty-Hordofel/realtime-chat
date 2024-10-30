import { MoreHorizontal, SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";

type ChatSidebarHeaderProps = {};

const ChatSidebarHeader = ({ chats }: any) => {
  return (
    <div className="flex justify-between p-2 items-center bg-yellow-200">
      <div className="flex gap-2 items-center text-2xl">
        <p className="font-bold">Chats</p>
        <span className="text-zinc-300">({chats.length})</span>
      </div>
      <div className="flex gap-x-2 bg-red-300">
        <div className="h-11 w-11 hover:bg-gray-300 bg-gray-100 rounded-full flex justify-center items-center">
          <MoreHorizontal size={24} />
        </div>

        <div className="h-11 w-11 hover:bg-gray-300 bg-gray-100 rounded-full flex justify-center items-center">
          <Link href={`/message`}>
            <SquarePen size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebarHeader;
