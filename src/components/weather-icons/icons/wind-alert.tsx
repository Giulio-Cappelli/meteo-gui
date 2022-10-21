import * as React from "react";
const SvgWindAlert = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-alert_svg__a"
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
        xlinkHref="#wind-alert_svg__a"
        id="wind-alert_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <linearGradient
        id="wind-alert_svg__d"
        x1={349.3}
        x2={399.2}
        y1={281.6}
        y2={368.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <symbol id="wind-alert_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-alert_svg__a)"
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
          stroke="url(#wind-alert_svg__b)"
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
      xlinkHref="#wind-alert_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="url(#wind-alert_svg__d)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M430.9 339.6 411 303l-19.2-35.3a9 9 0 0 0-15.8 0l-19.2 35.4-19.8 36.4a9 9 0 0 0 8 13.5h77.8a9 9 0 0 0 8-13.4Z"
    />
  </svg>
);
export default SvgWindAlert;
