import * as React from "react";
const SvgWindBeaufort9 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-9_svg__a"
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
        xlinkHref="#wind-beaufort-9_svg__a"
        id="wind-beaufort-9_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-9_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-9_svg__a)"
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
            values="0; 3848"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-beaufort-9_svg__b)"
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
            values="0; 2200"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-beaufort-9_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M403.4 279.7q9.7 9 9.7 27.6 0 17.5-7.7 27.1t-22.3 9.6q-10.1 0-16.8-4.6a21.9 21.9 0 0 1-9-12.8l16.6-1.1q2.1 5.5 9.3 5.5 5.9 0 9-4t3.8-13q-6 7.1-16.6 7.1-10.9 0-17.6-6.4t-6.9-17.3q0-11.2 7.8-18.4t20-7q12.7 0 20.7 7.7Zm-20 28.5a11 11 0 0 0 8.2-3 12.2 12.2 0 0 0 3.3-8.3 11.6 11.6 0 0 0-2.7-7.3 11.2 11.2 0 0 0-9-3.7c-3.5 0-6.2 1-8.2 3.1a11.3 11.3 0 0 0-2.9 8 10.9 10.9 0 0 0 3.1 8.2 11.3 11.3 0 0 0 8.3 3Z"
    />
  </svg>
);
export default SvgWindBeaufort9;