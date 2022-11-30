import * as React from "react";
const SvgWindBeaufort6 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-6_svg__a"
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
        xlinkHref="#wind-beaufort-6_svg__a"
        id="wind-beaufort-6_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-6_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-6_svg__a)"
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
          stroke="url(#wind-beaufort-6_svg__b)"
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
      xlinkHref="#wind-beaufort-6_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M388.5 294.8q11 0 17.7 6.5t6.8 17.3q0 11.3-7.7 18.4t-20.2 7q-12.6 0-20.6-7.7-9.5-9-9.5-27.7 0-17.5 7.6-27t22.2-9.6q10.1 0 16.8 4.6a22.3 22.3 0 0 1 9 13l-16.6 1q-2.1-5.6-9.3-5.6-6 0-9 4t-3.7 13q5.8-7.2 16.5-7.2Zm-12.7 31.6a11.5 11.5 0 0 0 8.8 3.7q5.4 0 8.3-3.2a11.9 11.9 0 0 0 2.9-8 10.6 10.6 0 0 0-3.2-8 11.2 11.2 0 0 0-8.2-3.1 11 11 0 0 0-8 3 12 12 0 0 0-3.4 8.2 12.3 12.3 0 0 0 2.8 7.4Z"
    />
  </svg>
);
export default SvgWindBeaufort6;