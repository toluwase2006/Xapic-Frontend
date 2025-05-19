import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const LongArrowIcon: React.FC<IconProps> = (props) => (
  <svg
    width="84"
    height="10"
    viewBox="0 0 84 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spreads props like className, style, onClick, etc.
  >
    <path
      d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5L1 5.75L77.25 5.75001L77.25 5.00001L77.25 4.25001L1 4.25L1 5Z"
      fill="#1E254C"
    />
  </svg>
);

export const ShortArrowIcon: React.FC<IconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 12L13 18M19 12L13 6M19 12H5"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
