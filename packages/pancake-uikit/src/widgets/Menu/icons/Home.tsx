import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="28" height="30" viewBox="-2 0 24 24" {...props}>
        <title>menu_homeIcon</title>
  <g>
    <path d="M5,12.49a1,1,0,0,1,.39-0.79l8-6.22a1,1,0,0,1,1.23,0l8,6.22a1,1,0,0,1,.39.79V23a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V12.49Z" transform="translate(-4 -4.27)" fill="none" stroke="#ff58c5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path d="M11,25V15h6V25" transform="translate(-4 -4.27)" fill="none" stroke="#ff58c5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
    </Svg>
  );
};

export default Icon;
