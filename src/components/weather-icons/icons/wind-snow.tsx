import * as React from "react";
const SvgWindSnow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-snow_svg__a"
        x1={138.5}
        x2={224.2}
        y1={5.1}
        y2={153.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#wind-snow_svg__a"
        id="wind-snow_svg__c"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <linearGradient
        id="wind-snow_svg__b"
        x1={219.1}
        x2={240.9}
        y1={155.2}
        y2={192.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        xlinkHref="#wind-snow_svg__b"
        id="wind-snow_svg__f"
        x1={363.1}
        x2={384.9}
        y1={257.2}
        y2={294.8}
      />
      <linearGradient
        xlinkHref="#wind-snow_svg__b"
        id="wind-snow_svg__h"
        x1={133.1}
        x2={154.9}
        y1={315.2}
        y2={352.8}
      />
      <symbol id="wind-snow_svg__d" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-snow_svg__a)"
          strokeDasharray={148}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M267.2 24.3A40 40 0 1 1 296 92H12"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 2960"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-snow_svg__c)"
          strokeDasharray={110}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M151.2 215.7A40 40 0 1 0 180 148H12"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 1540"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-snow_svg__d"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
  </svg>
);
export default SvgWindSnow;
