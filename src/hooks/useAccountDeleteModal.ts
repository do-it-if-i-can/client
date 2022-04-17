import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { currentUserState } from "~/globalStates/atoms/currentUserState";
import { useAuth } from "~/hooks";

export const useAccountDeleteModal = () => {
  const [isAccountDeleteModalOpen, setIsAccountDeleteModalOpen] = useState(false);
  const handleAccountDeleteModalOpen = () => setIsAccountDeleteModalOpen(true);
  const handleAccountDeleteModalClose = () => setIsAccountDeleteModalOpen(false);
  // FIXME: アカウント削除のAPIに置き換える
  const { handleLogout } = useAuth();

  const setCurrentUser = useSetRecoilState(currentUserState);

  const handleAccountDelete = () => {
    handleLogout();
    setCurrentUser({
      avatar: "",
      displayName: "",
    });
  };

  return { isAccountDeleteModalOpen, handleAccountDeleteModalOpen, handleAccountDeleteModalClose, handleAccountDelete };
};
