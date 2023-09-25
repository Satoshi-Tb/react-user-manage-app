import { memo, VFC, useState, ChangeEvent } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading, errMessage } = useAuth();
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onClickLogin = async () => {
    await login(userId);
    console.log(`error = ${errMessage}`);
    if (errMessage === "") {
      router.push("/user_management");
    } else {
      alert(errMessage);
    }
  };
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={loading || userId === ""}
            onClick={onClickLogin}
            loading={loading}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
