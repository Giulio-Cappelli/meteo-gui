import * as React from "react";
const SvgMoonWaningCrescent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="moon-waning-crescent_svg__a"
        x1={11988.7}
        x2={12107.6}
        y1={166.7}
        y2={372.6}
        gradientTransform="matrix(-1 0 0 1 12286.71 0)"
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
      fill="url(#moon-waning-crescent_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M199 127.5a142.4 142.4 0 0 1 19.2-7l-.8.6h0c-92.2 96.7-21 256.7 112.6 252.8l.8-.1a140 140 0 1 1-131.7-246.3Z"
    />
  </svg>
);
export default SvgMoonWaningCrescent;
