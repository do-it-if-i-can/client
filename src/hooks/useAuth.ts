import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently, loginWithRedirect, logout } = useAuth0();
  const [token, setToken] = useState("");

  const handleLogin = useCallback(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  const handleLogout = useCallback(() => {
    logout({ returnTo: window.location.origin });
  }, [logout]);

  useEffect(() => {
    if (isAuthenticated) {
      // FIXME: ここの`scope`よくわかっておらず（要調査。read:user もあり？分かり次第環境変数に置き換える）
      getAccessTokenSilently({ scope: "read:current_user" })
        // FIXME: 現状トークンのペイロードが返ってこない問題発生中。要調査。
        .then((token) => setToken(token))
        .catch((e) => console.error(`${e}: トークンの取得に失敗しました`));
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return { isLoading, isAuthenticated, user, token, handleLogin, handleLogout };
};
