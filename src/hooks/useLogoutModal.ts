import { useState } from "react";

import { useAuth } from "~/hooks";

export const useLogoutModal = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const handleLogoutModalOpen = () => setIsLogoutModalOpen(true);
  const handleLogoutModalClose = () => setIsLogoutModalOpen(false);
  const { handleLogout } = useAuth();

  return { isLogoutModalOpen, handleLogoutModalOpen, handleLogoutModalClose, handleLogout };
};
