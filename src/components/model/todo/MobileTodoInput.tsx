import type { FC } from "react";
import React, { useCallback, useState } from "react";

import { PlusIcon } from "~/components/ui/Assets/HeroIcon";

export const MobileTodoInput: FC = () => {
  const [todoValue, setTodoValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeTodo = useCallback((e) => setTodoValue(e.target.value), []);
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  return (
    <div className="block fixed bottom-0 z-50 p-2 w-full shadow md:hidden bg-base-100">
      <input
        className="w-full rounded-2xl input input-primary input-sm"
        type="text"
        value={todoValue}
        onChange={handleChangeTodo}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="タスクを入力する"
      />

      {isFocused || todoValue ? (
        <div className="flex gap-2 justify-between items-center mt-2">
          <button className="flex flex-1 gap-0.5 items-center btn btn-primary btn-sm">
            <PlusIcon className="w-[12px] h-[12px] text-white" />
            今日する
          </button>
          <button className="flex flex-1 gap-0.5 items-center btn btn-secondary btn-sm">
            <PlusIcon className="w-[12px] h-[12px] text-white" />
            明日する
          </button>
          <button className="flex flex-1 gap-0.5 items-center btn btn-accent btn-sm">
            <PlusIcon className="w-[12px] h-[12px] text-white" />
            今度する
          </button>
        </div>
      ) : null}
    </div>
  );
};
