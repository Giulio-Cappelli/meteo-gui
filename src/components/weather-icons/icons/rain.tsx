import * as React from "react";
const SvgRain = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="rain_svg__b"
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
        id="rain_svg__a"
        x1={1381.3}
        x2={1399.5}
        y1={-1144.7}
        y2={-1097.4}
        gradientTransform="rotate(-9 8002.567 8233.063)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0b65ed" />
        <stop offset={0.5} stopColor="#0a5ad4" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#rain_svg__a"
        id="rain_svg__e"
        x1={1436.7}
        x2={1454.9}
        y1={-1137}
        y2={-1089.7}
        gradientTransform="rotate(-9 8009.537 8233.037)"
      />
      <linearGradient
        xlinkHref="#rain_svg__a"
        id="rain_svg__h"
        x1={1492.1}
        x2={1510.3}
        y1={-1129.3}
        y2={-1082.1}
        gradientTransform="rotate(-9 8016.566 8233.078)"
      />
      <symbol id="rain_svg__k" viewBox="0 0 350 222">
        <path
          fill="url(#rain_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#rain_svg__k"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#rain_svg__l"
      width={129}
      height={57}
      transform="translate(191.5 343.5)"
    />
  </svg>
);
export default SvgRain;
