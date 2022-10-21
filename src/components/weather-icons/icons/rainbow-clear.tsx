import * as React from "react";
const SvgRainbowClear = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="rainbow-clear_svg__b"
        x1={54}
        x2={125.8}
        y1={16.9}
        y2={141.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="rainbow-clear_svg__a"
        x1={78}
        x2={118}
        y1={63.4}
        y2={132.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="rainbow-clear_svg__e"
        x1={160.3}
        x2={278.9}
        y1={168.9}
        y2={374.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <linearGradient
        xlinkHref="#rainbow-clear_svg__a"
        id="rainbow-clear_svg__f"
        x1={171}
        x2={271.5}
        y1={190.5}
        y2={364.6}
      />
      <linearGradient
        id="rainbow-clear_svg__g"
        x1={118}
        x2={342}
        y1={256}
        y2={256}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#51cf66" />
        <stop offset={0.5} stopColor="#51cf66" />
        <stop offset={1} stopColor="#37b24d" />
      </linearGradient>
      <symbol id="rainbow-clear_svg__d" viewBox="0 0 196 196">
        <circle
          cx={98}
          cy={98}
          r={40}
          fill="url(#rainbow-clear_svg__a)"
          stroke="#f8af18"
          strokeMiterlimit={10}
          strokeWidth={4}
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51 33 33m130.1 130.1-18-18M6 98h25.4M190 98h-25.4"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 98 98; 45 98 98"
          />
        </path>
      </symbol>
      <symbol
        id="rainbow-clear_svg__h"
        overflow="visible"
        viewBox="0 0 189.5 120.5"
      >
        <path
          fill="url(#rainbow-clear_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m157.3 58-1.4.1a45.8 45.8 0 0 0 1.4-10.8 45.3 45.3 0 0 0-83.8-23.8 30.1 30.1 0 0 0-45.6 26 30.5 30.5 0 0 0 .4 4.9 32.3 32.3 0 0 0 6 64h123a30.2 30.2 0 0 0 0-60.3Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-12 0; 12 0; -12 0"
          />
        </path>
      </symbol>
      <clipPath id="rainbow-clear_svg__c">
        <path fill="none" d="M238 59.1H36V268h52.4l67.4-82.6 82.2-19.2V59.1z" />
      </clipPath>
    </defs>
    <g clipPath="url(#rainbow-clear_svg__c)">
      <use
        xlinkHref="#rainbow-clear_svg__d"
        width={196}
        height={196}
        transform="translate(48 78)"
      />
    </g>
    <path
      fill="none"
      stroke="url(#rainbow-clear_svg__e)"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M82 310c0-79.5 66.3-144 148-144s148 64.5 148 144"
    />
    <path
      fill="none"
      stroke="url(#rainbow-clear_svg__f)"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M106 310c0-66.3 55.5-120 124-120s124 53.7 124 120"
    />
    <path
      fill="none"
      stroke="url(#rainbow-clear_svg__g)"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M130 310c0-53 44.8-96 100-96s100 43 100 96"
    />
    <use
      xlinkHref="#rainbow-clear_svg__h"
      width={189.5}
      height={120.5}
      transform="translate(239.94 223.59)"
    />
  </svg>
);
export default SvgRainbowClear;
