import * as React from "react";
const SvgRaindrops = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="raindrops_svg__a"
        x1={17.61}
        x2={31.27}
        y1={21.85}
        y2={45.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.45} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
      <linearGradient
        id="raindrops_svg__b"
        x1={29.61}
        x2={43.27}
        y1={21.85}
        y2={45.52}
        xlinkHref="#raindrops_svg__a"
      />
    </defs>
    <path
      fill="url(#raindrops_svg__a)"
      stroke="#2885c7"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M26 17c-6.09 9-10 14.62-10 20.09a10 10 0 0 0 20 0C36 31.62 32.09 26 26 17z"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="5s"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; 1 .9; 1 1"
      />
    </path>
    <path
      fill="url(#raindrops_svg__b)"
      stroke="#2885c7"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M38 17c-6.09 9-10 14.62-10 20.09a10 10 0 0 0 20 0C48 31.62 44.09 26 38 17z"
    >
      <animateTransform
        attributeName="transform"
        begin="-3s"
        calcMode="spline"
        dur="5s"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; 1 .9; 1 1"
      />
    </path>
  </svg>
);
export default SvgRaindrops;
