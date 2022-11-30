import * as React from "react";
const SvgRaindropMeasure = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="raindrop-measure_svg__a"
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
      <linearGradient
        id="raindrop-measure_svg__b"
        x1={188.8}
        x2={298.2}
        y1={170.8}
        y2={360.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="raindrop-measure_svg__c"
        x1={310.5}
        x2={425.5}
        y1={152.5}
        y2={351.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <clipPath id="raindrop-measure_svg__d" />
      <symbol id="raindrop-measure_svg__e" viewBox="0 0 164 245.6">
        <path
          fill="url(#raindrop-measure_svg__a)"
          stroke="#2885c7"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
        />
      </symbol>
    </defs>
    <path
      fill="url(#raindrop-measure_svg__b)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M256 132c-48.7 72-80 117-80 160.8s35.8 79.2 80 79.2 80-35.5 80-79.3S304.7 204 256 132Z"
    />
    <path
      fill="none"
      stroke="url(#raindrop-measure_svg__c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M352 132h32v240h-32m8-120h24m-16 56h16m-16-120h16"
    />
    <g clipPath="url(#raindrop-measure_svg__d)">
      <use
        xlinkHref="#raindrop-measure_svg__e"
        width={164}
        height={245.6}
        transform="translate(174.11 128.99)"
      />
    </g>
  </svg>
);
export default SvgRaindropMeasure;