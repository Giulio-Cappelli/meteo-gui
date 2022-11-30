import * as React from "react";
const SvgWindBeaufort2 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-2_svg__a"
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
        xlinkHref="#wind-beaufort-2_svg__a"
        id="wind-beaufort-2_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-2_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-2_svg__a)"
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
            values="0; 1776"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-beaufort-2_svg__b)"
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
            values="0; 660"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-beaufort-2_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M411.9 344h-55.7q0-9.4 4-15.7 4-6.1 14.8-13.5l11-7.8a22.4 22.4 0 0 0 5.9-5.5 10.2 10.2 0 0 0 1.7-5.8 8.7 8.7 0 0 0-2.6-6.7 9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.5h-17v-2.2q0-12.1 7.2-19t20-6.8q12.5 0 19.8 6t7.4 16.7a22 22 0 0 1-3.5 12.2q-3.5 5.5-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.9h31Z"
    />
  </svg>
);
export default SvgWindBeaufort2;