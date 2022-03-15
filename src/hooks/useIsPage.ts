import { useRouter } from "next/router";

export const useIsPage = (...path: string[]) => {
  const router = useRouter();
  return path.includes(router.pathname);
};
