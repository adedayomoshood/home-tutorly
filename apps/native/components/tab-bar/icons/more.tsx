import Svg, { SvgProps, Path, G } from "react-native-svg";

export default function MoreIcon({
  isActive,
  ...props
}: { isActive: boolean } & SvgProps) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" {...props}>
      <Path
        opacity={isActive ? 1 : 0.4}
        fill={isActive ? "#3CDF90" : "#888888"}
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      />
      <Path
        fill={isActive ? "#032E32" : "#8B8B8B"}
        d="M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z"
      />
    </Svg>
  );
}
