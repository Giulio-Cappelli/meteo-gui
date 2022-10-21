import * as React from "react";
const SvgThunderstormsNight = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <symbol id="thunderstorms-night_svg__c" viewBox="0 0 172 172">
        <path
          fill="url(#thunderstorms-night_svg__a)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M160.6 107.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 78 2 84.7 84.7 0 0 0 2 85.7 84.8 84.8 0 0 0 87.4 170a85.2 85.2 0 0 0 82.6-63.1 88 88 0 0 1-9.4.5Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-15 86 86; 9 86 86; -15 86 86"
          />
        </path>
      </symbol>
      <symbol id="thunderstorms-night_svg__d" viewBox="0 0 350 222">
        <path
          fill="url(#thunderstorms-night_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="thunderstorms-night_svg__g" viewBox="0 0 351 246">
        <use xlinkHref="#thunderstorms-night_svg__c" width={172} height={172} />
        <use
          xlinkHref="#thunderstorms-night_svg__d"
          width={350}
          height={222}
          transform="translate(1 24)"
        />
      </symbol>
      <symbol id="thunderstorms-night_svg__h" viewBox="0 0 102.7 186.8">
        <path
          fill="url(#thunderstorms-night_svg__e)"
          stroke="#f6a823"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z"
        >
          <animate
            id="thunderstorms-night_svg__f"
            attributeName="opacity"
            begin="0s; f.end+.67s"
            dur="1.33s"
            keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
            values="1; 1; 0; 1; 0; 1; 0; 1"
          />
        </path>
      </symbol>
      <linearGradient
        id="thunderstorms-night_svg__b"
        x1={99.5}
        x2={232.6}
        y1={30.7}
        y2={261.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="thunderstorms-night_svg__e"
        x1={8.7}
        x2={80.9}
        y1={17.1}
        y2={142.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7b23b" />
        <stop offset={0.5} stopColor="#f7b23b" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="thunderstorms-night_svg__a"
        x1={34.7}
        x2={119.2}
        y1={18.6}
        y2={165}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
    </defs>
    <use
      xlinkHref="#thunderstorms-night_svg__g"
      width={351}
      height={246}
      transform="translate(80 121)"
    />
    <use
      xlinkHref="#thunderstorms-night_svg__h"
      width={102.7}
      height={186.7}
      transform="translate(205.23 291)"
    />
  </svg>
);
export default SvgThunderstormsNight;
