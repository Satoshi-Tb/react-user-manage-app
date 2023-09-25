import axios from "axios";
import { use, useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const login = useCallback(
    async (id: string) => {
      console.log(`login start with ${id}`);
      setLoading(true);
      try {
        const resp = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = resp.data;
        console.log("user:", user);
        if (user) {
          console.log(`login success with ${id}`);
          const isAdmin = user.id === 10 ? true : false;
          setLoginUser({ ...user, isAdmin });
          showMessage({ title: "ログインしました", status: "success" });
          setErrMessage("");
        } else {
          console.log(`login error user not found`);
          showMessage({
            title: "ユーザーが見つかりません",
            status: "error",
          });
          setLoading(false);
          setErrMessage("ログインに失敗しました");
        }
      } catch (error) {
        console.log(`login error`);

        showMessage({ title: "ログインできません", status: "error" });
        setLoading(false);
        setErrMessage("ログインに失敗しました");
      }
    },
    [showMessage, setLoginUser]
  );
  return { login, loading, errMessage };
};
