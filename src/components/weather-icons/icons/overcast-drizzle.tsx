import * as React from "react";
const SvgOvercastDrizzle = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="overcast-drizzle_svg__c"
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
        id="overcast-drizzle_svg__b"
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
        id="overcast-drizzle_svg__a"
        x1={1256.7}
        x2={1266.2}
        y1={-2.2}
        y2={22.5}
        gradientTransform="rotate(-9 2966.01 6929.525)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0b65ed" />
        <stop offset={0.5} stopColor="#0a5ad4" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#overcast-drizzle_svg__a"
        id="overcast-drizzle_svg__i"
        x1={1312}
        x2={1321.5}
        y1={6.6}
        y2={31.2}
      />
      <linearGradient
        xlinkHref="#overcast-drizzle_svg__a"
        id="overcast-drizzle_svg__j"
        x1={1367.3}
        x2={1376.8}
        y1={15.4}
        y2={40}
      />
      <symbol id="overcast-drizzle_svg__d" viewBox="0 0 200.3 126.1">
        <path
          fill="url(#overcast-drizzle_svg__b)"
          stroke="#848b98"
          strokeMiterlimit={10}
          d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9 32.4 32.4 0 0 0-48.5-33 48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"
        />
      </symbol>
      <symbol id="overcast-drizzle_svg__e" viewBox="0 0 350 222">
        <path
          fill="url(#overcast-drizzle_svg__c)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol
        id="overcast-drizzle_svg__f"
        overflow="visible"
        viewBox="0 0 398 222"
      >
        <use
          xlinkHref="#overcast-drizzle_svg__d"
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
        <use xlinkHref="#overcast-drizzle_svg__e" width={350} height={222}>
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
    </defs>
    <use
      xlinkHref="#overcast-drizzle_svg__f"
      width={398}
      height={222}
      transform="translate(68.84 145)"
    />
  </svg>
);
export default SvgOvercastDrizzle;
