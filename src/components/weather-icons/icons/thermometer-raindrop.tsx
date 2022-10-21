import * as React from "react";
const SvgThermometerRaindrop = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <symbol id="thermometer-raindrop_svg__g" viewBox="0 0 164 245.6">
        <path
          fill="url(#thermometer-raindrop_svg__a)"
          stroke="#2885c7"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
        />
      </symbol>
      <symbol id="thermometer-raindrop_svg__d" viewBox="0 0 72 168">
        <circle cx={36} cy={132} r={36} fill="#ef4444" />
        <path
          fill="none"
          stroke="#ef4444"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M36 12v120"
        >
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            dur="1s"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
            type="translate"
            values="0 0; 0 18; 0 0"
          />
        </path>
      </symbol>
      <symbol id="thermometer-raindrop_svg__e" viewBox="0 0 118 278">
        <path
          fill="url(#thermometer-raindrop_svg__b)"
          stroke="url(#thermometer-raindrop_svg__c)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"
        />
      </symbol>
      <symbol id="thermometer-raindrop_svg__h" viewBox="0 0 118 278">
        <use
          xlinkHref="#thermometer-raindrop_svg__d"
          width={72}
          height={168}
          transform="translate(23 87)"
        />
        <use
          xlinkHref="#thermometer-raindrop_svg__e"
          width={118}
          height={278}
        />
      </symbol>
      <linearGradient
        id="thermometer-raindrop_svg__a"
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
        id="thermometer-raindrop_svg__b"
        x1={-7.2}
        x2={116.4}
        y1={36.3}
        y2={250.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#515a69" stopOpacity={0.1} />
        <stop offset={0.5} stopColor="#6b7280" stopOpacity={0.1} />
        <stop offset={1} stopColor="#384354" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="thermometer-raindrop_svg__c"
        x1={-8.7}
        x2={117.9}
        y1={33.7}
        y2={253}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <clipPath id="thermometer-raindrop_svg__f">
        <path
          fill="none"
          d="M334 392c-31 0-56-25.4-56-56.8a57 57 0 0 1 24-46.6V152.5a32.2 32.2 0 0 1 32-32.5H167.3v272Zm4-192h28m-28-32h28m-28 64h28"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#thermometer-raindrop_svg__f)">
      <use
        xlinkHref="#thermometer-raindrop_svg__g"
        width={164}
        height={245.6}
        transform="translate(173.93 133.01)"
      />
    </g>
    <use
      xlinkHref="#thermometer-raindrop_svg__h"
      width={118}
      height={278}
      transform="translate(275 117)"
    />
  </svg>
);
export default SvgThermometerRaindrop;
