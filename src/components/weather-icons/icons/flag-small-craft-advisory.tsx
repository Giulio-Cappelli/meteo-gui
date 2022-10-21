import * as React from "react";
const SvgFlagSmallCraftAdvisory = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="flag-small-craft-advisory_svg__a"
        x1={90}
        x2={206}
        y1={155.6}
        y2={356.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="flag-small-craft-advisory_svg__b"
        x1={223.5}
        x2={289.7}
        y1={117}
        y2={231.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#flag-small-craft-advisory_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={24}
      d="M148 376V136"
    />
    <g>
      <path
        fill="url(#flag-small-craft-advisory_svg__b)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M191.4 137a6.4 6.4 0 0 0-7.3 6.4v82a6.4 6.4 0 0 0 7.3 6.4l167.1-40.4a6.4 6.4 0 0 0 5.5-6.3v-1.4a6.4 6.4 0 0 0-5.5-6.3Z"
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
export default SvgFlagSmallCraftAdvisory;
