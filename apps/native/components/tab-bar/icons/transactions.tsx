import Svg, { SvgProps, Path } from "react-native-svg";

export default function TransactionsIcon({
  isActive,
  ...props
}: { isActive: boolean } & SvgProps) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" {...props}>
      <Path
        opacity={isActive ? 1 : 0.4}
        fill={isActive ? "#3CDF90" : "#888888"}
        d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      />
      <Path
        fill={isActive ? "#032E32" : "#8B8B8B"}
        d="M10.11 11.15H7.46c-.63 0-1.14.51-1.14 1.14v5.12h3.79v-6.26Z"
      />
      <Path
        opacity={0.4}
        fill={isActive ? "#022629" : "#8B8B8B"}
        d="M12.76 6.6h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14Z"
      />
      <Path
        fill={isActive ? "#032E32" : "#8B8B8B"}
        d="M16.55 12.85H13.9v4.55h3.79v-3.41c-.01-.63-.52-1.14-1.14-1.14Z"
      />
    </Svg>
  );
}
