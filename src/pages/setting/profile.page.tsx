import type { NextPage } from "next";
import Image from "next/image";
import type { ChangeEvent } from "react";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";

import { LayoutErrorBoundary } from "~/components/functional/LayoutErrorBoundary";
import { WithAuth } from "~/components/functional/WithAuth";
import { Layout } from "~/components/ui/Layout/Layout";
import { currentUserState } from "~/globalStates/atoms/currentUserState";

const ProfilePage: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [avatar, setAvatar] = useState(currentUser.avatar || "/avatar_dummy.svg");
  const [displayName, setDisplayName] = useState(currentUser.displayName);

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickAvatar = () => {
    inputRef.current && inputRef.current.click();
  };

  const handleChangeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleClickSaveButton = () => {
    setCurrentUser({ avatar, displayName });
    alert("プロフィールを保存しました。");
  };

  return (
    <Layout centerTitle="プロフィール" layout="setting">
      <LayoutErrorBoundary>
        <div className="flex flex-col px-4 md:px-0">
          <label htmlFor="avatar" className="mb-2 font-bold cursor-pointer text-base-300">
            アイコン
          </label>
          <div className="flex gap-6 items-center">
            <input
              ref={inputRef}
              id="avatar"
              type="file"
              className="hidden"
              onChange={handleChangeAvatar}
              accept="image/png, image/jpeg"
            />
            <Image
              src={avatar as string}
              width={100}
              height={100}
              alt="ユーザーのアバター"
              className="object-cover object-center overflow-hidden"
            />
            <button className="px-4 btn btn-neutral btn-sm" onClick={handleClickAvatar}>
              変更する
            </button>
          </div>

          <label htmlFor="name" className="mt-6 mb-2 font-bold cursor-pointer text-base-300">
            名前
          </label>
          <input
            id="name"
            type="text"
            value={displayName}
            onChange={handleChangeDisplayName}
            className="h-10 rounded-xl border-none input input-info bg-base-200"
          />

          <button onClick={handleClickSaveButton} className="mt-6 btn btn-info">
            保存する
          </button>
        </div>
      </LayoutErrorBoundary>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default WithAuth(ProfilePage);
