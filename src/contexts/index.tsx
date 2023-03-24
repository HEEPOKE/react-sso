import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

interface AppContextProps {
  pathUrl: string;
  setPathUrl: (pathUrl: string) => void;
  isLogin: string;
  roleUser: string;
}

export const AppContext = createContext<AppContextProps>({
  pathUrl: "",
  setPathUrl: () => {},
  isLogin: "",
  roleUser: "",
});

interface ChildrenProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: ChildrenProps) {
  const [pathUrl, setPathUrl] = useState<string>(window.location.pathname);
  const isLogin = sessionStorage.getItem("account") ?? "";
  const [roleUser, setRoleUser] = useState<string>("");


  useEffect(() => {

  }, [setRoleUser]);

  const values = useMemo(
    () => ({
      pathUrl,
      setPathUrl,
      isLogin,
      roleUser,
    }),
    [pathUrl, setPathUrl, isLogin, roleUser]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
