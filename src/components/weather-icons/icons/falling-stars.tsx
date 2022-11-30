import * as React from "react";
const SvgFallingStars = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="falling-stars_svg__b"
        x1={54.3}
        x2={187.2}
        y1={29}
        y2={259.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        id="falling-stars_svg__a"
        x1={344.3}
        x2={375.7}
        y1={153.9}
        y2={208.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fcd966" />
        <stop offset={0.5} stopColor="#fcd966" />
        <stop offset={1} stopColor="#fccd34" />
      </linearGradient>
      <linearGradient
        xlinkHref="#falling-stars_svg__a"
        id="falling-stars_svg__f"
        x1={294}
        x2={330}
        y1={112.8}
        y2={175.2}
      />
      <linearGradient
        xlinkHref="#falling-stars_svg__a"
        id="falling-stars_svg__g"
        x1={356.3}
        x2={387.7}
        y1={194.8}
        y2={249.2}
      />
      <clipPath id="falling-stars_svg__c">
        <path fill="none" d="M512 27.5 240 189.1l16 48 40 32 216-96V27.5z" />
      </clipPath>
      <symbol id="falling-stars_svg__h" viewBox="0 0 270 270">
        <path
          fill="url(#falling-stars_svg__b)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2 130.5 130.5 0 0 1 122.5 3 133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-15 135 135; 9 135 135; -15 135 135"
          />
        </path>
      </symbol>
    </defs>
    <path
      fill="url(#falling-stars_svg__f)"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m282.8 162.8 25-6.4a1.8 1.8 0 0 1 1.7.5l18.3 18a1.8 1.8 0 0 0 3-1.7l-6.4-25a1.8 1.8 0 0 1 .5-1.7l18-18.4a1.8 1.8 0 0 0-1.8-3l-24.9 6.5a1.8 1.8 0 0 1-1.7-.5l-18.4-18a1.8 1.8 0 0 0-3 1.7l6.5 25a1.8 1.8 0 0 1-.5 1.7l-18 18.3a1.8 1.8 0 0 0 1.7 3Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-15 312 144; 15 312 144; -15 312 144"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        values="1; .75; 1; .75; 1; .75; 1"
      />
    </path>
    <path
      fill="url(#falling-stars_svg__g)"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m337.3 223.7 24.8 7a1.8 1.8 0 0 1 1.3 1.2l6.9 24.8a1.8 1.8 0 0 0 3.4 0l7-24.8a1.8 1.8 0 0 1 1.2-1.3l24.8-6.9a1.8 1.8 0 0 0 0-3.4l-24.8-7a1.8 1.8 0 0 1-1.3-1.2l-6.9-24.8a1.8 1.8 0 0 0-3.4 0l-7 24.8a1.8 1.8 0 0 1-1.2 1.3l-24.8 6.9a1.8 1.8 0 0 0 0 3.4Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-.67s"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-15 372 222; 15 372 222; -15 372 222"
      />
      <animate
        attributeName="opacity"
        begin="-.67s"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        values="1; .75; 1; .75; 1; .75; 1"
      />
    </path>
    <use
      xlinkHref="#falling-stars_svg__h"
      width={270}
      height={270}
      transform="translate(121 121)"
    />
  </svg>
);
export default SvgFallingStars;