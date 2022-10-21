import * as React from "react";
const SvgUmbrellaWind = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="umbrella-wind_svg__a"
        x1={54.5}
        x2={89.2}
        y1={2.2}
        y2={62.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#umbrella-wind_svg__a"
        id="umbrella-wind_svg__b"
        x1={31.4}
        x2={68.3}
        y1={37.6}
        y2={101.4}
      />
      <linearGradient
        xlinkHref="#umbrella-wind_svg__a"
        id="umbrella-wind_svg__c"
        x1={-2197.1}
        x2={-2077}
        y1={5168.6}
        y2={5376.7}
        gradientTransform="rotate(45 5106 5660.004)"
      />
      <linearGradient
        id="umbrella-wind_svg__d"
        x1={-2191.4}
        x2={-2110.1}
        y1={5157.8}
        y2={5298.6}
        gradientTransform="rotate(45 5106 5660.004)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <symbol id="umbrella-wind_svg__e" viewBox="0 0 138 96">
        <path
          fill="none"
          stroke="url(#umbrella-wind_svg__a)"
          strokeDasharray={58}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 1274"
          />
        </path>
        <path
          fill="none"
          stroke="url(#umbrella-wind_svg__b)"
          strokeDasharray={43}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="6s"
            repeatCount="indefinite"
            values="0; 857"
          />
        </path>
      </symbol>
    </defs>
    <path
      fill="none"
      stroke="url(#umbrella-wind_svg__c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M304 355a24 24 0 0 1-48 0V133"
      transform="rotate(45 256 256)"
    />
    <g transform="rotate(45 256 256)">
      <path
        fill="url(#umbrella-wind_svg__d)"
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
    <use
      xlinkHref="#umbrella-wind_svg__e"
      width={138}
      height={96}
      transform="translate(62.5 201)"
    />
  </svg>
);
export default SvgUmbrellaWind;
