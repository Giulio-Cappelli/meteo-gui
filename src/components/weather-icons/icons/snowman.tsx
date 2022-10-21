import * as React from "react";
const SvgSnowman = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        id="snowman_svg__a"
        x1={214}
        x2={298}
        y1={257.2}
        y2={402.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        xlinkHref="#snowman_svg__a"
        id="snowman_svg__b"
        x1={317.5}
        x2={332.5}
        y1={284}
        y2={310}
      />
      <linearGradient
        xlinkHref="#snowman_svg__a"
        id="snowman_svg__c"
        x1={179.5}
        x2={194.5}
        y1={284}
        y2={310}
      />
      <linearGradient
        xlinkHref="#snowman_svg__a"
        id="snowman_svg__d"
        x1={226}
        x2={286}
        y1={150}
        y2={254}
      />
      <linearGradient
        id="snowman_svg__e"
        x1={241.3}
        x2={270.8}
        y1={229.5}
        y2={280.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.5} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <linearGradient
        id="snowman_svg__f"
        x1={397.9}
        x2={443.7}
        y1={606.3}
        y2={685.5}
        gradientTransform="rotate(-15 -1550.768 1090.217)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#495057" />
        <stop offset={0.5} stopColor="#495057" />
        <stop offset={1} stopColor="#212529" />
      </linearGradient>
      <linearGradient
        id="snowman_svg__g"
        x1={252}
        x2={260}
        y1={198.2}
        y2={212.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffc078" />
        <stop offset={0.5} stopColor="#ffc078" />
        <stop offset={1} stopColor="#ff922b" />
      </linearGradient>
    </defs>
    <circle
      cx={256}
      cy={330}
      r={84}
      fill="url(#snowman_svg__a)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <circle
      cx={325}
      cy={297}
      r={15}
      fill="url(#snowman_svg__b)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <circle
      cx={187}
      cy={297}
      r={15}
      fill="url(#snowman_svg__c)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <circle
      cx={256}
      cy={202}
      r={60}
      fill="url(#snowman_svg__d)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <path
      fill="#374151"
      d="M259 231a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm-12-5a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm-8-6a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm26 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm8-6a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm7-34a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-40-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z"
    />
    <path
      fill="url(#snowman_svg__e)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M280 264h-65.2c-3.7 0-6.8-2.4-6.8-5.3v-7.4c0-3 3.3-5.5 7.3-5.3h81.4c4-.2 7.3 2.3 7.3 5.3v7.3c0 3-3 5.4-6.8 5.4Z"
    />
    <path
      fill="url(#snowman_svg__f)"
      stroke="#343a40"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m290 133.4-24.1 6.5a.3.3 0 0 1-.3-.2l-9.3-34.5a4 4 0 0 0-5-2.9l-38.5 10.4a4 4 0 0 0-2.9 5l9.3 34.4a.3.3 0 0 1-.2.3l-24.2 6.5a6.7 6.7 0 0 0-4.7 8.2l2.7 10.2a6.7 6.7 0 0 0 8.3 4.7l95.2-25.4a6.7 6.7 0 0 0 4.7-8.3l-2.7-10.2a6.7 6.7 0 0 0-8.3-4.7Z"
    />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m222.1 147.4 38.6-10.3"
    />
    <circle
      cx={256}
      cy={205.2}
      fill="url(#snowman_svg__g)"
      stroke="#ffa94d"
      strokeMiterlimit={10}
      strokeWidth={2}
      r={8}
    />
    <path
      fill="#374151"
      d="M264 324a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-8 16a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0-48a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z"
    />
  </svg>
);
export default SvgSnowman;
