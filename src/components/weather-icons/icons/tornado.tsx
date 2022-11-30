import * as React from "react";
const SvgTornado = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="tornado_svg__a"
        x1={220}
        x2={292}
        y1={97.7}
        y2={222.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#tornado_svg__a"
        id="tornado_svg__b"
        x1={224}
        x2={288}
        y1={152.6}
        y2={263.4}
      />
      <linearGradient
        xlinkHref="#tornado_svg__a"
        id="tornado_svg__c"
        x1={229}
        x2={283}
        y1={209.2}
        y2={302.8}
      />
      <linearGradient
        xlinkHref="#tornado_svg__a"
        id="tornado_svg__d"
        x1={234}
        x2={278}
        y1={265.9}
        y2={342.1}
      />
      <linearGradient
        xlinkHref="#tornado_svg__a"
        id="tornado_svg__e"
        x1={242}
        x2={270}
        y1={327.8}
        y2={376.3}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#tornado_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M136 160h240"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-12 0; 12 0; -12 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#tornado_svg__b)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M152 208h208"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-24 0; 24 0; -24 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#tornado_svg__c)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M172 256h168"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-36 0; 36 0; -36 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#tornado_svg__d)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M192 304h128"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-48 0; 48 0; -48 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#tornado_svg__e)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M224 352h64"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-60 0; 60 0; -60 0"
      />
    </path>
  </svg>
);
export default SvgTornado;