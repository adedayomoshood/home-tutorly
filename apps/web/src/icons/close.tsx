import Icon, { IconProps } from ".";

export default function CloseIcon({ ...props }: IconProps) {
  return (
    <Icon
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  );
}
