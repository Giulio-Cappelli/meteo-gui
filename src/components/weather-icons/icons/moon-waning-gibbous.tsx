import * as React from "react";
const SvgMoonWaningGibbous = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="moon-waning-gibbous_svg__a"
        x1={12993.6}
        x2={13126.8}
        y1={143.9}
        y2={374.7}
        gradientTransform="matrix(-1 0 0 1 13312.32 0)"
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
      fill="url(#moon-waning-gibbous_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M121.2 214.8a134.1 134.1 0 0 1 155.6-95.1 135.6 135.6 0 0 0-13.8 31.9c-20.7 73.2 22 151 95.4 173.8a145.4 145.4 0 0 0 14.9 3.6 134.6 134.6 0 0 1-156.7 59.6 142.6 142.6 0 0 1-95.4-173.8Z"
    />
  </svg>
);
export default SvgMoonWaningGibbous;