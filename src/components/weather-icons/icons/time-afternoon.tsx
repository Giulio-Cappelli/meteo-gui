import * as React from "react";
const SvgTimeAfternoon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="time-afternoon_svg__a"
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
      <symbol id="time-afternoon_svg__b" viewBox="0 0 294.4 294.4">
        <circle
          cx={147.2}
          cy={147.2}
          r={64.4}
          fill="url(#time-afternoon_svg__a)"
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
    <path
      fill="#374251"
      d="M185.3 438.4h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm52.5 0H197a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l8-5.6a16.3 16.3 0 0 0 4.2-4 7.5 7.5 0 0 0 1.3-4.3 6.3 6.3 0 0 0-1.9-4.9 7.1 7.1 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.1-13.8t14.7-5q9.1 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.5 9 26.7 26.7 0 0 1-8.2 7.6l-8.8 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Zm28.5-15.1h-20.6v-9.9h20.6Zm31.1 15.1H284v-32h-12.7v-9h2.2q5.5 0 8.7-2.4c2-1.5 3.4-4 4-7.3l.2-.5h11Zm32.1 1.3q-8.8 0-14.4-4a16.2 16.2 0 0 1-6.6-11.5l12.8-1a7.2 7.2 0 0 0 2.8 4.5 8.8 8.8 0 0 0 5.3 1.5 8.5 8.5 0 0 0 6.2-2.2 8.4 8.4 0 0 0 0-11.5 8.5 8.5 0 0 0-6.2-2.2 9.2 9.2 0 0 0-7.1 3l-12.1-1 4.7-28.1H347v10.7h-22.5l-1.7 8.8.2.1a17.1 17.1 0 0 1 10.4-3q7.8 0 12.5 4.6t4.7 12.5q0 8.6-5.7 13.7t-15.5 5Z"
    />
    <use
      xlinkHref="#time-afternoon_svg__b"
      width={294.4}
      height={294.4}
      transform="translate(108.68 70.93)"
    />
  </svg>
);
export default SvgTimeAfternoon;