import * as React from "react";
const SvgOvercastFog = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="overcast-fog_svg__c"
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
        id="overcast-fog_svg__b"
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
        id="overcast-fog_svg__a"
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
        xlinkHref="#overcast-fog_svg__a"
        id="overcast-fog_svg__f"
        x2={168}
        y1={-50.4}
        y2={74.3}
      />
      <symbol id="overcast-fog_svg__d" viewBox="0 0 200.3 126.1">
        <path
          fill="url(#overcast-fog_svg__b)"
          stroke="#848b98"
          strokeMiterlimit={10}
          d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9 32.4 32.4 0 0 0-48.5-33 48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"
        />
      </symbol>
      <symbol id="overcast-fog_svg__e" viewBox="0 0 350 222">
        <path
          fill="url(#overcast-fog_svg__c)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="overcast-fog_svg__g" overflow="visible" viewBox="0 0 398 222">
        <use
          xlinkHref="#overcast-fog_svg__d"
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
        <use xlinkHref="#overcast-fog_svg__e" width={350} height={222}>
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
      <symbol id="overcast-fog_svg__h" overflow="visible" viewBox="0 0 264 72">
        <path
          fill="none"
          stroke="url(#overcast-fog_svg__a)"
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
          stroke="url(#overcast-fog_svg__f)"
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
    </defs>
    <use
      xlinkHref="#overcast-fog_svg__g"
      width={398}
      height={222}
      transform="translate(68.84 145)"
    />
    <use
      xlinkHref="#overcast-fog_svg__h"
      width={264}
      height={72}
      transform="translate(124 402)"
    />
  </svg>
);
export default SvgOvercastFog;
