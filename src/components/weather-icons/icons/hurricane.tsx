import * as React from "react";
const SvgHurricane = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="hurricane_svg__a"
        x1={175.8}
        x2={336.2}
        y1={117}
        y2={395}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#hurricane_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M344 256a88 88 0 1 1-88-88 88 88 0 0 1 88 88ZM200 116.9l-3.8 7.7A269.7 269.7 0 0 0 169 267h0m143.1 128 3.8-7.7A269.7 269.7 0 0 0 343.2 245h0"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="6s"
        repeatCount="indefinite"
        type="rotate"
        values="1440 256 256; 0 256 256"
      />
    </path>
  </svg>
);
export default SvgHurricane;
