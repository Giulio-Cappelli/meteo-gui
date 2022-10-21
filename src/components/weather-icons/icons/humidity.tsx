import * as React from "react";
const SvgHumidity = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="humidity_svg__a"
        x1={14.8}
        x2={124.2}
        y1={42.3}
        y2={231.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.5} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
      <symbol id="humidity_svg__b" viewBox="0 0 164 245.6">
        <path
          fill="url(#humidity_svg__a)"
          stroke="#2885c7"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            calcMode="spline"
            dur="6s"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
            type="scale"
            values="1 1; 1 .9; 1 1"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#humidity_svg__b"
      width={164}
      height={245.6}
      transform="translate(173.9 133.01)"
    />
    <path
      fill="#fff"
      d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 0 1-.6 2.6l-53 73.3a9.4 9.4 0 0 1-2.8 2.8 12.3 12.3 0 0 1-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 0 1 .7-2.8l53-73.3a7 7 0 0 1 2.6-2.7 12.7 12.7 0 0 1 4.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z"
    />
  </svg>
);
export default SvgHumidity;
