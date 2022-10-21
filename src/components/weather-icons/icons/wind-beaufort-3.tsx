import * as React from "react";
const SvgWindBeaufort3 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-3_svg__a"
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
        xlinkHref="#wind-beaufort-3_svg__a"
        id="wind-beaufort-3_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-3_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-3_svg__a)"
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
            values="0; 2072"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-beaufort-3_svg__b)"
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
            values="0; 880"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-beaufort-3_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M397.5 305.2a17.8 17.8 0 0 1 10.8 5.7 16.4 16.4 0 0 1 3.8 11.2 20 20 0 0 1-7.2 15.7q-7.3 6.2-20.3 6.2-13.6 0-21-6.7t-7.8-18.6h16.5q.6 11.7 11.7 11.7a11.6 11.6 0 0 0 7.7-2.4 8.1 8.1 0 0 0 2.8-6.5 7.5 7.5 0 0 0-3-6.5 14 14 0 0 0-8.4-2.2h-4.9v-12h5.2c3 0 5.3-.6 7-2a7 7 0 0 0 2.4-5.7 7.2 7.2 0 0 0-2.4-5.8c-1.7-1.4-4-2-7-2s-5.2.7-6.8 2.1-2.4 3.9-2.7 7.2H358q1-22.6 26-22.6 11.8 0 18.5 5.2a16.1 16.1 0 0 1 6.6 13.3 14.9 14.9 0 0 1-3 9.3 15.2 15.2 0 0 1-8.6 5.4Z"
    />
  </svg>
);
export default SvgWindBeaufort3;
