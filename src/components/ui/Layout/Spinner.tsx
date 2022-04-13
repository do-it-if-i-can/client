import type { VFC } from "react";

export const Spinner: VFC = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin border-primary"></div>
    </div>
  );
};
