import * as React from "react";
const SvgGlove = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="glove_svg__a"
        x1={201.4}
        x2={287.6}
        y1={171.6}
        y2={320.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <linearGradient
        id="glove_svg__b"
        x1={227.2}
        x2={284.9}
        y1={282}
        y2={382}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
    </defs>
    <g>
      <path
        fill="url(#glove_svg__a)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M256 150a64.1 64.1 0 0 0-64.2 64v39.3l-19.4-11.2a16.1 16.1 0 0 0-22 5.9 16 16 0 0 0 6 21.9l34.7 20c.3 0 .5.2.7.3V302h128.5v-88a64.1 64.1 0 0 0-64.2-64Z"
      />
      <rect
        width={144.5}
        height={60}
        x={183.8}
        y={302}
        fill="url(#glove_svg__b)"
        stroke="#e6effc"
        strokeMiterlimit={10}
        strokeWidth={3.5}
        rx={12}
      />
      <animateTransform
        id="glove_svg__c"
        additive="sum"
        attributeName="transform"
        begin="0s; c.end+1.75s"
        calcMode="spline"
        dur="1.25s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        type="rotate"
        values="0 256 332; 0 256 332; -15 256 332; 15 256 332; -9 256 332; 9 256 332; -6 256 332; 3 256 332; 0 256 332"
      />
    </g>
  </svg>
);
export default SvgGlove;
