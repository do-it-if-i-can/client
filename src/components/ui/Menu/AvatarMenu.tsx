import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import type { VFC } from "react";
import { Fragment } from "react";

import { Avatar } from "~/components/model/user/Avatar";
import { CogIcon, LogoutIcon } from "~/components/ui/Assets/HeroIcon";

export const AvatarMenu: VFC = () => {
  const handleLogout = () => {
    alert("ログアウトしました");
  };

  return (
    <Popover className="relative">
      {({ open: _ }) => (
        <>
          <Popover.Button className="rounded-full outline-primary">
            <Avatar />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 py-2 mt-2 w-60 max-w-xs rounded-xl border shadow md:w-80 md:translate-x-14 lg:translate-x-1/3 bg-base-100 outline-primary border-base-200 shadow-base-200">
              <div className="flex flex-col rounded-md">
                <Link href="/setting">
                  <a className="inline-flex gap-3 items-center p-2 text-sm font-bold  transition duration-150 ease-in-out md:text-base hover:bg-base-200 outline-primary">
                    <CogIcon className="md:w-7 md:h-7 text-base-content" />
                    設定
                  </a>
                </Link>

                <button
                  className="inline-flex gap-2 items-center p-2 text-sm font-bold  transition duration-150 ease-in-out md:text-base hover:bg-base-200 text-error outline-primary"
                  onClick={handleLogout}
                >
                  <LogoutIcon className="ml-1 md:w-7 md:h-7 text-error" />
                  ログアウト
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
