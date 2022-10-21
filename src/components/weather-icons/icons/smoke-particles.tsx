import * as React from "react";
const SvgSmokeParticles = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="smoke-particles_svg__a"
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
    </defs>
    <use
      xlinkHref="#smoke-particles_svg__g"
      width={168}
      height={212}
      transform="translate(172 150)"
    />
  </svg>
);
export default SvgSmokeParticles;
