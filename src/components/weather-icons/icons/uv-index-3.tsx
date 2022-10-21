import * as React from "react";
const SvgUvIndex3 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="uv-index-3_svg__a"
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
      <clipPath id="uv-index-3_svg__b">
        <path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z" />
      </clipPath>
      <symbol id="uv-index-3_svg__c" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#uv-index-3_svg__a)"
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
    <g clipPath="url(#uv-index-3_svg__b)">
      <use
        xlinkHref="#uv-index-3_svg__c"
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
    <rect width={144} height={144} x={280} y={280} fill="#ffb800" rx={48} />
    <path
      fill="#fff"
      d="M365.5 349.2a17.8 17.8 0 0 1 10.8 5.7 16.4 16.4 0 0 1 3.8 11.2 20 20 0 0 1-7.2 15.7q-7.3 6.2-20.3 6.2-13.6 0-21-6.7t-7.8-18.6h16.5q.6 11.7 11.7 11.7a11.6 11.6 0 0 0 7.7-2.4 8.1 8.1 0 0 0 2.8-6.5 7.5 7.5 0 0 0-3-6.5 14 14 0 0 0-8.4-2.2h-4.9v-12h5.2c3 0 5.3-.6 7-2a7 7 0 0 0 2.4-5.7 7.2 7.2 0 0 0-2.4-5.8c-1.7-1.4-4-2-7-2s-5.2.7-6.8 2.1-2.4 3.9-2.7 7.2H326q1-22.6 26-22.6 11.8 0 18.5 5.2a16.1 16.1 0 0 1 6.6 13.3 14.9 14.9 0 0 1-3 9.3 15.2 15.2 0 0 1-8.6 5.4Z"
    />
  </svg>
);
export default SvgUvIndex3;
