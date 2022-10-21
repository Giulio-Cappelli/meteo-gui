import * as React from "react";
const SvgHazeDay = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="haze-day_svg__a"
        x1={17.3}
        x2={89.3}
        y1={43.1}
        y2={167.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#haze-day_svg__a"
        id="haze-day_svg__c"
        x1={107.3}
        x2={179.3}
        y1={-8.8}
        y2={115.9}
      />
      <linearGradient
        xlinkHref="#haze-day_svg__a"
        id="haze-day_svg__d"
        x1={174.8}
        x2={246.8}
        y1={-47.8}
        y2={76.9}
      />
      <linearGradient
        xlinkHref="#haze-day_svg__a"
        id="haze-day_svg__e"
        x2={89.3}
        y1={-4.9}
        y2={119.8}
      />
      <linearGradient
        xlinkHref="#haze-day_svg__a"
        id="haze-day_svg__f"
        x1={107.3}
        x2={179.3}
        y1={-56.9}
        y2={67.9}
      />
      <linearGradient
        xlinkHref="#haze-day_svg__a"
        id="haze-day_svg__g"
        x1={174.8}
        x2={246.8}
        y1={-95.8}
        y2={28.9}
      />
      <linearGradient
        id="haze-day_svg__b"
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
      <symbol id="haze-day_svg__i" viewBox="0 0 384 384">
        <circle
          cx={192}
          cy={192}
          r={84}
          fill="url(#haze-day_svg__b)"
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
      <symbol id="haze-day_svg__j" overflow="visible" viewBox="0 0 264 72">
        <g>
          <path
            fill="none"
            stroke="url(#haze-day_svg__a)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M12 60h30"
          />
          <path
            fill="none"
            stroke="url(#haze-day_svg__c)"
            strokeDasharray="60 60"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M102 60h90"
          />
          <path
            fill="none"
            stroke="url(#haze-day_svg__d)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M222 60h30"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-24 0; 24 0; -24 0"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke="url(#haze-day_svg__e)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M12 12h30"
          />
          <path
            fill="none"
            stroke="url(#haze-day_svg__f)"
            strokeDasharray="60 60"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M102 12h90"
          />
          <path
            fill="none"
            stroke="url(#haze-day_svg__g)"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M222 12h30"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="24 0; -24 0; 24 0"
          />
        </g>
      </symbol>
      <clipPath id="haze-day_svg__h">
        <path fill="none" d="M0 0h512v306H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#haze-day_svg__h)">
      <use
        xlinkHref="#haze-day_svg__i"
        width={384}
        height={384}
        transform="translate(64 100)"
      />
    </g>
    <use
      xlinkHref="#haze-day_svg__j"
      width={264}
      height={72}
      transform="translate(124 336)"
    />
  </svg>
);
export default SvgHazeDay;
