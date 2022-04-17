import { atom } from "recoil";

import type { User } from "$/gql";

export type CurrentUserState = Pick<User, "avatar" | "displayName">;

export const currentUserState = atom<CurrentUserState>({
  key: "currentUserState",
  default: {
    avatar: localStorage.getItem("avatar") || "/avatar_dummy.svg",
    displayName: localStorage.getItem("displayName") || "",
  },
});
