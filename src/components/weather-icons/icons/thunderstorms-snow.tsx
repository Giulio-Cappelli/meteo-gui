import * as React from "react";
const SvgThunderstormsSnow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="thunderstorms-snow_svg__b"
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
        id="thunderstorms-snow_svg__k"
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
        id="thunderstorms-snow_svg__a"
        x1={11.4}
        x2={32.8}
        y1={5.9}
        y2={43.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        xlinkHref="#thunderstorms-snow_svg__a"
        id="thunderstorms-snow_svg__e"
        x1={67.4}
        x2={88.8}
        y1={5.9}
        y2={43.1}
      />
      <linearGradient
        xlinkHref="#thunderstorms-snow_svg__a"
        id="thunderstorms-snow_svg__h"
        x1={123.4}
        x2={144.8}
        y1={5.9}
        y2={43.1}
      />
      <symbol id="thunderstorms-snow_svg__m" viewBox="0 0 350 222">
        <path
          fill="url(#thunderstorms-snow_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol
        id="thunderstorms-snow_svg__n"
        overflow="visible"
        viewBox="0 0 156.2 49"
      >
        <g>
          <animateTransform
            id="thunderstorms-snow_svg__d"
            additive="sum"
            attributeName="transform"
            begin="0s; d.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <animateTransform
            id="thunderstorms-snow_svg__g"
            additive="sum"
            attributeName="transform"
            begin="-.83s; g.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <animateTransform
            id="thunderstorms-snow_svg__j"
            additive="sum"
            attributeName="transform"
            begin=".83s; j.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
      </symbol>
      <symbol id="thunderstorms-snow_svg__o" viewBox="0 0 102.7 186.8">
        <path
          fill="url(#thunderstorms-snow_svg__k)"
          stroke="#f6a823"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z"
        >
          <animate
            id="thunderstorms-snow_svg__l"
            attributeName="opacity"
            begin="0s; l.end+.67s"
            dur="1.33s"
            keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
            values="1; 1; 0; 1; 0; 1; 0; 1"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#thunderstorms-snow_svg__m"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#thunderstorms-snow_svg__n"
      width={156.2}
      height={49}
      transform="translate(177.9 337.5)"
    />
    <use
      xlinkHref="#thunderstorms-snow_svg__o"
      width={102.7}
      height={186.7}
      transform="translate(205.23 291)"
    />
  </svg>
);
export default SvgThunderstormsSnow;
