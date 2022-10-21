import * as React from "react";
const SvgWindBeaufort12 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-beaufort-12_svg__a"
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
        xlinkHref="#wind-beaufort-12_svg__a"
        id="wind-beaufort-12_svg__b"
        x1={77.7}
        x2={169}
        y1={96.2}
        y2={254.4}
      />
      <symbol id="wind-beaufort-12_svg__c" viewBox="0 0 348 240">
        <path
          fill="none"
          stroke="url(#wind-beaufort-12_svg__a)"
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
            values="0; 4736"
          />
        </path>
        <path
          fill="none"
          stroke="url(#wind-beaufort-12_svg__b)"
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
            values="0; 2860"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#wind-beaufort-12_svg__c"
      width={348}
      height={240}
      transform="translate(82 136)"
    />
    <path
      fill="#374251"
      d="M367.5 344.4h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4 4.3-3.1 5.6-10.2l.2-.8h15.5Zm69.7-.8h-55.7q0-9.4 4-15.7 4-6.1 14.9-13.5l10.9-7.7a22.2 22.2 0 0 0 5.8-5.5 10.2 10.2 0 0 0 1.8-5.8 8.7 8.7 0 0 0-2.6-6.7 9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.4h-16.8v-2.1q0-12.2 7.1-19t20.2-6.8q12.4 0 19.7 6t7.4 16.6a22.2 22.2 0 0 1-3.5 12.3q-3.5 5.4-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.8h31Z"
    />
  </svg>
);
export default SvgWindBeaufort12;
