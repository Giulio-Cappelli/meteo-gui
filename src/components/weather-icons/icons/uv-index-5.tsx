import * as React from "react";
const SvgUvIndex5 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="uv-index-5_svg__a"
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
      <clipPath id="uv-index-5_svg__b">
        <path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z" />
      </clipPath>
      <symbol id="uv-index-5_svg__c" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#uv-index-5_svg__a)"
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
    <g clipPath="url(#uv-index-5_svg__b)">
      <use
        xlinkHref="#uv-index-5_svg__c"
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
      d="M351.8 388q-12 0-19.7-5.5t-9-15.7l17.6-1.4a9.9 9.9 0 0 0 3.8 6 12 12 0 0 0 7.2 2.2 11.6 11.6 0 0 0 8.5-3 10.5 10.5 0 0 0 3-8 10.4 10.4 0 0 0-3-7.8 11.6 11.6 0 0 0-8.5-3 12.6 12.6 0 0 0-9.7 4.3l-16.6-1.5 6.4-38.6H376v14.7h-30.9l-2.3 12 .3.2q5.6-4 14.2-4 10.7 0 17 6.2t6.6 17.1q0 11.8-7.8 18.8t-21.3 7Z"
    />
  </svg>
);
export default SvgUvIndex5;
