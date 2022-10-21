import * as React from "react";
const SvgPressureLowAlt = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="pressure-low-alt_svg__a"
        x1={184.3}
        x2={275.4}
        y1={192.2}
        y2={349.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.5} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
    </defs>
    <path
      fill="url(#pressure-low-alt_svg__a)"
      stroke="#2885c7"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M234.3 182v120.6H310V330H202V182Z"
    />
  </svg>
);
export default SvgPressureLowAlt;
