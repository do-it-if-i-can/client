import clsx from "clsx";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { forwardRef } from "react";

import type { Todo as GqlTodo } from "$/gql";

export type Todo = Pick<GqlTodo, "id" | "category" | "title" | "done" | "priority">;

type TodoInputProps = {
  categoryColor: string;
  value: string;
  onBlur: () => void;
  onChange: () => void;
  className?: string;
};

type TodoInput = ForwardRefExoticComponent<TodoInputProps & RefAttributes<HTMLInputElement>>;

const checkedRadioBgTheme = (categoryColor: string) => {
  return `radio-${categoryColor}`;
};
const caretTheme = (categoryColor: string) => {
  return `caret-${categoryColor}`;
};

export const TodoInput: TodoInput = forwardRef((props, ref) => {
  const radioColor = checkedRadioBgTheme(props.categoryColor);
  const caretColor = caretTheme(props.categoryColor);

  return (
    <div className={clsx(["group flex gap-2 items-start w-full cursor-pointer", props.className])}>
      <div className="flex-wrap">
        <input type="radio" className={clsx(["radio", radioColor])} readOnly />
      </div>

      <input
        ref={ref}
        type="text"
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        className={clsx(["p-0 w-full h-6 text-base input input-ghost", caretColor])}
      />
    </div>
  );
});
