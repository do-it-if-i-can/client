import type { AtomEffect } from "recoil";
import { atom, DefaultValue } from "recoil";

import type { User } from "$/gql";

export type CurrentUserState = Pick<User, "avatar" | "displayName">;

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const currentUserState = atom<CurrentUserState>({
  key: "currentUserState",
  default: {
    avatar: "",
    displayName: "",
  },
  effects_UNSTABLE: [localStorageEffect("current_user")],
});
