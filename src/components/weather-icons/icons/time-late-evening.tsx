import * as React from "react";
const SvgTimeLateEvening = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="time-late-evening_svg__b"
        x1={54}
        x2={125.8}
        y1={16.9}
        y2={141.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="time-late-evening_svg__a"
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
      <symbol id="time-late-evening_svg__c" viewBox="0 0 192.5 192.5">
        <path
          fill="url(#time-late-evening_svg__a)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4.5}
          d="M179.7 120.2a95 95 0 0 1-95.5-94.3 93.2 93.2 0 0 1 3.1-23.7A94.8 94.8 0 0 0 2.3 96a95 95 0 0 0 95.5 94.3c44.5 0 81.8-30 92.4-70.6a98.4 98.4 0 0 1-10.5.6Z"
        />
      </symbol>
      <symbol
        id="time-late-evening_svg__d"
        overflow="visible"
        viewBox="0 0 189.5 120.5"
      >
        <path
          fill="url(#time-late-evening_svg__b)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m157.3 58-1.4.1a45.8 45.8 0 0 0 1.4-10.8 45.3 45.3 0 0 0-83.8-23.8 30.1 30.1 0 0 0-45.6 26 30.5 30.5 0 0 0 .4 4.9 32.3 32.3 0 0 0 6 64h123a30.2 30.2 0 0 0 0-60.3Z"
        />
      </symbol>
    </defs>
    <path
      fill="#374251"
      d="M220.2 438.4h-40.6a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l7.9-5.6a16.3 16.3 0 0 0 4.3-4 7.5 7.5 0 0 0 1.2-4.3 6.3 6.3 0 0 0-1.9-4.9 7.1 7.1 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.5 9 26.7 26.7 0 0 1-8.2 7.5l-8.9 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Zm33.6 0h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm30-15.1h-20.5v-9.9h20.5Zm44.6 9q-6 7.2-16.2 7.2t-16.3-7.2q-6-7.3-6-19.7t6-19.4q5.9-7.2 16.3-7.2 10.2 0 16.2 7.2t6 19.4q0 12.4-6 19.7Zm-16.2-3.2q9.3 0 9.3-16.4t-9.3-16.3q-9.5 0-9.5 16.3t9.5 16.4Z"
    />
    <use
      xlinkHref="#time-late-evening_svg__c"
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
    <use
      xlinkHref="#time-late-evening_svg__d"
      width={189.5}
      height={120.5}
      transform="translate(214.32 236.93)"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="6s"
        repeatCount="indefinite"
        type="translate"
        values="-6 0; 6 0; -6 0"
      />
    </use>
  </svg>
);
export default SvgTimeLateEvening;