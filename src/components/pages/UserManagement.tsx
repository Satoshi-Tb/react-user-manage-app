import { memo, VFC, useEffect, useCallback } from "react";
import {
  Center,
  Wrap,
  WrapItem,
  Spinner,
  useDisclosure
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUsers();
  const { loginUser } = useLoginUser();
  //console.log(loginUser);
  //console.log(selectedUser);

  useEffect(() => getUsers(), []);

  const onClisckUser = useCallback(
    (id: number) => onSelectUser({ id, users, onOpen }),
    [onOpen, onSelectUser, users]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClisckUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        isAdmin={loginUser?.isAdmin}
        user={selectedUser}
      />
    </>
  );
});
