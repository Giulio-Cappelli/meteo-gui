import * as React from "react";
const SvgSleet = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="sleet_svg__c"
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
        id="sleet_svg__a"
        x1={1399.3}
        x2={1408.7}
        y1={-1137.3}
        y2={-1112.7}
        gradientTransform="rotate(-9 8016.182 8229.021)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0b65ed" />
        <stop offset={0.5} stopColor="#0a5ad4" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#sleet_svg__a"
        id="sleet_svg__o"
        x1={1454.6}
        x2={1464}
        y1={-1128.6}
        y2={-1104}
      />
      <linearGradient
        xlinkHref="#sleet_svg__a"
        id="sleet_svg__p"
        x1={1509.9}
        x2={1519.3}
        y1={-1119.8}
        y2={-1095.2}
      />
      <linearGradient
        id="sleet_svg__b"
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
        xlinkHref="#sleet_svg__b"
        id="sleet_svg__f"
        x1={67.4}
        x2={88.8}
        y1={5.9}
        y2={43.1}
      />
      <linearGradient
        xlinkHref="#sleet_svg__b"
        id="sleet_svg__i"
        x1={123.4}
        x2={144.8}
        y1={5.9}
        y2={43.1}
      />
      <symbol id="sleet_svg__s" viewBox="0 0 350 222">
        <path
          fill="url(#sleet_svg__c)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="sleet_svg__l" overflow="visible" viewBox="0 0 156.2 49">
        <g>
          <animateTransform
            id="sleet_svg__e"
            additive="sum"
            attributeName="transform"
            begin="0s; e.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <animateTransform
            id="sleet_svg__h"
            additive="sum"
            attributeName="transform"
            begin="-.83s; h.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <animateTransform
            id="sleet_svg__k"
            additive="sum"
            attributeName="transform"
            begin=".83s; k.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
      </symbol>
      <symbol id="sleet_svg__t" overflow="visible" viewBox="0 0 156.2 49">
        <use xlinkHref="#sleet_svg__l" width={156.2} height={49} />
      </symbol>
    </defs>
    <use
      xlinkHref="#sleet_svg__s"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#sleet_svg__t"
      width={156.2}
      height={49}
      transform="translate(177.9 337.5)"
    />
  </svg>
);
export default SvgSleet;
