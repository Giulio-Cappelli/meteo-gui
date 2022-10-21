import * as React from "react";
const SvgLightningBolt = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="lightning-bolt_svg__a"
        x1={8.7}
        x2={80.9}
        y1={17.1}
        y2={142.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7b23b" />
        <stop offset={0.5} stopColor="#f7b23b" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="lightning-bolt_svg__c" viewBox="0 0 102.7 186.8">
        <path
          fill="url(#lightning-bolt_svg__a)"
          stroke="#f6a823"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z"
        >
          <animate
            id="lightning-bolt_svg__b"
            attributeName="opacity"
            begin="0s; b.end+.67s"
            dur="1.33s"
            keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
            values="1; 1; 0; 1; 0; 1; 0; 1"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#lightning-bolt_svg__c"
      width={102.7}
      height={186.7}
      transform="matrix(1.36 0 0 1.36 186.37 130)"
    />
  </svg>
);
export default SvgLightningBolt;
