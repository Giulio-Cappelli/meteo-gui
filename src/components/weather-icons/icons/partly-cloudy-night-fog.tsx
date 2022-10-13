import * as React from "react";
const SvgPartlyCloudyNightFog = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="partly-cloudy-night-fog_svg__b"
        x1={13.58}
        x2={24.15}
        y1={15.57}
        y2={33.87}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.45} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
        <animateTransform
          attributeName="gradientTransform"
          dur="45s"
          repeatCount="indefinite"
          type="rotate"
          values="360 19 24; 0 19 24"
        />
      </linearGradient>
      <linearGradient
        id="partly-cloudy-night-fog_svg__c"
        x1={22.56}
        x2={39.2}
        y1={21.96}
        y2={50.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.45} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="partly-cloudy-night-fog_svg__a"
        x1={27.5}
        x2={36.5}
        y1={50.21}
        y2={65.79}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="partly-cloudy-night-fog_svg__d"
        y1={44.21}
        y2={59.79}
        xlinkHref="#partly-cloudy-night-fog_svg__a"
      />
    </defs>
    <path
      fill="url(#partly-cloudy-night-fog_svg__b)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M29.33 26.68a10.61 10.61 0 0 1-10.68-10.54A10.5 10.5 0 0 1 19 13.5a10.54 10.54 0 1 0 11.5 13.11 11.48 11.48 0 0 1-1.17.07z"
    >
      <animateTransform
        attributeName="transform"
        dur="10s"
        repeatCount="indefinite"
        type="rotate"
        values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"
      />
    </path>
    <path
      fill="url(#partly-cloudy-night-fog_svg__c)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
    />
    <path
      fill="none"
      stroke="url(#partly-cloudy-night-fog_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M17 58h30"
    >
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#partly-cloudy-night-fog_svg__d)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M17 52h30"
    >
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </path>
  </svg>
);
export default SvgPartlyCloudyNightFog;
