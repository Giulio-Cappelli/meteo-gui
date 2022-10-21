import * as React from "react";
const SvgFogDay = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="fog-day_svg__a"
        x1={96}
        x2={168}
        y1={-2.4}
        y2={122.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#fog-day_svg__a"
        id="fog-day_svg__c"
        x2={168}
        y1={-50.4}
        y2={74.3}
      />
      <linearGradient
        id="fog-day_svg__b"
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
      <symbol id="fog-day_svg__e" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#fog-day_svg__b)"
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
      <symbol id="fog-day_svg__f" overflow="visible" viewBox="0 0 264 72">
        <path
          fill="none"
          stroke="url(#fog-day_svg__a)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M12 60h240"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-24 0; 24 0; -24 0"
          />
        </path>
        <path
          fill="none"
          stroke="url(#fog-day_svg__c)"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M12 12h240"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="24 0; -24 0; 24 0"
          />
        </path>
      </symbol>
      <clipPath id="fog-day_svg__d">
        <path fill="none" d="M0 0h512v306H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#fog-day_svg__d)">
      <use
        xlinkHref="#fog-day_svg__e"
        width={384}
        height={384}
        transform="translate(64 100)"
      />
    </g>
    <use
      xlinkHref="#fog-day_svg__f"
      width={264}
      height={72}
      transform="translate(124 336)"
    />
  </svg>
);
export default SvgFogDay;
