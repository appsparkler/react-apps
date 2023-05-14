import { PhoneSvgIcon } from "../../components/Icons/PhoneSvg";

interface InfoItemProps {
  Icon: typeof PhoneSvgIcon;
  info: string;
}

export type InfoItemFC = React.FC<InfoItemProps>;
