import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect, useState } from "react";

import { AUTH0_AUDIENCE, AUTH0_SCOPE } from "~/constants/auth";

export const useAuth = () => {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently, loginWithRedirect, logout } = useAuth0();
  const [token, setToken] = useState("");

  const handleLogin = useCallback(async () => {
    await loginWithRedirect();
  }, [loginWithRedirect]);

  const handleLogout = useCallback(() => {
    logout({ returnTo: window.location.origin });
  }, [logout]);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently({
        audience: AUTH0_AUDIENCE,
        scope: AUTH0_SCOPE,
      })
        .then((token) => setToken(token))
        .catch((e) => console.error(`${e}: トークンの取得に失敗しました`));
    }
  }, [isAuthenticated, getAccessTokenSilently, setToken]);

  return { isLoading, isAuthenticated, user, token, handleLogin, handleLogout };
};
