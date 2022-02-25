import type { VFC } from "react";

import { CopyIcon } from "~/components/ui/Assets/CopyIcon";

type CopyButtonProps = {
  className?: string;
};

export const CopyButton: VFC<CopyButtonProps> = (props) => {
  return (
    <div className={props.className}>
      <CopyIcon />
    </div>
  );
};
