import * as React from "react";
const SvgHazeNight = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="haze-night_svg__a"
        x1={17.3}
        x2={89.3}
        y1={43.1}
        y2={167.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__c"
        x1={107.3}
        x2={179.3}
        y1={-8.8}
        y2={115.9}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__d"
        x1={174.8}
        x2={246.8}
        y1={-47.8}
        y2={76.9}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__e"
        x2={89.3}
        y1={-4.9}
        y2={119.8}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__f"
        x1={107.3}
        x2={179.3}
        y1={-56.9}
        y2={67.9}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__g"
        x1={174.8}
        x2={246.8}
        y1={-95.8}
        y2={28.9}
      />
      <linearGradient
        id="haze-night_svg__b"
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
      <symbol id="haze-night_svg__i" viewBox="0 0 270 270">
        <path
          fill="url(#haze-night_svg__b)"
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
      <symbol id="haze-night_svg__j" overflow="visible" viewBox="0 0 264 72">
        <g>
          <path
            fill="none"
            stroke="url(#haze-night_svg__a)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M12 60h30"
          />
          <path
            fill="none"
            stroke="url(#haze-night_svg__c)"
            strokeDasharray="60 60"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M102 60h90"
          />
          <path
            fill="none"
            stroke="url(#haze-night_svg__d)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M222 60h30"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-24 0; 24 0; -24 0"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke="url(#haze-night_svg__e)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M12 12h30"
          />
          <path
            fill="none"
            stroke="url(#haze-night_svg__f)"
            strokeDasharray="60 60"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M102 12h90"
          />
          <path
            fill="none"
            stroke="url(#haze-night_svg__g)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M222 12h30"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="24 0; -24 0; 24 0"
          />
        </g>
      </symbol>
      <clipPath id="haze-night_svg__h">
        <path fill="none" d="M0 0h512v306H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#haze-night_svg__h)">
      <use
        xlinkHref="#haze-night_svg__i"
        width={270}
        height={270}
        transform="translate(121 121)"
      />
    </g>
    <use
      xlinkHref="#haze-night_svg__j"
      width={264}
      height={72}
      transform="translate(124 336)"
    />
  </svg>
);
export default SvgHazeNight;
