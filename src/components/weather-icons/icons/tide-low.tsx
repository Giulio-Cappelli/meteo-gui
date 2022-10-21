import * as React from "react";
const SvgTideLow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="tide-low_svg__a"
        x1={79.5}
        x2={165.8}
        y1={-22.3}
        y2={127.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.5} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
    </defs>
    <use
      xlinkHref="#tide-low_svg__b"
      width={244}
      height={92}
      transform="translate(134 242)"
    />
    <path
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M256 146v72l-24-27.6 24 27.6 24-27.6"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 33; 0 0"
      />
    </path>
  </svg>
);
export default SvgTideLow;
