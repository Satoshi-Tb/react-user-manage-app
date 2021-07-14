import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};
// 選択したユーザー情報を特定し、モーダル表示するカスタムフック
export const useSelectUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>();
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    //console.log("selectedUser=" + targetUser?.username);
    if (targetUser) {
      setSelectedUser(targetUser);
    } else {
      setSelectedUser(null);
    }
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
