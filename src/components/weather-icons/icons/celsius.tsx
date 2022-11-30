import * as React from "react";
const SvgCelsius = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <symbol id="celsius_svg__a" viewBox="0 0 109.1 73.2">
        <path
          fill="#374151"
          d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5 18.7 18.7 0 0 0 14-5.6 18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5 8.5 8.5 0 0 1-6.2-2.5 8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5 8.4 8.4 0 0 1 8.7 8.8 8.7 8.7 0 0 1-2.4 6.4Zm53.1 32.8a13.4 13.4 0 0 1-11.5-5.6q-4-5.7-4-16 0-10 4-15.6a13.4 13.4 0 0 1 11.5-5.6 12.6 12.6 0 0 1 8.6 3 13.3 13.3 0 0 1 4.2 8.2H109q-1.4-12-9.5-19T78.3 1q-14.5 0-23.7 9.8T45.3 37q0 16.4 9.2 26.3t23.7 9.9q13.2 0 21.6-7.1 8.3-7 9.3-19.6H91.6q-1.6 12-12.8 12Z"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#celsius_svg__a"
      width={109.1}
      height={73.2}
      transform="matrix(1.46 0 0 1.47 176.26 202.35)"
    />
  </svg>
);
export default SvgCelsius;