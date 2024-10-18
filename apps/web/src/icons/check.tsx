import Icon, { IconProps } from ".";

export default function CheckIcon({ ...props }: IconProps) {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 16 16"
      className="text-green-500"
      {...props}
    >
      <path d="M8 1C4.143 1 1 4.143 1 8s3.143 7 7 7 7-3.143 7-7-3.143-7-7-7zm3.346 5.39l-3.969 3.969a.524.524 0 01-.742 0L4.654 8.378a.528.528 0 010-.742.528.528 0 01.742 0l1.61 1.61 3.598-3.598a.528.528 0 01.742 0 .528.528 0 010 .742z" />
    </Icon>
  );
}
