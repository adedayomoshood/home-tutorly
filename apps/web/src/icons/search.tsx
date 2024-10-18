import Icon, { IconProps } from ".";

export default function SearchIcon({ ...props }: IconProps) {
  return (
    <Icon
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 20l-3.867-3.867m2.09-5.022a7.111 7.111 0 11-14.223 0 7.111 7.111 0 0114.222 0z"
      />
    </Icon>
  );
}
