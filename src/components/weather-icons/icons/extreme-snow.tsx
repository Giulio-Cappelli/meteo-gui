import * as React from "react";
const SvgExtremeSnow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="extreme-snow_svg__b"
        x1={52.7}
        x2={133.4}
        y1={9.6}
        y2={149.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9ca3af" />
        <stop offset={0.5} stopColor="#9ca3af" />
        <stop offset={1} stopColor="#6b7280" />
      </linearGradient>
      <linearGradient
        id="extreme-snow_svg__c"
        x1={99.5}
        x2={232.6}
        y1={30.7}
        y2={261.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6b7280" />
        <stop offset={0.5} stopColor="#6b7280" />
        <stop offset={1} stopColor="#4b5563" />
      </linearGradient>
      <linearGradient
        id="extreme-snow_svg__a"
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
        xlinkHref="#extreme-snow_svg__a"
        id="extreme-snow_svg__h"
        x1={67.4}
        x2={88.8}
        y1={5.9}
        y2={43.1}
      />
      <linearGradient
        xlinkHref="#extreme-snow_svg__a"
        id="extreme-snow_svg__k"
        x1={123.4}
        x2={144.8}
        y1={5.9}
        y2={43.1}
      />
      <symbol id="extreme-snow_svg__d" viewBox="0 0 200.3 126.1">
        <path
          fill="url(#extreme-snow_svg__b)"
          stroke="#848b98"
          strokeMiterlimit={10}
          d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9 32.4 32.4 0 0 0-48.5-33 48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"
        />
      </symbol>
      <symbol id="extreme-snow_svg__e" viewBox="0 0 350 222">
        <path
          fill="url(#extreme-snow_svg__c)"
          stroke="#5b6472"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="extreme-snow_svg__n" overflow="visible" viewBox="0 0 398 222">
        <use
          xlinkHref="#extreme-snow_svg__d"
          width={200.3}
          height={126.1}
          transform="translate(198 27)"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-9 0; 9 0; -9 0"
          />
        </use>
        <use xlinkHref="#extreme-snow_svg__e" width={350} height={222}>
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-18 0; 18 0; -18 0"
          />
        </use>
      </symbol>
      <symbol
        id="extreme-snow_svg__o"
        overflow="visible"
        viewBox="0 0 156.2 49"
      >
        <g>
          <animateTransform
            id="extreme-snow_svg__g"
            additive="sum"
            attributeName="transform"
            begin="0s; g.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <animateTransform
            id="extreme-snow_svg__j"
            additive="sum"
            attributeName="transform"
            begin="-.83s; j.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <animateTransform
            id="extreme-snow_svg__m"
            additive="sum"
            attributeName="transform"
            begin=".83s; m.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
      </symbol>
    </defs>
    <use
      xlinkHref="#extreme-snow_svg__n"
      width={398}
      height={222}
      transform="translate(68.84 145)"
    />
    <use
      xlinkHref="#extreme-snow_svg__o"
      width={156.2}
      height={49}
      transform="translate(177.9 337.5)"
    />
  </svg>
);
export default SvgExtremeSnow;