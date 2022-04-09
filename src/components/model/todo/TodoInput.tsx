import clsx from "clsx";
import type { KeyboardEvent } from "react";
import { forwardRef } from "react";

import type { Todo } from "~/components/model/todo/TodoListItem";

type TodoInputProps = {
  value: string;
  todo?: Todo;
  onChange: () => void;
  onBlur: (todo?: Todo) => void;
  onEnterKeyPress: (event: KeyboardEvent<HTMLTextAreaElement>, todo?: Todo) => void;
  categoryColor: string;
};

const checkedRadioBgTheme = (categoryColor: string) => {
  return `radio-${categoryColor}`;
};
const caretTheme = (categoryColor: string) => {
  return `caret-${categoryColor}`;
};

export const TodoInput = forwardRef<HTMLTextAreaElement, TodoInputProps>((props, ref) => {
  const radioColor = checkedRadioBgTheme(props.categoryColor);
  const caretColor = caretTheme(props.categoryColor);
  const labelColor = props.todo?.done ? "text-base-300 line-through" : "";

  return (
    <div className="group flex gap-2 items-start w-full cursor-pointer">
      <div className="flex-wrap">
        <input type="radio" className={clsx(["radio", radioColor])} checked={props.todo?.done} readOnly />
      </div>

      <textarea
        ref={ref}
        value={props.value}
        rows={1}
        onChange={props.onChange}
        onBlur={() => props.onBlur(props.todo)}
        onKeyPress={(e) => props.onEnterKeyPress(e, props.todo)}
        className={clsx(["p-0 w-full h-6 text-base bg-transparent outline-none resize-none", caretColor, labelColor])}
      />
    </div>
  );
});
