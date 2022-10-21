import * as React from "react";
const SvgPressureHighAlt = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="pressure-high-alt_svg__a"
        x1={209}
        x2={303}
        y1={174.5}
        y2={337.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path
      fill="url(#pressure-high-alt_svg__a)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M285 239.2V182h31v148h-31v-63.4h-58V330h-31V182h31v57.2Z"
    />
  </svg>
);
export default SvgPressureHighAlt;
