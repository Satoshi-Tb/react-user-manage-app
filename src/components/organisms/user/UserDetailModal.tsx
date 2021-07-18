import { memo, useState, VFC, useEffect, ChangeEvent } from "react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  console.log("UserDetailModal start");
  const { isOpen, onClose, isAdmin = false, user } = props;
  console.log(user);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) =>
    setPhone(event.target.value);

  const onClickUpdate = () => {
    alert("更新");
    //console.log(`name=${name}`);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={name}
                isReadOnly={!isAdmin}
                onChange={onChangeName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={username}
                isReadOnly={!isAdmin}
                onChange={onChangeUsername}
              />
            </FormControl>
            <FormControl>
              <FormLabel>メール</FormLabel>
              <Input
                value={email}
                isReadOnly={!isAdmin}
                onChange={onChangeEmail}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                isReadOnly={!isAdmin}
                onChange={onChangePhone}
              />
            </FormControl>
            {isAdmin && <Button onClick={onClickUpdate}>更新</Button>}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
