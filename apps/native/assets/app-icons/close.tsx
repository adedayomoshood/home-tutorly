import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export function CloseIcon({ ...props }: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <Path d="M18 6 6 18" />
      <Path d="m6 6 12 12" />
    </Svg>
  );
}
