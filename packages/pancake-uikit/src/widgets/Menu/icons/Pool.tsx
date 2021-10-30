import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <title>menu_poolsIcon</title>
  <g>
    <path d="M19.76,9.29L15.6,5.12A0.41,0.41,0,0,0,15.3,5H6.57A1.67,1.67,0,0,0,4.91,6.67V23.33A1.67,1.67,0,0,0,6.57,25H18.21a1.67,1.67,0,0,0,1.66-1.67V9.58A0.42,0.42,0,0,0,19.76,9.29Zm-4-2.87,2.74,2.74H16.55a0.83,0.83,0,0,1-.83-0.83V6.42ZM19,23.33a0.83,0.83,0,0,1-.83.83H6.57a0.83,0.83,0,0,1-.83-0.83V6.67a0.83,0.83,0,0,1,.83-0.83h8.32v2.5A1.67,1.67,0,0,0,16.55,10H19V23.33Z" transform="translate(-4.51 -4.6)" fill="#7df1fe" stroke="#7df1fe" stroke-width="0.8"/>
    <path d="M15.56,16.76a0.42,0.42,0,0,0-.58.07l-1.23,1.54-1.9-2.66a2.08,2.08,0,0,0-.71-4H9.48a0.42,0.42,0,0,0-.42.42v5.83a0.42,0.42,0,1,0,.83,0V15.83h1L13.21,19l-1.56,2a0.42,0.42,0,1,0,.65.52l1.41-1.77L15,21.49A0.42,0.42,0,1,0,15.64,21l-1.39-1.94,1.37-1.72A0.42,0.42,0,0,0,15.56,16.76ZM9.9,15V12.5h1.25a1.25,1.25,0,0,1,0,2.5H9.9Z" transform="translate(-4.51 -4.6)" fill="#7df1fe" stroke="#7df1fe" stroke-width="0.8"/>
  </g>
    </Svg>
  );
};

export default Icon;
