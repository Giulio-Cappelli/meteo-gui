import * as React from "react";
const SvgMoonset = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="moonset_svg__a"
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
      <clipPath id="moonset_svg__b">
        <path
          fill="none"
          d="M512 306H296a21.5 21.5 0 0 0-14 5.3L256 334l-26-22.7a21.5 21.5 0 0 0-14-5.3H0V0h512Z"
        />
      </clipPath>
      <symbol id="moonset_svg__c" overflow="visible" viewBox="0 0 270 270">
        <path
          fill="url(#moonset_svg__a)"
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
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={18}
      d="M128 332h88l40 36 40-36h88"
    />
    <g clipPath="url(#moonset_svg__b)">
      <use
        xlinkHref="#moonset_svg__c"
        width={270}
        height={270}
        transform="translate(121 121)"
      />
    </g>
  </svg>
);
export default SvgMoonset;
