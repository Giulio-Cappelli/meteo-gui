import * as React from "react";
const SvgThermometerMercuryCold = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <symbol id="thermometer-mercury-cold_svg__a" viewBox="0 0 72 168">
        <circle cx={36} cy={132} r={36} fill="#2885c7" />
        <path
          fill="none"
          stroke="#2885c7"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={24}
          d="M36 12v120"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#thermometer-mercury-cold_svg__a"
      width={72}
      height={168}
      transform="translate(220 204)"
    />
  </svg>
);
export default SvgThermometerMercuryCold;
