import * as React from "react";
const SvgWindBeaufort5 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-5_svg__a"
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
        xlinkHref="#wind-beaufort-5_svg__a"
        id="wind-beaufort-5_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-5_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-5_svg__a)"
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
            values="0; 2664"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-beaufort-5_svg__b)"
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
            values="0; 1320"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-beaufort-5_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M383.8 344q-12 0-19.7-5.5t-9-15.7l17.6-1.4a9.9 9.9 0 0 0 3.8 6 12 12 0 0 0 7.2 2.2 11.6 11.6 0 0 0 8.5-3 10.5 10.5 0 0 0 3-8 10.4 10.4 0 0 0-3-7.8 11.6 11.6 0 0 0-8.5-3 12.6 12.6 0 0 0-9.7 4.3l-16.6-1.5 6.4-38.6H408v14.7h-30.9l-2.3 12 .3.2q5.6-4 14.2-4 10.7 0 17 6.2t6.6 17.1q0 11.8-7.8 18.8t-21.3 7Z"
    />
  </svg>
);
export default SvgWindBeaufort5;
