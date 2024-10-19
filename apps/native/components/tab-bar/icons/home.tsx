import Svg, { Path, SvgProps } from "react-native-svg";

export default function HomeIcon({
  isActive,
  ...props
}: { isActive: boolean } & SvgProps) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" {...props}>
      <Path
        opacity={isActive ? 1 : 0.4}
        fill={isActive ? "#FF00E6" : "#888888"}
        d="m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78Z"
      />
      <Path
        fill={isActive ? "#032E32" : "#8B8B8B"}
        d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      />
    </Svg>
  );
}
