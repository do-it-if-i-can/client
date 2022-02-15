import type { VFC } from "react";

type TaskListProps = {
  sectionTitle: "今日する" | "明日する" | "今度する";
};

export const TaskList: VFC<TaskListProps> = (props) => {
  const textColor = () => {
    switch (props.sectionTitle) {
      case "今日する":
        return "text-rose-500";
      case "明日する":
        return "text-orange-400";
      case "今度する":
        return "text-amber-400";
    }
  };
  return <div className={["w-1/3 font-bold text-xl", textColor()].join(" ")}>{props.sectionTitle}</div>;
};
