import * as React from "react";
const SvgThermometerGlassFahrenheit = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="thermometer-glass-fahrenheit_svg__a"
        x1={-7.2}
        x2={116.4}
        y1={36.3}
        y2={250.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#515a69" stopOpacity={0.1} />
        <stop offset={0.5} stopColor="#6b7280" stopOpacity={0.1} />
        <stop offset={1} stopColor="#384354" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="thermometer-glass-fahrenheit_svg__b"
        x1={-8.7}
        x2={117.9}
        y1={33.7}
        y2={253}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <symbol id="thermometer-glass-fahrenheit_svg__c" viewBox="0 0 118 278">
        <path
          fill="url(#thermometer-glass-fahrenheit_svg__a)"
          stroke="url(#thermometer-glass-fahrenheit_svg__b)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"
        />
      </symbol>
      <symbol id="thermometer-glass-fahrenheit_svg__d" viewBox="0 0 99.5 70.9">
        <path
          fill="#374151"
          d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5 18.7 18.7 0 0 0 14-5.6 18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5 8.5 8.5 0 0 1-6.2-2.5 8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5 8.4 8.4 0 0 1 8.7 8.8 8.7 8.7 0 0 1-2.4 6.4Zm73.8-7.8V2.6H47.4v68.3h18V44.7h28.9V30.1H65.4V17.9h34.1z"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#thermometer-glass-fahrenheit_svg__c"
      width={118}
      height={278}
      transform="translate(197 117)"
    />
    <use
      xlinkHref="#thermometer-glass-fahrenheit_svg__d"
      width={99.5}
      height={70.9}
      transform="translate(314 250)"
    />
  </svg>
);
export default SvgThermometerGlassFahrenheit;