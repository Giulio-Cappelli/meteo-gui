import * as React from "react";
const SvgSolarEclipse = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="solar-eclipse_svg__b"
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
        id="solar-eclipse_svg__a"
        x1={150}
        x2={234}
        y1={119.2}
        y2={264.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="solar-eclipse_svg__d" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#solar-eclipse_svg__a)"
          stroke="#f8af18"
          strokeMiterlimit={10}
          strokeWidth={6}
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 192 192; 45 192 192"
          />
        </path>
      </symbol>
      <symbol id="solar-eclipse_svg__e" viewBox="0 0 270 270">
        <path
          fill="url(#solar-eclipse_svg__b)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2 130.5 130.5 0 0 1 122.5 3 133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"
        />
      </symbol>
      <clipPath id="solar-eclipse_svg__c">
        <path fill="none" d="M244 138V66h224v240h-72l-72-8-80-80v-80z" />
      </clipPath>
    </defs>
    <g clipPath="url(#solar-eclipse_svg__c)">
      <use
        xlinkHref="#solar-eclipse_svg__d"
        width={384}
        height={384}
        transform="translate(70 72)"
      />
    </g>
    <use
      xlinkHref="#solar-eclipse_svg__e"
      width={270}
      height={270}
      transform="translate(121 121)"
    />
  </svg>
);
export default SvgSolarEclipse;
