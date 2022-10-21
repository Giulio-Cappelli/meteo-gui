import * as React from "react";
const SvgTimeMorning = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="time-morning_svg__a"
        x1={115}
        x2={179.4}
        y1={91.4}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <clipPath id="time-morning_svg__b">
        <path fill="none" d="M0 12h512v282H0z" />
      </clipPath>
      <symbol id="time-morning_svg__c" viewBox="0 0 294.4 294.4">
        <circle
          cx={147.2}
          cy={147.2}
          r={64.4}
          fill="url(#time-morning_svg__a)"
          stroke="#f8af18"
          strokeMiterlimit={10}
          strokeWidth={4.6}
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={18.4}
          d="M147.2 47.3V9.2m0 276v-38m70.7-170.7 26.9-26.9M49.6 244.8l27-27m0-141.3-27-26.9m195.2 195.2-27-27M47.4 147.3H9.2m276 0h-38"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 147.2 147.2; 45 147.2 147.2"
          />
        </path>
      </symbol>
    </defs>
    <g clipPath="url(#time-morning_svg__b)">
      <use
        xlinkHref="#time-morning_svg__c"
        width={294.4}
        height={294.4}
        transform="translate(108.8 166.8)"
      />
    </g>
    <path
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={18}
      d="M128 320h256"
    />
    <path
      fill="#374251"
      d="M220.8 403q8.2 0 13.3 4.8t5 13a17.9 17.9 0 0 1-5.7 13.7q-5.7 5.3-15 5.3t-15.5-5.8q-7.1-6.8-7.1-20.7 0-13 5.7-20.2t16.6-7.2a21.8 21.8 0 0 1 12.6 3.4 16.6 16.6 0 0 1 6.7 9.7l-12.5.7c-1-2.7-3.3-4-6.9-4a7.9 7.9 0 0 0-6.7 3q-2.3 3-2.8 9.7 4.3-5.4 12.3-5.4Zm-9.5 23.6a8.6 8.6 0 0 0 6.7 2.8 7.8 7.8 0 0 0 6.1-2.4 8.9 8.9 0 0 0 2.2-6 8 8 0 0 0-2.4-6 8.4 8.4 0 0 0-6.1-2.3 8.2 8.2 0 0 0-6 2.3 9 9 0 0 0-2.5 6.1 9.1 9.1 0 0 0 2 5.5Zm55-3.3h-20.6v-9.9h20.6Zm42.8-31.3q7.2 6.8 7.2 20.6 0 13-5.7 20.2t-16.7 7.2q-7.5 0-12.6-3.4a16.4 16.4 0 0 1-6.6-9.6l12.4-.8c1 2.7 3.3 4 6.9 4a8 8 0 0 0 6.7-3q2.4-3 2.9-9.6-4.5 5.3-12.4 5.3-8.2 0-13.2-4.8t-5.1-12.9a17.9 17.9 0 0 1 5.7-13.7q5.7-5.3 15-5.3t15.5 5.8Zm-14.9 21.3a8.1 8.1 0 0 0 6-2.3 9 9 0 0 0 2.5-6.2 8.7 8.7 0 0 0-2-5.4 8.4 8.4 0 0 0-6.7-2.8 8 8 0 0 0-6.1 2.3 8.4 8.4 0 0 0-2.2 6 8.1 8.1 0 0 0 2.3 6.1 8.4 8.4 0 0 0 6.2 2.3Z"
    />
  </svg>
);
export default SvgTimeMorning;
