import * as React from "react";
const clearsky_day = (props) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    {...props}
  >
    <symbol id="prefix__c">
      <path
        className="prefix__sun-glow"
        fill="url(#prefix__a)"
        d="M66.64 47.86 82 41l-15.36-6.88 9.84-13.66-16.72 1.76 1.7-16.75-13.6 9.89L41 0l-6.88 15.36-13.66-9.84 1.76 16.72-16.75-1.7 9.89 13.6L0 41l15.36 6.83-9.84 13.71 16.72-1.76-1.7 16.75 13.6-9.89L41 82l6.83-15.36 13.66 9.84-1.71-16.72 16.75 1.69Z"
      />
      <path
        className="prefix__sun-outer"
        fill="#ffd348"
        d="M19.28 53.5a25 25 0 1 0 9.15-34.16 25 25 0 0 0-9.15 34.16Z"
      />
      <path
        className="prefix__sun-inner"
        fill="url(#prefix__b)"
        d="M22.74 51.5a21 21 0 1 0 7.69-28.69 21 21 0 0 0-7.69 28.69Z"
      />
    </symbol>
    <defs>
      <radialGradient
        id="prefix__a"
        cx={41}
        cy={41}
        r={41}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="54%" stopColor="#d6b849" />
        <stop offset="67%" stopColor="#ffce47" />
        <stop offset="100%" stopColor="#ffdb73" />
      </radialGradient>
      <linearGradient id="prefix__b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffaf22" />
        <stop offset="100%" stopColor="#f09900" />
      </linearGradient>
    </defs>
    <symbol id="prefix__d">
      <use
        xlinkHref="#prefix__c"
        width={100}
        height={100}
        transform="translate(9 9)"
      />
    </symbol>
    <use xlinkHref="#prefix__d" width={100} height={100} />
  </svg>
);
export default clearsky_day;
