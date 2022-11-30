import * as React from "react";
const SvgUvIndex10 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="uv-index-10_svg__a"
        x1={150}
        x2={234}
        y1={119.2}
        y2={264.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <clipPath id="uv-index-10_svg__b">
        <path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z" />
      </clipPath>
      <symbol id="uv-index-10_svg__c" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#uv-index-10_svg__a)"
          stroke="#f8af18"
          strokeMiterlimit={10}
          strokeWidth={6}
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 192 192; 45 192 192"
          />
        </path>
      </symbol>
    </defs>
    <g clipPath="url(#uv-index-10_svg__b)">
      <use
        xlinkHref="#uv-index-10_svg__c"
        width={384}
        height={384}
        transform="translate(64 64)"
      />
      <path
        fill="none"
        stroke="#f8af18"
        strokeMiterlimit={10}
        strokeWidth={6}
        d="M254 338v-10a74 74 0 0 1 74-74h10"
      />
    </g>
    <rect width={144} height={144} x={280} y={280} fill="#ff3c00" rx={48} />
    <path
      fill="#fff"
      d="M334.4 388h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4 4.3-3.1 5.6-10.2l.2-.8h15.6Zm63.9-9.8q-8.2 9.8-21.9 9.8t-21.9-9.8q-8.1-9.7-8.1-26.4 0-16.5 8.1-26.1 8-9.7 21.9-9.7 13.7 0 21.9 9.7t8 26.1q0 16.6-8 26.4Zm-21.9-4.2q12.6 0 12.6-22t-12.6-22q-12.7 0-12.7 22t12.7 22Z"
    />
  </svg>
);
export default SvgUvIndex10;