import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M24.61,5a10,10,0,0,1-2.85,1.36,4.08,4.08,0,0,0-2.08-1.25,4.13,4.13,0,0,0-2.44.14,4.05,4.05,0,0,0-1.91,1.49,4,4,0,0,0-.7,2.3V9.94a9.81,9.81,0,0,1-4.6-1,9.63,9.63,0,0,1-3.57-3s-3.63,8,4.54,11.59a10.69,10.69,0,0,1-6.35,1.78C12.82,23.73,22.8,19.28,22.8,9a4,4,0,0,0-.07-0.74A6.86,6.86,0,0,0,24.61,5Z" transform="translate(-4.15 -4.5)" fill = "none" stroke="#8dfdff" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>
  );
};

export default Icon;
