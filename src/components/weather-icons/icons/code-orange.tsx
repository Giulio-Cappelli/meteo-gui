import * as React from "react";
const SvgCodeOrange = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="code-orange_svg__a"
        x1={163.5}
        x2={296.6}
        y1={185.7}
        y2={416.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffc078" />
        <stop offset={0.5} stopColor="#ffc078" />
        <stop offset={1} stopColor="#ff922b" />
      </linearGradient>
    </defs>
    <path
      fill="url(#code-orange_svg__a)"
      stroke="#ffa94d"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m381 340.1-52.8-97.3-51-94.2a24 24 0 0 0-42.4 0l-51 94.2-52.8 97.3a24.3 24.3 0 0 0 21.2 35.9h207.7a24.2 24.2 0 0 0 21.1-35.9ZM243 216.6q1.5-1.3 5.5-1.3h15.3c2.7 0 4.5.4 5.6 1.3s1.5 2.4 1.4 4.7l-3 71.8c-.1 2.3-.7 3.8-1.6 4.6s-2.7 1.3-5.4 1.3h-9.4c-2.6 0-4.4-.5-5.3-1.3s-1.5-2.3-1.6-4.6l-2.9-71.9c0-2.2.4-3.8 1.4-4.6Zm29.1 107.6q0 7-3 9.6c-2 1.7-5.7 2.6-11 2.6H254c-5.4 0-9-1-11-2.6s-3-5-3-9.6v-2.9q0-7 3-9.6c2-1.7 5.6-2.5 11-2.5h4c5.4 0 9 .8 11 2.5s3 5 3 9.6Z"
    />
  </svg>
);
export default SvgCodeOrange;
