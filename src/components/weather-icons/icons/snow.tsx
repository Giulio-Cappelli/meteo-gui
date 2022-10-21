import * as React from "react";
const SvgSnow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="snow_svg__b"
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
        id="snow_svg__a"
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
        xlinkHref="#snow_svg__a"
        id="snow_svg__e"
        x1={67.4}
        x2={88.8}
        y1={5.9}
        y2={43.1}
      />
      <linearGradient
        xlinkHref="#snow_svg__a"
        id="snow_svg__h"
        x1={123.4}
        x2={144.8}
        y1={5.9}
        y2={43.1}
      />
      <symbol id="snow_svg__k" viewBox="0 0 350 222">
        <path
          fill="url(#snow_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="snow_svg__l" overflow="visible" viewBox="0 0 156.2 49">
        <g>
          <animateTransform
            id="snow_svg__d"
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
            id="snow_svg__g"
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
            id="snow_svg__j"
            additive="sum"
            attributeName="transform"
            begin=".83s; j.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
      </symbol>
    </defs>
    <use
      xlinkHref="#snow_svg__k"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#snow_svg__l"
      width={156.2}
      height={49}
      transform="translate(177.9 337.5)"
    />
  </svg>
);
export default SvgSnow;
