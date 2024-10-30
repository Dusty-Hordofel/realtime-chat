export interface ChatMessage {
  id: string;
  avatar: string;
  name: string;
  message?: string;
  timestamp: Date;
  isLiked?: boolean;
  isLoading?: boolean;
}

export interface ChatUser {
  id: string;
  avatar: string;
  name: string;
  messages: ChatMessage[];
}

export interface ChatSidebarProps {
  chats: ChatUser[];
  isCollapsed: boolean;
}
export interface ChatSidebarContentProps {
  chats: ChatUser[];
  isCollapsed: boolean;
}

// export type ChatSidebarContentProps = ChatSidebarProps
