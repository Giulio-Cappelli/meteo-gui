import * as React from "react";
const SvgTimeLateNight = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="time-late-night_svg__a"
        x1={38.8}
        x2={133.4}
        y1={20.8}
        y2={184.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <symbol
        id="time-late-night_svg__b"
        overflow="visible"
        viewBox="0 0 192.5 192.5"
      >
        <path
          fill="url(#time-late-night_svg__a)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4.5}
          d="M179.7 120.2a95 95 0 0 1-95.5-94.3 93.2 93.2 0 0 1 3.1-23.7A94.8 94.8 0 0 0 2.3 96a95 95 0 0 0 95.5 94.3c44.5 0 81.8-30 92.4-70.6a98.4 98.4 0 0 1-10.5.6Z"
        />
      </symbol>
    </defs>
    <path
      fill="#374251"
      d="M227.6 410.7a13.4 13.4 0 0 1 8 4.3 12.3 12.3 0 0 1 3 8.3 15 15 0 0 1-5.5 11.8q-5.4 4.7-15.2 4.7-10.1 0-15.6-5t-5.9-14h12.3q.5 8.8 8.8 8.8a8.7 8.7 0 0 0 5.7-1.8 6 6 0 0 0 2.2-4.9 5.6 5.6 0 0 0-2.3-4.8 10.5 10.5 0 0 0-6.3-1.6h-3.6v-9h3.8a8 8 0 0 0 5.2-1.5 5.2 5.2 0 0 0 1.9-4.3 5.4 5.4 0 0 0-1.9-4.4 7.9 7.9 0 0 0-5.2-1.5 7 7 0 0 0-5 1.6q-1.7 1.7-2 5.4h-12q.7-16.9 19.4-17 8.9 0 13.9 4a12 12 0 0 1 5 10 11.1 11.1 0 0 1-2.3 7 11.3 11.3 0 0 1-6.4 4Zm38.7 12.6h-20.6v-9.9h20.6ZM298 403q8.1 0 13.2 4.8t5.1 13a17.9 17.9 0 0 1-5.8 13.7q-5.7 5.3-15 5.3T280 434q-7.1-6.8-7.1-20.7 0-13 5.7-20.2t16.6-7.2a21.8 21.8 0 0 1 12.6 3.4 16.6 16.6 0 0 1 6.7 9.7l-12.5.7c-1-2.7-3.3-4-6.9-4a7.9 7.9 0 0 0-6.7 3q-2.3 3-2.8 9.7Q290 403 298 403Zm-9.6 23.6a8.6 8.6 0 0 0 6.7 2.8 7.8 7.8 0 0 0 6.1-2.4 8.9 8.9 0 0 0 2.2-6 8 8 0 0 0-2.4-6 8.5 8.5 0 0 0-6-2.3 8.3 8.3 0 0 0-6.1 2.3 9 9 0 0 0-2.5 6.1 9.1 9.1 0 0 0 2 5.5Z"
    />
    <use
      xlinkHref="#time-late-night_svg__b"
      width={192.5}
      height={192.5}
      transform="translate(159.76 139.76)"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="6s"
        repeatCount="indefinite"
        type="rotate"
        values="-15 96.24 96.24; 9 96.24 96.24; -15 96.24 96.24"
      />
    </use>
  </svg>
);
export default SvgTimeLateNight;