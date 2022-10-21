import * as React from "react";
const SvgRaindrop = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="raindrop_svg__a"
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
      <symbol id="raindrop_svg__b" viewBox="0 0 164 245.6">
        <path
          fill="url(#raindrop_svg__a)"
          stroke="#2885c7"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
        >
          <animateTransform
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
      xlinkHref="#raindrop_svg__b"
      width={164}
      height={245.6}
      transform="translate(174 132.43)"
    />
  </svg>
);
export default SvgRaindrop;
