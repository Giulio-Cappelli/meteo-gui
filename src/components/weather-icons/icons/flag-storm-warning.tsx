import * as React from "react";
const SvgFlagStormWarning = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="flag-storm-warning_svg__a"
        x1={116.5}
        x2={232.5}
        y1={155.6}
        y2={356.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="flag-storm-warning_svg__b"
        x1={238.4}
        x2={309.6}
        y1={123.4}
        y2={246.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#flag-storm-warning_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={24}
      d="M174.5 376V136"
    />
    <g>
      <rect
        width={127}
        height={96}
        x={210.5}
        y={137}
        fill="url(#flag-storm-warning_svg__b)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={2}
        rx={6.1}
      />
      <rect
        width={52.9}
        height={40}
        x={247.5}
        y={165}
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={2}
        rx={6.1}
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; 1.1 1; 1 1"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="0 0; -18 0; 0 0"
      />
    </g>
  </svg>
);
export default SvgFlagStormWarning;
