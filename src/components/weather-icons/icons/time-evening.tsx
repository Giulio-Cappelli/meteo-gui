import * as React from "react";
const SvgTimeEvening = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="time-evening_svg__a"
        x1={115.3}
        x2={179.7}
        y1={91.3}
        y2={202.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffa94d" />
        <stop offset={0.5} stopColor="#ffa94d" />
        <stop offset={1} stopColor="#fd7e14" />
      </linearGradient>
      <clipPath id="time-evening_svg__b">
        <path fill="none" d="M0 12h512v282H0z" />
      </clipPath>
      <symbol id="time-evening_svg__c" viewBox="0 0 295 294">
        <ellipse
          cx={147.5}
          cy={147}
          fill="url(#time-evening_svg__a)"
          stroke="#ff922b"
          strokeMiterlimit={10}
          strokeWidth={6}
          rx={64.5}
          ry={64.3}
        />
        <path
          fill="none"
          stroke="#ffa94d"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={18.4}
          d="M147.5 47.2v-38m0 275.6v-38m70.8-170.4 27-26.8M49.7 244.5l27-27m0-141-27-27m195.6 195-27-27M47.3 147H9.2m276.6 0h-38.2"
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
    <g clipPath="url(#time-evening_svg__b)">
      <use
        xlinkHref="#time-evening_svg__c"
        width={295}
        height={294}
        transform="translate(108.58 166.91)"
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
      d="M185.3 438.4h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm48.2-3.1q-6 4.4-16 4.4t-16-4.4a14.2 14.2 0 0 1-6-12 12.2 12.2 0 0 1 2.7-8 13.3 13.3 0 0 1 7.4-4.4v-.2a11 11 0 0 1-5.6-4.1 11.5 11.5 0 0 1-2-6.7 12 12 0 0 1 5.2-10.3q5-3.7 14.3-3.7t14.5 3.7a12 12 0 0 1 5.2 10.3 11.5 11.5 0 0 1-2 6.8 10.7 10.7 0 0 1-5.6 4v.3a13.5 13.5 0 0 1 7.3 4.4 12.1 12.1 0 0 1 2.6 8 14.2 14.2 0 0 1-6 11.9Zm-16-5.3a10.6 10.6 0 0 0 6.7-1.9 7 7 0 0 0 0-10.6 10.6 10.6 0 0 0-6.7-1.9 10.9 10.9 0 0 0-6.9 2 7 7 0 0 0 0 10.5 11 11 0 0 0 7 1.9Zm0-22.6a9.3 9.3 0 0 0 5.9-1.7 5.5 5.5 0 0 0 2-4.6 5.2 5.2 0 0 0-2-4.4 9.8 9.8 0 0 0-5.9-1.6q-8 0-8 6a5.5 5.5 0 0 0 2 4.6 9.4 9.4 0 0 0 6 1.7Zm48.8 15.9h-20.6v-9.9h20.6Zm48.6 15.1h-40.6a20.7 20.7 0 0 1 3-11.5q2.9-4.4 10.7-9.8l8-5.6a16.3 16.3 0 0 0 4.3-4 7.5 7.5 0 0 0 1.2-4.3 6.4 6.4 0 0 0-1.9-4.9 7.2 7.2 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1H275v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.6 9 26.8 26.8 0 0 1-8.2 7.5l-8.8 5.6c-1.7 1-2.6 2-2.8 2.8H315Zm33.5 0H335v-32h-12.7v-9h2.1q5.6 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.2-.5h11Z"
    />
  </svg>
);
export default SvgTimeEvening;