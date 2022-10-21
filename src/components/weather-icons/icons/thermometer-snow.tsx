import * as React from "react";
const SvgThermometerSnow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="thermometer-snow_svg__a"
        x1={-7.2}
        x2={116.4}
        y1={36.3}
        y2={250.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#515a69" stopOpacity={0.1} />
        <stop offset={0.5} stopColor="#6b7280" stopOpacity={0.1} />
        <stop offset={1} stopColor="#384354" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="thermometer-snow_svg__b"
        x1={-8.7}
        x2={117.9}
        y1={33.7}
        y2={253}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="thermometer-snow_svg__f"
        x1={270}
        x2={358}
        y1={129.8}
        y2={282.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <symbol id="thermometer-snow_svg__c" viewBox="0 0 72 168">
        <circle cx={36} cy={132} r={36} fill="#ef4444" />
        <path
          fill="none"
          stroke="#ef4444"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M36 12v120"
        >
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            dur="1s"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
            type="translate"
            values="0 0; 0 18; 0 0"
          />
        </path>
      </symbol>
      <symbol id="thermometer-snow_svg__d" viewBox="0 0 118 278">
        <path
          fill="url(#thermometer-snow_svg__a)"
          stroke="url(#thermometer-snow_svg__b)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"
        />
      </symbol>
      <symbol id="thermometer-snow_svg__g" viewBox="0 0 118 278">
        <use
          xlinkHref="#thermometer-snow_svg__c"
          width={72}
          height={168}
          transform="translate(23 87)"
        />
        <use xlinkHref="#thermometer-snow_svg__d" width={118} height={278} />
      </symbol>
      <clipPath id="thermometer-snow_svg__e">
        <path
          fill="none"
          d="M256 392c31 0 56-25.4 56-56.8a57 57 0 0 0-24-46.6V152.5a32.2 32.2 0 0 0-32-32.5V79.7h167.2V392Zm4-192h28m-28-32h28m-28 64h28"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#thermometer-snow_svg__e)">
      <path
        fill="url(#thermometer-snow_svg__f)"
        stroke="#72b9d5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m393.7 233-23.5-13.6a57.8 57.8 0 0 0 0-26.7l23.5-13.7a16.5 16.5 0 1 0-16.5-28.6L353.7 164a56 56 0 0 0-23.2-13.3v-27.2a16.5 16.5 0 0 0-33 0v27.2a57.8 57.8 0 0 0-23.2 13.4l-23.5-13.6a16.5 16.5 0 1 0-16.5 28.5l23.5 13.6a57.8 57.8 0 0 0 0 26.7L234.4 233a16.5 16.5 0 1 0 16.5 28.6l23.5-13.6a55.3 55.3 0 0 0 23.2 13.3v27.2a16.5 16.5 0 0 0 33 0v-27.3a57.7 57.7 0 0 0 23.1-13.3l23.6 13.6a16.5 16.5 0 1 0 16.5-28.5Zm-92-5.5a24.8 24.8 0 1 1 33.8-9 24.8 24.8 0 0 1-33.9 9Z"
      >
        <animateTransform
          attributeName="transform"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="scale"
          values="1 1; .9 .9; 1 1; .9 .9; 1 1"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="translate"
          values="0 0; 31.4 20.6; 0 0; 31.4 20.6; 0 0"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-6 314 206; 6 314 206; -6 314 206"
        />
      </path>
    </g>
    <use
      xlinkHref="#thermometer-snow_svg__g"
      width={118}
      height={278}
      transform="translate(197 117)"
    />
  </svg>
);
export default SvgThermometerSnow;
