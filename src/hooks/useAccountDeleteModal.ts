import { useState } from "react";

import { useAuth } from "~/hooks";

export const useAccountDeleteModal = () => {
  const [isAccountDeleteModalOpen, setIsAccountDeleteModalOpen] = useState(false);
  const handleAccountDeleteModalOpen = () => setIsAccountDeleteModalOpen(true);
  const handleAccountDeleteModalClose = () => setIsAccountDeleteModalOpen(false);
  // FIXME: アカウント削除のAPIに置き換える
  const { handleLogout: handleAccountDelete } = useAuth();

  return { isAccountDeleteModalOpen, handleAccountDeleteModalOpen, handleAccountDeleteModalClose, handleAccountDelete };
};
