import * as React from "react";
const SvgOvercastDayFog = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <symbol id="overcast-day-fog_svg__f" viewBox="0 0 196 196">
        <circle
          cx={98}
          cy={98}
          r={40}
          fill="url(#overcast-day-fog_svg__a)"
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
      <symbol id="overcast-day-fog_svg__d" viewBox="0 0 200.3 126.1">
        <path
          fill="url(#overcast-day-fog_svg__b)"
          stroke="#848b98"
          strokeMiterlimit={10}
          d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9 32.4 32.4 0 0 0-48.5-33 48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"
        />
      </symbol>
      <symbol id="overcast-day-fog_svg__e" viewBox="0 0 350 222">
        <path
          fill="url(#overcast-day-fog_svg__c)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol
        id="overcast-day-fog_svg__g"
        overflow="visible"
        viewBox="0 0 398 222"
      >
        <use
          xlinkHref="#overcast-day-fog_svg__d"
          width={200.3}
          height={126.1}
          transform="translate(198 27)"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-9 0; 9 0; -9 0"
          />
        </use>
        <use xlinkHref="#overcast-day-fog_svg__e" width={350} height={222}>
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-18 0; 18 0; -18 0"
          />
        </use>
      </symbol>
      <symbol
        id="overcast-day-fog_svg__j"
        overflow="visible"
        viewBox="0 0 410.8 258"
      >
        <use xlinkHref="#overcast-day-fog_svg__f" width={196} height={196} />
        <use
          xlinkHref="#overcast-day-fog_svg__g"
          width={398}
          height={222}
          transform="translate(12.84 36)"
        />
      </symbol>
      <symbol
        id="overcast-day-fog_svg__k"
        overflow="visible"
        viewBox="0 0 264 72"
      >
        <path
          fill="none"
          stroke="url(#overcast-day-fog_svg__h)"
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
          stroke="url(#overcast-day-fog_svg__i)"
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
      <linearGradient
        id="overcast-day-fog_svg__c"
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
        id="overcast-day-fog_svg__b"
        x1={52.7}
        x2={133.4}
        y1={9.6}
        y2={149.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9ca3af" />
        <stop offset={0.5} stopColor="#9ca3af" />
        <stop offset={1} stopColor="#6b7280" />
      </linearGradient>
      <linearGradient
        id="overcast-day-fog_svg__h"
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
        xlinkHref="#overcast-day-fog_svg__h"
        id="overcast-day-fog_svg__i"
        x2={168}
        y1={-50.4}
        y2={74.3}
      />
      <linearGradient
        id="overcast-day-fog_svg__a"
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
    </defs>
    <use
      xlinkHref="#overcast-day-fog_svg__j"
      width={410.8}
      height={258}
      transform="translate(56 109)"
    />
    <use
      xlinkHref="#overcast-day-fog_svg__k"
      width={264}
      height={72}
      transform="translate(124 402)"
    />
  </svg>
);
export default SvgOvercastDayFog;
