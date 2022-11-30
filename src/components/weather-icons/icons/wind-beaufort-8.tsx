import * as React from "react";
const SvgWindBeaufort8 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-8_svg__a"
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
        xlinkHref="#wind-beaufort-8_svg__a"
        id="wind-beaufort-8_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-8_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-8_svg__a)"
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
            values="0; 3552"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-beaufort-8_svg__b)"
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
            values="0; 1980"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-beaufort-8_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M405.4 338.1q-7.9 5.9-21.4 5.9t-21.4-5.9a19 19 0 0 1-7.9-16 16.2 16.2 0 0 1 3.5-10.7 17.7 17.7 0 0 1 9.9-5.9v-.2a14.8 14.8 0 0 1-7.5-5.6 15.3 15.3 0 0 1-2.7-9 16 16 0 0 1 6.8-13.7q7-5 19.3-5t19.3 5a16 16 0 0 1 7 13.7 15.4 15.4 0 0 1-2.8 9.1 14.3 14.3 0 0 1-7.4 5.5v.3a18.1 18.1 0 0 1 9.8 5.9 16.2 16.2 0 0 1 3.5 10.6 19 19 0 0 1-8 16Zm-21.3-7q5.6 0 9-2.5a8.5 8.5 0 0 0 3.2-7.1 8.5 8.5 0 0 0-3.2-7.1c-2.2-1.7-5.2-2.5-9-2.5s-7 .8-9.2 2.5a8.5 8.5 0 0 0-3.2 7 8.4 8.4 0 0 0 3.3 7.2 15 15 0 0 0 9 2.5Zm0-30.3q5 0 7.8-2.3a7.4 7.4 0 0 0 2.9-6.1 7 7 0 0 0-2.8-6 13 13 0 0 0-8-2q-10.7 0-10.7 8a7.4 7.4 0 0 0 2.8 6.2q2.8 2.1 8 2.1Z"
    />
  </svg>
);
export default SvgWindBeaufort8;