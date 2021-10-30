import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
  <g>
    <path d="M17.17,4.83L20.5,8.17,17.17,11.5" transform="translate(-4.5 -3.83)" fill="none" stroke="#7df1fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path d="M5.5,13.17V11.5A3.33,3.33,0,0,1,8.83,8.17H20.5" transform="translate(-4.5 -3.83)" fill="none" stroke="#7df1fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path d="M8.83,23.17L5.5,19.83,8.83,16.5" transform="translate(-4.5 -3.83)" fill="none" stroke="#7df1fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path d="M20.5,14.83V16.5a3.33,3.33,0,0,1-3.33,3.33H5.5" transform="translate(-4.5 -3.83)" fill="none" stroke="#7df1fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
    </Svg>
  );
};

export default Icon;
