import * as React from "react";
const SvgDrizzle = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="drizzle_svg__b"
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
        id="drizzle_svg__a"
        x1={1314.8}
        x2={1324.2}
        y1={-739.9}
        y2={-715.3}
        gradientTransform="rotate(-9 7682.04 6929.539)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0b65ed" />
        <stop offset={0.5} stopColor="#0a5ad4" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#drizzle_svg__a"
        id="drizzle_svg__f"
        x1={1370.1}
        x2={1379.5}
        y1={-731.1}
        y2={-706.5}
      />
      <linearGradient
        xlinkHref="#drizzle_svg__a"
        id="drizzle_svg__g"
        x1={1425.4}
        x2={1434.9}
        y1={-722.4}
        y2={-697.8}
      />
      <symbol id="drizzle_svg__c" viewBox="0 0 350 222">
        <path
          fill="url(#drizzle_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#drizzle_svg__c"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
  </svg>
);
export default SvgDrizzle;
