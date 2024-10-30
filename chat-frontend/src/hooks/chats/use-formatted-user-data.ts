import { ChatUser } from "@/@types/user.interfaces";
import { useMemo } from "react";

export const useFormattedUserData = (
  userData: ChatUser[],
  selectedUser: any
) => {
  const formattedData = useMemo(() => {
    return userData.map((user) => ({
      ...user,
      variant: (selectedUser?.name === user.name ? "secondary" : "ghost") as
        | "secondary"
        | "ghost",
      messages: user.messages ?? [],
    }));
  }, [userData, selectedUser]);

  return formattedData;
};
