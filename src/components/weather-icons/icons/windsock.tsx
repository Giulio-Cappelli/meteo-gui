import * as React from "react";
const SvgWindsock = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="windsock_svg__b"
        x1={90}
        x2={206}
        y1={155.6}
        y2={356.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="windsock_svg__a"
        x1={179.4}
        x2={226.7}
        y1={142.4}
        y2={224.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <linearGradient
        xlinkHref="#windsock_svg__a"
        id="windsock_svg__c"
        x1={252.5}
        x2={291.9}
        y1={149.2}
        y2={217.5}
      />
      <linearGradient
        xlinkHref="#windsock_svg__a"
        id="windsock_svg__d"
        x1={325.6}
        x2={357.2}
        y1={156}
        y2={210.7}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#windsock_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={24}
      d="M148 376V136"
    />
    <path
      fill="url(#windsock_svg__a)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m191.4 137 28.8 4.3a6.4 6.4 0 0 1 5.4 6.3v73.7a6.4 6.4 0 0 1-5.4 6.3l-28.8 4.2a6.4 6.4 0 0 1-7.3-6.4v-82a6.4 6.4 0 0 1 7.3-6.3Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-6 99 184; 6 99 184; -6 99 184"
      />
    </path>
    <path
      fill="url(#windsock_svg__c)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m260.6 146.1 28.8 4.2a6.4 6.4 0 0 1 5.4 6.3v55.6a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-64a6.4 6.4 0 0 1 7.3-6.3Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-6 99 184; 6 99 184; -6 99 184"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="1.5s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 5 0; 0 0"
      />
    </path>
    <path
      fill="url(#windsock_svg__d)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m329.8 155.2 28.7 4.2a6.4 6.4 0 0 1 5.5 6.3v37.4a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-45.8a6.4 6.4 0 0 1 7.3-6.3Z"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-6 99 184; 6 99 184; -6 99 184"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="1.5s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 10 0; 0 0"
      />
    </path>
  </svg>
);
export default SvgWindsock;
