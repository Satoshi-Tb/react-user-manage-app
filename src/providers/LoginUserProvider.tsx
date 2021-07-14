import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState
} from "react";

import { User } from "../types/api/user";

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  //LoginUserContext.Providerタグで囲んでる部分で、コンテクストにアクセス可能にしていると思われる
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
