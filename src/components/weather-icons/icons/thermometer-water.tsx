import * as React from "react";
const SvgThermometerWater = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="thermometer-water_svg__a"
        x1={79.5}
        x2={165.8}
        y1={-22.3}
        y2={127.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.5} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
      <linearGradient
        id="thermometer-water_svg__d"
        x1={324.8}
        x2={413}
        y1={186.8}
        y2={339.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#515a69" stopOpacity={0.1} />
        <stop offset={0.5} stopColor="#6b7280" stopOpacity={0.1} />
        <stop offset={1} stopColor="#384354" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="thermometer-water_svg__e"
        x1={323.7}
        x2={414}
        y1={184.9}
        y2={341.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <clipPath id="thermometer-water_svg__b">
        <path
          fill="none"
          d="M372 357c-22 0-40-18.1-40-40.5a40.6 40.6 0 0 1 17.1-33.3v-97A23 23 0 0 1 372 163H119.2v194Zm2.9-137h20m-20-22.8h20m-20 45.7h20"
        />
      </clipPath>
      <symbol id="thermometer-water_svg__c" viewBox="0 0 244 92">
        <path
          fill="url(#thermometer-water_svg__a)"
          stroke="#2885c7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M242 24.6h-8c-11 0-20.9-11.6-26-21.4a2.3 2.3 0 0 0-4 0c-5.2 9.8-15.1 21.4-26 21.4S157.1 13 152 3.2a2.3 2.3 0 0 0-4 0c-5.2 9.8-15.1 21.4-26 21.4S101.1 13 96 3.2a2.3 2.3 0 0 0-4 0C86.7 13 77 24.6 66 24.6S45 13 40 3.2a2.3 2.3 0 0 0-4 0C30.7 13 21 24.6 10 24.6H2v49.1A16.1 16.1 0 0 0 18 90h208a16.1 16.1 0 0 0 16-16.3Z"
        >
          <animate
            attributeName="d"
            calcMode="spline"
            dur="3s"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
            values="M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 59 A 16.14 16.14 0 0 0 18 75 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            calcMode="spline"
            dur="3s"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
            type="translate"
            values="0 0; 0 15; 0 0"
          />
        </path>
      </symbol>
    </defs>
    <g clipPath="url(#thermometer-water_svg__b)">
      <use
        xlinkHref="#thermometer-water_svg__c"
        width={244}
        height={92}
        transform="translate(134 242)"
      />
    </g>
    <circle cx={372} cy={317.1} fill="#ef4444" r={25.7} />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={17.1}
      d="M372 231.5V317"
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
    <path
      fill="url(#thermometer-water_svg__d)"
      stroke="url(#thermometer-water_svg__e)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.3}
      d="M412 316.5c0 22.3-18 40.5-40 40.5s-40-18.1-40-40.5a40.6 40.6 0 0 1 17.1-33.3v-97a22.9 22.9 0 1 1 45.8 0v97a40.6 40.6 0 0 1 17.1 33.3ZM374.9 220h20m-20-22.9h20m-20 45.7h20"
    />
  </svg>
);
export default SvgThermometerWater;
