import * as React from "react";
const SvgUvIndex2 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="uv-index-2_svg__a"
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
      <clipPath id="uv-index-2_svg__b">
        <path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z" />
      </clipPath>
      <symbol id="uv-index-2_svg__c" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#uv-index-2_svg__a)"
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
    <g clipPath="url(#uv-index-2_svg__b)">
      <use
        xlinkHref="#uv-index-2_svg__c"
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
    <rect width={144} height={144} x={280} y={280} fill="#91c700" rx={48} />
    <path
      fill="#fff"
      d="M379.9 388h-55.7q0-9.4 4-15.7 4-6.1 14.8-13.5l11-7.8a22.4 22.4 0 0 0 5.9-5.5 10.2 10.2 0 0 0 1.7-5.8 8.7 8.7 0 0 0-2.6-6.7 9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.5h-17v-2.2q0-12.1 7.2-19t20-6.8q12.5 0 19.8 6t7.4 16.7a22 22 0 0 1-3.5 12.2q-3.5 5.5-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.9h31Z"
    />
  </svg>
);
export default SvgUvIndex2;