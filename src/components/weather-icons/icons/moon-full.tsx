import * as React from "react";
const SvgMoonFull = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="moon-full_svg__a"
        x1={186}
        x2={326}
        y1={134.7}
        y2={377.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
    </defs>
    <circle
      cx={256}
      cy={256}
      r={140}
      fill="url(#moon-full_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
    />
  </svg>
);
export default SvgMoonFull;
