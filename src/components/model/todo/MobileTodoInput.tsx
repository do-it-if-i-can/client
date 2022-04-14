import clsx from "clsx";
import type { FC } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";

import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
  PlusIcon,
  RefreshIcon,
} from "~/components/ui/Assets/HeroIcon";
import { editTodoState } from "~/globalStates/atoms/editTodoState";
import type { Category } from "$/gql";

const checkedRadioBgTheme = (category: Category | null) => {
  switch (category) {
    case "TODAY":
      return "input-primary";
    case "TOMORROW":
      return "input-secondary";
    case "SOMEDAY":
      return "input-accent";
    default:
      return "input-primary";
  }
};

export const MobileTodoInput: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editTodoStateInfo, setEditTodoStateInfo] = useRecoilState(editTodoState);
  const inputColor = checkedRadioBgTheme(editTodoStateInfo?.category);

  const handleBlur = useCallback(
    () =>
      setEditTodoStateInfo((prevState) => {
        if (!prevState.value) {
          return {
            isFocused: false,
            id: null,
            value: "",
            category: null,
          };
        }
        return { ...prevState, isFocused: false };
      }),
    [],
  );

  const handleFocus = useCallback(
    () =>
      setEditTodoStateInfo((prevState) => {
        return { ...prevState, isFocused: true };
      }),
    [],
  );

  const handleChangeTodo = useCallback(
    (e) =>
      setEditTodoStateInfo((prevState) => {
        return { ...prevState, value: e.target.value };
      }),
    [],
  );

  const handleInputClear = useCallback(() => {
    setEditTodoStateInfo((prevState) => {
      return { ...prevState, value: "", isFocused: true };
    });
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editTodoStateInfo.category]);

  return (
    <div className="block fixed bottom-0 z-50 p-2 w-full shadow md:hidden bg-base-100">
      <div className="relative">
        <input
          ref={inputRef}
          className={clsx("pr-10 w-full rounded-2xl input input-primary input-sm", inputColor)}
          type="text"
          value={editTodoStateInfo?.value}
          onChange={handleChangeTodo}
          onClick={handleFocus}
          onBlur={handleBlur}
          placeholder="タスクを入力する"
        />

        {editTodoStateInfo.value && (
          <div className="absolute top-0.5 right-0">
            <button className="w-8 h-8 btn btn-circle btn-ghost" onClick={handleInputClear}>
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {editTodoStateInfo.isFocused || editTodoStateInfo.value ? (
        <div className="flex gap-2 justify-between items-center mt-2">
          <button className="inline-flex flex-1 gap-0.5 items-center btn btn-primary btn-sm">
            <TodayIcon category={editTodoStateInfo.category} />
            今日する
          </button>
          <button className="inline-flex flex-1 gap-0.5 items-center btn btn-secondary btn-sm">
            <TomorrowIcon category={editTodoStateInfo.category} />
            明日する
          </button>
          <button className="inline-flex flex-1 gap-0.5 items-center btn btn-accent btn-sm">
            <SomedayIcon category={editTodoStateInfo.category} />
            今度する
          </button>
        </div>
      ) : null}
    </div>
  );
};

type IconProps = {
  category: Category | null;
};

const iconStyle = "w-4 h-4 text-white";

export const TodayIcon: FC<IconProps> = (props) => {
  if (props.category === "TODAY") {
    return <RefreshIcon className={iconStyle} />;
  }
  if (props.category === "TOMORROW") {
    return <ChevronUpIcon className={iconStyle} />;
  }
  if (props.category === "SOMEDAY") {
    return <ChevronDoubleUpIcon className={iconStyle} />;
  }
  return <PlusIcon className={iconStyle} />;
};

export const TomorrowIcon: FC<IconProps> = (props) => {
  if (props.category === "TODAY") {
    return <ChevronDownIcon className={iconStyle} />;
  }
  if (props.category === "TOMORROW") {
    return <RefreshIcon className={iconStyle} />;
  }
  if (props.category === "SOMEDAY") {
    return <ChevronUpIcon className={iconStyle} />;
  }
  return <PlusIcon className={iconStyle} />;
};

export const SomedayIcon: FC<IconProps> = (props) => {
  if (props.category === "TODAY") {
    return <ChevronDoubleDownIcon className={iconStyle} />;
  }
  if (props.category === "TOMORROW") {
    return <ChevronDownIcon className={iconStyle} />;
  }
  if (props.category === "SOMEDAY") {
    return <RefreshIcon className={iconStyle} />;
  }
  return <PlusIcon className={iconStyle} />;
};
