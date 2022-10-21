import * as React from "react";
const SvgMoonFirstQuarter = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="moon-first-quarter_svg__a"
        x1={193.7}
        x2={325.5}
        y1={147.7}
        y2={376}
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
      fill="url(#moon-first-quarter_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M310 126.1a140.4 140.4 0 0 0-57-12.6 140 140 0 0 1 26 152.1A140 140 0 0 1 148.7 348c14 17.3 25.6 24.1 47.5 33.9 72 32 156 .8 187.4-69.8s-1.5-153.9-73.6-186Z"
    />
  </svg>
);
export default SvgMoonFirstQuarter;
