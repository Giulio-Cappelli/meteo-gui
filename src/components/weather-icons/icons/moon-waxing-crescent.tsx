import * as React from "react";
const SvgMoonWaxingCrescent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="moon-waxing-crescent_svg__a"
        x1={211.4}
        x2={330.3}
        y1={166.7}
        y2={372.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeDasharray="16.9 56.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={17.4}
      d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128Z"
    />
    <path
      fill="url(#moon-waxing-crescent_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M310.3 127.5a142.3 142.3 0 0 0-19-7l.7.6h0c92.2 96.7 21 256.7-112.6 252.8l-.8-.1a141.4 141.4 0 0 0 17.8 9.5 140 140 0 1 0 114-255.8Z"
    />
  </svg>
);
export default SvgMoonWaxingCrescent;
