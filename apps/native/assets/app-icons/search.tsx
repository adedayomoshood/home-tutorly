import Svg, { SvgProps, Path } from "react-native-svg";

export function SearchIcon({ ...props }: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      {...props}
      fill="none"
      stroke="currentColor"
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
        d="M20 20l-3.867-3.867m2.09-5.022a7.111 7.111 0 11-14.223 0 7.111 7.111 0 0114.222 0z"
      />
    </Svg>
  );
}
