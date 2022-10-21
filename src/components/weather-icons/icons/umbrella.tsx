import * as React from "react";
const SvgUmbrella = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="umbrella_svg__a"
        x1={203.5}
        x2={323.7}
        y1={156.4}
        y2={364.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="umbrella_svg__b"
        x1={209.3}
        x2={290.6}
        y1={145.6}
        y2={286.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#umbrella_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M304 355a24 24 0 0 1-48 0V133"
    />
    <g>
      <path
        fill="url(#umbrella_svg__b)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M376 237c0-53-53.7-96-120-96s-120 43-120 96l12.7-5.8c18-8.3 41-8 58.5.5l11 5.3 6.8-3.5a70.8 70.8 0 0 1 62 0l6.8 3.5 11-5.3a71.1 71.1 0 0 1 58.5-.5Z"
      />
      <path
        fill="none"
        stroke="#ef4444"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M293.8 237c6.6-53.6-37.8-96-37.8-96s-44.4 42.4-37.8 96"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; .9 1.1; 1 1"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 29 -14; 0 0"
      />
    </g>
  </svg>
);
export default SvgUmbrella;
