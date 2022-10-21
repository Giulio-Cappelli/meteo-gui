import * as React from "react";
const SvgTimeLateMorning = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="time-late-morning_svg__a"
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
      <clipPath id="time-late-morning_svg__b">
        <path fill="none" d="M0 12h512v282H0z" />
      </clipPath>
      <symbol id="time-late-morning_svg__c" viewBox="0 0 294.4 294.4">
        <circle
          cx={147.2}
          cy={147.2}
          r={64.4}
          fill="url(#time-late-morning_svg__a)"
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
    <g clipPath="url(#time-late-morning_svg__b)">
      <use
        xlinkHref="#time-late-morning_svg__c"
        width={294.4}
        height={294.4}
        transform="translate(108.73 108.93)"
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
      d="M214.5 392q7.2 6.8 7.2 20.6 0 13-5.8 20.2t-16.6 7.2c-5 0-9.3-1.1-12.6-3.4a16.3 16.3 0 0 1-6.7-9.6l12.4-.8c1 2.7 3.4 4 7 4a8 8 0 0 0 6.7-3q2.3-3 2.8-9.6-4.5 5.3-12.4 5.3-8.1 0-13.1-4.8t-5.2-12.9a17.9 17.9 0 0 1 5.8-13.8q5.7-5.2 15-5.2t15.5 5.8Zm-15 21.3a8.2 8.2 0 0 0 6-2.3 9 9 0 0 0 2.6-6.2 8.6 8.6 0 0 0-2.1-5.4 8.3 8.3 0 0 0-6.6-2.8 8 8 0 0 0-6.2 2.3 8.4 8.4 0 0 0-2.2 6 8.1 8.1 0 0 0 2.4 6.1 8.4 8.4 0 0 0 6.2 2.3Zm49.2 10h-20.5v-9.9h20.5Zm31.2 15.1h-13.5v-32h-12.6v-9h2.1q5.6 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.2-.5h11Zm52.5 0h-40.6a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l7.9-5.6a16.4 16.4 0 0 0 4.3-4 7.5 7.5 0 0 0 1.2-4.3 6.4 6.4 0 0 0-1.8-4.9 7.1 7.1 0 0 0-5.1-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4c3.6 3 5.4 7 5.4 12.2a16.1 16.1 0 0 1-2.6 9 26.7 26.7 0 0 1-8.2 7.5l-8.8 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Z"
    />
  </svg>
);
export default SvgTimeLateMorning;
