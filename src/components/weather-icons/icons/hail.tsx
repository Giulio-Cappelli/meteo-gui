import * as React from "react";
const SvgHail = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="hail_svg__b"
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
        id="hail_svg__a"
        x1={6.5}
        x2={18.5}
        y1={2.1}
        y2={22.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        xlinkHref="#hail_svg__a"
        id="hail_svg__e"
        x1={62.5}
        x2={74.5}
        y1={2.1}
        y2={22.9}
      />
      <linearGradient
        xlinkHref="#hail_svg__a"
        id="hail_svg__h"
        x1={118.5}
        x2={130.5}
        y1={2.1}
        y2={22.9}
      />
      <symbol id="hail_svg__k" viewBox="0 0 350 222">
        <path
          fill="url(#hail_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#hail_svg__k"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#hail_svg__l"
      width={137}
      height={25}
      transform="translate(187.5 349.5)"
    />
  </svg>
);
export default SvgHail;
