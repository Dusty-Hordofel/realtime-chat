import React from "react";
import ChatHeader from "./chat-header";
import { ChatList } from "./chat-list";

type Props = {};

const ChatWindow = ({ selectedUser }: any) => {
  return (
    <div>
      <ChatHeader selectedUser={selectedUser} />
    </div>
  );
};

export default ChatWindow;
