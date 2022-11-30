import * as React from "react";
const SvgFahrenheit = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <symbol id="fahrenheit_svg__a" viewBox="0 0 99.5 70.9">
        <path
          fill="#374151"
          d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5 18.7 18.7 0 0 0 14-5.6 18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5 8.5 8.5 0 0 1-6.2-2.5 8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5 8.4 8.4 0 0 1 8.7 8.8 8.7 8.7 0 0 1-2.4 6.4Zm73.8-7.8V2.6H47.4v68.3h18V44.7h28.9V30.1H65.4V17.9h34.1z"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#fahrenheit_svg__a"
      width={99.5}
      height={70.9}
      transform="matrix(1.5 0 0 1.51 181.49 202.35)"
    />
  </svg>
);
export default SvgFahrenheit;