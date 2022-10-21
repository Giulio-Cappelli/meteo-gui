import * as React from "react";
const SvgWindOffshore = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="wind-offshore_svg__a"
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
        xlinkHref="#wind-offshore_svg__a"
        id="wind-offshore_svg__b"
        x1={31.4}
        x2={68.3}
        y1={37.6}
        y2={101.4}
      />
      <linearGradient
        id="wind-offshore_svg__c"
        x1={1203.2}
        x2={1274}
        y1={-755.7}
        y2={-633.1}
        gradientTransform="rotate(-8.1 7810.753 6580.212)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#875b34" />
        <stop offset={0.5} stopColor="#875b34" />
        <stop offset={1} stopColor="#624226" />
      </linearGradient>
      <linearGradient
        id="wind-offshore_svg__d"
        x1={1212}
        x2={1273.3}
        y1={-794.5}
        y2={-688.3}
        gradientTransform="rotate(-8.1 7810.753 6580.212)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#51cf66" />
        <stop offset={0.5} stopColor="#51cf66" />
        <stop offset={1} stopColor="#37b24d" />
      </linearGradient>
      <linearGradient
        id="wind-offshore_svg__e"
        x1={135.1}
        x2={210}
        y1={283.2}
        y2={412.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.5} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
      <linearGradient
        id="wind-offshore_svg__f"
        x1={266.8}
        x2={339.6}
        y1={293.6}
        y2={419.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="wind-offshore_svg__g" viewBox="0 0 138 96">
        <path
          fill="none"
          stroke="url(#wind-offshore_svg__a)"
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
          stroke="url(#wind-offshore_svg__b)"
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
      fill="url(#wind-offshore_svg__c)"
      stroke="#744e2d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M353.7 160.3c-1-6.9-3.2-12.2-5-12l-1.3.2c-1.7.3-2.4 6-1.6 12.8l17 135c.8 7.1 3 13 5 12.7l3.5-.5c1.8-.3 2.4-6.4 1.4-13.6Z"
    />
    <path
      fill="url(#wind-offshore_svg__d)"
      stroke="#40c057"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M403 153.2c-3.2-23.4-26-39.7-50.8-36.4a46 46 0 0 0-36.3 26.7h-2.2c-18.7 2.5-32 18.8-29.6 36.4a32.4 32.4 0 0 0 28.5 27.1 20.3 20.3 0 0 0-.7 8.7 22 22 0 0 0 25.3 18.3 23.4 23.4 0 0 0 14-7.3 34.7 34.7 0 0 0 28.3 8.8c18.6-2.5 31.9-18.7 29.5-36.3a30.8 30.8 0 0 0-11.4-20 41 41 0 0 0 5.3-26Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="3 366 200; -3 366 200; 3 366 200; -3 366 200; 3 366 200"
      />
    </path>
    <path
      fill="url(#wind-offshore_svg__f)"
      stroke="#f8af18"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M402.3 369.8v-66.4c0-12.3-8.9-22.4-19.8-22.4h-62.6c-49.2 0-94.2 31.4-116.4 81.1l-13.4 30h192.4c11 0 19.8-10 19.8-22.4Z"
    />
    <use
      xlinkHref="#wind-offshore_svg__g"
      width={138}
      height={96}
      transform="matrix(-1 0 0 1 237 146)"
    />
  </svg>
);
export default SvgWindOffshore;
