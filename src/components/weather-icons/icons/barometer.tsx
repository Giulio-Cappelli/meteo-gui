import * as React from "react";
const SvgBarometer = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="barometer_svg__a"
        x1={184}
        x2={328}
        y1={131.3}
        y2={380.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6b7280" />
        <stop offset={0.5} stopColor="#6b7280" />
        <stop offset={1} stopColor="#374151" />
      </linearGradient>
    </defs>
    <circle
      cx={256}
      cy={256}
      r={144}
      fill="url(#barometer_svg__a)"
      stroke="#e5e7eb"
      strokeMiterlimit={10}
      strokeWidth={12}
    />
    <path
      fill="none"
      stroke="#9ca3af"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M256 200v-48m108 104h-48m-116 0h-48m180-68-24 24m-104 0-24-24m128 112 24 24m-152 0 24-24"
    />
    <circle cx={256} cy={256} r={24} fill="#ef4444" />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={12}
      d="M256 284V164"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        keyTimes="0; .17; .25; .42; .5; .67; 1"
        repeatCount="indefinite"
        type="rotate"
        values="-54 256 256; -15 256 256; -36 256 256; 36 256 256; 10 256 256; 115 256 256; -54 256 256"
      />
    </path>
  </svg>
);
export default SvgBarometer;