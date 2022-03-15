import type { VFC } from "react";

import { DuplicateIcon } from "~/components/ui/Assets/HeroIcon";

type CopyButtonProps = {
  className?: string;
};

export const CopyButton: VFC<CopyButtonProps> = (props) => {
  return (
    <div className={props.className}>
      <DuplicateIcon />
    </div>
  );
};
