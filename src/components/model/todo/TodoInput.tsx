import clsx from "clsx";
import type { ForwardRefExoticComponent, KeyboardEvent, RefAttributes } from "react";
import { forwardRef } from "react";

type TodoInputProps = {
  categoryColor: string;
  value: string;
  onBlur: () => void;
  onChange: () => void;
  onEnterKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
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
    <div className="group flex gap-2 items-start w-full cursor-pointer">
      <div className="flex-wrap">
        <input type="radio" className={clsx(["radio", radioColor])} readOnly />
      </div>

      <input
        ref={ref}
        type="text"
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onKeyPress={props.onEnterKeyPress}
        className={clsx(["p-0 w-full h-6 text-base input input-ghost", caretColor])}
      />
    </div>
  );
});
