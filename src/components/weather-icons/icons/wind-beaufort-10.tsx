import * as React from "react";
const SvgWindBeaufort10 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-10_svg__a"
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
        xlinkHref="#wind-beaufort-10_svg__a"
        id="wind-beaufort-10_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-10_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-10_svg__a)"
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
            values="0; 4144"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-beaufort-10_svg__b)"
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
            values="0; 2420"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-beaufort-10_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M366.4 344h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4 4.3-3.1 5.6-10.2l.2-.8h15.6Zm63.9-9.8q-8.2 9.8-21.9 9.8t-21.9-9.8q-8.1-9.7-8.1-26.4 0-16.5 8.1-26.1 8-9.7 21.9-9.7 13.7 0 21.9 9.7t8 26.1q0 16.6-8 26.4Zm-21.9-4.2q12.6 0 12.6-22t-12.6-22q-12.7 0-12.7 22t12.7 22Z"
    />
  </svg>
);
export default SvgWindBeaufort10;
