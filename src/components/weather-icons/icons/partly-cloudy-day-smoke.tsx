import * as React from "react";
const SvgPartlyCloudyDaySmoke = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="partly-cloudy-day-smoke_svg__b"
        x1={99.5}
        x2={232.6}
        y1={30.7}
        y2={261.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="partly-cloudy-day-smoke_svg__e"
        x1={74}
        x2={98}
        y1={165.2}
        y2={206.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b8bdc6" />
        <stop offset={0.5} stopColor="#b8bdc6" />
        <stop offset={1} stopColor="#a5aab2" />
      </linearGradient>
      <linearGradient
        id="partly-cloudy-day-smoke_svg__a"
        x1={78}
        x2={118}
        y1={63.4}
        y2={132.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.5} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="partly-cloudy-day-smoke_svg__c" viewBox="0 0 196 196">
        <circle
          cx={98}
          cy={98}
          r={40}
          fill="url(#partly-cloudy-day-smoke_svg__a)"
          stroke="#f8af18"
          strokeMiterlimit={10}
          strokeWidth={4}
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51 33 33m130.1 130.1-18-18M6 98h25.4M190 98h-25.4"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 98 98; 45 98 98"
          />
        </path>
      </symbol>
      <symbol id="partly-cloudy-day-smoke_svg__d" viewBox="0 0 350 222">
        <path
          fill="url(#partly-cloudy-day-smoke_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="partly-cloudy-day-smoke_svg__k" viewBox="0 0 363 258">
        <use
          xlinkHref="#partly-cloudy-day-smoke_svg__c"
          width={196}
          height={196}
        />
        <use
          xlinkHref="#partly-cloudy-day-smoke_svg__d"
          width={350}
          height={222}
          transform="translate(13 36)"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#partly-cloudy-day-smoke_svg__k"
      width={363}
      height={258}
      transform="translate(68 109)"
    />
    <use
      xlinkHref="#partly-cloudy-day-smoke_svg__l"
      width={168}
      height={212}
      transform="translate(172 232)"
    />
  </svg>
);
export default SvgPartlyCloudyDaySmoke;