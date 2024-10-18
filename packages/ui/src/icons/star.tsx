import React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export function StarIcon({ ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 16 16" {...props}>
      <Path d="M8 1l1.572 4.837h5.085l-4.114 2.99 1.572 4.836L8 10.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085L8 1z" />
    </Svg>
  );
}
