import type { ComponentPropsWithoutRef, VFC } from "react";

type LogoProps = ComponentPropsWithoutRef<"svg">;

export const AppleIcon: VFC<LogoProps> = (props) => {
  return (
    <svg width="32" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.7737 15.854C21.7588 13.3949 22.91 11.5416 25.235 10.1751C23.9346 8.37227 21.9674 7.38072 19.3742 7.18962C16.9189 7.00213 14.2326 8.57419 13.249 8.57419C12.2095 8.57419 9.83243 7.25453 7.96207 7.25453C4.10212 7.31222 0 10.2328 0 16.1749C0 17.9308 0.331598 19.7444 0.994793 21.6121C1.88154 24.0712 5.07829 30.0962 8.41289 29.9988C10.1566 29.9592 11.3898 28.8018 13.6588 28.8018C15.8608 28.8018 17.0009 29.9988 18.9458 29.9988C22.3102 29.952 25.2014 24.475 26.0435 22.0088C21.5315 19.9499 21.7737 15.9801 21.7737 15.854ZM17.8578 4.85678C19.7468 2.68619 19.5754 0.710309 19.5196 0C17.8504 0.0937464 15.9204 1.09972 14.8213 2.33645C13.6104 3.66332 12.8988 5.30388 13.0515 7.15357C14.8548 7.28698 16.5016 6.38917 17.8578 4.85678Z"
        fill="currentColor"
      />
    </svg>
  );
};
