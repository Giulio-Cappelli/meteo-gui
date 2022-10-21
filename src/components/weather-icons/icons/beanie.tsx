import * as React from "react";
const SvgBeanie = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="beanie_svg__b"
        x1={215.6}
        x2={285.3}
        y1={215.1}
        y2={335.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <linearGradient
        id="beanie_svg__a"
        x1={222.2}
        x2={289.8}
        y1={276.1}
        y2={393.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        xlinkHref="#beanie_svg__a"
        id="beanie_svg__c"
        x1={245}
        x2={267}
        y1={151.6}
        y2={189.7}
      />
    </defs>
    <path
      fill="url(#beanie_svg__b)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M256 204.7a83 83 0 0 1 83 83v17H173v-17a83 83 0 0 1 83-83Z"
    />
    <path
      fill="url(#beanie_svg__a)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M160 317.5v34.4c0 6.3 7.1 11.4 16 11.4h160c8.9 0 16-5.1 16-11.4v-34.4c0-6.3-7.1-11.4-16-11.4H176c-8.9 0-16 5-16 11.4Z"
    />
    <circle
      cx={256}
      cy={170.7}
      r={22}
      fill="url(#beanie_svg__c)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <animateTransform
        id="beanie_svg__d"
        fill="freeze"
        additive="sum"
        attributeName="transform"
        begin="0s; d.end+2.58s"
        calcMode="spline"
        dur=".42s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        keyTimes="0; .4; .8; 1"
        type="translate"
        values="0 0; 0 -9; 0 3; 0 0"
      />
      <animateTransform
        id="beanie_svg__e"
        fill="freeze"
        additive="sum"
        attributeName="transform"
        begin="1s; e.end+2.25s"
        calcMode="spline"
        dur=".75s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        keyTimes="0; .22; .44; .67; .89; 1"
        type="rotate"
        values="0 256 256; -15 256 256; 9 256 256; -9 256 256; 6 256 256; 0 256 256"
      />
    </circle>
  </svg>
);
export default SvgBeanie;
