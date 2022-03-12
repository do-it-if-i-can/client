import type { VFC } from "react";

import { Logo } from "~/components/ui/Assets/Logo";
import { Button } from "~/components/ui/Button";
import { useAuth } from "~/hooks";

type SignProps = {
  page: "signin" | "signup";
};

export const Sign: VFC<SignProps> = (props) => {
  const { handleLogin } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <Logo width={192} height={36} />
      <div className="mt-20">
        <Button
          className="py-4 w-72 font-bold bg-white hover:bg-gray-100 focus:bg-gray-100 rounded-full focus:outline-none focus-visible:ring-2 transition duration-200 ease-in-out sm:w-80"
          onClick={handleLogin}
        >
          {props.page === "signin" ? "ログイン" : "アカウント作成"}
        </Button>
      </div>
    </div>
  );
};
